function swapArray(arr) {

    let sizeArr = arr.length;

    //Outer pass
    for(let i = 0; i < sizeArr; i++){

        //Inner pass
        for(let j = 0; j < sizeArr - i - 1; j++){

            if(arr[j + 1] < arr[j]){

                //Swapping
                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
            }
        }
    };
    // return arr;
    
    console.log(arr);

}

let arr = [3, 4, 7, 2];

swapArray(arr)