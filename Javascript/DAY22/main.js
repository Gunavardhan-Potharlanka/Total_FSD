var a=10, b=70;
document.write(typeof(a)+"<br>");
document.write(a.toString().length+"<br>");
document.write(a/2+"<br>");
document.write(b/2+"<br>");
a+=b.toString();
document.write("Value of a is ", a, "<br>");
document.write("Length of a is ", a.length, "<br>");
document.write(a/2);
let Mycont= document.createElement("div");
document.body.appendChild(Mycont);
Mycont.classList.add("Mycontainer");
let hele=document.createElement("h1");
let bele=document.createElement("button");
let cele=document.createElement("button");
var name=10;
bele.textContent="Click here";
bele.style.margin="3px";
cele.textContent="Clear";
cele.style.margin="3px";
Mycont.appendChild(hele);
Mycont.appendChild(bele);
Mycont.appendChild(cele);
bele.onclick = function(){
    if(a==0){
        hele.innerHTML = "Guna";
        hele.style.color = "rebeccapurple";
        a=1;
    }
    else{
        hele.innerHTML = "Vardhan";
        hele.style.color = "slateblue";
        a=0;
    }
}
cele.onclick = function(){
    hele.textContent="";
}
var c='';
c+= 'asfsasfsa';
var a = 10/3;
document.write(a.toFixed(2), "<br>");
var arr=['Guna', 1, true, 3.33];
document.write(typeof(arr), "<br>");
document.write(typeof(arr[3]), "<br>");
console.log(arr);
document.write(arr.length, "<br>");
document.write(arr);

var g= {
    name: 'guna',
    age: 19,
    college: 'AEC',
    branch: 'CSE'
}
document.write("<br>", g, "<br>");
// document.write("<br>", JSON.stringify(g));
console.log(g.age);
console.log(g.branch);
console.log(g);
var trainees = [
    {
        name: 'guna',
        age: 19,
        branch: 'CSE',
        college: 'AEC'
    },
    {
        name: 'Vardhan',
        age: 18,
        branch: 'ECE',
        college: 'ACET'
    },
    {
        name: 'Veera',
        age: 20,
        branch: 'IT',
        college: 'AEC'
    },
    {
        name: 'Mahendra',
        age: 20,
        branch: 'IT',
        college: 'ACOE'
    },
    {
        name: 'Santosh',
        age: 20,
        branch: 'CSE',
        college: 'ACES'
    }
]
document.write("<br><br>");
for(let i=0;i<trainees.length;i++){
    for(let j in trainees[i]){
        document.write(trainees[i][j], ", ");
    }
    document.write("<br>");
}
let l = 2;
var v = 3;
const pi = 3.14;