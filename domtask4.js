console.dir(document);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.doctype);
console.log(document.body);
console.log(document.all[10]);
console.log(document.forms);
console.log(document.links);
console.log(document.images);
//GET ELEMENT BY ID
//console.log(document.getElementById('header-title'));
var headerTitle=document.getElementById('header-title');
var header= document.getElementById('main-header');
console.log(headerTitle);
headerTitle.textContent='hello';
headerTitle.innerText='welcome to Ds';
headerTitle.innerHTML='<h2> welcome to Ds</h2>';
header.style.borderBottom='solid 3px #000' ;
//header.style.color='blue';
//get elements by class name
var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='Namste';
items[1].style.fontWeight= 'bold';
items[2].style.fontWeight= 'bold';
items[3].style.fontWeight= 'bold';
items[0].style.fontWeight= 'bold';
items[2].style.backgroundColor='green';
items[2].style.color='yellow';
items[0].style.color='blue';
items[1].style.color='green';
items[3].style.color='violet';






