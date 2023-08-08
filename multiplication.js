var check;
let option1=document.getElementById('option1');
let option2=document.getElementById('option2');
let option3=document.getElementById('option3');


function multiplication(){
    let first_num=Math.floor((Math.random()*8)+1);
    document.getElementById('first_num').innerHTML=first_num;
    let second_num=Math.floor((Math.random()*8)+1);
    document.getElementById('second_num').innerHTML=second_num;
    document.getElementById('operator').innerHTML= "x";
    let result=first_num *second_num;
    check=Math.floor((Math.random()*3));
    console.log(check);
    
     if(check ==0){
        document.getElementById('first_ans').innerHTML=result;
        document.getElementById('second_ans').innerHTML=Math.floor((Math.random()*8)+1);
        document.getElementById('third_ans').innerHTML=Math.floor((Math.random()*8)+1);
    }
    if(check ==1){
        document.getElementById('first_ans').innerHTML=Math.floor((Math.random()*8)+1);
        document.getElementById('second_ans').innerHTML=result;
        document.getElementById('third_ans').innerHTML=Math.floor((Math.random()*8)+1);
    }
    if(check==2){
        document.getElementById('first_ans').innerHTML=Math.floor((Math.random()*8)+1);
        document.getElementById('second_ans').innerHTML=Math.floor((Math.random()*8)+1);
        document.getElementById('third_ans').innerHTML=result;
    }
}
let mul_score=0;
let mul_attempts=0;
multiplication();
option1.addEventListener('click', function(){
    if(check==0){
        mul_score=mul_score+1;
        multiplication();
    }
    else{
        multiplication();
    }
    mul_attempts=mul_attempts+1;
    localStorage.setItem('mul_scores',mul_score);
    localStorage.setItem('mul_attempt', mul_attempts);
});

option2.addEventListener('click', function(){
    if(check==1){
        mul_score=mul_score+1;
        multiplication();
    }
    else{
        multiplication();
    }
    mul_attempts=mul_attempts+1;
    localStorage.setItem('mul_scores',mul_score);
    localStorage.setItem('mul_attempt', mul_attempts);
});

option3.addEventListener('click', function(){
    if(check==2){
        mul_score=mul_score+1;
        multiplication();
    }
    else{
        multiplication();
    }
    mul_attempts=mul_attempts+1;
    localStorage.setItem('mul_scores',mul_score);
    localStorage.setItem('mul_attempt', mul_attempts);
});
