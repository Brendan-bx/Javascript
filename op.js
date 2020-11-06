let description = document.getElementById("description");
let synopsis = document.getElementById("synopsis");
let personnage = document.getElementById("personnage");
let episode = document.getElementById("episode");

description.addEventListener("click", truc)
synopsis.addEventListener("click", truc)
personnage.addEventListener("click", truc)
episode.addEventListener("click", truc)


let text1elem = document.getElementById("text1");
let text2elem = document.getElementById("text2");
let text3elem = document.getElementById("text3");

text1elem.innerHTML = "<h2>One Piece</h2>  Type : Shonen <br> Genre : Aventure <br> Thèmes : Surnaturel  <h2>Manga</h2>  Auteur : Eiichirō Oda <br> Éditeur : (ja) Shūeisha (fr) Glénat <br> Prépublication : Weekly Shonen Jump <br> Sortie initiale : 22 juillet 1997 – en cours <br> Volume : 97 <h2>Anime</h2> Réalisateur : Tatsuya Nagamine (depuis 2019) <br> Studio d’animation : Toei Animation <br> 1re diffusion : 20 octobre 1999 – en cours <br> Épisodes : 948 <br><br><br>"

flecheg.addEventListener("click", no)
fleched.addEventListener("click", yes)



let slide = new Array("IMG/saga1.jpg", "IMG/saga2.jpg", "IMG/saga3.jpg", "IMG/saga4.jpg", "IMG/saga5.jpg", "IMG/saga6.jpg", "IMG/saga7.jpg", "IMG/saga8.jpg", "IMG/saga14.jpg", "IMG/saga15.jpg", "IMG/saga16.jpg", "IMG/autre.jpg")
let numero = 0;

document.getElementById("slider").style.display = "none";
document.getElementById("solo").style.display = "none";


function truc(event) {
    if (event.target.id === "description") {
        document.getElementById("image2").style.display = "none";
        document.getElementById("slider").style.display = "none";
        document.getElementById("solo").style.display = "none";
        text2elem.innerHTML = ""
        text1elem.innerHTML = "<h2>One Piece</h2>  Type : Shonen <br> Genre : Aventure <br> Thèmes : Surnaturel  <h2>Manga</h2>  Auteur : Eiichirō Oda <br> Éditeur : (ja) Shūeisha (fr) Glénat <br> Prépublication : Weekly Shonen Jump <br> Sortie initiale : 22 juillet 1997 – en cours <br> Volume : 97 <h2>Anime</h2> Réalisateur : Tatsuya Nagamine (depuis 2019) <br> Studio d’animation : Toei Animation <br> 1re diffusion : 20 octobre 1999 – en cours <br> Épisodes : 948 <br><br><br>"
    }

    else if (event.target.id === "synopsis") {
        document.getElementById("image2").style.display = "none";
        document.getElementById("slider").style.display = "none";
        document.getElementById("solo").style.display = "none";
        text2elem.innerHTML = ""
        text1elem.innerHTML = "Fortune, gloire et pouvoir...Un homme les détenait tous: Gol D.Roger, le roi des pirates.A son exécution, il prononça ses dernières paroles: « Mon trésor, le One Piece, je vous le laisse si vous le voulez, trouvez - le! Je l'ai laissé quelque part dans ce monde ».   <br><br><br>   Ces mots, comme une façon de ne jamais laisser mourir ce qu'il incarne, résonnèrent dans l'esprit de tous comme un vent de liberté. C'est ainsi que débuta l'age d'or de la Piraterie.   <br><br><br>   Des années plus tard, le One Piece n'est toujours qu'un rêve, incarnant dans l'esprit de nombres jeunes gens, la volonté de partir voyager dans ce monde océanique et insulaire   <br><br><br>   .Entre combat acharné et amitié indéfectible : chacun doit trouver sa voie et se démarquer. C'est bien ce que compte faire le jeune Monkey D. Luffy.   <br><br><br>   Un monde nouveau s'étend devant vous, partez à sa découverte vous qui êtes en quête de liberté, laissez-vous guider par vos rêves. Le Roi des Pirates, ce sera vous !   <br><br><br>   ";
    }

    else if (event.target.id === "personnage") {
        text1elem.innerHTML = ""
        document.getElementById("flecheg").style.display = "flex";
        document.getElementById("luffy").style.display = "flex";
        document.getElementById("zoro").style.display = "none";
        document.getElementById("usopp").style.display = "none";
        document.getElementById("nami").style.display = "none";
        document.getElementById("sanji").style.display = "none";
        document.getElementById("chopper").style.display = "none";
        document.getElementById("robin").style.display = "none";
        document.getElementById("franky").style.display = "none";
        document.getElementById("brook").style.display = "none";
        document.getElementById("jinbe").style.display = "none";
        document.getElementById("fleched").style.display = "flex";
        document.getElementById("image2").style.display = "flex";
        document.getElementById("slider").style.display = "none";
        document.getElementById("solo").style.display = "none";
        text2elem.innerHTML = "<h2>Monkey.D.Luffy</h2><h4>Capitaine de l'équipage</h4>"
    }

    else if (event.target.id === "episode") {
        text1elem.innerHTML = ""
        text2elem.innerHTML = ""
        document.getElementById("image2").style.display = "none";
        document.getElementById("slider").style.display = "flex";
        document.getElementById("solo").style.display = "flex";
        if (numero === 0) {
            text3elem.innerHTML = "<a href='https://animedigitalnetwork.fr/video/one-piece-arc1-east-blue'><h1>Saga1</h1></a>"
        }
       
    }
}






