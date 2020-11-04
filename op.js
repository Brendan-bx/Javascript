let accueile = document.getElementById("accueil");
let synopsis = document.getElementById("synopsis");
let personnage = document.getElementById("personnage");
let episode = document.getElementById("episode");

accueile.addEventListener("click", truc)
synopsis.addEventListener("click", truc)
personnage.addEventListener("click", truc)
episode.addEventListener("click", truc)

let text1elem = document.getElementById("text1");
let text2elem = document.getElementById("text2");
let text3elem = document.getElementById("text3");
let text4elem = document.getElementById("text4");
let text5elem = document.getElementById("text5");

function truc(event) {
    if (event.target.id === "accueil") {
        text1elem.innerHTML = "accueil"
        text2elem.innerHTML = ""
        text3elem.innerHTML = ""
        text4elem.innerHTML = ""
        text5elem.innerHTML = ""
    }

    else if (event.target.id === "synopsis") {
        text1elem.innerHTML = "Fortune, gloire et pouvoir...Un homme les détenait tous: Gol D.Roger, le roi des pirates.A son exécution, il prononça ses dernières paroles: « Mon trésor, le One Piece, je vous le laisse si vous le voulez, trouvez - le! Je l'ai laissé quelque part dans ce monde ».";
        text2elem.innerHTML = "Ces mots, comme une façon de ne jamais laisser mourir ce qu'il incarne, résonnèrent dans l'esprit de tous comme un vent de liberté. C'est ainsi que débuta l'age d'or de la Piraterie."
        text3elem.innerHTML = "Des années plus tard, le One Piece n'est toujours qu'un rêve, incarnant dans l'esprit de nombres jeunes gens, la volonté de partir voyager dans ce monde océanique et insulaire."
        text4elem.innerHTML = "Entre combat acharné et amitié indéfectible : chacun doit trouver sa voie et se démarquer. C'est bien ce que compte faire le jeune Monkey D. Luffy."
        text5elem.innerHTML = "Un monde nouveau s'étend devant vous, partez à sa découverte vous qui êtes en quête de liberté, laissez-vous guider par vos rêves. Le Roi des Pirates, ce sera vous !"
    }

    else if (event.target.id === "personnage") {
        text1elem.innerHTML = "personnage";
        text2elem.innerHTML = ""
        text3elem.innerHTML = ""
        text4elem.innerHTML = ""
        text5elem.innerHTML = ""

    }

    else if (event.target.id === "episode") {
        text1elem.innerHTML = "episode";
        text2elem.innerHTML = ""
        text3elem.innerHTML = ""
        text4elem.innerHTML = ""
        text5elem.innerHTML = ""

    }




}
