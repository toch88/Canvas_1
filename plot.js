
var canvas=document.getElementById('plot');
class plot{
  constructor(_canvas){
    this.canvas=_canvas;
    this.ctx=this.canvas.getContext('2d');
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle='silver';
    this.widthOfPlot=this.canvas.parentElement.clientWidth;
    this.heightOfPlot=this.canvas.parentElement.clientHeight;
    this.DrawEmptyPlot();
  }
  Draw(){}
  DrawEmptyPlot(){
    this.RenderVerticalGridLines();
    this.RenderHorizontalGridLines();
  }

  RenderVerticalGridLines(){

    for (var i=50;i<=this.widthOfPlot;i+=50){

       this.ctx.beginPath();
       this.ctx.moveTo(i+0.5,0+0.5);
       this.ctx.lineTo(i+0.5,this.heightOfPlot+0.5);
       this.ctx.stroke();
     }
  }

  RenderHorizontalGridLines(){

    for (var i=50;i<=this.heightOfPlot;i+=50){
       this.ctx.beginPath();
       this.ctx.moveTo(0.5,0+i);
       this.ctx.lineTo(this.widthOfPlot,i+0.5);
       this.ctx.stroke();
     }
  }



}





var myPlot=new plot(canvas);
