var myPlot=new Plot(canvas);

var vec=Vector.CreateVector(150,0);
var myLine=new Arrow(vec, new Vector(0,0));
myPlot.Items.Add(myLine);

var myLine2=new Line(new Vector(50,0), new Vector(0,0));
myLine2.Rotate(45);
myPlot.Items.Add(myLine2);

var myTri=new Triangle(25,new Vector(50,50), 0);
myTri.Rotate(45);
myPlot.Items.Add(myTri);

myLine.Rotate(276);

//myPlot.Items.GetItem(0).Size=50;
//myPlot.Items.GetItem(0).Rotate(45);
myPlot.Draw();
