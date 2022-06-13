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



function getProduit($produit)
{
	$produit = "câble";
	$bdd = connexionBdd();

	$req = $bdd->prepare("
		SELECT colonnes.id, nomColonne AS nom, format, ordre
		FROM sous_categories
		INNER JOIN colonnes ON colonnes.idSous_categories = sous_categories.id
		WHERE nomSousCategorie = :sousCategories
		ORDER BY ordre
		");
	$req->bindParam(':sousCategories', $produit, PDO::PARAM_STR);
	$req->execute();

	$colonnes = $req->fetchAll();

	$req = $bdd->prepare("
		SELECT MAX(ligne) AS nombre_ligne
		FROM valeur_colonne
		");
	$req->execute();

	$nombreLigne = $req->fetchAll();



	for ($i=1; $i < $nombreLigne[0]["nombre_ligne"]+1; $i++) 
	{ 
		// echo "compteur :".$i."<br>";
		// echo "id colonne : ".$colonnes[0][$i]."</br></br></br>";
		$req = $bdd->prepare("
		SELECT *
		FROM valeur_colonne
		WHERE ligne = :ligne
		ORDER BY id_colonne
		");
	$req->bindParam(':ligne', $i, PDO::PARAM_STR);
	$req->execute();

	$contenuColonnes[$i] = $req->fetchAll();
	}

	// echo "<pre>";
	// print_r($contenuColonnes);
	// echo "</pre>";

	$retour["nom_colonne"] = $colonnes;
	$retour["lignes"] = $contenuColonnes;


	return json_encode($retour);
}