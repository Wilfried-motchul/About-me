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

//this fuction will ask yes or no question to the user
function YesAndNoQuestion(){

    // document.write('<h3>answer the following question by yes,y or no,n</h3>');
    alert('nswer the following question by yes,y or no,n');
    var answer =prompt('I\'m under 26 years old');
    answer = answer.toLowerCase();
    var response;
    if (answer === 'yes' || answer === 'y'){
        // console.log('that\'s correct!');
        response = 'that\'s correct!';
    }else if( answer === 'no' || answer === 'n'){
        // console.log('I\'m actually 25 years old :(');
        response = 'I\'m actually 25 years old :(';
    }else{
        // console.log('you did not answer tht question preoprely please make sure to answer the next question by yes,y or no,n');
        response = 'you did not answer that question preoprely please make sure to answer the next question by yes,y or no,n';
    }
    // document.write('<h3>' + response + '</h3>');
    alert(response);

    answer = prompt('I was born in Cameroon');
    answer = answer.toLowerCase();
    if (answer === 'yes' || answer === 'y'){
        //console.log('that\'s right! in central Africa')
        response='that\'s right! in central Africa';
    }else if( answer === 'no' || answer === 'n'){
         //console.log('I actually was :(')
        response='I actually was :( ';
    }else{
        // console.log('you did not answer tht question preoprely please make sure to answer the next question by yes,y or no,n');
        response = 'you did not answer tht question preoprely please make sure to answer the next question by yes,y or no,n';
    }
    // document.write('<h3>' + response + '</h3>');
    alert(response);


    answer = prompt ('I\'m a single child');
    answer = answer.toLowerCase();
    if (answer === 'yes' || answer === 'y'){
        //console.log('come on man! I\'m Africain... I have 5 sublings')
        response='come on man! I\'m Africain... I have 5 sublings';
    }else if( answer === 'no' || answer === 'n'){
         //console.log('yep! you got it right! I have 5 sublings')
        response='yep! you got it right! I have 5 sublings';
    }else{
        // console.log('you did not answer tht question preoprely please make sure to answer the next question by yes,y or no,n');
        response = 'you did not answer tht question preoprely please make sure to answer the next question by yes,y or no,n';
    }
    // document.write('<h3>' + response + '</h3>');
    alert(response);

    answer=prompt('I have a pet');
    answer = answer.toLowerCase();
    if (answer === 'yes' || answer === 'y'){
        //console.log('you got it! his name is Symba!');
        response='you got it! his name is Symba!';
    }else if( answer === 'no' || answer === 'n'){
         //console.log('you wrong!! ;)')
        response='you wrong!! ;)';
    }else{
        // console.log('you did not answer tht question preoprely please make sure to answer the next question by yes,y or no,n');
        response = 'you did not answer tht question preoprely please make sure to answer the next question by yes,y or no,n';
    }
    // document.write('<h3>' + response + '</h3>');
    alert(response);

    answer=prompt('I\'m a Christian');
    answer = answer.toLowerCase();
    if (answer === 'yes' || answer === 'y'){
        //console.log('that\'s correct! I love Jesus :)');
        response='that\'s correct! I love Jesus :)';
    }else if( answer === 'no' || answer === 'n'){
         //console.log('I am! born and raise ;)')
        response='I am! born and raise ;)';
    }else{
        // console.log('you did not answer tht question preoprely please make sure to answer the next question by yes,y or no,n');
        response = 'you did not answer that question preoprely but it\' fine you will get the chance to take a look at my web site';
    }
    // document.write('<h3>' + response + '</h3>');
    alert(response);
}
