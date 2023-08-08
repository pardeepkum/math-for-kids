var check;
let option1=document.getElementById('option1');
let option2=document.getElementById('option2');
let option3=document.getElementById('option3');


function addition(){
    let first_num=Math.floor((Math.random()*20)+1);
    document.getElementById('first_num').innerHTML=first_num;
    let second_num=Math.floor((Math.random()*20)+1);
    document.getElementById('second_num').innerHTML=second_num;
    document.getElementById('operator').innerHTML= "+";
    let result=first_num +second_num;
    check=Math.floor((Math.random()*3));
    console.log(check);
    
     if(check ==0){
        document.getElementById('first_ans').innerHTML=result;
        document.getElementById('second_ans').innerHTML=Math.floor((Math.random()*20)+1);
        document.getElementById('third_ans').innerHTML=Math.floor((Math.random()*20)+1);
    }
    if(check ==1){
        document.getElementById('first_ans').innerHTML=Math.floor((Math.random()*20)+1);
        document.getElementById('second_ans').innerHTML=result;
        document.getElementById('third_ans').innerHTML=Math.floor((Math.random()*20)+1);
    }
    if(check==2){
        document.getElementById('first_ans').innerHTML=Math.floor((Math.random()*20)+1);
        document.getElementById('second_ans').innerHTML=Math.floor((Math.random()*20)+1);
        document.getElementById('third_ans').innerHTML=result;
    }
}
let add_score=0;
let add_attempts=0;
addition();
option1.addEventListener('click', function(){
    if(check==0){
        add_score=add_score+1;
        addition();
    }
    else{
        addition();
    }
    add_attempts=add_attempts+1;
    localStorage.setItem('add_scores',add_score);
    localStorage.setItem('add_attempt', add_attempts);
});

option2.addEventListener('click', function(){
    if(check==1){
        add_score=add_score+1;
        addition();
    }
    else{
        addition();
    }
    add_attempts=add_attempts+1;
    localStorage.setItem('add_scores',add_score);
    localStorage.setItem('add_attempt', add_attempts);
});

option3.addEventListener('click', function(){
    if(check==2){
        add_score=add_score+1;
        addition();
    }
    else{
        addition();
    }
    add_attempts=add_attempts+1;
    localStorage.setItem('add_scores',add_score);
    localStorage.setItem('add_attempt', add_attempts);
});
