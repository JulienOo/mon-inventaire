<?php


	require_once "controller/controller.php";

// echo "<pre>";
// print_r($GLOBALS);
// echo "</pre>";

// print_r(getIdCategorie("Nouvelle catégorie 2"));

$url = explode("/", rawurldecode($_SERVER['REQUEST_URI']));

// print_r($url);


if (empty($url[1])) { //page qui affiche toutes les catégories
	categories();
}
elseif ($url[1] == "mon-compte" AND !isset($url[2]) OR empty($url[2]) AND $url[1] == "mon-compte")
{
	monProfil();
}
elseif ($url[1] == "api")
{
	if (isset($url[2]) AND isset($url[3]))
	{
		if ($url[2] == "categorie")
		{
			if ($url[3] == "creation")
			{
				apiCreationCategorie($_POST);
			}
			elseif($url[3] == "edition")
			{
				apiEditionCategorie($_POST);
			}
			elseif($url[3] == "suppression")
			{
				apiSuppressionCategorie($_POST);
			}
			else
			{
				echo json_encode("Une erreur est survenue");
			}
		} 
		elseif ($url[2] == "sous-categorie")
		{
			if ($url[3] == "creation")
			{
				apiCreationSousCategorie($_POST);
			}
			elseif ($url[3] == "edition")
			{
				apiEditionSousCategorie($_POST);
			}
			elseif($url[3] == "suppression")
			{
				apiSuppressionSousCategorie($_POST);
			}
			else
			{
				echo json_encode("Une erreur est survenue");
			}
		} 
		elseif ($url[2] == "tableau")
		{

		}
	}
	else
	{
		echo "erreur";
	}
}
elseif (isset($url[1]) AND !isset($url[2]) OR empty($url[2]) && $url[1] != "public") { //page d'une catégorie qui affiche les sous-catégories
	sousCategorie();
} 
else {
 	produits();
 } 
