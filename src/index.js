
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let newArray = [];
    let temp_array = [];
    if(typeof matrix === 'undefined') return [];
    for(let i = 0; i < matrix.length; i++){
      for(let y = 0; y < matrix[i].length; y++){
        // if(i % 2 === 0){
        // for(let y = 0; y < matrix[i].length; y++){
        //         newArray.push(matrix[i][y]);
        //   }
        // }
        // else{
        //     for(let y = 0; y < matrix[i].length; y++){
        //         temp_array.push(matrix[i][y]);
        //   }
        //   for(let el of temp_array.reverse()){
        //     newArray.push(el)
        //   }
        //   temp_array.length=0;
        // }
        let countEven = i % 2 === 0 ? y : (matrix[i].length - y - 1);
        newArray.push(matrix[i][countEven])
      } 
    }
  return newArray;
}
