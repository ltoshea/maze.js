function findZombies(matrix) {
  this.matrix = matrix;
  this.disease = matrix[0][0];
  this.mlength = this.matrix.length;
  this.mwidth = this.matrix[0].length ;

  this.makeDiseaseMatrix = function(){
    var matrix = [];
    for(var i=0; i<this.mlength; i++) {
      matrix[i] = new Array(this.mwidth);
        for(var j=0; j<this.mwidth; j++) {
            matrix[i][j] = 0;
        }
  }
    return matrix;
  }
  
  this.traverse = function(col,row){
  if ((col >= this.mlength) || (row >= this.mwidth)) return
 // console.log(col,row);
  if (this.matrix[col][row] === this.disease) {this.diseaseMatrix[col][row] = 1;}
  if(this.matrix[col][row]!=-1){
    
    if(col < this.matrix.length - 1) {
        this.matrix[col][row] = -1;
        this.traverse(col + 1, row);
    }
    //down
    if(row < this.matrix[col].length - 1) {
        this.matrix[col][row] = -1;
        this.traverse(col, row + 1);
    }
    //left
    if(col > 0){
        this.matrix[col][row] = -1;
        this.traverse(col - 1, row);
    }
    //up
    if(row > 0){
        this.matrix[col][row] = -1;
        this.traverse(col, row - 1);
    }
 }
 }
 
this.diseaseMatrix = this.makeDiseaseMatrix();
this.traverse(0,0);
}

var matrix = new findZombies([
    [9, 1, 2],
    [9, 9, 9],
    [7, 4, 9],
    [7, 9, 7]
]); 

console.log(matrix.diseaseMatrix);
