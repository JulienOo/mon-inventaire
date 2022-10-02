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

	if (getPermissionLecture($id))
	{
		$test = getSousCategories($url[1]);
	}
	else
	{
		header("Location: /erreur-404");
	}


	require_once "view/backend/headSousCategories.php";
	require_once "view/backend/sousCategories.php";
	require_once "view/backend/scriptSousCategories.php";

	require_once "view/template/sousCategories.php";
}



function produits()
{
	$url = explode("/", rawurldecode($_SERVER['REQUEST_URI']));

	// $id = getIdSousCategorie($url[2]);


	$id = getIdCategorie($url[1]);

	if (getPermissionLecture($id))
	{
		$test = getProduit($url[2]);
	}
	else
	{
		header("Location: /erreur-404");
	}



	require_once "view/backend/headTableau.php";
	require_once "view/backend/tableau.php";
	require_once "view/backend/scriptTableau.php";

	require_once "view/template/tableau.php";
}


function monProfil()
{
	echo "voici mon profil";
}

function connexion()
{
	require_once "view/template/connexion.php";
}



function apiCreationCategorie($req)
{ //ajouter le control de permission (même groupe + Admin)


	if (getPermissionEcriture(0))
	{
		$return["lastId"] = setCategories(htmlspecialchars($req["nom"]));
		$return["permissions"] = true;
		echo json_encode($return);
	}
	else
	{
		echo json_encode(false);
	}	
}

function apiEditionCategorie($req)
{ //ajouter le control de permission (même groupe + Admin)


	if (getPermissionEcriture($req["id"]))
	{
		editCategories(htmlspecialchars($req["id"]), htmlspecialchars($req["nom"]));

		$return["permissions"] = true;
		echo json_encode($return);
	}
	else
	{
		echo json_encode(false);
	}	

}

function apiSuppressionCategorie($req)
{ //ajouter le control de permission (même groupe + Admin)

	if (getPermissionEcriture($req["id"]))
	{
		delCategories(htmlspecialchars($req["id"]));

		$return["permissions"] = true;
		echo json_encode($return);
	}
	else
	{
		echo json_encode(false);
	}	
}

function apiCreationSousCategorie($req)
{ //ajouter le control de permission (même groupe + Admin)

	$idCategorie = getIdCategorieDepuisSousCategorie($req["id"]);

	if (getPermissionEcriture($idCategorie))
	{
		setSousCategories(htmlspecialchars($req["id"]), htmlspecialchars($req["nom"]));

		$return["permissions"] = true;
		echo json_encode($return);
	}
	else
	{
		echo json_encode(false);
	}
}

function apiEditionSousCategorie($req)
{ //ajouter le control de permission (même groupe + Admin)
	$idCategorie = getIdCategorieDepuisSousCategorie($req["id"]);

	if (getPermissionEcriture($idCategorie))
	{
		editSousCategories(htmlspecialchars($req["id"]), htmlspecialchars($req["nom"]));

		$return["permissions"] = true;
		echo json_encode($return);
	}
	else
	{
		echo json_encode(false);
	}
}

function apiSuppressionSousCategorie($req)
{ //ajouter le control de permission (même groupe + Admin)
	$idCategorie = getIdCategorieDepuisSousCategorie($req["id"]);

	if (getPermissionEcriture($idCategorie))
	{
		delSousCategories(htmlspecialchars($req["id"]));

		$return["permissions"] = true;
		echo json_encode($return);
	}
	else
	{
		echo json_encode(false);
	}
}

function apiCreationColonne($req)
{ //ajouter le control de permission (même groupe + Admin)
	setColonnes(htmlspecialchars($req["idSousColonne"]), htmlspecialchars($req["nom"]));
}

function apiEditionColonneNom($req)
{ //ajouter le control de permission (même groupe + Admin)
	editColonnesNom(htmlspecialchars($req["id"]), htmlspecialchars($req["nom"]));
}

function apiSuppressionColonne($req)
{ //ajouter le control de permission (même groupe + Admin)
	delColonnes(htmlspecialchars($req["id"]));
}

function apiCreationLigne($req)
{ //ajouter le control de permission (même groupe + Admin)
	setLignes($req["idSousCategorie"]);
}

function apiSuppressionLigne($req)
{ //ajouter le control de permission (même groupe + Admin)
	delLignes(htmlspecialchars($req["id"]));
}

function apiEditionCellule($req)
{ //ajouter le control de permission (même groupe + Admin)
	// print_r($req);
	editCellules(htmlspecialchars($req["id"]), htmlspecialchars($req["nom"]));
}

function apiConnexionValidation($req)
{
	if (isset($req["identifiant"]) AND isset($req["motDePasse"]))
	{ 
		connexionValidation(htmlspecialchars($req["identifiant"]), htmlspecialchars($req["motDePasse"]));
	}
}
