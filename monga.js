let a , b, duplicate = [];

a= [1, 4, 5, 6, 8, 9, 6, 4, 3];
b= ['a', 'b', 't', 'u']

let c = [...a, ...b];

a.forEach((value,key) => {
    if(a.indexOf(value) !== key) {
        duplicate.push(value);
    }
});
console.log(a);