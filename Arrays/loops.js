let a = [2, 56, 9, 88, 7]

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    
}

a.forEach((value, inder, arr)=>{
    console.log(value, arr)
})


let obj = {
    a: 1,
    b: 2,
    c: 3
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element)
        
    }
}

for (const element of a) {
    console.log(obj)
}

