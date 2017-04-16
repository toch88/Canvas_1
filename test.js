class B{
    constructor(){

    }

    Translate(){
      console.log("wywołanie z klasy Parenta");
    }
}


class A extends B{
  constructor(){
    super();
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

  Translate(){
    super.Translate();
  }
}

var test=new A();
test.Translate();
