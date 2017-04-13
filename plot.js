
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

  for (i=0;i<10;i++){
     this.ctx.lineWidth = 1+i;
     this.ctx.strokeStyle='white';
     this.ctx.beginPath();
     this.ctx.moveTo(5.5+i*14,5);
     this.ctx.lineTo(5.5+i*14,140);
     this.ctx.stroke();
   }


};
var myPlot=new plot(canvas);
