window.onload = function() {
  var big = document.createElement('DIV');
  big.id = 'bigText';
  document.body.insertBefore(big, document.body.firstChild);

  var length = window.innerWidth / 15;

  for (var i = 0; i < length; i++) {
    big.innerHTML += 'ENGL 224 ';
  }
}
