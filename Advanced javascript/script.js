console.log(a1);

(async function main(){
    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b)

    // let [x, y, ...rest] = [1, 4, 7, 8, 9, 10]
    // console.log(x, y, rest)

    let obj = {
        a:1,
        b:2,    
        c:3
    }
    
    let {a, b} = obj
    console.log(a,b)

    let arr = [1, 7 ,3]
    console.log(sum(...arr))

    
    const sleep = async ()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(45)
            }, 1000);
        })
    }
    
    const sum = async (a, b , c)=>{
        return a+b+c
    }
})()
    
    var a1 = 6;