function yes(event) {

    if (document.getElementById("luffy").style.display === "flex") {
        document.getElementById("luffy").style.display = "none";
        document.getElementById("zoro").style.display = "flex";
        text2elem.innerHTML = "<h2>Zoro</h2><h4>Second de L'équipage</h4>"
    }
    else if (document.getElementById("zoro").style.display === "flex") {
        document.getElementById("zoro").style.display = "none";
        document.getElementById("usopp").style.display = "flex";
        text2elem.innerHTML = "<h2>Usopp</h2><h4>Canonnier de L'équipage</h4>"
    }
    else if (document.getElementById("usopp").style.display === "flex") {
        document.getElementById("usopp").style.display = "none";
        document.getElementById("nami").style.display = "flex";
        text2elem.innerHTML = "<h2>Nami</h2><h4>Navigatrice de L'équipage</h4>"
    }
    else if (document.getElementById("nami").style.display === "flex") {
        document.getElementById("nami").style.display = "none";
        document.getElementById("sanji").style.display = "flex";
        text2elem.innerHTML = "<h2>Sanji</h2><h4>Cuisinier de L'équipage</h4>"
    }
    else if (document.getElementById("sanji").style.display === "flex") {
        document.getElementById("sanji").style.display = "none";
        document.getElementById("chopper").style.display = "flex";
        text2elem.innerHTML = "<h2>Chopper</h2><h4>Médecin de L'équipage</h4>"
    }
    else if (document.getElementById("chopper").style.display === "flex") {
        document.getElementById("chopper").style.display = "none";
        document.getElementById("robin").style.display = "flex";
        text2elem.innerHTML = "<h2>Robin</h2><h4>Archéologue de l'équipage</h4>"
    }
    else if (document.getElementById("robin").style.display === "flex") {
        document.getElementById("robin").style.display = "none";
        document.getElementById("franky").style.display = "flex";
        text2elem.innerHTML = "<h2>Franky</h2><h4>Charpentier de L'équipage</h4>"
    }
    else if (document.getElementById("franky").style.display === "flex") {
        document.getElementById("franky").style.display = "none";
        document.getElementById("brook").style.display = "flex";
        text2elem.innerHTML = "<h2>Brook</h2><h4>Musicien de l'équipage</h4>"
    }
    else if (document.getElementById("brook").style.display === "flex") {
        document.getElementById("brook").style.display = "none";
        document.getElementById("jinbe").style.display = "flex";
        text2elem.innerHTML = "<h2>Jinbe</h2><h4>Timonier de l'équipage</h4>"
    }
    else if (document.getElementById("jinbe").style.display === "flex") {
        document.getElementById("jinbe").style.display = "none";
        document.getElementById("luffy").style.display = "flex";
        text2elem.innerHTML = "<h2>Monkey.D.Luffy</h2><h4>Capitaine de l'équipage</h4>"

    }

}





