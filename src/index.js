import './style.css'
import homepage from "./homepage.js"
import menu from "./menu.js"
import contact from "./contact.js"


let tabHeaders = document.querySelectorAll("nav>button");
tabHeaders.forEach((btn, i) => {
    btn.addEventListener("click", ()=>changeTab(i));
});

let contentWrapper = document.querySelector("#content");
let pages = [
    homepage(),
    menu(),
    contact(),
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