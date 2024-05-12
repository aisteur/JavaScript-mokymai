let a=5;
let b=7;
let c=9;
let eilute='----------------';

//1.1
if (a > b){
    console.log('a daugiau uz b');
}
else if (a < b){
    console.log('a mažiau uz b');
}

//1.2
console.log(eilute);
if (b > c){
    console.log('b daugiau uz c');
}
else if (b < c){
    console.log('b mažiau uz c');
}

//1.3
console.log(eilute);
if (c > a){
    console.log('c daugiau uz a');
}
else if(c < a){
    console.log('c mažiau uz a');
}

//1.4
console.log(eilute);
if (a === b){
    console.log('a lygu b');
}
else if (a != b){
    console.log('a nelygu b');
}

//1.5 
console.log(eilute);
if (b === c) {
    console.log('b lygu c');
}
else if (b != c){
    console.log('b nelygu c');
}

//1.6
console.log(eilute);
if (a === 0) {
    console.log('a lygu 0');
}
else if (a != 0){
    console.log('a nelygu 0');
}

//1.7
console.log(eilute);
if (b < -0) {
    console.log('b neigiamas ');
}
else if (b > -0){
    console.log('b teigiamas');
}

//1.8
console.log(eilute);
if (c > 0) {
    console.log('c teigiamas');
}
else if (c < 0){
    console.log('c neigiamas');
}

//2
let pazymys=8;
console.log(eilute);

//2.1
if (pazymys === 10){
    console.log('puiku');
}

//2.2
else if (pazymys >= 9){
    console.log('labai gerai');
}

//2.3
else if (pazymys >= 7){
    console.log('gerai');
}
//2.4
else if (5 <= pazymys){
    console.log('patenkinamai');
}

//2.5
else if (pazymys < 5){
    console.log('egzaminas neišlaikytas');
}