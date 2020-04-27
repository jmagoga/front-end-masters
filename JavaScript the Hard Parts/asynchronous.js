 //not from javascript but from the browser

//network request - fetch() / xhr is a network request,
//local storage - local storage
//timer - settimeout
//htmldom - document
//console console()

//promises

//façade functions

//--initiate background browser work
//--return a placeholder object (promise) immediately in javascript

function display(data){
   console.log(data)
}

const futureData = fetch(https...) //fetch simply returns an object, with { value   onFulfilled [ ] //empty array }
//futureData agora tem um objeto dentro dele
futureData.then(display)

console.log("Me first!")


