function fibonacci(n) {
  //base case
  if (n <= 2) { //pq não só '<'? pq o fibonacci de 2 é 1 + 0... 1
    return 1
  }
  return fibonacci(n-1) + fibonacci(n-2)
}

//we add 1 to itself as many time as the result of fibonacci. not very efficient

//fibonacci com loops usa variavel temporaria pra fazer isso. achar no project euler
