import pepperoni from './img/pepperoni.jpg';
import tomato from './img/tomato.jpg';
import olive from './img/olive.jpg';
import calzone from './img/calzone.jpg';
import burger from './img/burger.jpg';

function menuItem(name, img, desc, price){
    this.name = name;
    this.img = img;
    this.desc = desc;
    this.price = price;
}

let menuItems = [
    new menuItem("Pepperoni", pepperoni, "Very tasty mmmmm yummy mmmmmmmm da big sausage", "$$"),
    new menuItem("Tomato", tomato, "Tomato?? Say whaaat??? Provident similique accusantium nemo autem.", "$"),
    new menuItem("Olive", olive, "Is olive really a pizza flavour? Quo neque error repudiandae fuga?", "$$$"),
    new menuItem("Calzone", calzone, "For all them hippies. Recusandae alias error harum maxime adipisci amet laborum.", "$$"),
    new menuItem("Burger", burger, "If you for some reason decided to go to a pizzeria, but still want a burger", "$$$$"),
]; 

export default function component(){
    let element = document.createElement("div");
    element.id = "contentWrapper";
    element.classList.add("menuWrapper");

    let h1 = document.createElement("h1");
    h1.innerHTML = "Menu";
    element.appendChild(h1);

    menuItems.forEach(item => {
        let div = document.createElement("div");
        div.classList.add("menuItem");

        let h2 = document.createElement("h2");
        h2.innerHTML = item.name;
        div.appendChild(h2);

        let img = new Image();
        img.src = item.img;
        div.appendChild(img);

        let p1 = document.createElement("p");
        p1.innerHTML = item.desc;
        div.appendChild(p1);

        let p2 = document.createElement("p");
        p2.innerHTML = "Price: "+item.price;
        div.appendChild(p2);

        element.appendChild(div);
    });

    return element;
}