var check;
let option1=document.getElementById('option1');
let option2=document.getElementById('option2');
let option3=document.getElementById('option3');


function division(){
    let first_num=Math.floor((Math.random()*5)+1);
    
    let second_num=Math.floor((Math.random()*5)+1);
    
    document.getElementById('operator').innerHTML= "/";
    
    check=Math.floor((Math.random()*3));
        
    console.log(check);
    if(  first_num % second_num==0){

        document.getElementById('first_num').innerHTML=first_num;
        document.getElementById('second_num').innerHTML=second_num;
        let result=first_num / second_num;
     if(check ==0){
        document.getElementById('first_ans').innerHTML=result;
        document.getElementById('second_ans').innerHTML=Math.floor((Math.random()*6)+3);
        document.getElementById('third_ans').innerHTML=Math.floor((Math.random()*6)+3);
    }
    if(check ==1){
        document.getElementById('first_ans').innerHTML=Math.floor((Math.random()*6 )+3);
        document.getElementById('second_ans').innerHTML=result;
        document.getElementById('third_ans').innerHTML=Math.floor((Math.random()*6)+3);
    }
    if(check==2){
        document.getElementById('first_ans').innerHTML=Math.floor((Math.random()*6)+3);
        document.getElementById('second_ans').innerHTML=Math.floor((Math.random()*6)+3);
        document.getElementById('third_ans').innerHTML=result;
    }
}
}
let div_score=0;
let div_attempts=0;
division();
option1.addEventListener('click', function(){
    if(check==0){
        div_score=div_score+1;
        division();
    }
    else{
        division();
    }
    div_attempts=div_attempts+1;
    localStorage.setItem('div_scores',div_score);
    localStorage.setItem('div_attempt', div_attempts);
});

option2.addEventListener('click', function(){
    if(check==1){
        div_score=div_score+1;
        division();
    }
    else{
        division();
    }
    div_attempts=div_attempts+1;
    localStorage.setItem('div_scores',div_score);
    localStorage.setItem('div_attempt', div_attempts);
});

option3.addEventListener('click', function(){
    if(check==2){
        div_score=div_score+1;
        division();
    }
    else{
        division();
    }
    div_attempts=div_attempts+1;
    localStorage.setItem('div_scores',div_score);
    localStorage.setItem('div_attempt', div_attempts);
});
