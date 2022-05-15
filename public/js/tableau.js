function validationEditionTableauHead(dataId)
{
  console.log(typeof dataId);

  var ligne = parseInt(dataId)-1;
  // if (ligne != 0)
  // {

  value = document.getElementById("head").children[ligne].children[0].value

  placeholder = document.getElementById("head").children[ligne].children[0].placeholder;
  // }
  // else
  // {
  //   console.log("OK")
  // }

  if (value === placeholder) {
    console.log("Merci de modifier la valeur.");
    document.getElementById("head").children[ligne].children[colonne].innerHTML = value;
  } else if (value == "") {
    alert("Merci d'entrer une valeur")
  } else {
  document.getElementById("head").children[ligne].innerHTML = value;


}

  // console.log(value);

}

function validationEditionTableauContenu(dataId)
{
  console.log(typeof dataId);

console.log("tt"+dataId);

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
  document.getElementById("tasks").children[ligne].children[colonne].innerHTML = value;


}

  // console.log(value);

}

function creationLigne()
{


  contenu = "<tr id='task-2'><td class='task' data-id='2-1' class='lalign'>desktop workspace photos</td><td class='task' data-id='2-2' >2,200</td><td class='task' data-id='2-3' >500</td><td class='task' data-id='2-4' >22%</td><td class='task' data-id='2-5' >8.9</td></tr>";
      
    

    nombreColonne = document.getElementById("head").childElementCount;
    

    console.log("nombre colonnes :"+nombreColonne);

    parent = document.getElementById("tasks");

    nombreLigne = document.getElementById("tasks").childElementCount+1;

    tr = document.createElement('tr');
    tr.setAttribute("id", "task-"+nombreLigne);
    parent.appendChild(tr);


    var b=1;
    for (var a = 0; nombreColonne > a; a++) 
    {

      // console.log("bonsoir "+a);
    type = document.getElementById("head").children[a].getAttribute("type");
    // console.log(type);

    if (type == "string") {

      // console.log("string");

      valeur = "vide";
    } else if (type == "int") {

      // console.log("int");

      valeur = "0";
    } else {

      // console.log("double");

      valeur = "vide"
    }


    td = document.createElement('td');
    td.setAttribute("class", "task");
    td.setAttribute("data-id", nombreLigne+"-"+b);
    tr.appendChild(td);


    var tdText = document.createTextNode(valeur);
    td.appendChild(tdText);

    b++;
    }

    // var tr = document.createElement('tr');
    // parent.appendChild(tr);
     
    // var td = document.createElement('td');
    // tr.appendChild(td);


    // var tdText = document.createTextNode(value);
    // td.appendChild(tdText);
      
  }


  function creationColonne()
  {

    // parent = document.getElementById("head");


    th = document.createElement('th');
    th.setAttribute("class", "task");
    th.setAttribute("type", "string");
    th.setAttribute("data-id", head.childElementCount+1);
    th.innerHTML = "nouvelle colonne"
    head.appendChild(th);


    nombreLigne = document.getElementById("tasks").childElementCount+1;

    var b=0;
    for (var a=1; a < nombreLigne; a++) 
    {

      tasksChildren = document.getElementById("tasks").children[b];
      taille = document.getElementById("tasks").children[b].childElementCount+1;
      console.log("tour numéro : "+nombreLigne);
      document.getElementById("tasks");

      var td = document.createElement('td');
      td.setAttribute("class", "task");
      td.setAttribute("data-id", a+"-"+taille);
      td.innerHTML = "vide"
      tasksChildren.appendChild(td);

      b++;
    }


  }

// $(function(){
//   $('#keywords').tablesorter(); 
// });


    var th, tr, td, iBis, aBis;

 window.onload = function () {
    for (var i = 0; tableau.head[i] !== undefined; i++) 
    {
      th = document.createElement('th');
      th.setAttribute("class", "task");
      th.setAttribute("data-id", head.childElementCount+1);
      th.innerHTML = tableau.head[i]["nom"]
      head.appendChild(th);
    }

    for (var i=0; tableau.contenu[i] != undefined; i++) //boucle pour les lignes
    {
      tr = document.createElement('tr');
      id = parseInt(tasks.childElementCount)+1;
      tr.setAttribute("id", "task-"+id);
      // tr.innerHTML = tableau.head[i]["nom"];
      tasks.appendChild(tr);

      iBis=i+1;
      for (var a=0; tableau.contenu[i][a] != undefined; a++) //boucle pour les cellule
      {
      aBis = a+1;
      td = document.createElement('td');
      id = parseInt(tasks.childElementCount)+1;
      td.setAttribute("class", "task");
      td.setAttribute("data-id", iBis+"-"+aBis);
      td.innerHTML = tableau.contenu[i][a]["valeur"];
      tr.appendChild(td);
      }
    }
}