// নিচের বাক্যে "himu" শব্দটি কতবার ব্যাবহার হয়েছে? প্রথমবার "himu" কত নাম্বার পজিশনে পাওয়া গেছে? 

export const sentence = "Lorem ipsum dolor himu, sit amet consectetur adipisicing elit. Similique asperiores vitae unde exercitationem, aperiam itaque? Voluptatem, Himu itaque error hic sunt ut dolorem fuga, explicabo dolores nisi voluptatibus, adipisci himu dolorum pariatur!"

const khujo = "Lorem ipsum dolor himu"
const matches = sentence.match(/himu/gi);

const occurances = matches ? matches.length : 0;

console.log(`himu used : ${occurances}`);
 
let position = sentence.search(/himu/i);

position = position>=0 ? position : "not found!";

console.log(`first himu found: ${position}`);


// input: linearSearch(['a', 'b', 'd', 'c'], 'c')
// output: 2 or 'not found!'
// problem: linearSearch() function টি implement করে দেখান 

export default function linearSearch(arr, val) {
    var length = arr.length;

    for(let i = 0; i < length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }

    return "not found!";
}

console.log(linearSearch(['a', 'b', 'd', 'c'], 'c'));
