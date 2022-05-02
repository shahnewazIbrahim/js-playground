let arr = [3, 5, 8, 2, 6, 7, 9, 1];

let n = arr.length;

    for(let i = 1; i < n; i++) {
        // choosing the first element in our unsorted subarray
        let current = arr[i]; //5
        // the last element of our sorted subarray
        let j = i - 1; //0 => 3

        while((j > -1) && (current < arr[j])) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }

    console.log(arr);