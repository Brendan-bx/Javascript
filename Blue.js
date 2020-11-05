let slide = new Array("Blue_img/Rin.png", "Blue_img/Yukio.png", "Blue_img/Kuro.png","Blue_img/Fuji.png", "Blue_img/Mephisto.png", "Blue_img/Shura.png");
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}