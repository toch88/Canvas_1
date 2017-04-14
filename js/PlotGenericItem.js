class PlotGenericItem {
  constructor(_name, _position){
    this.position=_position;
    this.points=[];
    this.name=_name;
    this.pointsOfItem=[];
  }

  Update(){
    this.Rotate(this.deg);
    this.Translate(this.position);
  }

  Translate(_move){
    for (var i = 0; i < this.pointsOfItem.length; i++) {
      this.points[i]=Vector.Add(_move,this.pointsOfItem[i]);
    }
  }

  Rotate(deg){
    for (var i = 0; i < this.pointsOfItem.length; i++) {
        this.pointsOfItem[i].Rotate(deg);
    }
  }

  Draw(ctx){
    ctx.beginPath();
    ctx.moveTo(this.points[0].real, this.points[0].img);
    for (var i = 1; i < this.points.length; i++) {
        ctx.lineTo(this.points[i].real, this.points[i].img);
    }
  }
}
