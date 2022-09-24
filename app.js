let closed = true;

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav(e) {
  if (closed) {
    /*
    if (document.getElementById("mySidenav").style.width == "75vw" )
    {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    }
    else
    {
      document.getElementById("mySidenav").style.width = "75vw";
      document.getElementById("main").style.marginLeft = "75vw";
    }*/

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
  //console.log("displayheader");
  document.getElementById("myheader").style.opacity = 1;
}

function displaylayouts() {
  document.getElementById("menulayouts").style.visibility = "visible";
}
function hidelayouts() {
  if (window.screen.width > 769) {
    document.getElementById("menulayouts").style.visibility = "hidden";
  }
}

function displaysubmenu() {
  document.getElementById("menusubmenu").style.visibility = "visible";
}
function hidesubmenu() {
  if (window.screen.width > 769) {
    document.getElementById("menusubmenu").style.visibility = "hidden";
  }
}

document.getElementById("buttonlayouts").addEventListener("mouseover", displaylayouts);
document.getElementById("buttonlayouts").addEventListener("mouseout", hidelayouts);
document.getElementById("menulayouts").addEventListener("mouseover", displaylayouts);
document.getElementById("menulayouts").addEventListener("mouseout", hidelayouts);


document.getElementById("buttonsubmenu").addEventListener("mouseover", displaysubmenu);
document.getElementById("buttonsubmenu").addEventListener("mouseout", hidesubmenu);
document.getElementById("menusubmenu").addEventListener("mouseover", displaysubmenu);
document.getElementById("menusubmenu").addEventListener("mouseout", hidesubmenu);

document.getElementById('main').addEventListener("click", closeNav);
document.getElementById('menuButton').addEventListener("click", openNav);