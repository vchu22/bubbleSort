function swap(arr,leftIndex,rightIndex){
  const temp1 = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp1;
    return arr
}
function bubbleSort(arr) {
  /* your code here */
  let counter = 0;
  let swaps = true
  while(swaps){
    swaps = false
    for (let i = 0; i<(arr.length-counter); i++){
      if (arr[i] > arr[i+1]){
        arr = swap(arr,i,i+1)
        swaps = true
      }
    }
    counter++
  }
  return arr
}


// 3, 2, 7, 8, 1, 4, 9