function no(event) {

    if (document.getElementById("luffy").style.display === "flex") {
        document.getElementById("luffy").style.display = "none";
        document.getElementById("jinbe").style.display = "flex";
        text2elem.innerHTML = "<h2>Jinbe</h2><h4>Timonier de l'équipage</h4>"
    }
    else if (document.getElementById("jinbe").style.display === "flex") {
        document.getElementById("jinbe").style.display = "none";
        document.getElementById("brook").style.display = "flex";
        text2elem.innerHTML = "<h2>Brook</h2><h4>Musicien de l'équipage</h4>"
    }
    else if (document.getElementById("brook").style.display === "flex") {
        document.getElementById("brook").style.display = "none";
        document.getElementById("franky").style.display = "flex";
        text2elem.innerHTML = "<h2>Franky</h2><h4>Charpentier de L'équipage</h4>"
    }
    else if (document.getElementById("franky").style.display === "flex") {
        document.getElementById("franky").style.display = "none";
        document.getElementById("robin").style.display = "flex";
        text2elem.innerHTML = "<h2>Robin</h2><h4>Archéologue de l'équipage</h4>"
    }
    else if (document.getElementById("robin").style.display === "flex") {
        document.getElementById("robin").style.display = "none";
        document.getElementById("chopper").style.display = "flex";
        text2elem.innerHTML = "<h2>Chopper</h2><h4>Médecin de L'équipage</h4>"
    }
    else if (document.getElementById("chopper").style.display === "flex") {
        document.getElementById("chopper").style.display = "none";
        document.getElementById("sanji").style.display = "flex";
        text2elem.innerHTML = "<h2>Sanji</h2><h4>Cuisinier de L'équipage</h4>"
    }
    else if (document.getElementById("sanji").style.display === "flex") {
        document.getElementById("sanji").style.display = "none";
        document.getElementById("nami").style.display = "flex";
        text2elem.innerHTML = "<h2>Nami</h2><h4>Navigatrice de L'équipage</h4>"
    }
    else if (document.getElementById("nami").style.display === "flex") {
        document.getElementById("nami").style.display = "none";
        document.getElementById("usopp").style.display = "flex";
        text2elem.innerHTML = "<h2>Usopp</h2><h4>Canonnier de L'équipage</h4>"

    }
    else if (document.getElementById("usopp").style.display === "flex") {
        document.getElementById("usopp").style.display = "none";
        document.getElementById("zoro").style.display = "flex";
        text2elem.innerHTML = "<h2>Zoro</h2><h4>Second de L'équipage</h4>"
    }
    else if (document.getElementById("zoro").style.display === "flex") {
        document.getElementById("zoro").style.display = "none";
        document.getElementById("luffy").style.display = "flex";
        text2elem.innerHTML = "<h2>Monkey.D.Luffy</h2><h4>Capitaine de l'équipage</h4>"
    }


}






function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0) {
        numero = slide.length - 1;
    }
    if (numero > slide.length - 1) {
        numero = 0;
    }
    if (numero === 0) {
        text3elem.innerHTML = "<a href='https://animedigitalnetwork.fr/video/one-piece-arc1-east-blue'><h1>Saga1</h1></a>"
    }
    else if (numero === 1) {
        text3elem.innerHTML = "<a href='https://animedigitalnetwork.fr/video/one-piece-arc2-alabasta'><h1>Saga2</h1></a>"
    }
    else if (numero === 2) {
        text3elem.innerHTML = "<a href='https://animedigitalnetwork.fr/video/one-piece-arc3-skypiea'><h1>Saga3</h1></a>"
    }
    else if (numero === 3) {
        text3elem.innerHTML = "<a href='https://animedigitalnetwork.fr/video/one-piece-arc4-davy-back-fight'><h1>Saga4</h1></a>"
    }
    else if (numero === 4) {
        text3elem.innerHTML = "<a href='https://animedigitalnetwork.fr/video/one-piece-arc5-water-seven'><h1>Saga5</h1></a>"
    }
    else if (numero === 5) {
        text3elem.innerHTML = "<a href='https://animedigitalnetwork.fr/video/one-piece-arc6-thriller-bark'><h1>Saga6</h1></a>"
    }
    else if (numero === 6) {
        text3elem.innerHTML = "<a href='https://animedigitalnetwork.fr/video/one-piece-guerre-sommet-summit-war'><h1>Saga7</h1></a>"
    }
    else if (numero === 7) {
        text3elem.innerHTML = "<a href='https://animedigitalnetwork.fr/video/one-piece-ile-des-hommes-poissons-saga-8-arc'><h1>Saga8</h1></a>"
    }
    else if (numero === 8) {
        text3elem.innerHTML = "<a href='https://animedigitalnetwork.fr/video/one-piece-arc-whole-cake-island'><h1>Saga14</h1></a>"
    }
    else if (numero === 9) {
        text3elem.innerHTML = "<a href='https://animedigitalnetwork.fr/video/one-piece-arc-reverie'><h1>Saga15</h1></a>"
    }
    else if (numero === 10) {
        text3elem.innerHTML = "<a href='https://animedigitalnetwork.fr/video/one-piece'><h1>Saga16</h1></a>"
    }
    else if (numero === 11) {
        text3elem.innerHTML = "<a href='https://11anim.com/opp-anim'><h1>Autre épisode (site pas légale mais avec tous les épisode) </h1></a>"
    }
    document.getElementById("slide").src = slide[numero];
}
