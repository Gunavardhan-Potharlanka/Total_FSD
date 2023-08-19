// let image = document.getElementById("img_id");
// image.style.width = '300px';
// image.style.display = 'block';
// image.style.marginBottom = '10px';
// function change(){
//     image.src = "images/download (1).jpeg";
// }
let inputbox = document.getElementById('ins');
inputbox.style.width = '300px';
inputbox.style.padding = '10px';
inputbox.style.outline = 'none';
inputbox.style.display = 'block';
inputbox.style.marginBottom = '10px';
inputbox.style.border = '1px solid red';
inputbox.placeholder = 'Enter name';
function check(){
    var h1 = document.getElementById('he');
    if(inputbox.value == ''){
        h1.style.color = 'red';
        h1.innerText = 'Please Enter name';
    }
    else{
        h1.innerText = '';
    }
}
document.getElementsByClassName('topic')[0].style.textTransform = 'lowercase';
document.getElementsByClassName('topic')[0].style.color = 'red';
document.getElementsByClassName('topic')[2].style.color = 'blue';
let l1 = document.getElementsByTagName('li')[0];
l1.innerText = 'Aditya Engineering College';
let tbl = document.getElementById('tab');
tbl.border = '1';
tbl.cellSpacing = '0';
tbl.cellPadding = '10';
for(let i=0;i<9;i++) document.getElementsByTagName('td')[i].innerText = i+1;
let a = document.querySelectorAll('li', 'h1', 'p', 'td');
for(let i=0;i<a.length;i++) a[i].style.color = 'red';
console.log(a);