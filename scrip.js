let totalproduct=document.getElementById("totalproduct");
var prod1=document.createElement("p");


totalproduct.append(prod1);
var prod2=document.createElement("p");



totalproduct.append(prod2);

var prod3=document.createElement("p");

totalproduct.append(prod3);
var total=document.createElement("p");


totalproduct.append(total);



let adding=document.getElementById("add");
var a=0;
adding.addEventListener("click",()=>{
    const items=document.getElementById("items");
    a++;
    items.innerText=`${a}`;
    console.log(items);
    prod1.innerText=`Product-1 100 x  ${a}`;
    total.innerText=`Total   ${(a*100)+(b*200)+(c*300)}`;
    prod1.classList.add("prod1");
    total.classList.add("prod1");
    
});
let sub=document.getElementById("sub");
sub.addEventListener("click",()=>{
    if(a>0){
        a--;
        items.innerText=`${a}`;
        console.log(items);
        prod1.innerText=`Product-1 100 X ${a}`;
        total.innerText=`Total   ${(a*100)+(b*200)+(c*300)}`;
        prod1.classList.add("prod1");
        total.classList.add("prod1");
    }
    
    
});
let adding1=document.getElementById("add1");
var b=0;
adding1.addEventListener("click",()=>{
    const items=document.getElementById("items1");
    b++;
    items.innerText=`${b}`;
    console.log(items);
    prod2.innerText=`Product-2  200 X ${b}`;
    total.innerText=`Total   ${(a*100)+(b*200)+(c*300)}`;
    prod2.classList.add("prod1");
    total.classList.add("prod1");
    
});
let sub1=document.getElementById("sub1");
sub1.addEventListener("click",()=>{
    if(b>0){
        b--;
        items1.innerText=`${b}`;
        console.log(items);
        prod2.innerText=`Product-2 200 X  ${b}`;
        total.innerText=`Total   ${(a*100)+(b*200)+(c*300)}`;
        prod2.classList.add("prod1");
        total.classList.add("prod1");
    }
    
    
});
let adding2=document.getElementById("add2");
var c=0;
adding2.addEventListener("click",()=>{
    const items2=document.getElementById("items2");
    c++;
    items2.innerText=`${c}`;
    console.log(items2);
    prod3.innerText=`Product-3 300 x ${c}`;
    total.innerText=`Total   ${(a*100)+(b*200)+(c*300)}`;
    prod3.classList.add("prod1");
    total.classList.add("prod1");
    
});
let sub2=document.getElementById("sub2");
sub2.addEventListener("click",()=>{
    if(c>0){
        c--;
        items2.innerText=`${c}`;
        console.log(items2);
        prod3.innerText=`Product-3 300 x ${c}`;
        total.innerText=`Total   ${(a*100)+(b*200)+(c*300)}`;
        prod3.classList.add("prod1");
        total.classList.add("prod1");
    }
    
    
});

