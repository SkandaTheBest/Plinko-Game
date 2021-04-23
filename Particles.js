class Particles {
    constructor(x, y) {
        var options = {
            restitution: 0.04,
            friction: 0,
           // isStatic:true
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
       if(frameCount%60===0){
           particles.push(new Particles(random(width/2-10,width/2+10),10,10));
       }
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();

    }

};