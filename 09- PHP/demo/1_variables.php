<?php

// Commentaire sur une ligne.
# Commentaire sur une ligne (bash).

/*
    Commentaire
    sur 
    plusieurs lignes.
*/

// Affiche dans le terminale.
echo "hello ";

// passe à la ligne.
echo ("world\n");

// /n et \t ne sont pas pris en charge avec ''.
echo'\tTout le monde\n';

// Declaration de variables.
$chaine = "\nma Variable qui est une chaine de charactère";
$nombreEntier = 10;
$nombreDecimal = 10.5;
$booleen = true;

// variable globale qui permet de passer à la ligne.
echo $chaine . PHP_EOL;

echo $nombreEntier . PHP_EOL;

// On déclare une constante avec le mot-clé 'const'.
const MA_CONSTANTE = "Ceci est une constante";
// MA_CONSTANTE = "je change ma constante";

// On déclare une constante avec le mot-clé 'define', obsolète.
define("IS_ACTIVE", true);

// var_dump permet d'afficher le type et la valeur d'une variable.
var_dump(IS_ACTIVE);

// echo concatene les chaine passée en parametre.
$hello ="Hello ";
$world= "world!!";
echo PHP_EOL, $hello, $world, PHP_EOL;
echo "Ceci est un helloworld : $hello$world", PHP_EOL;

// Concatenation se fait avec le '.'
$concatenat = $hello . $world;
echo $concatenat . PHP_EOL;

// Récupére uniquement le type d'une variable.
echo "Type de mon booléen : ", gettype($booleen), PHP_EOL;


print($concatenat);