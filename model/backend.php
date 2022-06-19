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

function getIdSousCategorie($nom)
{
	$bdd = connexionBdd();

	$req = $bdd->prepare("SELECT id  FROM sous_categories WHERE nomSousCategorie = :categorie");
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

	echo json_encode("modification faite !");
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

	// $idProduit = getIdSousCategorie($produit);

	$req = $bdd->prepare("
		SELECT colonnes.id, colonnes.nomColonne AS nom, colonnes.format, colonnes.ordre
		FROM sous_categories
		INNER JOIN colonnes ON colonnes.idSousCategorie = sous_categories.id
		WHERE sous_categories.nomSousCategorie = :sousCategories
		ORDER BY colonnes.ordre
		");
	$req->bindParam(':sousCategories', $produit, PDO::PARAM_STR);
	$req->execute();

	$colonnes = $req->fetchAll();

	$nombreLigne = getNombreLigneTableau($produit);


	for ($i=1; $i < $nombreLigne+1; $i++) 
	{ 
		// echo "id colonne : ".$colonnes[0][$i]."</br></br></br>";
		$req = $bdd->prepare("
		SELECT valeur_colonne.id AS id, valeur_colonne.valeur
		FROM valeur_colonne
		INNER JOIN colonnes ON valeur_colonne.id_colonne = colonnes.id
		INNER JOIN sous_categories ON colonnes.idSousCategorie = sous_categories.id AND sous_categories.nomSousCategorie = :sousCategories
		WHERE ligne = :ligne
		ORDER BY id_colonne
		");
	$req->bindParam(':ligne', $i, PDO::PARAM_STR);
	$req->bindParam(':sousCategories', $produit, PDO::PARAM_STR);
	$req->execute();

	$contenuColonnes[$i] = $req->fetchAll();
	}

	// echo "<pre>";
	// print_r($contenuColonnes);
	// echo "</pre>";

	if (isset($colonnes))
	{
		$retour["nom_colonne"] = $colonnes;	

		if (isset($contenuColonnes))
		{
			$retour["lignes"] = $contenuColonnes;
		}

	}
	



	return json_encode($retour);
}

function getNombreLigneTableau($produit)
{
		$bdd = connexionBdd();

		$req = $bdd->prepare("
		SELECT MAX(valeur_colonne.ligne)
		FROM valeur_colonne
		INNER JOIN sous_categories ON sous_categories.nomSousCategorie = :nomSousCategorie
		INNER JOIN colonnes ON colonnes.idSousCategorie = sous_categories.id
		WHERE valeur_colonne.id_colonne = colonnes.id
		");
		$req->bindParam(':nomSousCategorie', $produit, PDO::PARAM_STR);

	$req->execute();

	$nombreLigne = $req->fetchAll();

	if (isset($nombreLigne[0][0]))
	{
		return $nombreLigne[0][0];
	}
	else
	{
		return 0;
	}
}

function getNomSousCategorie($id)
{
		$bdd = connexionBdd();

		$req = $bdd->prepare("
		SELECT nomSousCategorie
		FROM sous_categories
		WHERE id = :id
		");
		$req->bindParam(':id', $id, PDO::PARAM_STR);

	$req->execute();

	$result = $req->fetchAll();

	if (isset($result[0]["nomSousCategorie"]))
	{
		return $result[0]["nomSousCategorie"];
	}
	else
	{
		return 0;
	}
}

function setColonnes($idSousCategorie, $nom)
{
	$bdd = connexionBdd();

	$req = $bdd->prepare("
		SELECT count(idSousCategorie)
		FROM colonnes
		WHERE idSousCategorie = :id
		");
	$req->bindParam(':id', $idSousCategorie, PDO::PARAM_STR);
	$req->execute();

	$nombreColonne = $req->fetchAll();
	if (isset($nombreColonne[0][0]))
	{
			$nombreColonne = $nombreColonne[0][0]+1;
	}
	else
	{
		$nombreColonne = 0;
	}

$sql = "INSERT INTO colonnes ( idSousCategorie, nomColonne, format, ordre ) VALUES ( ?, ?, ?, ? )";
$bdd->prepare($sql)->execute([$idSousCategorie, $nom, "string", $nombreColonne]);

$id_colonne = strval($bdd->lastInsertId());

	$nombreLigne = getNombreLigneTableau(getNomSousCategorie($idSousCategorie))+1;

	for ($i=0; $nombreLigne > $i; $i++)
	{

		$valeur = "vide";


		$sql = "INSERT INTO valeur_colonne ( id_colonne, ligne, valeur ) VALUES ( ?, ?, ?)";
		$bdd->prepare($sql)->execute([$id_colonne, $i, $valeur]);

		$last_id[$i] = strval($bdd->lastInsertId());

	}



	echo json_encode($last_id);

}

function editColonnesNom($id, $nom)
{
	$bdd = connexionBdd();
	$sql = "UPDATE colonnes SET nomColonne = :nom WHERE id = :id";

	$req= $bdd->prepare($sql);
	$req->bindParam(':nom', $nom, PDO::PARAM_STR);
	$req->bindParam(':id', $id, PDO::PARAM_STR);
	$req->execute();

	echo json_encode("modification faite !");
}

function delColonnes($id)
{
	$bdd = connexionBdd();

	$req = $bdd->prepare("
		SELECT ordre
		FROM colonnes
		WHERE id = :id
		");

	$req->bindParam(':id', $id, PDO::PARAM_STR);
	$req->execute();
	$ordre = $req->fetchAll();

	$sql = "DELETE FROM colonnes WHERE id=?";
	$req= $bdd->prepare($sql);
	$req->execute([$id]);

	$sql = "UPDATE colonnes SET ordre = ordre - 1 WHERE ordre > :ordre";
	$req= $bdd->prepare($sql);
	$req->bindParam(':ordre', $ordre[0]["ordre"], PDO::PARAM_STR);
	$req->execute();

	echo json_encode("modification faite !");
}



function setLignes($idSousCategorie)
{
	$bdd = connexionBdd();

	$req = $bdd->prepare("
		SELECT id, format
		FROM colonnes
		WHERE idSousCategorie = :id
		ORDER BY ordre
		");

	$req->bindParam(':id', $idSousCategorie, PDO::PARAM_STR);
	$req->execute();

	$result = $req->fetchAll();

	// print_r($ordre);
	
	$nombreLigne = getNombreLigneTableau(getNomSousCategorie($idSousCategorie))+1;
// echo "nombre de ligne ".$nombreLigne;
	for ($i=0; isset($result[$i]); $i++)
	{
		if ($result[$i]["format"] == "int")
		{
			$valeur = "0";
		}
		else
		{
			$valeur = "vide";
		}


		$sql = "INSERT INTO valeur_colonne ( id_colonne, ligne, valeur ) VALUES ( ?, ?, ?)";
		$bdd->prepare($sql)->execute([$result[$i]["id"], $nombreLigne, $valeur]);

		$last_id[$i] = strval($bdd->lastInsertId());

	}

	if (isset($last_id))
	{
		echo json_encode($last_id);	
	}
}

function delLignes($id)
{
	$bdd = connexionBdd();

	$req = $bdd->prepare("
		SELECT ligne, colonnes.id as id_colonne, colonnes.idSousCategorie
		FROM valeur_colonne
		INNER JOIN colonnes ON valeur_colonne.id_colonne = colonnes.id
		WHERE valeur_colonne.id = :id
		");

	$req->bindParam(':id', $id, PDO::PARAM_STR);
	$req->execute();
	$result = $req->fetchAll();

	$sql = "
		DELETE valeur_colonne
		FROM valeur_colonne 
		JOIN colonnes ON valeur_colonne.id_colonne = colonnes.id
		WHERE colonnes.idSousCategorie = ? AND ligne = ?";
	$req= $bdd->prepare($sql);
	$req->execute([$result[0]["idSousCategorie"], $result[0]["ligne"]]);

	$sql = "
		UPDATE valeur_colonne 
		INNER JOIN colonnes ON valeur_colonne.id_colonne = colonnes.id
		SET valeur_colonne.ligne = ligne - 1 
		WHERE valeur_colonne.ligne > :ligne AND colonnes.idSousCategorie = :idSousCategorie";

	$req= $bdd->prepare($sql);
	$req->bindParam(':ligne', $result[0]["ligne"], PDO::PARAM_STR);
	$req->bindParam(':idSousCategorie', $result[0]["idSousCategorie"], PDO::PARAM_STR);
	$req->execute();

	echo json_encode("modification faite !");
}

function editCellules($id, $nom)
{
	$bdd = connexionBdd();
	$sql = "UPDATE valeur_colonne SET valeur = :nom WHERE id = :id";

	$req= $bdd->prepare($sql);
	$req->bindParam(':nom', $nom, PDO::PARAM_STR);
	$req->bindParam(':id', $id, PDO::PARAM_STR);
	$req->execute();

	echo json_encode("modification faite !");
}