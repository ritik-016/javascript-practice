console.log("Ritik is a hacker")
console.log("Parit is a hecker")

setTimeout(() => {
    console.log("I am inside settimeout")
}, 2000);

setTimeout(() => {
    console.log("I am inside settimeout 2")
}, 2000);

console.log("khatam")

const fn = () => {
    console.log("nothing")
}

const callback = (arg, fn) => {
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Ritik", fn);
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)