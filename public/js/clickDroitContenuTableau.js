(function() {
  
  "use strict";

  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //
  // H E L P E R    F U N C T I O N S
  //
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Function to check if we clicked inside an element with a particular class
   * name.
   * 
   * @param {Object} e The event
   * @param {String} className The class name to check against
   * @return {Boolean}
   */
  function clickInsideElement( e, className ) {
    var el = e.srcElement || e.target;
    if ( el.classList.contains(className) ) {

    // console.log("Je sais qui tu es : "+el.getAttribute("data-id"));

      return el;
    } else {
      while ( el = el.parentNode ) {
        if ( el.classList && el.classList.contains(className) ) {
          return el;
        }
      }
    }

    return false;
  }

  /**
   * Get's exact position of event.
   * 
   * @param {Object} e The event passed in
   * @return {Object} Returns the x and y position
   */
  function getPosition(e) {
    var posx = 0;
    var posy = 0;

    if (!e) var e = window.event;
    
    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    return {
      x: posx,
      y: posy
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //
  // C O R E    F U N C T I O N S
  //
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  
  /**
   * Variables.
   */
  var contextMenuClassName = "context-menu";
  var contextMenuItemClassName = "context-menu__item";
  var contextMenuLinkClassName = "context-menu__link";
  var contextMenuActive = "context-menu--active";

  var taskItemClassName = "task";
  var taskItemInContext;

  var clickCoords;
  var clickCoordsX;
  var clickCoordsY;

  var menu = document.querySelector("#context-menu-contenu");
  var menuItems = menu.querySelectorAll(".context-menu__item");
  var menuState = 0;
  var menuType;
  var menuTypeAvant;
  var menuWidth;
  var menuHeight;
  var menuPosition;
  var menuPositionX;
  var menuPositionY;

  var windowWidth;
  var windowHeight;

  var tableauDataId;
  var dernierDataId;

  /**
   * Initialise our application's code.
   */
  function init() {
    contextListener();
    clickListener();
    keyupListener();
    resizeListener();
  }

  /**
   * Listens for contextmenu events.
   */
  function contextListener() {
    document.addEventListener( "contextmenu", function(e) {
      taskItemInContext = clickInsideElement( e, taskItemClassName );

      if ( taskItemInContext ) {
      //   // ici
      // console.log("Je suis le cliqueur "+taskItemInContext.getAttribute("data-id"));
        e.preventDefault();

        //afficheur du menu à personnaliser !!!
        toggleMenuOn(taskItemInContext.getAttribute("data-id"));

        
        positionMenu(e);
      } else {
        taskItemInContext = null;
        toggleMenuOff();
      }
    });
  }

  /**
   * Listens for click events.
   */
  function clickListener() {
    document.addEventListener( "click", function(e) {
      var clickeElIsLink = clickInsideElement( e, contextMenuLinkClassName );

      if ( clickeElIsLink ) {
        e.preventDefault();
        menuItemListener( clickeElIsLink );
      } else {
        var button = e.which || e.button;
        if ( button === 1 ) {
          toggleMenuOff();
        }
      }
    });

  }

  /**
   * Listens for keyup events.
   */
  function keyupListener() {
    window.onkeyup = function(e) {
      if ( e.keyCode === 27 ) {
        toggleMenuOff();
      }
    }
  }

  /**
   * Window resize event listener
   */
  function resizeListener() {
    window.onresize = function(e) {
      toggleMenuOff();
    };
  }

  /**
   * Turns the custom context menu on.
   */
  function toggleMenuOn(dataId) {

    
      // console.log("taille du tableau : "+tableauDataId.length);
      // console.log("entrée boucle");
      // for (var i=0; tableauDataId[i] != undefined; i++) 
      // {
      //   console.log(tableauDataId[i]);
      // }
      // console.log("sortie boucle");

 tableauDataId = dataId.split("-");
      switch (tableauDataId.length) {
        case 1:
          menu = document.querySelector("#context-menu-head");
          menuType = "head";
          break;
        case 2:
          menu = document.querySelector("#context-menu-contenu");
          menuType = "contenu";
          break;    
    }
menu.classList.add( contextMenuActive );

if (menuType == "head" && menuTypeAvant == "contenu")
{
  document.querySelector("#context-menu-contenu").classList.remove( contextMenuActive );
} else if (menuType == "contenu" && menuTypeAvant == "head") {
  document.querySelector("#context-menu-head").classList.remove( contextMenuActive );
}

    menuState = 1;
    menuTypeAvant = menuType;
    dernierDataId = dataId;

  }

  /**
   * Turns the custom context menu off.
   */
  function toggleMenuOff() {
    if ( menuState !== 0 ) {
      menuState = 0;

      menu.classList.remove( contextMenuActive );
    }
  }

  /**
   * Positions the menu properly.
   * 
   * @param {Object} e The event
   */
  function positionMenu(e) {
    clickCoords = getPosition(e);
    clickCoordsX = clickCoords.x;
    clickCoordsY = clickCoords.y;

    menuWidth = menu.offsetWidth + 4;
    menuHeight = menu.offsetHeight + 4;

    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    if ( (windowWidth - clickCoordsX) < menuWidth ) {
      menu.style.left = windowWidth - menuWidth + "px";
    } else {
      menu.style.left = clickCoordsX + "px";
    }

    if ( (windowHeight - clickCoordsY) < menuHeight ) {
      menu.style.top = windowHeight - menuHeight + "px";
    } else {
      menu.style.top = clickCoordsY + "px";
    }
  }

  /**
   * Dummy action function that logs an action when a menu item link is clicked
   * 
   * @param {HTMLElement} link The link that was clicked
   */
  function menuItemListener( link ) {
    console.log( "Task ID - " + taskItemInContext.getAttribute("data-id") + ", Task action - " + link.getAttribute("data-action"));
    toggleMenuOff();

    var content = taskItemInContext.innerHTML;

      console.log(taskItemInContext);

    if (link.getAttribute("data-action") == "ViewContenu")
    {
      console.log("Redirection vers la page demandée");
      window.location.href=taskItemInContext.getAttribute("href")
    } 
    else if (link.getAttribute("data-action") == "EditContenu") 
    {
      console.log("modification de la catégorie demandée");
      // taskItemInContext.setAttribute("style", "pointer-events:none;");;
      // taskItemInContext.removeAttribute("href");
      console.log("content : "+content);
      console.log("content : "+taskItemInContext.getAttribute("data-id"));
      console.log(typeof taskItemInContext.getAttribute("data-id"))
      console.log(taskItemInContext);
      taskItemInContext.innerHTML = "<input type='text' value='"+content+"' placeholder='"+content+"' ><button onclick='validationEditionTableau(\""+taskItemInContext.getAttribute("data-id")+"\")'>valider</button>"


    }
    else if (link.getAttribute("data-action") == "DeleteContenu")
    {
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
    }


  }

  /**
   * Run the app.
   */
  init();

})();