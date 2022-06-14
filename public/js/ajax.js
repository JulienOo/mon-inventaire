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



function creationSousCategorieAJAX(){
  try{
  let Datas = new FormData();
    Datas.append("id", document.body.children[0].getAttribute("id"));
    Datas.append("nom", "Nouvelle SOUS catégorie "+number);



  let request =
      $.ajax({
        type: "POST", 
        url: "api/sous-categorie/creation",
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



function suppressionSousCategorieAJAX(taskItemInContext)
{

  try{
  var id = parseInt(taskItemInContext.getAttribute("id"));
  let Datas = new FormData();
    Datas.append("id", id);



  let request =
      $.ajax({
        type: "POST", 
        url: "api/sous-categorie/suppression",
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