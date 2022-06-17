function creationCategorieAJAX(){
  try{
  let Datas = new FormData();
    Datas.append("nom", "Nouvelle catégorie "+number);



  let request =
      $.ajax({
        type: "POST", 
        url: "api/categorie/creation",
        data:Datas,
        dataType: 'json',
        timeout: 120000, //2 Minutes
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: function () {
          //Code à jouer avant l'appel ajax en lui même
        }
      });

      request.done(function (output_success) {
          //Code à jouer en cas d'éxécution sans erreur du script du PHP
          // alert(output_success);
  document.getElementById("creation").outerHTML = '<div id="'+output_success+'" class="cube task" href="Nouvelle catégorie '+number+'" data-id="'+number+'">Nouvelle catégorie '+number+'</div>'+'<div id="creation" class="cube ajouterCategorie" href="#" onclick="creationCategorie()"><img src="https://www.svgrepo.com/show/152121/plus.svg"></div>';
      });
      request.fail(function (http_error) {
    //Code à jouer en cas d'éxécution en erreur du script du PHP

     let server_msg = http_error.responseText;
     let code = http_error.status;
     let code_label = http_error.statusText;
         alert("Erreur "+code+" ("+code_label+") : "  + server_msg);
      });

      request.always(function () {
         //Code à jouer après done OU fail dans tous les cas 
      });

  }
  catch(e){
    alert(e);
  }
}

/* -------------------------------------------------------------------------------------------- */

function editionCategorieAJAX(id, valeur, dataId){
  try{
  let Datas = new FormData();
    Datas.append("id", id);
    Datas.append("nom", valeur);


  let request =
      $.ajax({
        type: "POST", 
        url: "api/categorie/edition",
        data:Datas,
        dataType: 'json',
        timeout: 120000, //2 Minutes
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: function () {
          //Code à jouer avant l'appel ajax en lui même
        }
      });


      request.done(function (output_success) {
          //Code à jouer en cas d'éxécution sans erreur du script du PHP
        // alert(output_success.output);
        // alert("hello");
        console.log('hello '+dataId);
        document.getElementById("tasks").children[dataId-1].innerHTML = valeur;
        document.getElementById("tasks").children[dataId-1].setAttribute("href", valeur);

      });
      request.fail(function (http_error) {
    //Code à jouer en cas d'éxécution en erreur du script du PHP

     let server_msg = http_error.responseText;
     let code = http_error.status;
     let code_label = http_error.statusText;
         alert("Erreur "+code+" ("+code_label+") : "  + server_msg);
      });

      request.always(function () {
         //Code à jouer après done OU fail dans tous les cas 
      });

  }
  catch(e){
    alert(e);
  }
}

/* -------------------------------------------------------------------------------------------- */

function suppressionCategorieAJAX(taskItemInContext)
{

  try{
  var id = parseInt(taskItemInContext.getAttribute("id"));
  let Datas = new FormData();
    Datas.append("id", id);



  let request =
      $.ajax({
        type: "POST", 
        url: "api/categorie/suppression",
        data:Datas,
        dataType: 'json',
        timeout: 120000, //2 Minutes
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: function () {
          //Code à jouer avant l'appel ajax en lui même
        }
      });

      request.done(function (output_success) {
          //Code à jouer en cas d'éxécution sans erreur du script du PHP

taskItemInContext.remove();

      var ligneRestante = document.getElementById("tasks").childElementCount;
      var ligneSuprime = parseInt(taskItemInContext.getAttribute("data-id"));
      var id = parseInt(taskItemInContext.getAttribute("id"));
      var ligneModif = ligneSuprime-1;

      for (var ligneModif, ligneSuprime; ligneModif<ligneRestante; ligneModif++) {
        document.getElementById("tasks").children[ligneModif].setAttribute("data-id", ligneSuprime);

      ligneSuprime++;
      }
      console.log(id);


      });
      request.fail(function (http_error) {
    //Code à jouer en cas d'éxécution en erreur du script du PHP

     let server_msg = http_error.responseText;
     let code = http_error.status;
     let code_label = http_error.statusText;
         alert("Erreur "+code+" ("+code_label+") : "  + server_msg);
      });

      request.always(function () {
         //Code à jouer après done OU fail dans tous les cas 
      });

  }
  catch(e){
    alert(e);
  }


                     
}


