const canvas = new fabric.Canvas("scene");

const resize = () => {
    canvas.setWidth(window.innerWidth);
    canvas.setHeight(window.innerHeight);
}

window.onresize = resize;
window.onload = resize;



// SvgJS ----------------------------------------------

/*
const svg = SVG().addTo('body').size(window.innerWidth, window.innerHeight);

window.onresize = () => {
    svg.size(window.innerWidth, window.innerHeight);
}

svg.image("src/sprites/Background.png");

svg.rect(100, 100).attr({ fill: "#ff0066"});*/
