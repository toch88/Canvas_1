class Vector{
  constructor(_real,_img){
    this.Real=_real;
    this.Img=_img;

    this.CalculateMag();
    this.CalculateRadAndDeg();
  }

  Deg2Rad(_deg){
    return _deg*Math.PI/180;
  }

  get Real(){
      return this.real;
  }

  set Real(_value){
    this.real=_value;
  }

  get Img(){
    return -this.img;
  }

  set Img(_value){
    this.img=_value;
  }

  Rad2Deg(_rad){
    return _rad*180/Math.PI;
  }

  static Add(v1,v2){
    return new Vector(v1.Real+v2.Real, v1.Img+v2.Img);
  }

  static Sub(v1,v2){
    return new Vector(v1.Real-v2.Real, v1.Img-v2.Img);
  }

  Rotate(_deg){
    _deg=-_deg;
    var real=this.Real*Math.cos(_deg*Math.PI/180)+this.Img*(-Math.sin(_deg*Math.PI/180));
    var img=this.Real*Math.sin(_deg*Math.PI/180)+this.Img*Math.cos(_deg*Math.PI/180);
    this.Real=real;
    this.Img=img;
   }

  CalculateMag(){
    this.mag=Math.sqrt(this.Real*this.Real+this.Img*this.Img);
  }
  CalculateRadAndDeg(){
    this.rad=Math.atan2(this.Img,this.Real);
    this.deg=this.Rad2Deg(this.rad);
  }


  set Mag(_value){
    this.Real=_value*Math.cos(this.rad);
    this.Img=value*Math.sin(this.rad);
    this.mag=_value;
  }

  set Deg(_value){
    this.deg=_value;
    this.rad=this.Deg2Rad(this.deg);
    this.Real=this.mag*Math.cos(this.rad);
    this.Img=this.mag*Math.sin(this.rad);
  }

  set Rad(_value){
      this.Deg(this.Rad2Deg(_value));
  }
}