/* -------------------------------------------------------------------------------------------- */

function creationSousCategorieAJAX(){
  try{
  let Datas = new FormData();
    Datas.append("id", document.body.children[0].getAttribute("id"));
    Datas.append("nom", "Nouvelle SOUS catégorie "+number);



  let request =
      $.ajax({
        type: "POST", 
        url: "/api/sous-categorie/creation",
        data:Datas,
        dataType: 'json',
        timeout: 120000, //2 Minutes
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: function () {
          //Code à jouer avant l'appel ajax en lui même
        }
      });

      request.done(function (output_success) {
          //Code à jouer en cas d'éxécution sans erreur du script du PHP
          // alert(output_success);
  document.getElementById("creation").outerHTML = '<div id="'+output_success+'" class="cube task" href="Nouvelle SOUS catégorie '+number+'" data-id="'+number+'">Nouvelle SOUS catégorie '+number+'</div>'+'<div id="creation" class="cube ajouterCategorie" href="#" onclick="creationSousCategorie()"><img src="https://www.svgrepo.com/show/152121/plus.svg"></div>';
      });
      request.fail(function (http_error) {
    //Code à jouer en cas d'éxécution en erreur du script du PHP

     let server_msg = http_error.responseText;
     let code = http_error.status;
     let code_label = http_error.statusText;
         alert("Erreur "+code+" ("+code_label+") : "  + server_msg);
      });

      request.always(function () {
         //Code à jouer après done OU fail dans tous les cas 
      });

  }
  catch(e){
    alert(e);
  }
}


/* -------------------------------------------------------------------------------------------- */

function editionSousCategorieAJAX(id, valeur, dataId){
  try{
  let Datas = new FormData();
    Datas.append("id", id);
    Datas.append("nom", valeur);


  let request =
      $.ajax({
        type: "POST", 
        url: "api/sous-categorie/edition",
        data:Datas,
        dataType: 'json',
        timeout: 120000, //2 Minutes
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: function () {
          //Code à jouer avant l'appel ajax en lui même
        }
      });


      request.done(function (output_success) {
          //Code à jouer en cas d'éxécution sans erreur du script du PHP
        // alert(output_success.output);
        // alert("hello");
        console.log('hello '+output_success);
        document.getElementById("tasks").children[dataId-1].innerHTML = valeur;
        document.getElementById("tasks").children[dataId-1].setAttribute("href", valeur);

      });
      request.fail(function (http_error) {
    //Code à jouer en cas d'éxécution en erreur du script du PHP

     let server_msg = http_error.responseText;
     let code = http_error.status;
     let code_label = http_error.statusText;
         alert("Erreur "+code+" ("+code_label+") : "  + server_msg);
      });

      request.always(function () {
         //Code à jouer après done OU fail dans tous les cas 
      });

  }
  catch(e){
    alert(e);
  }
}


/* -------------------------------------------------------------------------------------------- */

