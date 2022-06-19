

function validationEditionTableauHead(dataId)
{

  var ligne = parseInt(dataId)-1;
  // if (ligne != 0)
  // {
  console.log("dataid : "+dataId+"- ligne : "+ligne);
  value = document.getElementById("head").children[ligne].children[0].value

  placeholder = document.getElementById("head").children[ligne].children[0].placeholder;
  // }
  // else
  // {
  //   console.log("OK")
  // }

  if (value === placeholder) {
    alert("Merci de modifier la valeur.");
    // document.getElementById("head").children[ligne].children[colonne].innerHTML = value;
  } else if (value == "") {
    alert("Merci d'entrer une valeur")
  } else {
  console.log(document.getElementById("head").children[ligne].getAttribute("id"));
    editionColonnesNomAJAX(document.getElementById("head").children[ligne].getAttribute("id"), value, dataId)


}

  // console.log(value);

}

function validationEditionTableauContenu(dataId, balise)
{
  console.log(typeof dataId);


console.log(dataId.split("-"));
const tableauDataId = dataId.split("-");

ligne = parseInt(tableauDataId[0])-1;
colonne = parseInt(tableauDataId[1])-1;

var value, placeholder;

  // if (ligne != 0)
  // {

  value = document.getElementById("tasks").children[ligne].children[colonne].children[0].value

  placeholder = document.getElementById("tasks").children[ligne].children[colonne].children[0].placeholder;
  // }
  // else
  // {
  //   console.log("OK")
  // }

  if (value === placeholder) {
    console.log("Merci de modifier la valeur.");
    document.getElementById("tasks").children[ligne].children[colonne].innerHTML = value;
  } else if (value == "") {
    alert("Merci d'entrer une valeur")
  } else {
    editionCelluleAJAX(balise, value, dataId)


}

  // console.log(value);

}

function creationLigne()
{
  creationLigneAJAX();
}


  function creationColonne()
  {
    // parent = document.getElementById("head");
    creationColonneAJAX();
  }

// $(function(){
//   $('#keywords').tablesorter(); 
// });


    var th, tr, td, iBis, aBis;

 window.onload = function () {

if (tableau.nom_colonne.length !== 0)
{
    for (var i = 0; tableau.nom_colonne[i] !== undefined; i++) 
    {
      th = document.createElement('th');
      th.setAttribute("class", "task");
      th.setAttribute("type", tableau.nom_colonne[i]["format"]);
      th.setAttribute("data-id", head.childElementCount+1);
      th.setAttribute("id", tableau.nom_colonne[i]["id"]);
      th.innerHTML = tableau.nom_colonne[i]["nom"]
      head.appendChild(th);
    }

if (tableau.lignes != undefined)
{
    for (var i=1; tableau.lignes[i] != undefined; i++) //boucle pour les lignes
    {
      tr = document.createElement('tr');
      id = parseInt(tasks.childElementCount)+1;
      tr.setAttribute("id", "task-"+id);
      // tr.innerHTML = tableau.head[i]["nom"];
      tasks.appendChild(tr);
      iBis=i+1;
      for (var a=0; tableau.lignes[i][a] != undefined; a++) //boucle pour les cellule
      {
      aBis = a+1;

      console.log("ligne "+i);
      console.log("colonne "+a);

      td = document.createElement('td');
      id = parseInt(tasks.childElementCount)+1;
      td.setAttribute("class", "task");
      td.setAttribute("data-id", i+"-"+aBis);
      td.setAttribute("id", "c-"+tableau.lignes[i][a]["id"]);
      td.innerHTML = tableau.lignes[i][a]["valeur"];
      tr.appendChild(td);
      }
    }
  }
  }
}