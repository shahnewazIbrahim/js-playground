let arr = [9, 4, 5, 6, 9];
let arrLength = arr.length;
let tempArray = [];

for (let i = 0; i < arrLength; i++) {
    let element = arr[i];
    let position = arr.indexOf(element);
    tempArray.push(position);
    console.log(tempArray);
}

// let newArray =[...new Set(arr)];

// console.log(newArray);