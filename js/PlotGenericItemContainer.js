class PlotGenericItemContainer {
    constructor(_vec){
      this.offsetVec=_vec;
      this.array=[];
    }

    Add(_plotGenericItem){
      _plotGenericItem.Offset=new Vector(this.offsetVec.Real+0.5,this.offsetVec.Img+0.5);
      this.array.push(_plotGenericItem);
    }

    GetItem(_index){
      return this.array[_index];
    }

    length(){
      return this.array.length;
    }
}
