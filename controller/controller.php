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

	$id = getIdSousCategorie($url[2]);


	$idCategorie = getIdCategorie($url[1]);

	if (getPermissionLecture($idCategorie))
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

function inscription()
{
	require_once "view/template/inscription.php";
}



function apiCreationCategorie($req)
{
	if (getPermissionEcriture(0))
	{

		$return["valeur"] = getCategorie("creation", htmlspecialchars($req["nom"]));
		$return["lastId"] = setCategories($return["valeur"]);
		$return["permissions"] = true;
		echo json_encode($return);
	}
	else
	{
		echo json_encode(false);
	}	
}

function apiEditionCategorie($req)
{


	if (getPermissionEcriture($req["id"]))
	{
		$return["changement"] = getCategorie("edition", htmlspecialchars($req["nom"]));

		if ($return["changement"] == true)
		{
			editCategories(htmlspecialchars($req["id"]), $req["nom"]);
		}

		$return["permissions"] = true;
		echo json_encode($return);
	}
	else
	{
		echo json_encode(false);
	}	

}

function apiSuppressionCategorie($req)
{
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
{

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
{
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
{
	$idCategorie = getIdCategorieDepuisSousCategorie($req["id"]);
	if (getPermissionEcriture($idCategorie))
	{ 
		delSousCategories(htmlspecialchars($req["id"]));

		$return["permissions"] = true;
		echo json_encode($return);
	}
	else
	{
		echo json_encode(true);
	}
}

function apiCreationColonne($req)
{
// print_r($req);
	$idCategorie = getIdCategorieDepuisSousCategorie($req["idSousCategorie"]);
// print_r($idCategorie);
	if (getPermissionEcriture($idCategorie))
	{
		setColonnes(htmlspecialchars($req["idSousCategorie"]), htmlspecialchars($req["nom"]));

		$return["permissions"] = true;
		echo json_encode($return);
	}
	else
	{
		echo json_encode(false);
	}
}

function apiEditionColonneNom($req)
{
	
	$idCategorie = getIdCategorieDepuisSousCategorie($req["idSousCategorie"]);

	if (getPermissionEcriture($idCategorie))
	{
		editColonnesNom(htmlspecialchars($req["id"]), htmlspecialchars($req["nom"]));

		$return["permissions"] = true;
		echo json_encode($return);
	}
	else
	{
		echo json_encode(false);
	}
}

function apiSuppressionColonne($req)
{

	$idCategorie = getIdCategorieDepuisSousCategorie($req["idSousCategorie"]);

	if (getPermissionEcriture($idCategorie))
	{
		delColonnes(htmlspecialchars($req["id"]));

		$return["permissions"] = true;
		echo json_encode($return);
	}
	else
	{
		echo json_encode(false);
	}

}

function apiCreationLigne($req)
{

	$idCategorie = getIdCategorieDepuisSousCategorie($req["idSousCategorie"]);

	if (getPermissionEcriture($idCategorie))
	{
		$return["lastId"] = setLignes($req["idSousCategorie"]);
		$return["permissions"] = true;
		echo json_encode($return);
	}
	else
	{
		echo json_encode(false);
	}
}

function apiSuppressionLigne($req)
{
	$idCategorie = getIdCategorieDepuisSousCategorie($req["idSousCategorie"]);

	if (getPermissionEcriture($idCategorie))
	{  
		delLignes(htmlspecialchars($req["id"]));
		$return["permissions"] = true;
		echo json_encode($return);
	}
	else
	{
		echo json_encode(false);
	}
}

function apiEditionCellule($req)
{
	$idCategorie = getIdCategorieDepuisSousCategorie($req["idSousCategorie"]);

	if (getPermissionEcriture($idCategorie))
	{
		editCellules(htmlspecialchars($req["id"]), htmlspecialchars($req["nom"]));
		$return["permissions"] = true;
		echo json_encode($return);
	}
	else
	{
		echo json_encode(false);
	}
}

function apiConnexionValidation($req)
{
	if (isset($req["identifiant"]) AND isset($req["motDePasse"]))
	{ 
		connexionValidation(htmlspecialchars($req["identifiant"]), htmlspecialchars($req["motDePasse"]));
	}
}

function apiInscriptionValidation($req)
{
	if (isset($req["identifiant"]) AND isset($req["motDePasse"]) AND isset($req["adresseMail"]) AND isset($req["groupe"]))
	{ 
		inscriptionValidation(htmlspecialchars($req["identifiant"]), htmlspecialchars($req["motDePasse"]), htmlspecialchars($req["adresseMail"]), htmlspecialchars($req["groupe"]));
	}
}
