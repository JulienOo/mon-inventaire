<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title><?= $titre ?></title>
	<link href="/public/css/tableau.css" rel="stylesheet">
	<link href="/public/css/styles.css" rel="stylesheet">
	<link href="/public/css/clickDroit.css" rel="stylesheet">

</head>
<body>
	<header id="<?= $id ?>"><?= $nom ?></header>

	<section id="parentCategories tasks">
	<table id="keywords" cellspacing="0" cellpadding="0">
    <thead id="task-0">
      <tr id="head">
      </tr>
    </thead>
    <tbody id="tasks">
    </tbody>
  </table>
	</section>

      <?php if ($_SESSION["permissions"] == "responsable" || $_SESSION["permissions"] == "editeur")
      {
        echo '<section class="parentCroixTableau">
	<section class="croixTableau">
		<div id="creation" class="cube ajouterCategorie" href="#" onclick="creationLigne()"><img src="https://www.svgrepo.com/show/152121/plus.svg"></div>
		<p>ajouter une ligne</p>
	</section>
	<section class="croixTableau">
		<div id="creation" class="cube ajouterCategorie" href="#" onclick="creationColonne()"><img src="https://www.svgrepo.com/show/152121/plus.svg"></div>
		<p>ajouter une colonne</p>
	</section>
</section>';
}
?>


<!-- menu click droit -->


<!-- click droit head tableau -->
   <nav id="context-menu-head" class="context-menu">
    <ul class="context-menu__items">
<!--       <li class="context-menu__item">
        <a href="#" class="context-menu__link" data-action="View"><i class="fa fa-eye"></i>Ouvrir</a>
      </li> -->
      <?php if ($_SESSION["permissions"] == "responsable" || $_SESSION["permissions"] == "editeur")
      {
        echo '<li class="context-menu__item">
        <a href="#" class="context-menu__link" data-action="EditHead"><i class="fa fa-edit"></i>renommer la cellule</a>
      </li>
      <li class="context-menu__item">
        <a href="#" class="context-menu__link" data-action="DeleteHead"><i class="fa fa-times"></i>Supprimer la colonne</a>
      </li>';
    } ?>
    </ul>
  </nav>


<!-- click droit contenu tableau -->
 <nav id="context-menu-contenu" class="context-menu">
    <ul class="context-menu__items">
<!--       <li class="context-menu__item">
        <a href="#" class="context-menu__link" data-action="ViewContenu"><i class="fa fa-eye"></i>Ouvrir</a>
      </li> -->
      <?php if ($_SESSION["permissions"] == "responsable" || $_SESSION["permissions"] == "editeur")
      {
        echo '<li class="context-menu__item">
        <a href="#" class="context-menu__link" data-action="EditContenu"><i class="fa fa-edit"></i>Modifier la cellule</a>
      </li>
      <li class="context-menu__item">
        <a href="#" class="context-menu__link" data-action="DeleteContenu"><i class="fa fa-times"></i>Supprimer la ligne</a>
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
  <?php 
  if ($_SESSION["permissions"] == "responsable" || $_SESSION["permissions"] == "editeur")
    { 
      echo '<script type="text/javascript" src="/public/js/clickDroitContenuTableau-Editeur.js"></script>';
    }
    else
    {
      echo '<script type="text/javascript" src="/public/js/clickDroitContenuTableau-Lecture.js"></script></script>';
    }  ?>
	<script type="text/javascript" src="/public/js/tableau.js"></script>

</body>
</html>