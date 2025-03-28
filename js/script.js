function moveButton(){
    let button = document.getElementById("nao");
    let x = Math.random() * (window.innerWidth - button.clientWidth);
    let y = Math.random() * (window.innerHeight - button.clientHeight);

    button.style.left = x + "px";
    button.style.top = y  + "px";
}
