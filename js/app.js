let num = Number(prompt());

if(num >= 80 && num <=100){
     document.querySelector('button').innerText = 'A+';
}else if(num >= 70 && num <=80){
     document.querySelector('button').innerText = 'A'
}
else if(num >= 60 && num <=70){
     document.querySelector('button').innerText = 'A-'
}
else if(num >= 50 && num <=60){
     document.querySelector('button').innerText = 'B'
}
else if(num >= 40 && num <=50){
     document.querySelector('button').innerText = 'C'
}
else if(num >= 33 && num <=40){
     document.querySelector('button').innerText = 'D'
}
else if(num >= 0 && num <=33){
     document.querySelector('button').innerText = 'F'
}
else{
     document.querySelector('button').innerText = 'Invalid Number'}
