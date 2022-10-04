<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>inscription</title>
	<link rel="stylesheet" type="text/css" href="/public/css/inscription.css">
</head>
<body>
	<div>
	<h1>Page d'inscription</h1>
	<p>Merci de remplir tous les champs</p>
	<input type="text" name="identifiant" placeholder="identifiant">
	<input type="mail" name="adresseMail" placeholder="adresse mail">
	<input type="password" name="motDePasse" placeholder="mot de passe">
	<input type="password" name="motDePasseVerification" placeholder="mot de passe">
	<span>Je souhaite</span>
	<!-- <div> -->
      <input type="radio" id="creation" name="groupe" value="creation" checked><label for="creation">Créer un groupe</label>
    <!-- </div> -->
    <!-- <div> -->
      <input type="radio" id="rejoin" name="groupe" value="rejoin"><label for="rejoin">rejoindre un groupe existant</label>
    <!-- </div> -->

	<input type="submit" id="validation" placeholder="M'inscrire">
</div>

	<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.js"></script>
	<script type="text/javascript" src="/public/js/inscriptionAJAX.js"></script>
</body>
</html>