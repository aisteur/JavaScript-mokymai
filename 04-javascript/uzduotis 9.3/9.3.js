let a=39;
let eilute='---------------';

//1
if (a % 2 === 0){
    console.log('skaicius lyginis');
}
else if (a % 2 !==0){
    console.log('skaicius nelyginis');
}

//2
console.log(eilute);
if (a % 7 === 0 ){
    console.log('skaicius dalinasi is 7');
}
else if (a % 7 !== 0)
    console.log('skaicius nesidalina is 7');

//3

let img='../uzduotis 9.3/euro.jpg'
console.log(eilute);
if (img.endsWith ('jpg') ){
    console.log(img, '-', 'sis failas blogas');
}
else if (img.endsWith ('js') ){
    console.log(img, '-' ,'sis failas geras');
}