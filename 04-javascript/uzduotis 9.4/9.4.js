let a=55;
let b=66;
let c=77;
let eilute='---------------';

//1.1
if (a % 2 === 0 ){
    console.log(' skaicius lyginis ');
}
//1.2
else if (a % 5 === 0){
    console.log(a + ' dalinasi is 5 ');
}
//1.3
else if (a % 3 === 0){
    console.log(a + ' dalinas is 3 ');
}
//1.4
else {
    console.log(a + ' nesidalina ');
}

//2.1
console.log(eilute);
if (a == b){
    console.log(a + ' lygu ' + b);
}
//2.2
else if (a == c){
    console.log (a + ' lygu ' + c)
}
//2.3
else if (c > a) {
 console.log(c + ' didesnis ' + a)
}
//2.4
else if (b = (c)*2){
    console.log(b + ' lygu ' + c);
}
//2.5
else if (a % 3 === 0){
    console.log(a + ' dalinasi is 3 ')
}
//2.6
else {
    alert('Nieko nepavyko rasti');
}

