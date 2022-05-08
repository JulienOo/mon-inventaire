function validationEditionTableau(dataId)
{
  console.log(typeof dataId);

console.log(dataId);

console.log(dataId.split("-"));
const tableauDataId = dataId.split("-");

ligne = parseInt(tableauDataId[0])-1;
colonne = parseInt(tableauDataId[1])-1;



  value = document.getElementById("tasks").children[ligne].children[colonne].children[0].value

  placeholder = document.getElementById("tasks").children[ligne].children[colonne].children[0].placeholder;


  if (value === placeholder) {
    alert("Merci de modifier le nom.");
  } else if (value == "") {
    alert("Merci de choisir un nom")
  } else {
  document.getElementById("tasks").children[ligne].children[colonne].innerHTML = value;

  }


  // console.log(value);

}

function creationElement()
{
  // alert("création élément !");

  tableau = document.getElementById("keywords");
  contenu = "<tr id='task-2'><td class='task' data-id='2-1' class='lalign'>desktop workspace photos</td><td class='task' data-id='2-2' >2,200</td><td class='task' data-id='2-3' >500</td><td class='task' data-id='2-4' >22%</td><td class='task' data-id='2-5' >8.9</td></tr>";
      
    



    nombreColonne = document.getElementById("colonnes").childElementCount;
    

    console.log("nombre colonnes :"+nombreColonne);

    parent = document.getElementById("tasks");
    valeur = "voici un text"

    nombreLigne = document.getElementById("tasks").childElementCount+1;

    tr = document.createElement('tr');
    tr.setAttribute("id", "task-"+nombreLigne);
    parent.appendChild(tr);


    var b=1;
    for (var a = 0; nombreColonne > a; a++) 
    {

      // console.log("bonsoir "+a);
    type = document.getElementById("colonnes").children[a].getAttribute("type");
    // console.log(type);

    if (type == "string") {

      // console.log("string");

      valeur = "Valeur par défaut";
    } else if (type == "int") {

      // console.log("int");

      valeur = "25";
    } else {

      // console.log("double");

      valeur = "250.50"
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

// $(function(){
//   $('#keywords').tablesorter(); 
// });