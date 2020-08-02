/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
'use strict';
// this fuction will ask the user to enter his name and will show the user's name in the welcome message.
function welcome(){
  var name = prompt('Hello there! what\'s your name?');
  var message = 'Welcome, '+name.toLocaleUpperCase();
  return document.write('<h1>'+message+'</h1>');
}
var scrore = 0;

//this fuction will ask yes or no question to the user
function YesAndNoQuestion(){
    alert('nswer the following question by yes,y or no,n');
    var answer =prompt('I\'m under 26 years old');
    answer = answer.toLowerCase();
    var response;
    if (answer === 'yes' || answer === 'y'){
        response = 'that\'s correct!';
        scrore++;
    }else if( answer === 'no' || answer === 'n'){
        response = 'I\'m actually 25 years old :(';
    }else{
        response = 'you did not answer that question preoprely please make sure to answer the next question by yes,y or no,n';
    }
    alert(response);

    answer = prompt('I was born in Cameroon');
    answer = answer.toLowerCase();
    if (answer === 'yes' || answer === 'y'){
        response='that\'s right! in central Africa';
        scrore++;
    }else if( answer === 'no' || answer === 'n'){
        response='I actually was :( ';
    }else{
        response = 'you did not answer tht question preoprely please make sure to answer the next question by yes,y or no,n';
    }
    alert(response);


    answer = prompt ('I\'m a single child');
    answer = answer.toLowerCase();
    if (answer === 'yes' || answer === 'y'){
        response='come on man! I\'m Africain... I have 5 sublings';
    }else if( answer === 'no' || answer === 'n'){
        response='yep! you got it right! I have 5 sublings';
        scrore++;
    }else{
        response = 'you did not answer tht question preoprely please make sure to answer the next question by yes,y or no,n';
    }
    alert(response);

    answer=prompt('I have a pet');
    answer = answer.toLowerCase();
    if (answer === 'yes' || answer === 'y'){
        response='you got it! his name is Symba!';
        scrore++;
    }else if( answer === 'no' || answer === 'n'){
        response='you wrong!! ;)';
    }else{
        response = 'you did not answer tht question preoprely please make sure to answer the next question by yes,y or no,n';
    }
    alert(response);

    answer=prompt('I\'m a Christian');
    answer = answer.toLowerCase();
    if (answer === 'yes' || answer === 'y'){

        response='that\'s correct! I love Jesus :)';
        scrore++;
    }else if( answer === 'no' || answer === 'n'){
        response='I am! born and raise ;)';
    }else{
        response = 'you did not answer that question preoprely but it\' fine you will get the chance to take a look at my web site';
    }
    alert(response);
}

function highLow(){
    var question = Number(prompt('How many borthers I\'ve got?'));
    var answer = 5;
    var attempt = 1;
    while(attempt < 4){
        attempt++;
        if(question < answer ){
            alert('too low');
            question = Number(prompt('How many borthers I\'ve got?'));
        }else if(question > answer){
            alert('too high');
            question = Number(prompt('How many borthers I\'ve got?'));
        }else {
            attempt = 5;
            alert('that\'s right!');
            scrore++;
        }
        if(question !== answer && attempt === 4){
            alert('5 is the right answer!');
        }
    }
}

function cities(){
    var ArrayCities = ['seattle', 'san fransisco', 'new york','toulous'];
    var question = prompt('what\'s one of my favorit cities?').toLowerCase();
    var numtried = 1;
    var attempt = 6;
    while(numtried < attempt){
        for(var i=0; i<ArrayCities.length ; i++){
            if(question === ArrayCities[i]){
                alert('yep! that\'s one of them');
                scrore++;
                numtried = attempt;
            }
        }
        if(numtried !== attempt){
        alert('that wasn\'t it');
        question = prompt('what\'s one of my favorit cities?').toLowerCase();
        numtried++;
        }
        if(question !== ArrayCities[i] && numtried === attempt){
            var message ='';
            for (var j =0 ; j<ArrayCities.length-1 ; j++){
                message += ArrayCities[j]+', ';
            }
            message+= ArrayCities[ArrayCities.length-1]+'.';
            alert('Here are all of the correct answer : '+message);
        }
    }
    alert('out of all the question, you answer '+ scrore+' correctly');
}