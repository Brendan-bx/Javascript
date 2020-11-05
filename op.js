document.getElementById("luffy").style.display = "none";
document.getElementById("zoro").style.display = "none";
document.getElementById("usopp").style.display = "none";
document.getElementById("nami").style.display = "none";
document.getElementById("sanji").style.display = "none";
document.getElementById("chopper").style.display = "none";
document.getElementById("robin").style.display = "none";
document.getElementById("franky").style.display = "none";
document.getElementById("brook").style.display = "none";
document.getElementById("jinbe").style.display = "none";


document.getElementById("flecheg").style.display = "none";
document.getElementById("fleched").style.display = "none";


let description = document.getElementById("description");
let synopsis = document.getElementById("synopsis");
let personnage = document.getElementById("personnage");
let episode = document.getElementById("episode");
let text1elem = document.getElementById("text1");
let text2elem = document.getElementById("text2");

description.addEventListener("click", truc)
synopsis.addEventListener("click", truc)
personnage.addEventListener("click", truc)
episode.addEventListener("click", truc)


flecheg.addEventListener("click", no)
fleched.addEventListener("click", yes)





function truc(event) {
    if (event.target.id === "description") {
        document.getElementById("luffy").style.display = "none";
        document.getElementById("zoro").style.display = "none";
        document.getElementById("usopp").style.display = "none";
        document.getElementById("nami").style.display = "none";
        document.getElementById("sanji").style.display = "none";
        document.getElementById("chopper").style.display = "none";
        document.getElementById("robin").style.display = "none";
        document.getElementById("franky").style.display = "none";
        document.getElementById("brook").style.display = "none";
        document.getElementById("jinbe").style.display = "none";
        document.getElementById("flecheg").style.display = "none";
        document.getElementById("fleched").style.display = "none";
        text2elem.innerHTML = ""
        text1elem.innerHTML = "<h2>One Piece</h2>  Type : Shonen <br> Genre : Aventure <br> Thèmes : Surnaturel  <h2>Manga</h2>  Auteur : Eiichirō Oda <br> Éditeur : (ja) Shūeisha (fr) Glénat <br> Prépublication : Weekly Shonen Jump <br> Sortie initiale : 22 juillet 1997 – en cours <br> Volume : 97 <h2>Anime</h2> Réalisateur : Tatsuya Nagamine (depuis 2019) <br> Studio d’animation : Toei Animation <br> 1re diffusion : 20 octobre 1999 – en cours <br> Épisodes : 948 <br><br><br>"
    }

    else if (event.target.id === "synopsis") {
        document.getElementById("luffy").style.display = "none";
        document.getElementById("zoro").style.display = "none";
        document.getElementById("usopp").style.display = "none";
        document.getElementById("nami").style.display = "none";
        document.getElementById("sanji").style.display = "none";
        document.getElementById("chopper").style.display = "none";
        document.getElementById("robin").style.display = "none";
        document.getElementById("franky").style.display = "none";
        document.getElementById("brook").style.display = "none";
        document.getElementById("jinbe").style.display = "none";
        document.getElementById("flecheg").style.display = "none";
        document.getElementById("fleched").style.display = "none";
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
        text2elem.innerHTML = "<h2>Monkey.D.Luffy</h2><h4>Capitaine de l'équipage</h4>"
    }

    else if (event.target.id === "episode") {
        text1elem.innerHTML = ""
        text2elem.innerHTML = ""
        document.getElementById("luffy").style.display = "none";
        document.getElementById("zoro").style.display = "none";
        document.getElementById("usopp").style.display = "none";
        document.getElementById("nami").style.display = "none";
        document.getElementById("sanji").style.display = "none";
        document.getElementById("chopper").style.display = "none";
        document.getElementById("robin").style.display = "none";
        document.getElementById("franky").style.display = "none";
        document.getElementById("brook").style.display = "none";
        document.getElementById("jinbe").style.display = "none";
        document.getElementById("flecheg").style.display = "none";
        document.getElementById("fleched").style.display = "none";

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
