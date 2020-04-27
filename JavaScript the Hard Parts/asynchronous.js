 //not from javascript but from the browser

//network request - fetch() / xhr is a network request,
//local storage - local storage
//timer - settimeout
//htmldom - document
//console console()

//promises

//two pronged façade functions (uma fica no javascript outra no web browser)

//--initiate background browser work
//--return a placeholder object (promise) immediately in javascript

function display(data){
   console.log(data)
}

const futureData = fetch(https...) //fetch simply returns an object, with { value   onFulfilled [ ] //empty array }
//futureData agora tem um objeto dentro dele (uma das consequencias)
futureData.then(display)

console.log("Me first!")

//a outra consequencia fica dentro do browser, as a network request! will have the ip address and the path (twtter.com, tweets/1) GET
//fetch defaults to GET
//if we want to POST, we can pass an object to it to set the method to POST
complete ? onCompletion

//o objeto devolvido ao futureData está keeping track do que está acontecendo no web browser
//when the background task completes (on the web browser) it's going to stick the response datainto the object 'value'
//(the response data!)
futureData.value //vai estar atualizado

