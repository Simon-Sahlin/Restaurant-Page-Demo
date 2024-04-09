import './style.css'
import homepage from "./homepage.js"


let tabHeaders = document.querySelectorAll("nav>button");
tabHeaders.forEach((btn, i) => {
    btn.addEventListener("click", ()=>changeTab(i));
});

let contentWrapper = document.querySelector("#content");
let pages = [
    homepage(),
    document.createElement("div"),
    document.createElement("div"),
];

function changeTab(index){
    tabHeaders.forEach(btn => {
        btn.classList.remove("selected");
    });
    tabHeaders[index].classList.add("selected");
    contentWrapper.innerHTML = "";
    contentWrapper.appendChild(pages[index]);
}

changeTab(0);