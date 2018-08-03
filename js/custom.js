var yes = document.getElementById('yes');
var no = document.getElementById('no');

yes.onclick = function() {
  modal.style.display = "none";
}

no.onclick = function() {
  modal.style.display = "none";
}

var timer = document.getElementById('timer');

timer.onclick = function() {
  setTimeout(myFunction, 3000){
    alert('Hello');
  }
}
