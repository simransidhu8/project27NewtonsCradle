class Bob {
  constructor(x, y, radius){
    var options = {
      isStatic: false,
      restitution:0.3,
      friction:1.0,
      density: 1.0
  }

  this.body = Bodies.circle(x, y, 30, 30, radius, options);
  this.radius = radius;

  World.add(world, this.body);
}
display(){
  
  var angle = this.body.angle;
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  fill("blue");
  ellipseMode(RADIUS);
  ellipse(0, 0, 30, 30, this.radius);
  pop();
}
}