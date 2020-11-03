function toggleImage() {
    var img1 = "IMG/TOP1.png";
    var img2 = "IMG/oui.png";
    
    var imgElement = document.getElementById('toggleImage');
 
    imgElement.src = (imgElement.src === img1)? img2 : img1;

 }
