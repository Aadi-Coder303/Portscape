class Block
{
    //constructor with 4 perameter
    constructor(x,y,w,h)
    {
        //making every object of the class still (static)
        let options = {
            isStatic:true,
            restitution : -1000
          };
          
          this.body = Bodies.rectangle(x, y, w, h, options);
          this.w = w;
          this.h = h; 
          World.add(world, this.body);
          
    }


    //function to show the object
    show() 
    {
        
        var pos = this.body.position;
        push();
        
        //translate(pos.x,pos.y)
        stroke("white");
        strokeWeight(4);
        fill('black');
        rectMode(CENTER);
        rect(pos.x, pos.y, this.w, this.h);
        pop();
    }

    remove()
    {
        World.remove(world,this.body);
    }
}