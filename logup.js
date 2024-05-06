// insert logup section content
let logupContent = `
<div class="log-up all-flex slide-imgs-active">
        <div class="cover"></div>
        <div class="log-forms all-flex">
            <div class="log-content">
                <div class="log-switch">
                    <div class="log log-switch-active">Login</div>
                    <div class="log">Signup</div>
                </div>
                <form class="log-form form">
                    <div class="text-box">
                        <i class="fa-solid fa-user"></i>
                        <input type="text" placeholder="Enter Your Email">
                    </div>
                    <div class="text-box">
                        <i class="fa-solid fa-lock"></i>
                        <input type="text" placeholder="Enter Your Email">
                    </div>
                    <div class="forget">
                        <div >
                            <input type="checkbox" checked id="rem" />
                            <label for="rem">Remember me</label>
                        </div>
                        <a href="#">Forget Password</a>
                    </div>
                    <a href="#" class="btn btn-1 log-btn">Login</a>
                    <span class="policy">By creating this account, you agree to our <a href="#">Privacy Policy</a> & <a href="#">Cookie Policy</a>.</span>
                </form>
                <form class="sign-form form">
                    <div class="text-box">
                        <i class="fa-solid fa-envelope"></i>
                        <input type="text" placeholder="Enter Your Email">
                    </div>
                    <div class="text-box">
                        <i class="fa-solid fa-lock"></i>
                        <input type="text" placeholder="Enter Your Email">
                    </div>
                    <div class="text-box">
                        <i class="fa-solid fa-building"></i>
                        <input type="text" placeholder="Enter Your Company">
                    </div>
                    <div class="forget">
                        <div >
                            <input type="checkbox" checked/>
                            <span class="policy">I accept <a href="#">Privacy Policy</a> & <a href="#">Cookie Policy</a>.</span>
                        </div>
                    </div>
                    <a href="#" class="btn btn-1 log-btn">Signup</a>
                </form>
            </div>
        </div>
    </div>
`;
let logup = document.createElement("div");
logup.innerHTML = logupContent;
document.body.append(logup);
//  logup forms swithcing sections
let log = document.querySelectorAll(".log");
let logForm = document.querySelector(".log-form");
let signForm = document.querySelector(".sign-form");
signForm.style.display = "none";
log[0].addEventListener("click", () => {
    log[0].classList.toggle("log-switch-active");
    log[1].classList.toggle("log-switch-active");
    signForm.style.display = "none";
    logForm.style.display = "block";
});
log[1].addEventListener("click", () => {
    log[0].classList.toggle("log-switch-active");
    log[1].classList.toggle("log-switch-active");
    logForm.style.display = "none";
    signForm.style.display = "block";
});
// show and hide logup section content
function logShowHide() {
    document.querySelector(".log-up").classList.toggle("slide-imgs-active");
}
let regBtns = document.querySelectorAll(".reg-btn");
for(let x = 0; x < regBtns.length; x++){
    regBtns[x].addEventListener("click", () => {
        logShowHide();
    });
}
document.querySelector(".cover").addEventListener("click", () => {
    logShowHide();
});
