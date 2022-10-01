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

function resizechecker() {
  mysidenav = document.getElementById("mySidenav");

  console.log("resize width = " + window.innerWidth );

  
  var layouts = document.getElementById("buttonlayouts");
  var welcome = document.getElementById("buttonwelcome");
  var menulayouts = document.getElementById("menulayouts");
  var menusubmenu = document.getElementById("menusubmenu");
  var homebutton = document.getElementById("homebutton");

  if (window.innerWidth > 992) {

    var position = document.getElementById("myheader").getBoundingClientRect();
    
    if (position.bottom <= 0){

      mysidenav.style.height = "3.5em";
      mysidenav.style.backgroundColor = "white";

      

    }else{

      mysidenav.style.height = "6em";
      mysidenav.style.backgroundColor = "rgb(0,0,0,0)";
      
      

    }

    mysidenav.style.left = "0";
    mysidenav.style.top ="0";
    

    document.getElementById("menulayouts").style.visibility = "hidden";
    document.getElementById("menusubmenu").style.visibility = "hidden";

  } else {

    document.getElementById("menulayouts").style.visibility = "visible";
    document.getElementById("menusubmenu").style.visibility = "visible";
    document.getElementById("buttonlayouts").style.backgroundColor = "rgb(0,0,0,0)";
    document.getElementById("libuttonsubmenu").style.backgroundColor = "rgb(0,0,0,0)";

    main = document.getElementById("main");

    main.style.left ="0";

    mysidenav.style.left = "-18rem";
    mysidenav.style.backgroundColor = "#1C2021" ;
    mysidenav.style.height ="110%";
    mysidenav.style.position ="fixed";
    mysidenav.style.top = "-3.56em";
    mysidenav.style.transition ="0.7s";

  }
}

function displaylayouts() {

  if (window.innerWidth > 992) {
    console.log("display layouts");
    displayElementSmooth("menulayouts", "0.5s");
    var buttonlayouts = document.getElementById("buttonlayouts");


    if (document.getElementById("mySidenav").style.backgroundColor == "white") {
      buttonlayouts.style.backgroundColor = "rgba(88, 91, 92, 0.1)";
      buttonlayouts.style.borderColor = "rgba(88, 91, 92, 0)";
    } else {
      buttonlayouts.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
      buttonlayouts.style.borderColor = "white";
    }



  }

}
function hidelayouts() {

  if (window.innerWidth > 992) {
    setTimeout(() => {
      if (!mouseOnMenuLayouts) {
        var menulayouts = document.getElementById("menulayouts");

        menulayouts.style.transition = "0.1s";
        menulayouts.style.visibility = "hidden";

        var buttonlayouts = document.getElementById("buttonlayouts");

        if (document.getElementById("mySidenav").style.backgroundColor != "white") {
          buttonlayouts.style.backgroundColor = "rgba(88, 91, 92, 0.1)";
          buttonlayouts.style.borderColor = "rgba(88, 91, 92, 0)";
        } else {
          buttonlayouts.style.backgroundColor = "rgba(255, 255, 255, 0)";
          buttonlayouts.style.borderColor = "rgba(255, 255, 255, 0)";
        }


      }
    }, 300);
  }
}



function displaysubmenu() {
  if (window.innerWidth > 992) {
    displayElementSmooth("menusubmenu", "0.5s");
    document.getElementById("libuttonsubmenu").style.background = "#83D3C9";
  }
}
function hidesubmenu() {

  if (window.innerWidth > 992) {
    setTimeout(() => {
      if (!MouseOnMenuSubmenu) {

        document.getElementById("menusubmenu").style.visibility = "hidden";
        document.getElementById("libuttonsubmenu").style.background = "white";
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
  if (window.innerWidth > 992) {
    var position = document.getElementById("myheader").getBoundingClientRect();
    var sidenav = document.getElementById("mySidenav");

    if (position.bottom <= 0) {
      var layouts = document.getElementById("buttonlayouts");
      var welcome = document.getElementById("buttonwelcome");
      var menulayouts = document.getElementById("menulayouts");
      var menusubmenu = document.getElementById("menusubmenu");
      var homebutton = document.getElementById("homebutton");

      if (sidenav.style.backgroundColor != "white") {

        sidenav.style.transition = "none";
        sidenav.style.height = "3.5em";

        sidenav.style.borderBottomColor = "#585b5c10";
        sidenav.style.borderBottomWidth = "2px";
        sidenav.style.borderBottomStyle = "solid";

        menulayouts.style.top = "4.2em";
        menusubmenu.style.top = "11.45em";

        homebutton.style.color = "#585b5c";


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
        var homebutton = document.getElementById("homebutton");

        sidenav.style.transition = "none";
        sidenav.style.height = "6em";
        sidenav.style.backgroundColor = "rgb(255,255,255,0)";
        sidenav.style.borderBottomWidth = "0";

        homebutton.style.color = "white";

        document.getElementById("mySidenav").style.position = "absolute";

        menulayouts.style.top = "5em";
        menusubmenu.style.top = "12.25em";

        layouts.className = layouts.className.replace("-scrolled", "");
        welcome.className = welcome.className.replace("-scrolled", "");



        setTimeout(() => {
          sidenav.style.transition = "0.7s";
        }, 10);

      }

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

window.addEventListener("resize", resizechecker);
onresize = (event) => {resizechecker};

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