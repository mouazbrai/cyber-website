let searchIcon = document.querySelector(".search-icon");
let searchBox = document.querySelector(".search-box");
/**Search Box Show Hide */
searchIcon.addEventListener("click",()=>{
    searchBox.classList.toggle("search-box-active");
});
/*Search Box Script */
let search = document.getElementById("search");
let learnText = document.querySelectorAll(".learn-text h3");
search.addEventListener("keyup",()=>{
    for(let x = 0; x < learnText.length; x++){
        learnText[x].parentElement.parentElement.style.display = "none";
        if(search.value.toLowerCase() == learnText[x].textContent.toLowerCase().match(search.value.toLowerCase())){
            learnText[x].parentElement.parentElement.style.display = "block";
        }
    }
});