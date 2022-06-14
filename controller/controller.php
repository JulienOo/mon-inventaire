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
	$url = explode("/", rawurldecode($_SERVER['REQUEST_URI']));

	$id = getIdCategorie($url[1]);

	$test = getSousCategories($url[1]);


	require_once "view/backend/headSousCategories.php";
	require_once "view/backend/sousCategories.php";
	require_once "view/backend/scriptSousCategories.php";

	require_once "view/template/sousCategories.php";
}



function produits()
{
	$url = explode("/", rawurldecode($_SERVER['REQUEST_URI']));

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




function apiCreationCategorie($req)
{
	setCategories(htmlspecialchars($req["nom"]));
}

function apiEditionCategorie($req)
{
	editCategories(htmlspecialchars($req["id"]), htmlspecialchars($req["nom"]));
}

function apiSuppressionCategorie($req)
{
	delCategories(htmlspecialchars($req["id"]));
}

function apiCreationSousCategorie($req)
{
	setSousCategories(htmlspecialchars($req["id"]), htmlspecialchars($req["nom"]));
}

function apiEditionSousCategorie($req)
{ echo $req["id"];
	editSousCategories(htmlspecialchars($req["id"]), htmlspecialchars($req["nom"]));
}

function apiSuppressionSousCategorie($req)
{
	delSousCategories(htmlspecialchars($req["id"]));
}