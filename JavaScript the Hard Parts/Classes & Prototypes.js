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

//
