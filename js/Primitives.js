class Line extends PlotGenericItem{
  constructor(_size){
    super("Linia", new Vector(200,200));
    this.pointsOfItem=_size;

    this.points=[this.position, new Vector(this.position.Real+this.pointsOfItem.Real, this.position.Img+this.pointsOfItem.Img)];
    this.Begin=this.points[0];
    this.End=this.points[1];
  }

 Draw(ctx){
   super.Draw(ctx);
   ctx.stroke();
 }
}

class Triangle extends PlotGenericItem{
  constructor(_size, _position, _deg){ //h of traingle
    if(_position===undefined){
      super("Linia", new Vector(0,0));
    }
    else{
      super("Linia", _position);
    }
    if(_deg === undefined){
      this.deg = 0;
    }
    else{
      this.deg = _deg;
    }

    var h = _size;
    var b = h/(Math.cos(10*Math.PI/180));
    var c = b*Math.cos(80*Math.PI/180);

    this.pointsOfItem = [new Vector(0, 0),new Vector(-c,-h), new Vector(c,-h)];
    this.points = [new Vector(0,0),new Vector(0,0),new Vector(0,0)];
    this.Update();
  }

  Draw(ctx){
    super.Draw(ctx);
    ctx.fill();
  }
}
