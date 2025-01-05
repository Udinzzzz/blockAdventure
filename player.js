class Player {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 3;
        this.color = 'red';
        this.collided = false;
        this.finished = false;

        this.forward = false;
        this.backward = false;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y-this.width/2, this.width, this.height);

        if(this.collided){
            ctx.font = 'bold 50px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = 'white'
            ctx.strokeText("GAME OVER!",cWidth/2,cHeight/4);
            ctx.font = "20px Arial";
            ctx.fillText("reload page to play again",cWidth/2,cHeight/4+60);
            ctx.strokeStyle = 'white'
        }
    }

    checkCollision(obstacle) {
        if (this.x < obstacle.x + obstacle.width &&
            this.x + this.width > obstacle.x &&
            this.y < obstacle.y + obstacle.height &&
            this.y + this.height > obstacle.y) {
            this.color = 'white';
            this.collided = true;
        }
    }
}
