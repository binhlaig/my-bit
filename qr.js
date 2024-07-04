var container = document.querySelector(".container");
var qrbtn = document.querySelector(".qr_btn");
var qrInput = document.querySelector(".qr_input");
var qrImg = document.querySelector(".qr_image");

    qrbtn.onclick = function(){
        
            container.classList.add("active");
            qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
            + qrInput.value;

    } 