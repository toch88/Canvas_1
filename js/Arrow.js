class Arrow{
  constructor(_size){
    this.body=new Line(_size);
    this.arrowHead=new Traingle(_size, this.body.points[1]);
  }
}
