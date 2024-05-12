let a=2;
let b=3;
let c=4;
let d=10;
let eilute='--------------';

//1.1
console.log(a == b);
//1.2
console.log(b == c);
//1.3
console.log(a > b);
//1.4
console.log(b > (c * 2));
//1.5
console.log(a %2 === 0);
//1.6
console.log(b % 2 != 0);
//1.7
console.log(c > 0);
//1.8
console.log(a < 0);
//1.9
console.log(b % 4 === 0);
//1.10
console.log(c % 8 === 0);


//2
let amzius= 28;

console.log(eilute);
if (28 >= 18){
console.log('Jūs galite balsuoti');
}


//3
let pazymys7=7;
let pazymys9=9;

console.log(eilute);
console.log((pazymys7 + pazymys9)/2);
if ((pazymys7 + pazymys9)/2 >= 5){
console.log('Vidurkis teigiamas'); 
}


console.log(eilute);
//4.1
if (d % 5 === 0){
    console.log(d * 1);
    console.log(d * 2);
    console.log(d * 3);
    console.log(d * 4);
}

console.log(eilute);
//4.2
if(d % 2 === 0) {
    console.log(d);
    console.log(d * 10);
    console.log(d / 2);
}

console.log(eilute);
//4.3  neesu tikra del sio sprendimo, nes istrynus let=6; ismeta error
if (d % 7 != 0){
    let e=6;
    console.log(d + e);
    console.log(d - e);
    console.log(d * e);
    console.log(d / e);
}
