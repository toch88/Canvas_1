class Line extends PlotGenericItem{
  constructor(_vector,_position){
    if(_position===undefined){
      super("Linia", new Vector(0,0));
    }
    else{
      super("Linia", _position);
    }
    this.pointsOfItem=[new Vector(0,0), _vector];
    this.points=[this.Position, Vector.Add(this.Position,_vector)];
    this.Begin=this.points[0];
    this.End=this.points[1];
  }

  Rotate(_deg){
    super.Rotate(_deg);
  }

  Translate(_move){
    super.Translate(_move);
  }

  RefTranslate(_move){
    super.RefTranslate(_move);
  }

 Draw(ctx){
   super.Draw(ctx);
   ctx.stroke();
 }
}

class Triangle extends PlotGenericItem{
  constructor(_size, _position, _deg){ //h of traingle
    if(_position===undefined){
      super("Traingle", new Vector(0,0));
    }
    else{
      super("Traingle", _position);
    }
    if(_deg === undefined){
      this.deg = 0;
    }
    else{
      this.deg = _deg;
    }
    this.size=_size;
    this.CalculatePoints(_size);
    this.Update();
  }

  CalculatePoints(_size){
    var h = _size;
    var b = h/(Math.cos(10*Math.PI/180));
    var c = b*Math.cos(80*Math.PI/180);
    this.pointsOfItem = [new Vector(0, 0),new Vector(-c,-h), new Vector(c,-h)];
    this.Translate(this.Position);
  }

  set Size(_value){
    this.size=_value;
    this.CalculatePoints(_value);
  }

  get Size(){
    return this.size;
  }

  Translate(_move){
    super.Translate(_move);
  }

  Rotate(_deg){
    super.Rotate(-_deg);
  }

  RefTranslate(_move){
    super.RefTranslate(_move);
  }

  Update(){
    super.Update();
  }

  Draw(ctx){
    super.Draw(ctx);
    ctx.fill();
  }
}
