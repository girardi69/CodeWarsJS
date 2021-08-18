This is the first solution, can be done better; it takes advantage from the translation in ascii of the characters, but it must be hardly refactored if change the input abc to something different.  
```
function rgb(x, y){
   let n = x.charCodeAt() +y.charCodeAt()
    return (x ? x == y : y) ? x : n == 195 ? 'c' : n==196 ? 'b': 'a'
}
```
A better solution could be setting an array [R, G, B] and check for the positions in the array. 
if x at 0 and y at 0 return 0  
if x at 1 and y at 2 return 0 
if x at 2 and y at 1 return 0  
return (x==0&&y==0)||(x==1&&y==2)||(x==2&&y==1) ? arr[0] : (x==0&&y==2)||(x==1&&y==1)||(x==2&&y==0) ? arr[1] : arr[2]
if x at 0 and y at 2 return 1  
if x at 1 and y at 1 return 1  
if x at 2 and y at 0 return 1  

if x at 1 and y at 0 return 2  
if x at 0 and y at 1 return 2  
if x at 2 and y at 2 return 2  
```
function rgb(x, y){
   let arr = ['R', 'G', 'B']
   return (x==arr[0]&&y==arr[0])||(x==arr[1]&&y==arr[2])||(x==arr[2]&&y==arr[1]) ? arr[0] 
        : (x==arr[0]&&y==arr[2])||(x==arr[1]&&y==arr[1])||(x==arr[2]&&y==arr[0]) ? arr[1] 
        : arr[2]
}
```
Test set:
```
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

```
console.log(rgb('R','R'));
console.log(rgb('R','G'));
console.log(rgb('R','B'));
console.log(rgb('G','R'));
console.log(rgb('G','G'));
console.log(rgb('G','B'));
console.log(rgb('B','R'));
console.log(rgb('B','G'));
console.log(rgb('B','B'));
```
