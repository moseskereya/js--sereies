const Mybtn = document.querySelector('.btn');
const Myclass = document.querySelector('.container');
const Mybody = document.querySelector('body');
const MyTime = document.querySelector('.class2');
let color = ['black', 'red', 'green', 'teal'];

Mybtn.addEventListener('click', function(){
let random = Math.floor(Math.random()*color.length);
    MyTime.style.color = color[random];
    MyTime.style.display = 'block';
});


function showTime(){
    var moses = new Date();
    document.querySelector('#time').innerHTML = moses.toLocaleTimeString();
}
setInterval(showTime, 1000);

