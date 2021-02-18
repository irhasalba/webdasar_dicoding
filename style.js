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