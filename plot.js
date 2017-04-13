
var canvas=document.getElementById('plot');
function plot(_canvas){
    this.canvas=_canvas;
    this.ctx=this.canvas.getContext('2d');
    this.widthOfPlot=this.canvas.parentElement.clientWidth;
    this.heightOfPlot=this.canvas.parentElement.clientHeight;
    this.DrawEmptyPlot();

  this.Draw=function(){

  };
}
plot.prototype.DrawEmptyPlot=function(){
  this.RenderGrid();
};

plot.prototype.RenderGrid=function(){

//for (var i = 0; i <100-50; i+=50) {
  this.ctx.beginPath();
  //this.ctx.strokeStyle = 'white';  
  this.ctx.moveTo(50, 0);
  this.ctx.lineTo(50, 500);
  this.ctx.stroke();
//}


};
var myPlot=new plot(canvas);
