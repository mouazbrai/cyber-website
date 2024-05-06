let slideBtns = document.querySelectorAll(".slide-btns i");
let images = document.querySelectorAll(".ser-slide img");
let paragraphs = document.querySelectorAll(".cust-info");
let sercicesPostArt = document.querySelector(".sercices-post p");
let index = 0;
let url = window.location.pathname;
let filename = url.substring(url.lastIndexOf('/') + 1);
function imgsHide() {
    for (let x = 0; x < images.length; x++) {
        images[x].classList.add("slide-imgs-active");
        paragraphs[x].style.display = "none";
    }
    paragraphs[index].style.display = "block";
    images[index].classList.remove("slide-imgs-active");
   
    if (filename == "services.html") {
        sercicesPostArt.innerHTML = paragraphs[index].textContent;
    }

}
imgsHide();
function rightSlide() {
    index += 1;
    if (index >= images.length) {
        index = 0;
    }
    imgsHide();
}
slideBtns[1].addEventListener("click", () => {
    rightSlide();
});
function leftSlide() {
    index -= 1;
    if (index <= -1) {
        index = images.length - 1;
    }
    imgsHide();
}
slideBtns[0].addEventListener("click", () => {
    leftSlide();
});