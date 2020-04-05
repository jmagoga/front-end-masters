//data structure

//answers: no and maybe ... ?

//you can never remove from a Bloom filter

//you need hundredrs or thousands of on indexes to a bloom filter
//therefore memory has to be allocated upfront.

//if you run stuff thru more hashing functions, you get less false positives... but you'll need a bigger array

//use a hash function that's fast,  not stuff like SHA or MD5 (designed to be slow, criptograhpic)

//XXJS -- hashing library for hashing functions... !!!!!!

//they're a Set or Collection (a morphous cloud of data)

//fast look up... but won't tell you if it's definitely in the Set. 'maybe' -- lose the certainty

//very compact in memory and fast to look up

//Medium uses bloom filters -- (have they read this article before or not?) to show something the person has not read, and not to show something they have already read

//this person might have this article... when you have a tolerance for false negatives but no tolerance for false positives

//two different hashing functions

//0 represents falses, make a bloom filter out of that, having two *different* hashing functions (for the example, TYPICALLY MORE)

[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

"Brian" --> ran throught TWO(2) different hashing functions
hashFunc1 = 1
hashFunc2 = 4

[0, 1, 0, 0, 1, 0, 0, 0, 0, 0]

//then we ask 'is Brina in this Bloom set' we run Brian thru the same hashing functions, and check if number 1 is in index 1 or 4
//it finds the 1 in there, and the answers are 'maybe'

"Sarah" -->
hashFunc1 = 0
hashFunc2 = 4
//checks the bloom filter now... Sarah is not at '0', so she's not in there

//if afterwars we add Sarah

[1, 1, 0, 0, 1, 0, 0, 0, 0, 0]

//and later check for Sherley
hashFunc1 = 0
hashFunc2 = 1
//check in the array and they are flipped!!!
[1, 1, 0, 0, 1, 0, 0, 0, 0, 0]
 0  1  --> are flipped!!! so it 'may be' in there,
//in Medium, if Shirley is an article, it'll be shown that the article might has been read. therefore, not shown to user.


//EXERCISE
  
//we need an internal data structure to keep track of this. we use an array
  
class BloomFilter { //no need for the constructor
  _array = new Array(100).fill(0)  //class properties. creates something on the instance of this particular bloom filter, which his _array (private). no futuro vai ter # (#array) que faz ele de fato privado
  add(string) {
   this._array[h1(string)] = 1 //h1 é um hash function (pegar qqr uma em algum lugar)
   this._array[h2(string)] = 1 //em todas essas, se flipa o 0 pra 1, pra dizer q está dentro do array em tais lugares e dps comparar
   this._array[h3(string)] = 1 //poe o 1 no index que essa função retornar
  }
  contains(string) {
    return !!(this._array[h1(string)] && this._array[h2(string)] && this._array[h3(string)]) //string coercion (vira true or false) se todos estão neste local
  }
}


