class Iron{
	constructor(x,y,w,h)
	{
	// assign options to the rubber ball
	 var options ={
		 density: 30,
		 restitution: 0.8,
		 friction:3
	 }
		this.x=x;
		this.y=y;
		this.w=w;
        this.h=h;
		this.body=Bodies.rectangle(this.x, this.y, this.w,this.h, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("gray");
			//draw the ellipse here to display the rubber ball
            rect(0,0,this.w,this.h);
			pop()
	}

}