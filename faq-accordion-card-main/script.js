function accordionDrop(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("panel") == -1) {
    x.className += "panel";
  } else {
    x.className = x.className.replace("panel", "");
  }
}

function changeFont() {

  document.getElementsByClassName('accordion').style.fontWeight = "700";
  
}



