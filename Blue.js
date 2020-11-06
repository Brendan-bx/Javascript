let slid = new Array("Blue_img/Rin.png", "Blue_img/Yukio.png", "Blue_img/Kuro.png","Blue_img/Fuji.png", "Blue_img/Mephisto.png", "Blue_img/Shura.png", "Blue_img/Shima.jpg",
"Blue_img/Shiemi.png","Blue_img/Ryuji.png","Blue_img/Izumo.png","Blue_img/Amaimon.png","Blue_img/Miwa.png");
let numero = 0;

let elemtext = document.getElementById("texte")

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0){
        numero = slid.length - 1;
    }
    if (numero > slid.length - 1){
        numero = 0;
    }
    document.getElementById("slide").src = slid[numero];
}





function localFilename(url)	
{
	let x = url.lastIndexOf("Blue_img/petitRinNormal.png/Blue_img/petitRin.png");
	url = url.slice(x + 1);
	return url;		
}

function changeImage(element)
{ 
	let icon = element.getAttribute("src");
	icon = localFilename(icon);   

	if(icon === "Blue_img/petitRinNormal.png")
		icon = "Blue_img/petitRin.png";
	else
		icon = "Blue_img/petitRinNormal.png";

	element.setAttribute("src", icon);	
    
}
















function changeFond(){
    
    console.log("ok")
  let fond = document.body.background;
    console.log(fond)
  if(fond === "Blue_img/rinfond.jpg"){
  fond = "Blue_img/Fond.jpg!d";

  }else{
    fond = "Blue_img/rinfond.jpg";
  }
  
  document.body.background = fond;  
  return fond;
}

function setImage()
{
	let z = new Image();
	z.fond = "Blue_img/Fond.jpg!d";
	document.body.background = z.fond;
}
window.onload=setImage;




