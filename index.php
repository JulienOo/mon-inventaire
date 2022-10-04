<?php
session_start();

require_once "controller/controller.php";

// echo "<pre>";
// print_r(connexionValidationErreurCheck());
// echo "</pre>";

// print_r(getIdCategorie("Nouvelle catégorie 2"));

$_SESSION["permissions"] = "editeur";

// print_r($_SERVER);

$url = explode("/", rawurldecode($_SERVER['REQUEST_URI']));
// print_r($url);
if (!connexionValidationErreurCheck())
{
	if (isset($_SESSION["logged"]))
	{
		if ($url[1] == "erreur-404")
		{
			echo "erreur 404";
		}
		elseif (empty($url[1])) { //page qui affiche toutes les catégories
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
				elseif ($url[2] == "colonne" AND isset($url[3]))
				{
					if ($url[3] == "creation")
					{ 
						apiCreationColonne($_POST);
					}
					elseif ($url[3] == "edition" AND isset($url[4]))
					{
						if ($url[4] == "nom")
						{
							apiEditionColonneNom($_POST);
						}
						else
						{
							header("Location: /erreur-404");
						}
					}
					elseif ($url[3] == "suppression")
					{
						apiSuppressionColonne($_POST);
					}
					else
					{ 
						header("Location: /erreur-404");
					}
				}
				elseif ($url[2] == "ligne" AND isset($url[3]))
				{
					if ($url[3] == "creation")
					{
						apiCreationLigne($_POST);
					}
					elseif ($url[3] == "suppression")
					{
						apiSuppressionLigne($_POST);
					}
					else
					{ 
						header("Location: /erreur-404");
					}
				}
				elseif ($url[2] == "cellule" AND isset($url[3]))
				{
					if ($url[3] == "edition")
					{
						apiEditionCellule($_POST);
					}
					else
					{ 
						header("Location: /erreur-404");
					}

				}
				else
				{ 
					header("Location: /erreur-404");
				}
			}
			else
			{
				echo "erreur";
			}
		}
		elseif (isset($url[1]) AND !isset($url[2]) OR empty($url[2]) && $url[1] != "public") 
		{ //page d'une catégorie qui affiche les sous-catégories
			if (getIdCategorie($url[1]) !== 0)
			{
				sousCategorie();
			}
			else
			{
				header("Location: /erreur-404");
			}
		} 
		else {
			if (getIdCategorie($url[1]) !== 0 AND getIdSousCategorie($url[2]) !== 0)
					{
						 produits();
					}
					else
					{
						header("Location: /erreur-404");
					}
		 } 
	}
	else
	{
		if ($url[1] == "connexion")
		{
			connexion();
		}
		elseif ($url[1] == "inscription")
		{
			inscription();
		}
		elseif ($url[1] == "api")
		{
			if (isset($url[2]) AND isset($url[3]))
			{
				if ($url[2] == "connexion" AND $url[3] == "validation")
				{ 
					apiConnexionValidation($_POST);
				}
				elseif($url[2] == "inscription" AND $url[3] == "validation")
				{
					apiInscriptionValidation($_POST);
				}
			}
		}
		else
		{
			header("Location: /connexion");
		}
	}
}