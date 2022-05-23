function creationCategorie() {

	number = document.getElementById("tasks").childElementCount;
	var categorie =  window.location.href;
	categorie = categorie.split("/");

	if (document.getElementsByTagName("header")[0].outerText !== "Catégories")
	{
		categorie = document.getElementsByTagName("header")[0].outerText;
	}
	else
	{ 
		categorie = "";
		console.log(categorie);
	}
	document.getElementById("creation").outerHTML = '<a class="cube task" href="'+categorie+'/Nouvelle catégorie '+number+'" data-id="'+number+'">Nouvelle catégorie '+number+'</a>'+'<div id="creation" class="cube ajouterCategorie" href="#" onclick="creationCategorie()"><img src="https://www.svgrepo.com/show/152121/plus.svg"></div>';
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

 	if (typeof categorie !==  "undefined") 
 	{
	  	for (var i = 0; categorie.total[i] !== undefined; i++) 
	  	{
			div = document.createElement('a');
		    div.setAttribute("class", "cube task");
		    div.setAttribute("href", categorie.total[i]["nom"]);
		    div.setAttribute("data-id", tasks.childElementCount+1);
		    div.innerHTML = categorie.total[i]["nom"]
		    tasks.appendChild(div);
	  	}
	}
	else 
	{
	categorie =  window.location.href;
	categorie = categorie.split("/");

  	  for (var i = 0; sousCategorie.total[i] !== undefined; i++) 
	  {
			div = document.createElement('a');
		    div.setAttribute("class", "cube task");
		    div.setAttribute("href", categorie[3]+"/"+sousCategorie.total[i]["nom"]);
		    div.setAttribute("data-id", tasks.childElementCount+1);
		    div.innerHTML = sousCategorie.total[i]["nom"]
		    tasks.appendChild(div);
	  }
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