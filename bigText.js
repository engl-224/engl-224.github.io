window.onload = function() {
  var big = document.createElement("DIV");
  big.id = "bigText";
  document.body.insertBefore(big, document.body.firstChild);

  var length = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight
  ) / 50;

  for (var i = 0; i < length; i++) {
    big.innerHTML += "ENGL 224 ENGL 224 ENGL 224 ENGL 224 ENGL 224 ENGL 224 ";
  }
}
