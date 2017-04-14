class Line extends PlotGenericItem{
  constructor(_size){
    super("Linia", new Vector(100,100));
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

    this.pointsOfTriangle = [new Vector(0, 0),new Vector(-c,-h), new Vector(c,-h)];
    this.points = [new Vector(0,0),new Vector(0,0),new Vector(0,0)];
    this.Update();
  }

  Update(){
    this.Rotate(this.deg);
    this.Translate(this.position);
  }

  Translate(_move){
    for (var i = 0; i < this.pointsOfTriangle.length; i++) {
      this.points[i]=Vector.Add(_move, this.pointsOfTriangle[i]);
    }
  }

  Rotate(deg){
    for (var i = 0; i < this.pointsOfTriangle.length; i++) {
        this.pointsOfTriangle[i].Rotate(deg);
    }

  }

  Draw(ctx){
    ctx.beginPath();
    ctx.moveTo(this.points[0].real,this.points[0].img);
    ctx.lineTo(this.points[1].real, this.points[1].img);
    ctx.lineTo(this.points[2].real, this.points[2].img);
    ctx.fill();
  }
}
