var canvas=document.getElementById('plot');
class Plot{
  constructor(_canvas){
    this.canvas = _canvas;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = '#474345';
    this.widthOfPlot = this.canvas.parentElement.clientWidth;
    this.heightOfPlot = this.canvas.parentElement.clientHeight;
    this.verticalMiddle=this.widthOfPlot/2;
    this.horizontalMiddle=this.heightOfPlot/2;
    this.Items = new PlotGenericItemContainer(
      new Vector(this.verticalMiddle,
        this.horizontalMiddle));
  }

  Draw(){
    this.DrawEmptyPlot();
    this.ctx.strokeStyle = 'white';
    for (var i = 0; i < this.Items.length(); i++) {
      var Item = this.Items.GetItem(i);
      Item.Draw(this.ctx);
    }
  }
  DrawEmptyPlot(){
    this.RenderVerticalGridLines();
    this.RenderHorizontalGridLines();
  }

  RenderVerticalGridLines(){
    for (var i = 50; i <= this.widthOfPlot; i+=50){
       this.ctx.beginPath();
       this.ctx.moveTo(i + 0.5,0+0.5);
       this.ctx.lineTo(i+0.5,this.heightOfPlot+0.5);
       this.ctx.stroke();
     }
  }

  RenderHorizontalGridLines(){
    for (var i=50;i<=this.heightOfPlot;i+=50){
       this.ctx.beginPath();
       this.ctx.moveTo(0.5,0.5+i);
       this.ctx.lineTo(this.widthOfPlot,i+0.5);
       this.ctx.stroke();
     }
  }
}