function suppressionSousCategorieAJAX(taskItemInContext)
{

  try{
  var id = parseInt(taskItemInContext.getAttribute("id"));
  let Datas = new FormData();
    Datas.append("id", id);



  let request =
      $.ajax({
        type: "POST", 
        url: "/api/sous-categorie/suppression",
        data:Datas,
        dataType: 'json',
        timeout: 120000, //2 Minutes
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: function () {
          //Code à jouer avant l'appel ajax en lui même
        }
      });

      request.done(function (output_success) {
          //Code à jouer en cas d'éxécution sans erreur du script du PHP
          // alert(output_success);
taskItemInContext.remove();

      var ligneRestante = document.getElementById("tasks").childElementCount;
      var ligneSuprime = parseInt(taskItemInContext.getAttribute("data-id"));
      var id = parseInt(taskItemInContext.getAttribute("id"));
      var ligneModif = ligneSuprime-1;

      for (var ligneModif, ligneSuprime; ligneModif<ligneRestante; ligneModif++) {
        document.getElementById("tasks").children[ligneModif].setAttribute("data-id", ligneSuprime);

      ligneSuprime++;
      }
      console.log(id);


      });
      request.fail(function (http_error) {
    //Code à jouer en cas d'éxécution en erreur du script du PHP

     let server_msg = http_error.responseText;
     let code = http_error.status;
     let code_label = http_error.statusText;
         alert("Erreur "+code+" ("+code_label+") : "  + server_msg);
      });

      request.always(function () {
         //Code à jouer après done OU fail dans tous les cas 
      });

  }
  catch(e){
    alert(e);
  }       
}

/* -------------------------------------------------------------------------------------------- */

function creationColonneAJAX(){  
  try{
  let Datas = new FormData();
    Datas.append("idSousColonne", document.getElementsByTagName("header")[0].getAttribute("id"));
    Datas.append("nom", "nouvelle colonne");



  let request =
      $.ajax({
        type: "POST", 
        url: "/api/colonne/creation",
        data:Datas,
        dataType: 'json',
        timeout: 120000, //2 Minutes
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: function () {
          //Code à jouer avant l'appel ajax en lui même
        }
      });

      request.done(function (output_success) { 
          //Code à jouer en cas d'éxécution sans erreur du script du PHP
          // alert(output_success);
th = document.createElement('th');
    th.setAttribute("class", "task");
    th.setAttribute("type", "string");
    th.setAttribute("data-id", head.childElementCount+1);
    th.setAttribute("id", output_success);
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
      td.setAttribute("id", output_success[b]);
      td.setAttribute("class", "task");
      td.setAttribute("data-id", a+"-"+taille);
      td.innerHTML = "vide"
      tasksChildren.appendChild(td);

      b++;
    }

          });
      request.fail(function (http_error) {
    //Code à jouer en cas d'éxécution en erreur du script du PHP

     let server_msg = http_error.responseText;
     let code = http_error.status;
     let code_label = http_error.statusText;
         alert("Erreur "+code+" ("+code_label+") : "  + server_msg);
      });

      request.always(function () {
         //Code à jouer après done OU fail dans tous les cas 

      });

  }
  catch(e){
    alert(e);
  }
}
/* -------------------------------------------------------------------------------------------- */

function editionColonnesNomAJAX(id, valeur, dataId)
{
  try{
  let Datas = new FormData();
    Datas.append("id", id);
    Datas.append("nom", valeur);


  let request =
      $.ajax({
        type: "POST", 
        url: "/api/colonne/edition/nom",
        data:Datas,
        dataType: 'json',
        timeout: 120000, //2 Minutes
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: function () {
          //Code à jouer avant l'appel ajax en lui même
        }
      });


      request.done(function (output_success) {
          //Code à jouer en cas d'éxécution sans erreur du script du PHP
        // alert(output_success.output);
        // alert("hello");
        // alert('hello '+output_success);
  document.getElementById(id).innerHTML = value;


      });
      request.fail(function (http_error) {
    //Code à jouer en cas d'éxécution en erreur du script du PHP

     let server_msg = http_error.responseText;
     let code = http_error.status;
     let code_label = http_error.statusText;
         alert("Erreur "+code+" ("+code_label+") : "  + server_msg);
      });

      request.always(function () {
         //Code à jouer après done OU fail dans tous les cas 
      });

  }
  catch(e){
    alert(e);
  }
}
/* -------------------------------------------------------------------------------------------- */

