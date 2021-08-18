```
function rgb(x, y){
   let n = x.charCodeAt() +y.charCodeAt()
    return (x ? x == y : y) ? x : n == 195 ? 'c' : n==196 ? 'b': 'a'
}

console.log(rgb('a','a'));
console.log(rgb('a','b'));
console.log(rgb('a','c'));
console.log(rgb('b','a'));
console.log(rgb('b','b'));
console.log(rgb('b','c'));
console.log(rgb('c','a'));
console.log(rgb('c','b'));
console.log(rgb('c','c'));
```
