const majority = (array) => {
  const n = array.length;
  //constraint
  if (n <= 5e4 || n < 1) {
    const result = [];
    array = array.sort((a, b) => a - b);
    for (i = 0; i < n; i++) {
      //check if numbers is repeated more than n/2
      if (array.lastIndexOf(array[i]) + 1 > n / 2) {
        result.push(array[i]);
        array = array.slice(0, array.lastIndexOf(array[i]));
      }
    }
    return [...new Set(result)];
  } else return " Invalid Input";
};

// console.log(majority([2, 2, 1, 1, 1, 2, 2]));
//output: [2]
