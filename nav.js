
let navContent = `
<a href="#" class="logo">Cyber</a>
<ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="learn.html">Learn</a></li>
    <li><a href="services.html">Services</a></li>
    <li><a href="buy.html">Buy</a></li>
    <li><a href="#" class="btn btn-1 reg-btn btn-cus">Signup</a></li>
</ul>
<div class="list-btn">
    <span class="btn-col"></span>
    <span class="btn-col"></span>
    <span class="btn-col"></span>
</div>
`;
let nav = document.createElement("nav");
nav.innerHTML = navContent;
document.body.prepend(nav);
/**Nav Links Responsive  */
let listBtn = document.querySelector(".list-btn");
let navLinks = document.querySelector(".nav-links");
listBtn.addEventListener("click",()=>{
    navLinks.classList.toggle("nav-links-active");
});