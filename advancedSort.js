let arr = [2, 4, 5, 8, 9, 6];
let first, second, beforeLast, last;
let arrLength = arr.length;

console.log(arr);

for (const key in arr) {
    if (Object.hasOwnProperty.call(arr, key)) {
        const element = arr[key];

        // replace first element with before last element 
        if ( key === 0 ) {
            first = arr[0]
            arr[0] = arr[arrLength - 2]
        }
        
        // replace 2nd element with last elemnt 
        if ( key === 1 ) {
            second = arr[1]
            arr[1] = arr[arrLength - 1]
        }

        // replace before last element with first element 
        if ( key === arrLength - 2 ) {
            arr[arrLength - 2] = first
        }
        
        // replace last element with second element
        if ( key === arrLength - 1 ) {
            arr[arrLength - 1] = second
        }
        
    }
}
console.log(arr);