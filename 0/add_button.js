//console.log("hello world");

var readInput  = function(){
    var input = document.getElementById('input1').value;
    console.log(input);
    
};

var btn2 = document.createElement('button');
btn2.innerHTML='button2';
btn2.onclick = readInput;
var test = document.getElementById('test');
test.appendChild(document.createElement('br'));
test.appendChild(btn2);