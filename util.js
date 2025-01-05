function addObstacle() {
    const newObstacle = new Obstacle(Math.random() * cWidth, obstacle[obstacle.length - 1].y - 100, 50, 10, getRandomInt(3, 10));
    obstacle.push(newObstacle);
}

function removeObstacle() {
    obstacle.shift(); 
}

const bgImage = new Image();
bgImage.src = './asset/backround.jpg';
let bgY = 0;
function drawBackground() {
    ctx.drawImage(bgImage, 0, bgY, canvas.width, canvas.height);
    ctx.drawImage(bgImage, 0, bgY - canvas.height, canvas.width, canvas.height);

    if (bgY >= cHeight) bgY = 0
    if (bgY <= -cHeight) bgY = 0
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
