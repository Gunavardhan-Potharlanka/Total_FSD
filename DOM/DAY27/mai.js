let tbl = document.getElementsByTagName('table')[0];
tbl.cellSpacing = '0';
tbl.cellPadding = '10px';
tbl.border = '1';
let arr = [
    {
        'name': 'Guna',
        'course number': 34,
        'course fees': 25000,
        'place': 'Suramplaem'
    },
    {
        'name': 'Vardhan',
        'course number': 2334,
        'course fees': 25500,
        'place': 'Suramplaem'
    },
    {
        'name': 'Mahendra',
        'course number': 36,
        'course fees': 25540,
        'place': 'Suramplaem'
    },
    {
        'name': 'Santosh',
        'course number': 34,
        'course fees': 34600,
        'place': 'Suramplaem'
    }
]
let bd = document.getElementById('bod');
for(let i=0;i<arr.length;i++){
    let row = document.createElement('tr');
    for(let j in arr[i]){
        let col = document.createElement('td');
        col.innerText = arr[i][j];
        row.appendChild(col);
    }
    bd.appendChild(row);
}