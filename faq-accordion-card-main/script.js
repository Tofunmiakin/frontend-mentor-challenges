function accordionDrop(id) {
  var x = document.getElementById(id);
  // var y = document.getElementById(id2);
  if (x.className.indexOf("panel") == -1) {
    x.className += "panel";
    // y.style.fontWeight = "700"
  } else {
    x.className = x.className.replace("panel", "");
  }
}




