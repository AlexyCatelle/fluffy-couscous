USE formation_sql;

SELECT *
FROM
users
;

-- QUESTION 1
-- salaire minimum entre tous les utilisateurs.

SELECT
 MIN(salary)
FROM 
users
;

-- QUESTION 2
-- age maximum parmi les utilisateurs ayant le métier "Engineer".

SELECT
MAX(age)
FROM 
users
WHERE
job = "Engineer"
;

-- QUESTION 3
-- salaire moyen des utilisateurs dont le métier est "Teacher".

SELECT
AVG(salary)
FROM
users
WHERE
job = "Teacher"
;
-- Question 4
-- montant total des salaires des utilisateurs

SELECT
SUM(salary)
FROM
users
;