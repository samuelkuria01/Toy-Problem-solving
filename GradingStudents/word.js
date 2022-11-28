var  text=print('Enter marks');
var marks=prompt('text');

if (marks>=79){
    console.log('grade ,A');

}else if(marks>60&&marks<79){
    console.log('grade,B');

}else if(marks>59&&marks>49){
    console.log('grade,C');

}else if(marks<49&&marks>40){
    console.log('grade,D');

}else if(marks <40){
    console.log('grade,E');
    
}else{
    console.log('sorry try again');
}