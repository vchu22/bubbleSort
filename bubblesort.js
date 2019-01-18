function bubbleSort(array) {
  /* your code here */
  let sortedArr = array;
  if (array.length <= 1) return array;
  else {
    for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length - 1; j++) {
        if (array[j] > [j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  }
}
