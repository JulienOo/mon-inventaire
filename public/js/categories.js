function creationCategorie() {
	number = document.getElementById("parentCategories tasks").childElementCount;

	document.getElementById("creation").outerHTML = '<div class="cube task" href="https://www.google.fr" data-id="'+number+'">Nouvelle catégorie '+number+'</div>'+'<div id="creation" class="cube ajouterCategorie" href="#" onclick="creationCategorie()"><img src="https://www.svgrepo.com/show/152121/plus.svg"></div>';
}

function validationEdition(dataId)
{
	value = document.getElementById("parentCategories tasks").children[dataId-1].children[0].value;
	placeholder = document.getElementById("parentCategories tasks").children[dataId-1].children[0].placeholder;


	if (value === placeholder) {
		alert("Merci de modifier le nom.");
	} else if (value == "") {
		alert("Merci de choisir un nom")
	} else {
	document.getElementById("parentCategories tasks").children[dataId-1].innerHTML = value;
	document.getElementById("parentCategories tasks").children[dataId-1].setAttribute("href", "https://igoogle.fr");
	}


	console.log(value);

}