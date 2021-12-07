class Lock
{
    constructor(x,y,w,h)
    {
        var options = 
        {
            isStatic : true,
            restitution:-10
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.image = loadImage('./assets/lock.png');
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }

    open()
    {
        World.remove(world,this.body);
        this.body = null;
    }

    show()
    {
        var pos = this.body.position
        push();
        //translate(pos.x,pos.y);
        image(this.image,pos.x,pos.y,this.w,this.h);
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
}