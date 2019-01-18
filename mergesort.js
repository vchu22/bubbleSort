function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  if (wholeArray.length % 2 === 0) {
    let length = wholeArray.length / 2;
    var firstHalf = wholeArray.splice(0, length);
    var secondHalf = wholeArray.splice(-length);
  } else {
    let length = Math.floor(wholeArray.length / 2);

    var firstHalf = wholeArray.splice(0, length + 1);
    var secondHalf = wholeArray.splice(-length);
  }
  return [firstHalf, secondHalf];
}
