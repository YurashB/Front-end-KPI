let elementById = document.getElementById("el-6"); // variant = 5 => 5 mod(10) + 1 = 6
let elementByQuerySelector = document.querySelector("#el-7");

let imgElement = document.querySelector('img');
let imgSrc = "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

let addPicElement = document.querySelector('#add-pic-btn');
let increasePicElement = document.querySelector('#increase-pic-btn');
let reducePicElement = document.querySelector('#reduce-pic-btn');
let removePicElement = document.querySelector('#remove-pic-btn');


elementById.addEventListener("click", () => changeBackgroundAndTextColor(elementById));
elementByQuerySelector.addEventListener("click", () => changeBackgroundAndTextColor(elementByQuerySelector));
increasePicElement.addEventListener('click', () => increasePicture(imgElement));
reducePicElement.addEventListener('click', () => reducePicture(imgElement));
addPicElement.addEventListener('click', () => addPicture(imgElement));
removePicElement.addEventListener('click', () => removePicture(imgElement));

function changeBackgroundAndTextColor(element) {
    element.style.backgroundColor = randomColor()
    element.style.color = randomColor()
}

function randomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);

    return bgColor;
}

function increasePicture(imgElement) {
    if (!imgElement.hasAttribute('src')) {
        alert("Src was deleted");
    } else {
        imgElement.height += 20;
        imgElement.width += 20;
    }
}

function reducePicture(imgElement) {
    if (!imgElement.hasAttribute('src')) {
        alert("Src was deleted");
    } else {
        imgElement.height -= 20;
        imgElement.width -= 20;
    }
}

function removePicture(imgElement) {
    imgElement.removeAttribute('src');
}

function addPicture(imgElement) {
    imgElement.src = imgSrc;
}