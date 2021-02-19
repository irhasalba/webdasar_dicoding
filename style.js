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
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.querySelector(".progress");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}