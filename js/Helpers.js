class Vector{
  constructor(_real,_img){
    this.real=_real;
    this.img=_img;

    CalculateMag();
    CalculateDeg();
  }

  Deg2Rad(_deg){
    return _deg*PI/180
  }

  Rad2Deg(_rad){
    return _rad*180/PI;
  }

  CalculateMag(){
    this.mag=Math.sqrt(this.real*this.real+this.img*this.img);
  }
  CalculateRadAndDeg(){
    this.rad=Math.atan2(this.img,this.real);
    this.deg=this.rad*Rad2Deg();
  }

  set mag(_value){
    this.real=_value*Math.cos(this.rad);
    this.img=value*Math.sin(this.rad);
    this.mag=_value;
  }

  get mag(){return this.mag;}
  get deg(){return this.deg;}
  get rad(){return this.deg;}

  set deg(_value){
    this.deg=_value;
    this.rad=Deg2Rad(this.deg);
    this.real=this.mag*Math.cos(this.rad);
    this.img=this.mag*Math.sin(this.rad);
  }

  set rad(_value){
      deg(Rad2Deg(_value));
  }
}
