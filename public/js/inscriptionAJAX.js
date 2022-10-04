validation.onclick = function() 
{
if (document.getElementsByName("identifiant")[0].value !== "" && document.getElementsByName("motDePasse")[0].value !== "" && document.getElementsByName("motDePasseVerification")[0].value !== "" && document.getElementsByName("adresseMail")[0].value !== "" && document.getElementsByName("groupe")[0].value !== "" )
{
  var groupe;
  if (document.getElementsByName("groupe")[0].checked)
  {
    groupe="creation"
  }
  else
  {
      groupe="rejoin"
  }
   
try{
  let Datas = new FormData();
    Datas.append("identifiant", document.getElementsByName("identifiant")[0].value);
    Datas.append("motDePasse", document.getElementsByName("motDePasse")[0].value);
    Datas.append("adresseMail", document.getElementsByName("adresseMail")[0].value);
    Datas.append("motDePasse", document.getElementsByName("motDePasse")[0].value);
    Datas.append("groupe", groupe);



  let request =
      $.ajax({
        type: "POST", 
        url: "/api/inscription/validation",
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
          if (output_success == 1 || output_success == -1)
          {
            document.location.href="/";
          }
          else
          {
            console.log(output_success);
            alert("Les champs entrés ne sont pas corrects !");
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
else
{
  alert("merci de remplir les champs !");
}

};
