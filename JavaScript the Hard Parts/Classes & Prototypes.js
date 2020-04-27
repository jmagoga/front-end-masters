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

//



