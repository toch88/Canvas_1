class Arrow{
  constructor(_size){
    this.body=new Line(_size);
    this.arrowHead=new Triangle(25, Vector.Add(this.body.End, new Vector(1, 1)), _size.deg);
  }

  Draw(ctx){
    ctx.fillStyle="white";
    this.body.Draw(ctx);
    this.arrowHead.Draw(ctx);
  }
}
