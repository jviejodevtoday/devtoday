const ok = Promise.resolve("ya esta")
const ko = Promise.reject("desastre")

ok.then(r => console.log(r))

ko.then(r =>{console.log(r)})
   .catch(r => {console.log(r)})