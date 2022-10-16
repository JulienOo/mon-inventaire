<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title><?= $titre ?></title>
	<link href="/public/css/styles.css" rel="stylesheet">
	<link href="/public/css/clickDroit.css" rel="stylesheet">
</head>
<body>
	<header id="<?= $id ?>"><?= $nom ?></header>
	<nav>

	</nav>
	<section id="tasks">
</section>
	<nav>
		
	</nav>



<!-- menu click droit -->
 <nav id="context-menu" class="context-menu">
    <ul class="context-menu__items">
      <li class="context-menu__item">
        <a href="#" class="context-menu__link" data-action="View"><i class="fa fa-eye"></i>Ouvrir</a>
      </li>
<?php if ($_SESSION["permissions"] == "responsable" || $_SESSION["permissions"] == "editeur")
      {
      	echo '
      <li class="context-menu__item">
        <a href="#" class="context-menu__link" data-action="editSousCategorie"><i class="fa fa-edit"></i>Modifier</a>
      </li>
      <li class="context-menu__item">
        <a href="#" class="context-menu__link" data-action="deleteSousCategorie"><i class="fa fa-times"></i>Supprimer</a>
      </li>';
    } ?> 
    </ul>
  </nav>

<script type="text/javascript">
<?= $script ?>

<?php echo ($_SESSION["permissions"] == "lecteur") ? 'var lecteur=true': 'var lecteur=false'; ?>
</script>

	<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.js"></script>
	<script type="text/javascript" src="/public/js/ajax.js"></script>
	<script type="text/javascript" src="/public/js/sousCategories.js"></script>
	<?php 
	if ($_SESSION["permissions"] == "responsable" || $_SESSION["permissions"] == "editeur")
		{ 
			echo '<script type="text/javascript" src="/public/js/clickDroit-Editeur.js"></script>';
		}
		else
		{
			echo '<script type="text/javascript" src="/public/js/clickDroit-Lecteur.js"></script>';
		}  ?>
	</body>
</html>