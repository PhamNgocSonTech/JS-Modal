let fruits = ["apple", "orange", "lemon"];
let arr = [1, 2, 8, 12, 67, 100];
let arr2 = [2, 0, -1, 12, 7, 20];
let arr3 = [-5, 22, 6, -3, 4];
let arr4 = [0, -1, 4, -2, 10];

// let firstElement = fruits.shift();
// fruits.unshift("blueberry");

// console.log(fruits.indexOf("lemon"));
// console.log(`first element is: ${firstElement}`);

// console.log(fruits.join("; "));
// console.log(fruits);

// function linerSearch(arr, target) {
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] === target) {
//       return i;
//     }
//   }

//   return -1;
// }

// LinerSearch
function linerSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// Binary Search
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (target === arr[middle]) {
      return middle;
    } else if (target < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

// Bubble Sort
function bubbleSort(arr) {
  let isSwapped;
  do {
    isSwapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwapped = true;
      }
    }
  } while (isSwapped);
}

// Insertion Sort
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numInsert) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = numInsert;
  }
  return arr;
}

// Selection Sort
function selectionSort(arr) {
  let currentIndex;
  for (let i = 0; i < arr.length; i++) {
    currentIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[currentIndex] > arr[j]) {
        currentIndex = j;
      }
    }
    if (i != currentIndex) {
      let temp = arr[i];
      arr[i] = arr[currentIndex];
      arr[currentIndex] = temp;
    }
  }
  return arr;
}

console.log("Liner Search: ", linerSearch(fruits, "lemon"));
console.log("Binary Search", binarySearch(arr, 1));
// Bubble Sort
bubbleSort(arr2);
console.log("After Bubble Sort: ", arr2);

// Insertion Sort
insertionSort(arr3);
console.log("After Insertion Sort: ", arr3);

// Selection Sort
selectionSort(arr4);
console.log("Selection Sort: ", arr4);
