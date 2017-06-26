var li=document.createElement('li');
li.textContent='アイテム';
document.getElementById('list').appendChild(li)

document.getElementById('form').onsubmit=function()
{
window.alert(document.getElementById('form').word.value);
};

var word=function();

for(var i=1;i<word;i++)
{
  var li=document.createElement('li');
  if(i%3==0)
  {
    message='Fizz';
  }
  else if(i%5==0)
  {
    message='Buzz';
  }
  else if(i%3==0&&i%5==0)
  {
    message='Fizz Buzz';
  }
  else
  {
    message='i';
  }
  document.getElementById('choice').textContent =message;
}
    
  

