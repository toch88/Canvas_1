class A{
  constructor(){
    this.points=[1,2,3];
  }

  Update(){
  for (var i = 0; i < this.points.length; i++) {
    this.points[i]++;
  }
  }

  Read(){
      for (let point of this.points) {
        console.log(point);
      }
  }
}

var test=new A();
test.Update();
test.Read();
