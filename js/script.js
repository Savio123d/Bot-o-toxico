let canMove = false;

function activateMovement() {
    canMove = true;
    let buttonNo = document.getElementById('no');
    buttonNo.textContent = "Agora tenta me pegar!";
    buttonNo.onmouseover = moveButton;
}

function moveButton() {
    let button = document.getElementById('no');
    let x = Math.random() * (window.innerWidth - button.clientWidth);
    let y = Math.random() * (window.innerHeight - button.clientHeight);
    button.style.left =  x + "px";
    button.style.top = y + "px";
}
