const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const cWidth = canvas.offsetWidth
const cHeight = window.innerHeight
let score = 0

const obstacle = [
    new Obstacle(40, 300, 50, 10, 4), // x,y,width,height,speed
    new Obstacle(40, 200, 50, 10, 6), 
    new Obstacle(40, 100, 50, 10, 5), 
    new Obstacle(40, 0, 50, 10, 3),
    new Obstacle(40, -100, 50, 10, 7),
    new Obstacle(40, -200, 50, 10, 5),
    new Obstacle(40, -300, 50, 10, 6),
    new Obstacle(40, -400, 50, 10, 4),
    new Obstacle(40, -500, 50, 10, 2),
]
const player = new Player(cWidth/2,cHeight/2,15,15)
canvas.width = cWidth
canvas.height = cHeight

function draw() {
    ctx.clearRect(0, 0, cWidth, cHeight)
    drawBackground()

    for (i = 0; i < obstacle.length; i++) {
        obstacle[i].draw(ctx)
    }
    for (i = 0; i < obstacle.length; i++) {
        obstacle[i].update(cWidth, player.forward, player.backward, player.collided)
        player.checkCollision(obstacle[i]);
    }
    const playerControl = new PlayerControl(player);
    player.draw(ctx)
    if(obstacle[0].y > player.y+(cHeight/2)){
        addObstacle()
        removeObstacle()
        score++
    }

    ctx.fillStyle = 'white'
    ctx.font = '30px Arial'
    ctx.fillText(score, 20, 50)


    requestAnimationFrame(draw)
}

draw()

