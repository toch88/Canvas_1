class Line extends PlotGenericItem{
  constructor(_size){
    super("Linia", new Vector(0,0));
    this.size=_size;
    this.points=[this.position, new Vector(this.position.real+this.size.real, this.position.img+this.size.img)];
    this.Begin=this.points[0];
    this.End=this.points[1];
  }

  Draw(ctx){
    ctx.beginPath();
    ctx.moveTo(this.points[0].real, this.points[0].img);
    ctx.lineTo(this.points[1].real, this.points[1].img);
    ctx.stroke();
  }
}

class Triangle extends PlotGenericItem{
  constructor(_size, _position){ //h of traingle
    if(_position===undefined){
      super("Linia", new Vector(0,0));
    }
    else{
      super("Linia", _position);
    }
    //  var b=h/(Math.cos(30*Math.PI/180));
    //  var c=b*Math.sin(60*Math.PI/180);

      this.points=[new Vector(-a/2,0), new Vector(a,0), new Vector(a/2, h)];
  }

  Draw(ctx){
    ctx.beginPath();
    ctx.moveTo(this.points[0].real,this.points[0].img);
    ctx.lineTo(this.points[1].real, this.points[1].img);
    ctx.lineTo(this.points[2].real, this.points[2].img);
    ctx.fill();
  }
}
