let slid = new Array("Blue_img/Rin.png", "Blue_img/Yukio.png", "Blue_img/Kuro.png", "Blue_img/Fuji.png", "Blue_img/Mephisto.png", "Blue_img/Shura.png", "Blue_img/Shima.jpg",
  "Blue_img/Shiemi.png", "Blue_img/Ryuji.png", "Blue_img/Izumo.png", "Blue_img/Amaimon.png", "Blue_img/Miwa.png");
let numero = 0;

let textelem = document.getElementById("texte");
textelem.innerHTML = "<h2>Rin Okumura</h2><p>Rin Okumura est le principal protagoniste de l'histoire. Lui et son jeune frère jumeau, Yukio, sont nés de Satan et de Yuri Egin. Il étudie à l'Académie de la Croix-Vraie pour devenir un exorciste. Rin souhaite devenir un Chevalier et vaincre son géniteur.</p>"

let myMusic= document.getElementById("music");



function ChangeSlide(sens) {

  console.log(numero)
  numero = numero + sens;
  if (numero < 0) {
    numero = slid.length - 1;
  }
  if (numero > slid.length - 1) {
    numero = 0;
  }
  if (numero === 0) {
    textelem.innerHTML = "<h2>Rin Okumura</h2><p>Rin Okumura est le principal protagoniste de l'histoire. Lui et son jeune frère jumeau, Yukio, sont nés de Satan et de Yuri Egin. Il étudie à l'Académie de la Croix-Vraie pour devenir un exorciste. Rin souhaite devenir un Chevalier et vaincre son géniteur.</p>"
  }
  else if (numero === 1) {
    textelem.innerHTML = "<h2>Yukio Okumura</h2><p>Yukio Okumura est le frère jumeau de Rin. Contrairement à son frère il n'a pas reçu les pouvoirs de son père Satan en raison de sa faible constitution à la naissance (même si dans la version anime du manga Yukio finit par avoir les mêmes pouvoirs que Rin qui se révèlent pleinement après la possession de son père Satan). En revanche, Yukio a la particularité de voir les démons depuis tout petit.</p>"
  }
  else if (numero === 2) {
    textelem.innerHTML = "<h2>Kuro</h2><p>Kuro est un Cait Sith, et son maître est Rin Okumura. Il était autrefois le familier de Shiro Fujimoto.</p>"
  }
  else if (numero === 3) {
    textelem.innerHTML = "<h2>Shiro Fujimoto</h2><p>Shiro Fujimoto était le tuteur de Rin et de Yukio, et il était considéré comme l’exorciste le plus puissant qui ait vécu. Il était le seul au monde en mesure de pouvoir résister à l'emprise de Satan lui-même, car ce dernier guettait en permanence le moment propice pour s'immiscer en Shiro. Cependant, après avoir reçu un choc mental par Rin en lui disant qu'il n’était pas son père, Satan a finalement pu prendre possession de son corps.</p>"
  }
  else if (numero === 4) {
    textelem.innerHTML = "<h2>Mephisto Pheles</h2><p>Mephisto Pheles est l'un des huit rois démon, il occupe le deuxième rang dans la hiérarchie de la Géhenne donc il est le second des huit rois démons et détient le titre du Roi de l'espace et du temps. Il utilise le nom Johann Faust V en public, et est le directeur de l'académie de la Croix-Vraie. Il est aussi un exorciste. Après que le prêtre Fujimoto soit mort, Mephisto avait pour ordre de tuer Rin. Il est l'un des fils de Satan.</p>"
  }
  else if (numero === 5) {
    textelem.innerHTML = "<h2>Shura Kirigakure</h2> <p>Shura Kirigakure est une exorciste supérieure de première classe et le mentor de Rin. Elle a été formée sous la direction de Shiro Fujimoto pour obtenir le titre de « Meister » Chevalier et peut tirer son épée démoniaque à partir d’un symbole au-dessus sa poitrine quand elle affirme « La Pourfendeuse du serpent à huit tête» Elle travaille officiellement à titre d'inspecteur pour le Vatican.</p>"
  }
  else if (numero === 6) {
    textelem.innerHTML = "<h2>Renzô Shima </h2><p>Renzô Shima est un esquire très insouciant et l'ami d'enfance de Ryûji et de Konekomaru. Il est très loyal envers eux et ils ont grandi à Kyoto, où le reste de sa famille réside. Il est le 5ème et dernier fils de sa famille.</p>"
  }
  else if (numero === 7) {
    textelem.innerHTML = "<h2>Shiemi Moriyama</h2><p>Shiemi Moriyama est une camarade de classe de Rin et également son amie. Avant, Shiemi entretenait le jardin de sa grand-mère tandis que sa mère tenait la boutique Futsumaya dans laquelle s'approvisionnent les exorcistes. Prise d'admiration pour Rin et Yukio, elle s'est inscrite à l'Académie, d'abord uniquement dans la filière Exorciste, puis rejoint au cours du manga la filière générale grâce aux cours particuliers de Yukio. </p>"
  }
  else if (numero === 8) {
    textelem.innerHTML = "<h2>Ryûji Suguro</h2><p>Ryûji Suguro est un esquire à l'académie de la Croix-Vraie, où il est le rival de Rin et le prodige de la classe.  Il était l’enfant du Temple Maudit qui a été détruit par Satan, le jour de la Nuit Bleue, il y a 16 ans.</p>"
  }
  else if (numero === 9) {
    textelem.innerHTML = "<h2>Izumo Kamiki</h2><p>Izumo Kamiki est une étudiante à l'académie de la Croix-Vraie. Elle se révèle être une dompteuse capable d'invoquer deux Byakko (esprits renards).</p>"
  }
  else if (numero === 10) {
    textelem.innerHTML = "<h2>Amaimon</h2><p>Amaimon, aussi connu sous le nom de « Roi de la Terre » (地の王, Chi no Ô)[1] est le septième plus fort des huit Baal de la Géhenne.</p>"
  }
  else if (numero === 11) {
    textelem.innerHTML = "<h2>Konekomaru Miwa </h2><p>Konekomaru Miwa est l'un des personnages principaux de la série Blue Exorcist. Originaire de Kyoto avec Ryûji et Renzô, il est un esquire de l'Académie de la Croix-Vraie en tant qu'étudiant, et le chef survivant de la famille Miwa.</p>"
  }
  document.getElementById("slide").src = slid[numero];
}






function localFilename(url) {
  let x = url.lastIndexOf("Blue_img/petitRinNormal.png/Blue_img/petitRin.png");
  url = url.slice(x + 1);
  return url;
}

function changeImage(element) {
  let icon = element.getAttribute("src");
  icon = localFilename(icon);

  if (icon === "Blue_img/petitRinNormal.png")
    icon = "Blue_img/petitRin.png";
  else
    icon = "Blue_img/petitRinNormal.png";

  element.setAttribute("src", icon);

}
















function changeFond() {

  console.log("ok")
  let fond = document.body.background;
  console.log(fond)
  if (fond === "Blue_img/rinfond.jpg") {
    fond = "Blue_img/Fond.jpg!d";

  } else {
    fond = "Blue_img/rinfond.jpg";
  }

  document.body.background = fond;
  return fond;
}

function setImage() {
  let z = new Image();
  z.fond = "Blue_img/Fond.jpg!d";
  document.body.background = z.fond;
}
window.onload = setImage;





function play() {
myMusic.play();
}
