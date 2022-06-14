<?php

require_once "model/bdd.php";



function getCategories()
{

$bdd = connexionBdd();

$req = $bdd->prepare("SELECT nomCategorie as nom, id FROM categories");
// $req->bindParam(1,$id);
$req->execute();

$result = $req->fetchAll();



return json_encode($result);
}

function getIdCategorie($nom)
{
	$bdd = connexionBdd();

	$req = $bdd->prepare("SELECT id  FROM categories WHERE nomCategorie	= :categorie");
	$req->bindParam(":categorie", $nom);
	$req->execute();

	$result = $req->fetchAll();

	if (isset($result[0]["id"]))
	{
		return 	$result[0]["id"];
	}
	else
	{
		return 0;
	}

}


function setCategories($nom)
{

$bdd = connexionBdd();

$sql = "INSERT INTO categories ( nomCategorie ) VALUES ( ? )";
$bdd->prepare($sql)->execute([$nom]);

$last_id = strval($bdd->lastInsertId());

// echo "78";
echo $last_id;

// return json_encode($result);
}

function editCategories($id, $nom)
{
	$bdd = connexionBdd();
	$sql = "UPDATE categories SET nomCategorie = :nom WHERE id = :id";

	$req= $bdd->prepare($sql);
	$req->bindParam(':nom', $nom, PDO::PARAM_STR);
	$req->bindParam(':id', $id, PDO::PARAM_STR);
	$req->execute();

	echo json_encode("modification faite !");
}
function delCategories($id)
{
	$bdd = connexionBdd();

	$sql = "DELETE FROM categories WHERE id=?";
	$req= $bdd->prepare($sql);
	$req->execute([$id]);

	echo json_encode("modification faite !");
}

function getSousCategories($categorie)
{
	$bdd = connexionBdd();

	$req = $bdd->prepare("
		SELECT nomSousCategorie as nom, sous_categories.id
		FROM sous_categories
		INNER JOIN categories ON categories.id = sous_categories.idCategorie
		WHERE :categorie = categories.nomCategorie
		");
	$req->bindParam(':categorie', $categorie, PDO::PARAM_STR);
	$req->execute();

	$result = $req->fetchAll();

	return json_encode($result);
}

function setSousCategories($idCategorie, $nomSousCategorie)
{
	$bdd = connexionBdd();

$sql = "INSERT INTO sous_categories ( idCategorie, nomSousCategorie ) VALUES ( ?, ? )";
$bdd->prepare($sql)->execute([$idCategorie, $nomSousCategorie]);

$last_id = strval($bdd->lastInsertId());

echo $last_id;
}

function editSousCategories($id, $nom)
{
	$bdd = connexionBdd();
	$sql = "UPDATE sous_categories SET nomSousCategorie = :nom WHERE id = :id";

	$req= $bdd->prepare($sql);
	$req->bindParam(':nom', $nom, PDO::PARAM_STR);
	$req->bindParam(':id', $id, PDO::PARAM_STR);
	$req->execute();

	// echo json_encode("modification faite !");
}

function delSousCategories($id)
{
	$bdd = connexionBdd();

	$sql = "DELETE FROM sous_categories WHERE id=?";
	$req= $bdd->prepare($sql);
	$req->execute([$id]);

	echo json_encode("modification faite !");
}


function getProduit($produit)
{
	$bdd = connexionBdd();

	$req = $bdd->prepare("
		SELECT colonnes.id, colonnes.nomColonne AS nom, colonnes.format, colonnes.ordre
		FROM sous_categories
		INNER JOIN colonnes ON colonnes.idSous_categories = sous_categories.id
		WHERE sous_categories.nomSousCategorie = :sousCategories
		ORDER BY colonnes.ordre
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