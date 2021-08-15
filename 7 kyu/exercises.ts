function squareDigits(num){
  let arr = String(num).split("");
  let newArr = [];
  for ( i = 0; i < arr.length; i++){
    newArr.push(parseInt(arr[i]**2))
  };
  return Number(newArr.join(""));
}  
  
const squareDigits = (num) => String(num).split("").map(c => c *c).join(""));  
  
