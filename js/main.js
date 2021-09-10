const canvas = new fabric.Canvas("scene");

const imgPaths = {
    background: "src/sprites/png/Background.png",
};

const IMGPaths = {
    cowGrey: "src/sprites/png/CowGreyRight.png"
}

const objRes = {
    fieldWidth: canvas.width / 20,
    fieldHeight: canvas.height / 14
}

// On resize ---------------

const resize = () => {
    canvas.setWidth(window.innerWidth);
    canvas.setHeight(window.innerHeight);
    refreshObjRes();
    canvas.clear();
    setBackground(imgPaths.background);
}

function setBackground(imgPath = "") {
    canvas.setBackgroundColor("#006400");
    fabric.Image.fromURL(imgPath, (img) => {
        img.scaleToWidth(canvas.width);
        if (img.getScaledHeight() < canvas.height) {
            canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
        } else {
            img.scaleToHeight(canvas.height);
            canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
                left: (canvas.width - img.getScaledWidth()) / 2 // padding
            });
        }
    });
}

// обновление размеров поля
function refreshObjRes() {
    objRes.fieldWidth = canvas.width / 20;
    objRes.fieldHeight = canvas.height / 14;
}

function render() {
    for (let imgPath in imgPaths) {
        Object.values(IMGPaths).forEach((imgPath) => {
            fabric.Image.fromURL(imgPath, (img) => {
                img.scaleToWidth(100);
                canvas.add(img);
            });
        });
    }
}

window.onresize = resize;
window.onload = () => {
    resize();
    setBackground(imgPaths.background);
    render();
};