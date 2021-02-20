// ketika halaman pertama kali di load dropdown disembunyikan
document.getElementById("dropdown").style.visibility ="hidden";
function showDropdown(){
    document.getElementById("dropdown").style.visibility ="visible";
}

//jika di klik diluar target dropdown akan hilang
window.onclick = function(event){
    var e = event.target.matches('.category');
    if(!e){
        document.getElementById("dropdown").style.visibility ="hidden";
    }else{
        showDropdown();
    }
}

//progress bar 
var i = 0;
function bar() {
  if (i == 0) {
    i = 1;
    var elem = document.querySelector(".progress");
    var bar = document.querySelector(".barstatus");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        bar.style.width = width + "%";
        bar.innerHTML = width + "%";
      }
    }
  }
}
var i = 0;
function startbar() {
  if (i == 0) {
    i = 1;
    var elem = document.querySelector(".start");
    var bar = document.querySelector(".status");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 20) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        bar.style.width = width + "%";
        bar.innerHTML = width + "%";
      }
    }
  }
}