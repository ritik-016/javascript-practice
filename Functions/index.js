function nice(name) {
  console.log("Hey " + name + " You are beautiful");
  console.log("Hey " + name + " Your eyes are beautiful");
  console.log("Hey " + name + " Your hair are awesome");
  console.log("Hey " + name +" Your lips are very good");
}

// nice("Gargi")




function sum (a, b, c = 3) {
    // console.log(a+b)
    console.log(a, b, c)
    return a+b+c
}
result1 = sum(3, 4)
result2 = sum(13, 4)
result3 = sum(3, 14)

console.log("The sum of these number is:", result1)
console.log("The sum of these number is:", result2)
console.log("The sum of these number is:", result3)




const func1 = (x)=>{
    console.log("I am an arrow function", x)
}

func1(33);
func1(39);
func1(63);