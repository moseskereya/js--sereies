const Mybtn = document.querySelector('.btn');
const Myclass = document.querySelector('.container');
const Mybody = document.querySelector('body');
const MyTime = document.querySelector('.class2');
let color = ['orange', '#F5B041', '#F7DC6F', '#F1C40F'];

Mybtn.addEventListener('click', function(){
let random = Math.floor(Math.random()*color.length);
    Mybody.style.backgroundColor = color[random];
    MyTime.style.display = 'block';
});


function showTime(){
    var moses = new Date();
    document.querySelector('#time').innerHTML = moses.toLocaleTimeString();
}
setInterval(showTime, 1000);

