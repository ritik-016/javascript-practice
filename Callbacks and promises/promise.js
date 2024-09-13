console.log('This is promise tab');

let prom1 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if (a<0.5){
        reject("No random number was supporting you")
    }
    else{

        setTimeout(() => {
            console.log("Yes I am done")
            resolve("Ritik")
        }, 3000);
    }
})

let prom2 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if (a<0.5){
        reject("No random number was supporting you 2")
    }
    else{

        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Ritik 2")
        }, 1000);
    }
})
let prom3 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if (a<0.5){
        reject("No random number was supporting you 3")
    }
    else{

        setTimeout(() => {
            console.log("Yes I am done 3")
            resolve("Ritik 3")
        }, 1000);
    }
})
let prom4 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if (a<0.5){
        reject("No random number was supporting you 4")
    }
    else{

        setTimeout(() => {
            console.log("Yes I am done 4")
            resolve("Ritik 4")
        }, 1000);
    }
})
let prom5 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if (a<0.5){
        reject("No random number was supporting you 5")
    }
    else{

        setTimeout(() => {
            console.log("Yes I am done 5")
            resolve("Ritik 5")
        }, 1000);
    }
})



// prom1.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

// let p6 = Promise.resolve([prom1, prom2, prom3, prom4, prom5])
// p6.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//      console.log(err)
// })


// let p6 = Promise.reject([prom1, prom2, prom3, prom4, prom5])
// p6.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//      console.log(err)
// })


// let p6 = Promise.any([prom1, prom2, prom3, prom4, prom5])
// p6.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//      console.log(err)
// })
// let p6 = Promise.all([prom1, prom2, prom3, prom4, prom5])
// p6.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//      console.log(err)
// })


// let p6 = Promise.allSettled([prom1, prom2, prom3, prom4, prom5])
// p6.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//      console.log(err)
// })