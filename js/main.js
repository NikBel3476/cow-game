const canvas = new fabric.Canvas("scene");

const resize = () => {
    canvas.setWidth(window.innerWidth);
    canvas.setHeight(window.innerHeight);
}

window.onresize = resize;
window.onload = resize;

const cow = new Cow({x: 0, y: 0}, "right");
console.log(cow);