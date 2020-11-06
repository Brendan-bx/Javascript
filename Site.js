const imageElem1 = document.getElementById('toggleImagetop1');
const imageElem2 = document.getElementById('toggleImagetop2');
const imageElem3 = document.getElementById('toggleImagetop3');


imageElem1.addEventListener('click', toggleImagetop1)
imageElem2.addEventListener('click', toggleImagetop2)
imageElem3.addEventListener('click', toggleImagetop3)


let med1 = "IMG/medal1.png";
let med2 = "IMG/medal2.png";
let med3 = "IMG/medal3.png";
let img2 = "IMG/oui.png";


function toggleImagetop1(event) {
   console.log(event.target.src.includes("oui"));
   if (event.target.src.includes("oui") === true) {
      imageElem1.src = med1

   } else {
      //imageElem1.src= img2
   }

}


function toggleImagetop2(event) {
   console.log(event.target.src.includes("oui"));
   if (event.target.src.includes("oui") === true) {

      imageElem2.src = med2

   } else {
      //imageElem2.src= img2
   }

}

function toggleImagetop3(event) {
   console.log(event.target.src.includes("oui"));
   if (event.target.src.includes("oui") === true) {

      imageElem3.src = med3

   } else {
      //imageElem3.src= img2
   }

}