function suppressionColonneAJAX(taskItemInContext)
{
console.log("helloooo "+taskItemInContext.getAttribute("id"));
  try{
  var id = parseInt(taskItemInContext.getAttribute("id"));
  let Datas = new FormData();
    Datas.append("id", id);



  let request =
      $.ajax({
        type: "POST", 
        url: "/api/colonne/suppression",
        data:Datas,
        dataType: 'json',
        timeout: 120000, //2 Minutes
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: function () {
          //Code à jouer avant l'appel ajax en lui même
        }
      });

      request.done(function (output_success) {
          //Code à jouer en cas d'éxécution sans erreur du script du PHP
          // alert(output_success);

            // console.log("Demande de suppression colonne");

      var colonne = parseInt(taskItemInContext.getAttribute("data-id"))-1;
      var nombreColonne = document.getElementById("head").childElementCount-1;
      var nombreLigne = document.getElementById("tasks").childElementCount;

      taskItemInContext.remove(); //suppression de la celulle HEAD



      console.log("Voici le nombre de colonnes présente actuellement : "+nombreColonne);
      console.log("Voici le nombre de lignes présente actuellement : "+nombreLigne);
      console.log("Voici la colonne supprimé : "+colonne);

      for (var i=0; i<nombreLigne ; i++)
      {
        document.getElementById("tasks").children[i].children[colonne].remove() //suppression des cellule contenu

        // for (var a=colonne; colonne<nombreColonne; a++)
        // {
        //     document.getElementById("tasks").children[i].children[colonne].setAttribute("data-id", "ppp");
        // }

      }

    tableauDataId = taskItemInContext.getAttribute("data-id").split("-");
    for (var i=colonne; i<nombreColonne; i++)
    {
      //ici
      console.log("voici le boucle de renommage des data-id");

      head.children[i].setAttribute("data-id", i+1);
      for (var a=0; a<nombreLigne; a++)
      {
      var tab = tasks.children[a].children[i].getAttribute("data-id").split("-");
      var nouvelleColonne = parseInt(tab[1])-1
      var nouveauDataId = tab[0]+"-"+nouvelleColonne;

      console.log(nouveauDataId);
      tasks.children[a].children[i].setAttribute("data-id", nouveauDataId);
      }
    }


      });
      request.fail(function (http_error) {
    //Code à jouer en cas d'éxécution en erreur du script du PHP

     let server_msg = http_error.responseText;
     let code = http_error.status;
     let code_label = http_error.statusText;
         alert("Erreur "+code+" ("+code_label+") : "  + server_msg);
      });

      request.always(function () {
         //Code à jouer après done OU fail dans tous les cas 
      });

  }
  catch(e){
    alert(e);
  }       
}


/* -------------------------------------------------------------------------------------------- */

