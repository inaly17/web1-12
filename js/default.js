var li=document.createElement('li');
li.textContent='アイテム';
document.getElementById('list').appendChild(li)

document.getElementById('form').onsubmit=function()
{
window.alert(document.getElementById('form').word.value);
};

var message;
for(var i=1;i<100;i++)
{
  li.textContent=i;
  
  if(i%3==0&&i%5==0)
  {
    message='Fizz Buzz';
    li.textContent =message;
  }
  else if(i%5==0)
  {
    message='Buzz';
    li.textContent =message;
  }
  else if(i%3==0)
  {
    message='Fizz';
    li.textContent =message;
  }

  
}
    
  

