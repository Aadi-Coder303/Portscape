class Key
{
    constructor(x,y,w,h)
    {
        var options = 
        {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.image = loadImage('./assets/key.png');
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }

    got()
    {
        World.remove(world,this.body);
        this.body = null;
    }

    show()
    {
        var pos = this.body.position
        push();
        imageMode(CENTER);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
        image(this.image,pos.x + 20,pos.y + 10,this.w + 280,this.h + 60);
        pop();
    }
}