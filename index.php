<?php


	require_once "controller/controller.php";

// echo "<pre>";
// print_r($GLOBALS);
// echo "</pre>";



$url = explode("/", $_SERVER['REQUEST_URI']);

// print_r($url);


if (empty($url[1])) { //page qui affiche toutes les catégories
	categories();
}
elseif ($url[1] == "mon-compte" AND !isset($url[2]) OR empty($url[2]) AND $url[1] == "mon-compte")
{
	monProfil();
}
elseif (isset($url[1]) AND !isset($url[2]) OR empty($url[2]) && $url[1] != "public") { //page d'une catégorie qui affiche les sous-catégories
	sousCategorie();
} 
else {
 	produits();
 } 
