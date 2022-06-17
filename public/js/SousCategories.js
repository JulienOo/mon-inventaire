function creationSousCategorie() {

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
	creationSousCategorieAJAX();

}

var dataId;
function validationEdition(dataId, id)
{
	value = document.getElementById("tasks").children[dataId-1].children[0].value;
	placeholder = document.getElementById("tasks").children[dataId-1].children[0].placeholder;

	var test = dataId;

	if (value === placeholder) {
		alert("Merci de modifier le nom.");
	} else if (value == "") {
	alert("Merci de choisir un nom");
	}
	else
	{
		console.log("valeur "+dataId);

	console.log("dataIds "+dataId);

	editionSousCategorieAJAX(id, value, dataId)
}
	// console.log(value);

}


  	var div, img;
 window.onload = function () {

 	if (typeof sousCategorie !==  "undefined") 
 	{
	  	for (var i = 0; sousCategorie.total[i] !== undefined; i++) 
	  	{
			div = document.createElement('div');
		    div.setAttribute("class", "cube task");
		    div.setAttribute("href", document.body.children[0].innerHTML+"/"+sousCategorie.total[i]["nom"]);
		    div.setAttribute("id", sousCategorie.total[i]["id"]);
		    div.setAttribute("data-id", tasks.childElementCount+1);
		    div.innerHTML = sousCategorie.total[i]["nom"]
		    tasks.appendChild(div);
	  	}
	}
	else 
	{
	sousCategorie =  window.location.href;
	sousCategorie = sousCategorie.split("/");

  	  for (var i = 0; sousCategorie.total[i] !== undefined; i++) 
	  {
			div = document.createElement('div');
		    div.setAttribute("class", "cube task");
		    div.setAttribute("href", document.body.children[0].innerHTML+"/"+sousCategorie.total[i]["nom"]);
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
	    img.setAttribute("onclick", "creationSousCategorie()");
	    creation.appendChild(img);


}