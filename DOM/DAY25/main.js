let d = document;
console.log(d);
console.log(d.links);
console.log(d.title);
console.log(d.head);
var v = d.getElementById('ada');
v.innerHTML = '<p>MOD</p>';
var f = d.getElementById('dad');
f.innerText = '<p>MOD</p>';
var g = d.getElementById('FSD');
g.style.textDecoration = "none";
g.style.color = "rebeccapurple";
g.style.fontWeight = "bolder";
var j = d.getElementsByClassName('asa')[0];
j.style.color = 'slateblue';
j.style.textDecoration = 'none';
j.style.fontWeight = 'bolder';