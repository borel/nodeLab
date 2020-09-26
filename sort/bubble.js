const bubbleSort = (unsortedArray) => {
    do {
      swap = false;
      unsortedArray.forEach((e, index) => {
        if (unsortedArray[index + 1] < e) {
          swap = true;
          const temp = unsortedArray[index + 1];
          unsortedArray[index + 1] = unsortedArray[index];
          unsortedArray[index] = temp;
        }
      });
    } while (swap);
  };
  
  let unsortedArray = [2020, 1998, 2018, 1986, 2006];
  console.log(bubbleSort(unsortedArray));
  