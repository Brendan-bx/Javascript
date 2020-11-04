let button = document.getElementById("button")
button.addEventListener("click",change)
function change(){
    let pelem = document.getElementById("input").value;
    document.getElementById("p").textContent=pelem;
}



