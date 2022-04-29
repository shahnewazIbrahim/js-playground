let text = " Shahnewaz";

text[text.length - 1] + text.substring(0, text.length - 1);
setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  console.log(text);
}, 100);
