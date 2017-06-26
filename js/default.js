var li=document.createElement('li');
li.textContetnt='アイテム';
document.getElementById('list').appendChild(li);

docmuent.getElementById('form').onsubmit=function()
{
window.alert('押されました！');
};
