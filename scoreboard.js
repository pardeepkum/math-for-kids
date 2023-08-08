let add_attempt=JSON.parse(localStorage.getItem('add_attempt'));
let add_right=JSON.parse(localStorage.getItem('add_scores'));
document.getElementById('add_attempt').innerHTML=add_attempt;
document.getElementById('add_right').innerHTML=add_right;
document.getElementById('add_wrong').innerHTML=add_attempt-add_right;

let sub_attempt=JSON.parse(localStorage.getItem('sub_attempt'));
let sub_right=JSON.parse(localStorage.getItem('sub_scores'));
document.getElementById('sub_attempt').innerHTML=sub_attempt;
document.getElementById('sub_right').innerHTML=sub_right;
document.getElementById('sub_wrong').innerHTML=sub_attempt-sub_right;

let mul_attempt=JSON.parse(localStorage.getItem('mul_attempt'));
let mul_right=JSON.parse(localStorage.getItem('mul_scores'));
document.getElementById('mul_attempt').innerHTML=mul_attempt;
document.getElementById('mul_right').innerHTML=mul_right;
document.getElementById('mul_wrong').innerHTML=mul_attempt-mul_right;

let div_attempt=JSON.parse(localStorage.getItem('div_attempt'));
let div_right=JSON.parse(localStorage.getItem('div_scores'));
document.getElementById('div_attempt').innerHTML=div_attempt;
document.getElementById('div_right').innerHTML=div_right;
document.getElementById('div_wrong').innerHTML=div_attempt-div_right;


let add_average=add_right/add_attempt*100;
if(add_average<50){
    document.getElementsByClassName('remarks')[0].innerHTML="You need to focus on addition";
}
if(add_average>=50&&add_average<70){
    document.getElementsByClassName('remarks')[0].innerHTML="Can do better";
}
if(add_average>=70&&add_average<100){
    document.getElementsByClassName('remarks')[0].innerHTML="Your addition is good! keep it up.";
}
let sub_average=sub_right/sub_attempt*100;
if(sub_average<50){
    document.getElementsByClassName('remarks')[1].innerHTML="You need to focus on subtraction";
}
if(sub_average>=50&&sub_average<70){
    document.getElementsByClassName('remarks')[1].innerHTML="Can do better";
}
if(sub_average>=70){
    document.getElementsByClassName('remarks')[1].innerHTML="Your subtraction is good! keep it up.";
}

let mul_average=mul_right/mul_attempt*100;
if(mul_average<50){
    document.getElementsByClassName('remarks')[2].innerHTML="You need to focus on multiplication";
}
if(mul_average>=50&&mul_average<70){
    document.getElementsByClassName('remarks')[2].innerHTML="Can do better";
}
if(mul_average>=70){
    document.getElementsByClassName('remarks')[2].innerHTML="Your multiplication is good! keep it up.";
}

let div_average=div_right/div_attempt*100;
if(div_average<50){
    document.getElementsByClassName('remarks')[3].innerHTML="You need to focus on division";
}
if(div_average>=50&&div_average<70){
    document.getElementsByClassName('remarks')[3].innerHTML="Can do better";
}
if(div_average>=70){
    document.getElementsByClassName('remarks')[3].innerHTML="Your division is good! keep it up.";
}
let reset=document.getElementsByClassName('reset')[0];

reset.addEventListener('click',function(){
    localStorage.clear();
    location.reload();
});