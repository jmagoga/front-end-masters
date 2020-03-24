function wrappedFnLoop(start, end) { //it's a closure
  function recurse(i) {
    if (i < end) {
      recurse(i + 1)
    }
    
  }
  recurse(start)
}

//

function MemoFnLoop(i, end) {
  if (i < end) {
    MemoFnLoop(i + 1, end)
  }
}
