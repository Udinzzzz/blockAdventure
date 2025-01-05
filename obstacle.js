class Obstacle{
    constructor(x,y,width,height,speed){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.speed = speed
    }


    update(width, pForward, pBackward, collided){

        if(this.x > width-this.width){
            this.speed = -this.speed
        }
        if(this.x < 0){
            this.speed = -this.speed
        }

        if(!collided){
            if(pForward){
                this.y += 3
                bgY += 0.5
            }if(pBackward){
                this.y -= 3
                bgY -= 0.5
            }
        }

        this.x += this.speed
    }

    draw(ctx){
        ctx.fillStyle = 'black'
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}