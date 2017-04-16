class PlotGenericItem {
  constructor(_name, _position){
    this.Position=_position;
    this.points=[];
    this.pointsOfItem=[];
    this.name=_name;
    this.offset=new Vector(0,0);
  }

  set Position(_value){
    this.position=_value;
  }

  set Offset(_value){
    this.offset=_value;
  }

  get Position(){
    return this.position;
  }

  Update(){
    this.Rotate(this.deg);
    this.Translate(this.Position);
  }

  Translate(_move){
    for (var i = 0; i < this.pointsOfItem.length; i++) {
      this.points[i]=Vector.Add(_move,this.pointsOfItem[i]);
    }
  }

  RefTranslate(_move){
    for (var i = 0; i < this.points.length; i++) {
      this.points[i]=Vector.Add(_move,this.points[i]);
    }
  }

  Rotate(deg){
    for (var i = 0; i < this.pointsOfItem.length; i++) {
        this.pointsOfItem[i].Rotate(deg);
        this.points[i]=Vector.Add(this.Position,this.pointsOfItem[i]);
    }
  }

  Draw(ctx){
    ctx.beginPath();

    ctx.moveTo(
      this.points[0].Real+this.offset.Real,
      -this.points[0].Img+this.offset.Img
    );

    for (var i = 1; i < this.points.length; i++) {
        ctx.lineTo(
          this.points[i].Real+this.offset.Real,
          -this.points[i].Img+this.offset.Img
        );
    }
  }
}
