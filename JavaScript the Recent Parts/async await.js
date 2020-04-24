//await só se usa dentro de um async. entao nao da pra por um await dentro de um método por exemplo, forEach,
//pq ele recebe uma função e o await estaria dentro dessa função que náo é async.

async function fetchFiles(files) {
  var prs = files.map (getFile)
  prs.forEach( function each(pr) {
    console.log(await pr) //nao vai funcionar. ta dentro da function 'each' q nao eh asyncrona.
  })
}

//em vez do forEach
for (let pr of prs) { // não é uma função, eh um simples loop, por isso da pra ter o await ali dentro
  console.log(await pr)
}


//MDN docs
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: 'resolved'
}

asyncCall();
