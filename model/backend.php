<?php

require_once "model/bdd.php";



function getCategories()
{

$bdd = connexionBdd();

$req = $bdd->prepare("SELECT nomCategorie as nom FROM categories");
// $req->bindParam(1,$id);
$req->execute();

$result = $req->fetchAll();



return json_encode($result);
}



function getSousCategories($categorie)
{

	$bdd = connexionBdd();

	$req = $bdd->prepare("
		SELECT nomSousCategorie as nom 
		FROM sous_categories
		INNER JOIN categories ON categories.id = sous_categories.idCategorie
		WHERE :categorie = categories.nomCategorie
		");
	$req->bindParam(':categorie', $categorie, PDO::PARAM_STR);
	$req->execute();

	$result = $req->fetchAll();

	return json_encode($result);
}