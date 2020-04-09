//copiado do link do Holt

 keep track of users I've crawled before and not add them to my total the second time.

Instead of letting breadth-first traversal run to completion, we'll just limit how many times that outer loop runs,
effectively limiting how many levels down it goes, or how many degrees of separation!

// you work for a professional social network. in this social network, a professional
// can follow other people to see their updates (think Twitter for professionals.)
// write a function that finds the job `title` that shows up most frequently given
// a set of degree of separation from you. count the initial id's own job title in the total

/*
  parameters:
  myId                - number    - the id of the user who is the root node
  getUser             - function - a function that returns a user's object given an ID
  degreesOfSeparation - number   - how many degrees of separation away to look on the graph
*/

const findMostCommonTitle = (myId, getUser, degreesOfSeparation) => {
  let queue = [myId];
  const seen = new Set();
  const jobs = {};
  
  for (let i = 0; i <= degreesOfSeparation; i++) {
    queue = queue
      .filter((id) => !seen.has(id))
      .map(getUser)
      .map(user => {
        jobs[user.title] = jobs[user.title] ? jobs[user.title] + 1 : 1;
        seen.add(user.id)
        return user;
      })
      .map((user) => user.connections)
      .reduce((acc, users) => acc.concat(users), [])
  }
  return Object.keys(jobs)
    .map((job) => [job, jobs[job]])
    .sort((a, b) => {
      if (a[1] > b[1]) return -1;
      if (a[1] < b[1]) return 1;
      return 0;
    })[0][0]
}

// unit tests
// do not modify the below code
describe('findMostCommonTitle', function() {
  // the getUser function and data comes from this CodePen: https://codepen.io/btholt/pen/NXJGwa?editors=0010
  it('user 30 with 2 degrees of separation', () => {
    expect(findMostCommonTitle(30, getUser, 2)).toBe("Librarian");
  });
  
  it('user 11 with 3 degrees of separation', () => {
    expect(findMostCommonTitle(11, getUser, 3)).toBe("Graphic Designer");
  });
  
  it('user 307 with 4 degrees of separation', () => {
    // if you're failing here with "Clinical Specialist, you're probably not filtering users who
    // appear more than once in people's connections
    expect(findMostCommonTitle(306, getUser, 4)).toBe("Environmental Tech");
  });
});

describe('extra credit', function() {
  it('user 1 with 7 degrees of separation – this will traverse every user that\'s followed by someone else. five users are unfollowed', () => {
    expect(findMostCommonTitle(1, getUser, 7)).toBe("Geological Engineer");
  });
})




//exemplo de dados sobre o quais estamos trabalhando


let getUser;
let getMe;

(function() {
  getUser = (id) => id <= 1000 && id > 0 ? list[id-1] : null;
  getMe = () => getUser(11);
  
  

const list = [{"id":1,"name":"Leia Goede","company":"Bluejam","title":"Analog Circuit Design manager","connections":[536,320,29,697,333,28,686,968]},
{"id":2,"name":"Ingelbert Pickston","company":"Layo","title":"Assistant Professor","connections":[616,126,583,483]},
{"id":3,"name":"Elisha Janota","company":"Skyble","title":"Structural Engineer","connections":[596,843,864,861,876,833]},
{"id":4,"name":"Gayler Sexten","company":"Tanoodle","title":"Quality Control Specialist","connections":[472,24]},
{"id":5,"name":"Walther Bradly","company":"Viva","title":"GIS Technical Architect","connections":[603,249,177,891,898,158]},
{"id":6,"name":"Rafe Luter","company":"Bluezoom","title":"Human Resources Assistant IV","connections":[979,923,324,367,969,376,684]},
{"id":7,"name":"Therine Kleinstub","company":"Jabbercube","title":"Marketing Manager","connections":[634,489,473,854,147]},
{"id":8,"name":"Currie Longbottom","company":"Bluezoom","title":"Senior Developer","connections":[735,702,851,932,838,786,41,354]},
{"id":9,"name":"Bogey Saxby","company":"Chatterpoint","title":"Internal Auditor","connections":[224,848,823,745,439,197,593]},
{"id":10,"name":"Hettie Backler","company":"Nlounge","title":"Recruiting Manager","connections":[226,164,79,961,932,701,397]},
{"id":11,"name":"Boothe Rossi","company":"Zoomlounge","title":"Developer IV","connections":[554,315,44,784,656,271,129,585]},
{"id":12,"name":"Bondie Orpen","company":"Livetube","title":"Accounting Assistant IV","connections":[994,179,617,260,906]}]
})()
