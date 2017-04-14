class PlotGenericItemContainer {
    constructor(_plotId){
      this.parentId=_plotId;
      this.array=[];
    }

    Add(_plotGenericItem){
      this.array.push(_plotGenericItem);
    }

    GetItem(_index){
      return this.array[_index];
    }

    length(){
      return this.array.length;
    }
}
