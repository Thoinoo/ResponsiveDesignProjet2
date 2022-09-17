/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  if (document.getElementById("mySidenav").style.width == "85vw" )
  {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  else
  {
    document.getElementById("mySidenav").style.width = "85vw";
    document.getElementById("main").style.marginLeft = "85vw";
  }
  
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
} 