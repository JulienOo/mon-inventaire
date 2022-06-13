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
	<header>
		<?= $nom ?>
	</header>
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
      <li class="context-menu__item">
        <a href="#" class="context-menu__link" data-action="Edit"><i class="fa fa-edit"></i>Modifier</a>
      </li>
      <li class="context-menu__item">
        <a href="#" class="context-menu__link" data-action="Delete"><i class="fa fa-times"></i>Supprimer</a>
      </li>
    </ul>
  </nav>

<script type="text/javascript">
<?= $script ?>

</script>


	<script type="text/javascript" src="/public/js/categories.js"></script>

	<script type="text/javascript" src="/public/js/clickDroit.js"></script>
</body>
</html>