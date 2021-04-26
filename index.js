
document.addEventListener("DOMContentLoaded", function start () {
    
    const gameCanvas = document.getElementById("canvas")
    const ctx = gameCanvas.getContext("2d")

    gameCanvas.width  =  0.9 *window.innerWidth
    gameCanvas.height =  0.9 * window.innerHeight
    
var down
var up
var left
var right

    class Player 
    {
        
         constructor()
         {
             this.x = gameCanvas.width/2
             this.y = gameCanvas.height/2
             this.size = 100
             this.color = "blue"
             this.speed = 20

         }

         update()
         {
            if(up)
            {
               this.y = this.y - this.speed
            }
            if(down)
            {
               this.y = this.y  + this.speed
            }
            if(left)
            {
                this.x = this.x - this.speed
            }
            if(right)
            {
                this.x = this.x + this.speed
            }
         }

         draw()
         {
             ctx.fillStyle = this.color
             ctx.fillRect(this.x, this.y, this.size, this.size * 1.75)
         }
    }
    



    window.addEventListener("keydown", (event) =>{
        if(event.key == "ArrowDown")
        {
            down = true
        }
        
        if(event.key == "ArrowUp")
        {
            up = true
        }

        if(event.key == "ArrowRight")
        {
            right = true
        }

        if(event.key == "ArrowLeft")
        {
            left = true
        }

    })


    window.addEventListener("keyup", (event) =>{
        if(event.key == "ArrowDown")
        {
            down = false
        }
        
        if(event.key == "ArrowUp")
        {
            up = false
        }

        if(event.key == "ArrowRight")
        {
            right = false
        }

        if(event.key == "ArrowLeft")
        {
            left = false
        }
    })


    function loop ()
    {
        ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height)
        player.update()
        player.draw()
        requestAnimationFrame(loop)

    }
    let player = new Player()
    loop()
})