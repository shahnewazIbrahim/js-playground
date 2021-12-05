// Calculator

function calculate(){

    let localTime = document.getElementById('localTime');

    console.log(localTime.value);

    let n1 = document.getElementById("numberOne").value;
    
    let n2 = document.getElementById("numberTwo").value;

    let result = document.getElementById("result");
    
    if(n1 == "" || n2 == "")
    {
        alert("Please input 2 numbers");
        return
    }
    resultMessage =  `Your result is: <b>${Number(n1) + Number(n2)}</b>`;
    sessionMessage(null, resultMessage, result)
}

// Mind Game
let letSeeButton = document.getElementById("letSee");

letSeeButton.addEventListener('click', function() {
    let number = document.getElementById("userInputNumber").value;

    let mathRandom = Math.floor(Math.random() * 10);

    let matchingResult = document.getElementById("matchingResult");

    if(number == "")
    {
        alert("Please input a number");
        return
    }

    if( Number(number) == mathRandom )
    {
        console.log(mathRandom);

        successMessage = "<b>Congratulations!!! your number has matched.</b>";
        sessionMessage("green", successMessage, matchingResult)
    }
    else 
    {
        console.log(mathRandom);

        let errorMessage = `<b>Sorry the number is : ${mathRandom}.  Number is not matching. :(</b>` ;
        sessionMessage("red", errorMessage, matchingResult)
    }
})

function sessionMessage(color, text ,element) {
    element.style.color = color;
    element.innerHTML = text ;
    
    setTimeout(function() {
        element.style.color = "";
        element.innerHTML = "";
    },2500)
}


let x;
console.log(x);
x =5;

function generatePyramid() {
    var totalNumberofRows = 5;
    var output = '';

    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            output += j + '  ';
        }
        console.log(output);
        output = '';
    }
}

generatePyramid();


const pyramid = (n)=>{
    const mid = Math.floor((2*n-1)/2);
    
    for(let row=0; row<n; ++row)
    {
      //for each row, make empty steps
      let level = ''
      for(let col=0; col<2*n-1; col++)
      {
        if(mid-row <=col && mid+row >= col)
          level+='#';
        else level +=' ';
      }
      console.log(level);
    }
  }
  pyramid(3);


  // const myArray = [1, 4, 5, 6, 6, 7];

  // const [a,b] = myArray;

  // log(a, b);
  
  // const myObj = {
  //   name: "Shahnewaz",
  //   designation: "Web Developer",
  //   obj : {
  //     mind : {
  //       state : "kichui valo lage na.",
  //       cry : "please help me Allah"
  //     }
  //   }
  // };

  // const { name, designation, obj : {mind: {state,cry}}  } = myObj

  // console.log(`Ami ${name}. Ami ${designation} e achi. amar ${state}. I beg ${cry}`); 

  // import myFunc, { sentence as kotha } from "./problem-solving.js";

  // console.log(myFunc(['a', 'b', 'd', 'c'], 'c'));