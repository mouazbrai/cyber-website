
/**Main Effect Script */
let obj = fetch('data.json');
let allComands = [];
obj.then(async (result)=> {
    let myData = await result.json();
    for (let key in myData) {
       allComands.push( myData[key]);
    }
    return allComands;
});
let skillsTitle = document.querySelector(".skills-title");
let mainCommands = document.querySelector(".commands");
let skills = ["Linux ","Python ","React "]
let mainIndex = 0;
let aarayIndex = 0;
let arrayStt = 0;
setInterval(()=>{
    mainCommands.innerHTML += allComands[aarayIndex][arrayStt][mainIndex];
    mainIndex += 1;
    if(mainIndex > allComands[aarayIndex][arrayStt].length){
        mainIndex = 0;
        arrayStt += 1;
        mainCommands.innerHTML = "";
    }
    if(arrayStt >= allComands[aarayIndex].length){
        mainIndex = 0;
        aarayIndex += 1; 
        arrayStt = 0;
        mainCommands.innerHTML = "";
    }
    
    if(aarayIndex  >= allComands.length){
        mainIndex = 0;
        aarayIndex = 0;
        arrayStt = 0;
        mainCommands.innerHTML = "";
    }
    skillsTitle.innerHTML = skills[aarayIndex];
},500);
/***Slide Show Script */
let books = document.querySelector(".books");
let imgsBox = document.querySelector(".imgs");
let imgs = document.querySelectorAll(".imgs img");
let eventCase = false;
function boxDrag(e){
	var rect = books.getBoundingClientRect();
	let rot = 0;
	let elRect = e.clientX - rect.left;
	imgsBox.style.transform = `translateX(${-(elRect)}px)`;
}
books.addEventListener("mousedown", () => {
	eventCase = true;
	if (eventCase) {
		books.addEventListener("mousemove", boxDrag);
	}
});
document.addEventListener("mouseup", () => {
	eventCase = false;
	if (eventCase == false) {
		books.removeEventListener("mousemove",boxDrag);
	}
	console.log(eventCase);
});
