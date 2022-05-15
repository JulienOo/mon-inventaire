function creationCategorie() {
	number = document.getElementById("tasks").childElementCount;

	document.getElementById("creation").outerHTML = '<div class="cube task" href="https://www.google.fr" data-id="'+number+'">Nouvelle catégorie '+number+'</div>'+'<div id="creation" class="cube ajouterCategorie" href="#" onclick="creationCategorie()"><img src="https://www.svgrepo.com/show/152121/plus.svg"></div>';
}

function validationEdition(dataId)
{
	value = document.getElementById("tasks").children[dataId-1].children[0].value;
	placeholder = document.getElementById("tasks").children[dataId-1].children[0].placeholder;


	if (value === placeholder) {
		alert("Merci de modifier le nom.");
	} else if (value == "") {
		alert("Merci de choisir un nom")
	} else {
	document.getElementById("tasks").children[dataId-1].innerHTML = value;
	document.getElementById("tasks").children[dataId-1].setAttribute("href", "https://igoogle.fr");
	}


	console.log(value);

}


  	var div, img;
 window.onload = function () {
  	for (var i = 0; categorie.total[i] !== undefined; i++) 
  	{
			div = document.createElement('div');
	    div.setAttribute("class", "cube task");
	    div.setAttribute("href", categorie.total[i]["url"]);
	    div.setAttribute("data-id", tasks.childElementCount+1);
	    div.innerHTML = categorie.total[i]["nom"]
	    tasks.appendChild(div);
  	}

  		div = document.createElement('div');
	    div.setAttribute("id", "creation");
	    div.setAttribute("class", "cube ajouterCategorie");
	    div.setAttribute("href", "#");
	    tasks.appendChild(div);

	    img = document.createElement('img')
	    img.setAttribute("src", "https://www.svgrepo.com/show/152121/plus.svg")
	    img.setAttribute("onclick", "creationCategorie()");
	    creation.appendChild(img);
}