let arr = [1, 3, 19, 5, 37];
let arr1 = [];

for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  arr1.push(element **2);
}

// let arr1 = arr.map((e, index, array)=>{
//     return (e**2)
// })

console.log(arr1)

const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}

console.log(arr.filter(greaterThanSeven))

let arr2 = [1, 2, 3, 4, 5, 6]

const red = (a, b)=>{
    return a+b
}

console.log(arr2.reduce(red))