<?php

require_once"model/backend.php";

function categories() {
	// echo "voici la liste des catégories";
	$test = getCategories();

	require_once "view/backend/headCategories.php";
	require_once "view/backend/categories.php";
	require_once "view/backend/scriptCategories.php";

	require_once "view/template/categories.php";
}


function sousCategorie()
{
	// echo "voici les sous-catégories";
	$url = explode("/", $_SERVER['REQUEST_URI']);



	$test = getSousCategories($url[1]);


	require_once "view/backend/headSousCategories.php";
	require_once "view/backend/sousCategories.php";
	require_once "view/backend/scriptSousCategories.php";

	require_once "view/template/categories.php";
}



function produits()
{
	$url = explode("/", $_SERVER['REQUEST_URI']);

	$test = getProduit($url[2]);

	require_once "view/backend/headTableau.php";
	require_once "view/backend/tableau.php";
	require_once "view/backend/scriptTableau.php";

	require_once "view/template/tableau.php";
}


function monProfil()
{
	echo "voici mon profil";
}