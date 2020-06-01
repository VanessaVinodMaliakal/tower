class Block{

    constructor(x,y,width,height) {

        var options = {

            'restitution':0.8,
           'friction':1.0,
        'density':1.0

        }

        this.block = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
       
      
        World.add(world, this.block);

        }

        display(){
          
            rectMode(CENTER);
            rect( this.block.position.x,this.block.position.y,this.width,this.height);
            
        }

}