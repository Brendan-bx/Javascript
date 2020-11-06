const imageElem1 = document.getElementById('toggleImagetop1');

imageElem1.addEventListener('click', toggleImagetop1)

let stop = ("IMG/stop.jpeg");
let img1 = "IMG/Saison4.jpg";

function toggleImagetop1(event) {
    if (event.target.src.includes("Saison4") === true) {
 
       imageElem1.src = stop;
    }
}

let button = document.getElementById("Eren");
let button2 = document.getElementById("Mikasa");
let button3 = document.getElementById("Armin");
let button4 = document.getElementById("Livai");
let button5 = document.getElementById("Erwin");



let text = document.getElementById('text');
let text2 = document.getElementById('text2');
let text3 = document.getElementById('text3');
let text4 = document.getElementById('text4');
let text5 = document.getElementById('text5');

button.addEventListener('click',description)
button2.addEventListener('click',description2)
button3.addEventListener('click',description3)
button4.addEventListener('click',description4)
button5.addEventListener('click',description5)


function description(event) {
    console.log(event.target.id);
    if (event.target.id === "Eren") {
        text.innerHTML = "Eren est le protagoniste de ce manga. Il est très impulsif, idéaliste, déterminé et violent.Enfant, il a vu sa mère se faire dévorer sous ses yeux par un Titan et rêve depuis de les anéantir. À première vue, il ne possède pas de talent particulier à part le fait qu’il soit doué en combat au corps à corps et qu’il ait une volonté d’acier"
    }
}

function description2(event) {
    if (event.target.id === "Mikasa") {
        text2.innerHTML = "Enfant, elle a été sauvée puis adoptée par Eren et sa famille. Ainsi, elle s’est jurée de le protéger quelle que soit la situation. Elle est considérée comme un génie et garde toujours son sang-froid, sauf lorsqu'Eren est en danger. Elle est classée première de sa promotion et intègre le bataillon d’exploration."
        
    }
}

function description3(event) {
    if (event.target.id === "Armin") {
        text3.innerHTML = "Armin est le meilleur ami d’Eren. Bien qu’il soit assez faible physiquement, il possède une intelligence exceptionnelle qui fait de lui un stratège hors du commun qui parvient à         élaborer des tactiques même dans une situation critique. Il intègre également le bataillon d’exploration."

    }
}

function description4(event) {
    if (event.target.id === "Livai") {
        text4.innerHTML = "Souvent désigné comme le Caporal-Chef Livaï, il est le chef de l'Escouade tactique au sein du Bataillon d'exploration. Il est connu pour être le soldat le plus puissant de l'armée humaine. Tout comme Mikasa, il fait partie des descendants de la lignée des Ackerman."
        

    }
}

function description5(event) {
    if (event.target.id === "Erwin") {
        text5.innerHTML = "Personnage énigmatique et charismatique. Il est le commandant en chef du bataillon d'Exploration, il est connu pour être un grand stratège, même si ses plans sont souvent des paris avec un faible pourcentage de réussite. Il a la confiance absolue de ses soldats, notamment du Caporal-Chef Livaï."
        
        

    }
}



    

