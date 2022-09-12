
let arr = [2, 3, 6, 9, 6];
let arrlength = arr.length

for (let i = 0; i < arrlength; i++) {
    for (let j = i; j < arrlength; j++) {
        for (let k = i; k <= j; k++) {
            console.log(arr[k] + " ");
        }
        console.log("end")
    }
    
}