function basicRecursion(max, current) {
  if (current > max) return //e.g quando for (current 6, max 5)
  console.log(current)
  basicRecursion(max, current+1) //chama de novo aumentando o current
}

basicRecursion(5, 1)
