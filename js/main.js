
// ----------------------------filte------------------
let product=[];
fetch("https://fakestoreapi.com/products/categories")
.then((data)=>
{
return data.json()
}).then((data)=>
{
console.log(data) 
let str="";
for(x of data)
{
  str+=`<div class="row1"><input type="checkbox" id="inputcheck" name="categorycheckbox" class="inputcheck" value="${x}" onclick="filterdata()">
  <label class="company-btn">${x}</label></div>`;
}
document.getElementById("categories").innerHTML=str;
});
// ------------------------display data--------------------
fetch("https://fakestoreapi.com/products")
.then((prodctdata)=>
{
return prodctdata.json()
}).then((prodct)=>
{
   product=prodct;
   displayProduct(product);

});
function filterdata()
{ 
   let ar=[]; 
let checkdata=document.querySelectorAll('input[name="categorycheckbox"]:checked');
   for(let ch of checkdata){
        ar.push(ch.value);
   }
    console.log(ar);
    let filterproduct=product;
    if(ar.length>0){
     filterproduct=product.filter(function(value){
        return (ar.includes(value.category))
    });
   }
    displayProduct(filterproduct);
}
function displayProduct(prodct){
   let prodctinfo="";

prodct.forEach((value)=>
{
   prodctinfo+=`
   
   <tr>
 <td> <img src="${value.image}"></td>
 <td> <p>${value.title}</p></td>
   <td><dd>${value.price}</dd></td>
   <td><span>${value.category}</span></td>
   
   </tr>`                           
})
document.getElementById("product").innerHTML=prodctinfo;
}