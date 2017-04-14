class Vector{
  constructor(_real,_img){
    this.real=_real;
    this.img=_img;

    this.CalculateMag();
    this.CalculateRadAndDeg();
  }

  Deg2Rad(_deg){
    return _deg*Math.PI/180;
  }

  Rad2Deg(_rad){
    return _rad*180/Math.PI;
  }

  CalculateMag(){
    this.mag=Math.sqrt(this.real*this.real+this.img*this.img);
  }
  CalculateRadAndDeg(){
    this.rad=Math.atan2(this.img,this.real);
    this.deg=this.Rad2Deg(this.rad);
  }


  set Mag(_value){
    this.real=_value*Math.cos(this.rad);
    this.img=value*Math.sin(this.rad);
    this.mag=_value;
  }

  set Deg(_value){
    this.deg=_value;
    this.rad=this.Deg2Rad(this.deg);
    this.real=this.mag*Math.cos(this.rad);
    this.img=this.mag*Math.sin(this.rad);
  }

  set Rad(_value){
      this.Deg(this.Rad2Deg(_value));
  }
}
