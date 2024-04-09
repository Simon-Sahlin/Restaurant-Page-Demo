export default function component(){
    let element = document.createElement("div");
    element.id = "contentWrapper";

    let h1 = document.createElement("h1");
    h1.innerHTML = "Contact";
    element.appendChild(h1);

    let div = document.createElement("div");
    div.id = "contactWrapper"

        let p1 = document.createElement("p");
        p1.innerHTML = "example@email.com";
        div.appendChild(p1);
        
        let p2 = document.createElement("p");
        p2.innerHTML = "123 Main Street, Anytown, USA 12345";
        div.appendChild(p2);

        let p3 = document.createElement("p");
        p3.innerHTML = "(123) 456-7890";
        div.appendChild(p3);


    element.appendChild(div);
    
    return element;
}