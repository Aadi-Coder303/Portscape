class Box 
{
    constructor(x,y,w,h,)
    {
        var options = 
        {
            restitution : 0,
            friction : 10
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        this.w = w;
        this.h = h;
        this.image = loadImage('./assets/crate.png');
        World.add(world, this.body);
    }

    show()
    {
        var  pos = this.body.position ;
        imageMode(CENTER);
        push();
        translate(pos.x, pos.y);
        image(this.image, pos.x, pos.y,this.w,this.h );
        pop();
    }
}