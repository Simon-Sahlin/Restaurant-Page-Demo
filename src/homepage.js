export default function component(){
    let element = document.createElement("div");
    element.id = "contentWrapper";

    let h1 = document.createElement("h1");
    h1.innerHTML = "Welcome To Poggers Pizzeria!";
    element.appendChild(h1);

    let p1 = document.createElement("p");
    p1.innerHTML = "This restaurant page is made as an exercise to practice rendering an entire website using javascript. It's also an opportunity to practice using a bundler, in this case webpack. For more information visit the <a target='_blank' href='https://github.com/Simon-Sahlin/Restaurant-Page-Demo'>github page</a>.";
    element.appendChild(p1);

    let p2 = document.createElement("p");
    p2.innerHTML = "Hope you enjoy your visit!";
    element.appendChild(p2);


    return element;
}