function creationLigneAJAX(){  
  try{
  let Datas = new FormData();
    Datas.append("idSousCategorie", document.body.children[0].getAttribute("id"));


  let request =
      $.ajax({
        type: "POST", 
        url: "/api/ligne/creation",
        data:Datas,
        dataType: 'json',
        timeout: 120000, //2 Minutes
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: function () {
          //Code à jouer avant l'appel ajax en lui même
        }
      });

      request.done(function (output_success) { 
          //Code à jouer en cas d'éxécution sans erreur du script du PHP
          // alert(output_success);

if (head.childElementCount > 0)
    {
  // contenu = "<tr id='task-2'><td class='task' data-id='2-1' class='lalign'>desktop workspace photos</td><td class='task' data-id='2-2' >2,200</td><td class='task' data-id='2-3' >500</td><td class='task' data-id='2-4' >22%</td><td class='task' data-id='2-5' >8.9</td></tr>";
      


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
    td.setAttribute("id", output_success[a]);
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
     else
     {
      alert("Merci de créer dans un premier temps une colonne !");
     } 

     

          });
      request.fail(function (http_error) {
    //Code à jouer en cas d'éxécution en erreur du script du PHP

     let server_msg = http_error.responseText;
     let code = http_error.status;
     let code_label = http_error.statusText;
         alert("Erreur "+code+" ("+code_label+") : "  + server_msg);
      });

      request.always(function () {
         //Code à jouer après done OU fail dans tous les cas 

      });

  }
  catch(e){
    alert(e);
  }
}
/* -------------------------------------------------------------------------------------------- */

function suppressionLigneAJAX(taskItemInContext)
{

  try{
  var id = parseInt(taskItemInContext.getAttribute("id"));
  let Datas = new FormData();
    Datas.append("id", id);



  let request =
      $.ajax({
        type: "POST", 
        url: "/api/ligne/suppression",
        data:Datas,
        dataType: 'json',
        timeout: 120000, //2 Minutes
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: function () {
          //Code à jouer avant l'appel ajax en lui même
        }
      });

      request.done(function (output_success) {
          //Code à jouer en cas d'éxécution sans erreur du script du PHP
          alert(output_success);

            // console.log("Demande de suppression colonne");
      console.log(taskItemInContext.getAttribute("data-id").split("-"));
      const tableauDataId = taskItemInContext.getAttribute("data-id").split("-");



      var ligne = parseInt(tableauDataId[0]);
      var ligneRestante = document.getElementById("tasks").childElementCount+1
      var nombreColonne = document.getElementById("head").childElementCount;


      document.getElementById("task-"+ligne).remove()



      console.log("nombre des lignes total restantes : "+ligneRestante);
      console.log("numero de la ligne suprimé : "+ligne);
      console.log("nombre de colonnes : "+nombreColonne);

      var ligneBis=ligne++;
      while (ligne < ligneRestante)
      {
        console.log("1")
        console.log(ligneBis);
        console.log(ligne);
        console.log("1")

        //console.log(document.getElementById("task-"+ligne));

        var etage = document.getElementById("task-"+ligne)
        console.log(etage);
        var b=1;
        for (var i = 0; i < nombreColonne; i++) 
        {
          etage.children[i].setAttribute("data-id", ligneBis+"-"+b);

          b++;
        }
        document.getElementById("task-"+ligne).setAttribute("id", "task-"+ligneBis);
        console.log(ligne);

        ligneBis++;
        ligne++;
      }
      

      });
      request.fail(function (http_error) {
    //Code à jouer en cas d'éxécution en erreur du script du PHP

     let server_msg = http_error.responseText;
     let code = http_error.status;
     let code_label = http_error.statusText;
         alert("Erreur "+code+" ("+code_label+") : "  + server_msg);
      });

      request.always(function () {
         //Code à jouer après done OU fail dans tous les cas 
      });

  }
  catch(e){
    alert(e);
  }       
}

/* -------------------------------------------------------------------------------------------- */

function editionCelluleAJAX(id, valeur, dataId)
{
  try{
  let Datas = new FormData();
    Datas.append("id", id);
    Datas.append("nom", valeur);


  let request =
      $.ajax({
        type: "POST", 
        url: "/api/cellule/edition",
        data:Datas,
        dataType: 'json',
        timeout: 120000, //2 Minutes
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: function () {
          //Code à jouer avant l'appel ajax en lui même
        }
      });


      request.done(function (output_success) {
          //Code à jouer en cas d'éxécution sans erreur du script du PHP
        // alert(output_success);
        // alert("hello");
        // alert('hello '+output_success);
    document.getElementById(id).innerHTML = valeur;

      });
      request.fail(function (http_error) {
    //Code à jouer en cas d'éxécution en erreur du script du PHP
     let server_msg = http_error.responseText;
     let code = http_error.status;
     let code_label = http_error.statusText;
         alert("Erreur "+code+" ("+code_label+") : "  + server_msg);
      });

      request.always(function () {
         //Code à jouer après done OU fail dans tous les cas 
      });

  }
  catch(e){
    alert(e);
  }
}