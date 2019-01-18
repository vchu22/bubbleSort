function bubbleSort(array) {
  /* your code here */
  let sortedArr = array;
  if (array.length <= 1) return array;
  else {
    for (let i = 0; i < sortedArr.length-1; i++) {
      for (let j = 0; j < sortedArr.length - i - 1; j++) {
        if (sortedArr[j] > sortedArr[j + 1]) {
          let temp = sortedArr[j];
          sortedArr[j] = sortedArr[j + 1];
          sortedArr[j + 1] = temp;
        }
      }
    }
    return sortedArr;
  }
}


// 3, 2, 7, 8, 1, 4, 9