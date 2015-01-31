module.exports = {
  first : function(array, n) {
    if (n === undefined ){
      return array[0];
    }else if(arguments.length === 2){
      result1 = array.slice(0, n);
      return result1;
    }
  }
}=