let closed = true;
let mouseOnMenuLayouts = false;
let MouseOnMenuSubmenu = false;

function openNav(e) {
  if (closed) {

    if (document.getElementById("mySidenav").style.left == "0") {
      document.getElementById("mySidenav").style.left = "-18rem";
      document.getElementById("main").style.left = "0";
    }
    else {
      document.getElementById("mySidenav").style.left = "0";
      document.getElementById("main").style.left = "18rem";
    }
    setTimeout(() => { closed = false; /*console.log('opened')*/ }, 300)
  }
}



/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  if (!closed) {
    document.getElementById("mySidenav").style.left = "-18rem";
    document.getElementById("main").style.left = "0";
    setTimeout(() => { closed = true; console.log('closed') }, 300)
  }
}

function displayheader() {
  document.getElementById("myheader").style.opacity = 1;
}

function displayElementSmooth(id, time) {
  var element = document.getElementById(id);


  if (element.style.visibility != "visible") {
    element.style.transition = "none";
    element.style.opacity = "0";
    element.style.visibility = "visible";

    setTimeout(() => {
      element.style.transition = time;
      element.style.opacity = "1";
    }, 10);
  }


}
/*
function hideElementSmooth(id, flag) {

  console.log("test 1 : " + flag);
  setTimeout(() => {
    if (!flag) {
      console.log("test hide element: " + flag);

      document.getElementById(id).style.visibility = "hidden";
    }
  }, 1000);

}*/

function displaylayouts() {

  if (window.screen.width > 769) {
    displayElementSmooth("menulayouts", "0.5s");
    var buttonlayouts = document.getElementById("buttonlayouts");

    buttonlayouts.style.backgroundColor = "rgba(255, 255, 255, 0.15);";
    buttonlayouts.style.borderStyle = "solid"
    buttonlayouts.style.borderWidth = "1px";
    buttonlayouts.style.borderColor = "white";

  }

}
function hidelayouts() {

  if (window.screen.width > 769) {
    setTimeout(() => {
      if (!mouseOnMenuLayouts) {

        document.getElementById("menulayouts").style.visibility = "hidden";
      }
    }, 300);
  }
}



function displaysubmenu() {
  if (window.screen.width > 769) {
    displayElementSmooth("menusubmenu", "0.5s");
    //document.getElementById("menusubmenu").style.visibility = "visible";
  }
}
function hidesubmenu() {

  if (window.screen.width > 769) {
    setTimeout(() => {
      if (!MouseOnMenuSubmenu) {

        document.getElementById("menusubmenu").style.visibility = "hidden";
      }
    }, 300);
  }
}
/*
function changeButtonStyle(id, color) {
  var button = document.getElementById(id);
  button.style.color = color;
  button.style.border = "0px";
  button.style.backgroundColor = color;


}*/

function fixenavbar() {

  var position = document.getElementById("myheader").getBoundingClientRect();
  var sidenav = document.getElementById("mySidenav");

  if (position.bottom <= 0) {
    var layouts = document.getElementById("buttonlayouts");
    var welcome = document.getElementById("buttonwelcome");
    var menulayouts = document.getElementById("menulayouts");
    var menusubmenu = document.getElementById("menusubmenu");

    if (sidenav.style.backgroundColor != "white") {

      sidenav.style.transition = "none";
      sidenav.style.height = "3.5em";

      sidenav.style.borderBottomColor = "#585b5c10";
      sidenav.style.borderBottomWidth = "2px";
      sidenav.style.borderBottomStyle = "solid";

      menulayouts.style.top = "4.2em";
      menusubmenu.style.top = "11.7em";


      layouts.className = "btn-nav-tertiary-light-scrolled";
      welcome.className = "btn-nav-tertiary-bold-scrolled";
      /*
      changeButtonStyle("buttonlayouts", "#7E808180")
      changeButtonStyle("buttonwelcome", "#7E808180")*/

      sidenav.style.top = "-8em";
      sidenav.style.backgroundColor = "white";
      sidenav.style.position = "fixed";
      // ...

      setTimeout(() => {
        sidenav.style.transition = "0.7s";
        sidenav.style.top = "0";
      }, 10);
    }

  }
  else {

    if (sidenav.style.backgroundColor == "white") {

      var layouts = document.getElementById("buttonlayouts");
      var welcome = document.getElementById("buttonwelcome");
      var menulayouts = document.getElementById("menulayouts");
      var menusubmenu = document.getElementById("menusubmenu");

      sidenav.style.transition = "none";
      sidenav.style.height = "6em";
      sidenav.style.backgroundColor = "rgb(255,255,255,0)";
      sidenav.style.borderBottomWidth = "0";

      document.getElementById("mySidenav").style.position = "absolute";

      menulayouts.style.top = "5em";
      menusubmenu.style.top = "12.5em";

      layouts.className = layouts.className.replace("-scrolled", "");
      welcome.className = welcome.className.replace("-scrolled", "");



      setTimeout(() => {
        sidenav.style.transition = "0.7s";
      }, 10);

    }

  }
}


//TESTS
function menuLayoutsDisplayedTrue() {
  mouseOnMenuLayouts = true;
}
function menuLayoutsDisplayedFalse() {
  mouseOnMenuLayouts = false;
}
function menumenusubmenuDisplayedTrue() {
  MouseOnMenuSubmenu = true;
}
function menumenusubmenuplayedFalse() {
  MouseOnMenuSubmenu = false;
}

//FIN TESTS


document.addEventListener("scroll", fixenavbar);



document.getElementById("buttonlayouts").addEventListener("mouseover", displaylayouts);
document.getElementById("buttonlayouts").addEventListener("mouseleave", hidelayouts);
document.getElementById("menulayouts").addEventListener("mouseover", menuLayoutsDisplayedTrue);
document.getElementById("menulayouts").addEventListener("mouseleave", menuLayoutsDisplayedFalse);
document.getElementById("menulayouts").addEventListener("mouseleave", hidelayouts);


document.getElementById("buttonsubmenu").addEventListener("mouseover", displaysubmenu);
document.getElementById("buttonsubmenu").addEventListener("mouseout", hidesubmenu);
document.getElementById("menusubmenu").addEventListener("mouseover", menumenusubmenuDisplayedTrue);
document.getElementById("menusubmenu").addEventListener("mouseleave", menumenusubmenuplayedFalse);
document.getElementById("menusubmenu").addEventListener("mouseout", hidesubmenu);

document.getElementById('main').addEventListener("click", closeNav);
document.getElementById('menuButton').addEventListener("click", openNav);