function squareDigits(num){
  let arr = String(num).split("");
  let newArr = [];
  for ( i = 0; i < arr.length; i++){
    newArr.push(parseInt(arr[i]**2))
  };
  return Number(newArr.join(""));
} 
const squareDigits = (num) => String(num).split("").map(c => c *c).join(""));  
  
*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@

function multiple(x) {
  return x % 3 == 0 && x % 5 == 0 ? "BangBoom" :
    x % 5 == 0 ? "Boom" :
    x % 3 == 0 ? "Bang" : 
    "Miss"
}
const multiple = x => x%15?x%5?x%3? 'Miss':'Bang':'Boom':'BangBoom'

*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@
