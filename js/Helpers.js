class Vector{
  constructor(_real,_img){
    this.Real=_real;
    this.Img=_img;
  }

  static CreateVector(_mag, _deg){
    var real=_mag*Math.cos(Vector.Deg2Rad(_deg));
    var img=_mag*Math.sin(Vector.Deg2Rad(_deg));
    return new Vector(real, img);
  }

  static Deg2Rad(_deg){
    return _deg*Math.PI/180;
  }

  static Rad2Deg(_rad){
    return _rad*180/Math.PI;
  }

  static CalculateNormalVec(_vec){
    _vec.mag=1;
    return new Vector(_vec.Real, _vec.Img);
  }

  static Add(v1,v2){
    return new Vector(v1.Real+v2.Real, v1.Img+v2.Img);
  }

  static Sub(v1,v2){
    return new Vector(v1.Real-v2.Real, v1.Img-v2.Img);
  }

  Rotate(_deg){
    _deg=_deg;
    var real=this.Real*Math.cos(_deg*Math.PI/180)+this.Img*(-Math.sin(_deg*Math.PI/180));
    var img=this.Real*Math.sin(_deg*Math.PI/180)+this.Img*Math.cos(_deg*Math.PI/180);
    this.Real=real;
    this.Img=img;
   }

   get Real(){
       return this.real;
   }

   set Real(_value){
     this.real=_value;
     this.mag=Math.sqrt(this.real*this.real+this.img*this.img);
     this.rad=Math.atan2(this.Img,this.Real);
     this.deg=Vector.Rad2Deg(this.rad);
   }

   get Img(){
     return this.img;
   }

   set Img(_value){
     this.img=_value;
     this.mag=Math.sqrt(this.real*this.real+this.img*this.img);
     this.rad=Math.atan2(this.img,this.real);
     this.deg=Vector.Rad2Deg(this.rad);
   }

  set Mag(_value){
    this.mag=_value;
    this.real=_value*Math.cos(this.rad);
    this.img=_value*Math.sin(this.rad);
  }

  set Deg(_value){
    this.deg=_value;
    this.rad=Vector.Deg2Rad(this.deg);
    this.real=this.mag*Math.cos(this.rad);
    this.img=this.mag*Math.sin(this.rad);
  }

  set Rad(_value){
      this.Deg(this.Rad2Deg(_value));
  }
}
