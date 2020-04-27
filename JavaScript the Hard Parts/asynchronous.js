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

//aquele empty array é onde podemos passar um função para o código rodar automaticamente quando voltar uma resposta
//it gets stored in the value, then the value is passed to the function that is in that array

.then() //simplesmente poe um função dentro daquele onfulfilled array!
futureData.then(display)

//e por isso podemos passar funções inline ali, tipo
futureData.then(data => console.log(data)) 

//e é por isso que da pra ter muitos chained .then()
.then(...).then(...).then(...) //cada uma adicionando uma função para o que fazer com a data!


//setTimeout goes through the browser features, the TIMER
quanto setTimeout completa, ele vai para o CALLBACK QUEUE


//saber diferenciar entre call stack e callback queue. o call stack vao sempre antes as funções sincronas
//no callback queue, do browser, vao as funções asincronas.
//as funções assincronas depois sao passadas para o call stack
//o EVENT LOOP que faz essa mão de levar as funções lá do callback queue para o call stack

//there's another queue, the micro task queue https://frontendmasters.com/courses/javascript-hard-parts-v2/web-apis-promises-example-microtask-queue/
when display happens, it goes FROM the callback queue on to the microtask queue
display comes out of the micro task queue and goes to the call stack

//there's also onrejection (another array) with the details of the error. a function to handle that error

you can pass a function to handle that error



Hold promise defered-functions in a microtask queue and callback function in a task queue (Callback queue)
when the Web Browser Feature (API) finishes
Add the function to the Call stack (i.e run the function)  when:
- call stack is empty & global  code code run (have the event loop check this condition)
Prioritize function in the microtask queue over the callack queue







