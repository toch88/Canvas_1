class Arrow extends PlotGenericItem{
  constructor(_vec,_position){
    super("Arrow", _position);
    this.vec=_vec
    this.Size=25;
  }

  get Size(){
    return this.size;
  }

  set Size(_size){
    this.size=_size;
    var normVec=Vector.CalculateNormalVec(this.vec);
    normVec.Mag=_size;
    this.body=new Line(Vector.Sub(this.vec,normVec), this.Position);
    this.arrowHead=new Triangle(
      _size,
      Vector.Add(this.body.End, normVec),
      90-this.vec.deg
    );
    this.Offset=this.offset;
  }

  set Offset(_value){
    this.offset=_value;
    this.body.offset=_value;
    this.arrowHead.offset=_value;
  }

  Rotate(_deg){
    this.body.Rotate(_deg);
    this.arrowHead.Rotate(-_deg);

    this.arrowHead.Translate(Vector.Add(this.body.points[1],  Vector.CreateVector(this.Size, _deg)));
  }

  Translate(_move){
    this.body.Translate(_move);
    this.arrowHead.Translate(_move);
   }

   RefTranslate(_move){
     this.body.RefTranslate(_move);
     this.arrowHead.RefTranslate(_move);
    }

  Draw(ctx){
    ctx.fillStyle="white";
    ctx.lineWidth=this.Size/5;
    this.body.Draw(ctx);
    this.arrowHead.Draw(ctx);
  }
}
