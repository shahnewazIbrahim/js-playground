let today = new Date();

let day = today.getDay();

let dayList = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

console.log(`Today is: ${dayList[day].charAt(0).toUpperCase()}${ dayList[day].slice(1)}`);

let hour = today.getHours();

let minute = today.getMinutes();

let second = today.getSeconds();

let prepand = (hour >= 12)? "PM":"AM";
  
hour = (hour >= 12)? hour - 12: hour;

if(hour === 0) {
    if (minute===0 && second===0) { 
    hour=12;
    prepand= (prepand==='PM') ? 'Noon': 'Midnight';
  }else { 
    hour=12;
    prepand= (prepand==='PM') ? 'PM': 'AM';
  }
}
// console.log(`Current Time: ${hour} ${ prepand} : ${minute}:${second}`);


function animate_string(id) 
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;
    var textLength = text.length;
    console.log(text)
    console.log(text.length)
    console.log(text[3])

  setInterval(function () {
    text = text[textLength - 1] + text.substring(0, textLength - 1);
    textNode.data = text;
  }, 300);
}