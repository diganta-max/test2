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
//var items=document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent='Namste';
//items[1].style.fontWeight= 'bold';
//items[2].style.fontWeight= 'bold';
//items[3].style.fontWeight= 'bold';
//items[0].style.fontWeight= 'bold';
//items[2].style.backgroundColor='green';
//items[2].style.color='yellow';
//items[0].style.color='blue';
//items[1].style.color='green';
//items[3].style.color='violet';
//GET ELEMENT BY TAG NAME
var li= document.getElementsByTagName('li');
console.log(li);
//console.log(li[1]);
//li[1].textContent='Namste';
//li[1].style.fontWeight= 'bold';
//li[2].style.fontWeight= 'bold';
//li[3].style.fontWeight= 'bold';
//li[0].style.fontWeight= 'bold';
//li[1].style.backgroundColor='green';
//li[2].style.textContent.display="none";
//li[0].style.color='blue';
//li[1].style.color='green';
//li[3].style.color='violet';
 //for (var i=0;i<li.length;i++){
   // li[i].style.backgroundColor='pink';
 //}
 //qurey selector
 var header= document.querySelector('#main-header');
 header.style.borderBottom='solid 4px #000';
 var input =document.querySelector('input');
 input.value='india '

 var submit= document.querySelector('input[type="submit"]');
 submit.value="SEND"
 //var item=document.querySelector('.list-group-item');
 //item.style.color='green';
 //for (var i=0;i<item.length;i++){
   //item[i].style.Color='green';
   var secondItem=document.querySelector('.list-group-item:nth-child(2)');
 secondItem.style.color='green';
 //qurey selector all
 var odd= document.querySelectorAll('li:nth-child(odd)');
 for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
 }









