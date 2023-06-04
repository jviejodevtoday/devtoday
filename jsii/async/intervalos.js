var interval = setInterval(()=>{
    console.log(new Date().toLocaleTimeString())
}, 2000)

setTimeout(() =>{
    clearInterval(interval)
}, 10000)