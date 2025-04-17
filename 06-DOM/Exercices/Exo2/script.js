const form = document.getElementById('bookingForm');
const reservations = [];

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Récupération des valeurs
  const name = document.getElementById('name').value.trim();
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const participants = parseInt(document.getElementById('participants').value);

  // Réinitialisation des messages d'erreur
  clearErrors();

  let valid = true;

  // 1. Validation du nom
  if (!/^[a-zA-Z]{3,}$/.test(name)) {
    showError('nameError', 'Le nom doit contenir au moins 3 lettres et uniquement des lettres.');
    valid = false;
  }

  // 2. Validation de la date (pas de date passée)
  const today = new Date().toISOString().split('T')[0];
  if (date < today) {
    showError('dateError', 'La date ne peut pas être antérieure à aujourd’hui.');
    valid = false;
  }

  // 3. Validation de l’heure
  if (time < '09:00' || time > '18:00') {
    showError('timeError', 'Les rendez-vous sont disponibles uniquement entre 9h00 et 18h00.');
    valid = false;
  }

  // 4. Validation participants
  if (isNaN(participants) || participants < 0 || participants > 10) {
    showError('participantsError', 'Le nombre de participants doit être entre 0 et 10.');
    valid = false;
  }

  // 5. Créneau déjà réservé ?
  if (reservations.some(r => r.date === date && r.time === time)) {
    showError('timeError', 'Ce créneau est déjà réservé.');
    valid = false;
  }

  if (!valid) return;

  // Ajout à la liste
  reservations.push({ name, date, time, participants });
  updateTable();
  form.reset();
});

// Utilitaires
function showError(id, message) {
  document.getElementById(id).textContent = message;
}

function clearErrors() {
  ['nameError', 'dateError', 'timeError', 'participantsError'].forEach(id => {
    document.getElementById(id).textContent = '';
  });
}

function updateTable() {
  const tbody = document.querySelector('#reservationsTable tbody');
  tbody.innerHTML = '';

  reservations.forEach((res, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${res.name}</td>
      <td>${res.date}</td>
      <td>${res.time}</td>
      <td>${res.participants}</td>
      <td><button onclick="deleteReservation(${index})">Supprimer</button></td>
    `;
    tbody.appendChild(row);
  });
}

function deleteReservation(index) {
  reservations.splice(index, 1);
  updateTable();
}
