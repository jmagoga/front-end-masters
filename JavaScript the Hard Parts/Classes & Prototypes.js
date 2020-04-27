const user1 = {
  name: "Will",
  score: 3
  increment: function() {
    user1.score++ //this ?
  }
}

//or

const user2 = {}

user2.name = "Jack"
user2.score = 3
user2.increment = function() {user2.score++}

//or

const user3 = Object.create(null)

user3.name = "Eva"
user3.score = 3
user3.increment = function() {user2.score++}

//create and return objects using a function

function userCreator(name, score) {
  const newUser = {}
  newUser.name = name
  newUser.score = score
  newUser.increment = function() {newUser.score++}
  return newUser
}

const user1 = userCreator("Will", 9)
const user2 = userCreator("Joan", 4)
user1.increment()
//https://frontendmasters.com/courses/javascript-hard-parts-v2/factory-functions-example/
//o acima não funciona... tem que ficar se criando as coisas individuais (sei la, n entendi, ver de novo)




//prototype chain, para não ficar criando uma função para cada usuario novo...

function userCreator(name, score) { //passa um objeto
  const newUser = Object.create(userFunctionStore) //todo newUser já vai ter o increment e o login quando é inicializado
  newUser.name = name      //todos novos criados tem uma referencia a esse userFunctionStore como __proto__
  newUser.score = score
  return newUser
}

//o abaixo é como se fosse o que tem dentro do __proto__
//todo usuario inicializado assim, vai ter as coisas que tem dentro do __proto__
const userFunctionStore = { //é um objeto que é com o que é inicializado um novo usuario
  increment: function() {this.score++}
  login: function() {console.log("Logged in!")}
}

const user1 = userCreator("Will", 9)
const user2 = userCreator("Joan", 4)
user1.increment()






