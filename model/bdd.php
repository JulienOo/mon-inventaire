<?php

function connexionBdd()
{
	$user = "root";
	$pass = "";

	$bdd = new PDO('mysql:host=localhost;dbname=gestion_app', $user, $pass);

	return $bdd;
}
?>