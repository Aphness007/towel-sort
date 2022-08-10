
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let newArray = [];
    let temp_array = [];
    for(let i = 0; i < matrix.length; i++){
        if(i % 2 === 0){
        for(let y = 0; y < matrix[i].length; y++){
                newArray.push(matrix[i][y]);
          }
        }
        else{
            for(let y = 0; y < matrix[i].length; y++){
                temp_array.push(matrix[i][y]);
          }
          for(let el of temp_array.reverse()){
            newArray.push(el)
          }
          temp_array.length=0;
        }
      } 
  return newArray;
}
