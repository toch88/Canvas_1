
var canvas=document.getElementById('plot');
function plot(_canvas){
    this.canvas=_canvas;
    this.ctx=this.canvas.getContext('2d');
    this.DrawEmptyPlot();

  this.Draw=function(){

  };
}
plot.prototype.DrawEmptyPlot=function(){
  this.ctx.beginPath();
  this.ctx.strokeStyle='blue';
  this.ctx.moveTo(20,20);
  this.ctx.lineTo(200,20);
  this.ctx.stroke();
};
var myPlot=new plot(canvas);
