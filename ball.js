class Ball{
    constructor(x,y,w,h){
        var ball_ops={
            isStatic:false,
            restitution:1.0,
            friction:1,
            density:1
        
          }
 this.body=Bodies.rectangle(x,y,w,h,ball_ops)
 this.w=w
 this.h=h
  World.add(world,this.body)
  
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        fill("red")
      //  rectMode(CENTER)
        rect(0,0,this.w,this.h)
        pop()
    }
}