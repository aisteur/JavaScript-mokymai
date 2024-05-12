let a=11;
let b=28;
let c=6;
let eilute='---------------';
let egz1=5;
let egz2=7;
let egz3=10;

//1
if (a > b && c){
    console.log(a + ' yra didziausias skaicius')
}
else if (b > a && c){
    console.log(b + ' yra didziausias skaicius ');
}
else if (c > a && b){
    console.log(c + ' yra didziausias skaicius ');
}

//2
console.log(eilute);
if (a < b && c){
    console.log(a + ' yra maziausias skaicius')
}
else if (b < a && c){
    console.log(b + ' yra maziausias skaicius ');
}
else if (c < a && b){
    console.log(c + ' yra maziausias skaicius ');
}

//3.1
console.log(eilute);
if (Math.floor((egz1 + egz2 + egz3)/3 <=10 && (a + b + c)/3 >=8)){
    console.log('Gautas vidurkis telpa i [8-10]');
}
//3.2
else if (Math.floor((egz1 + egz2 + egz3) /3 <=8 && (egz1 + egz2 + egz3)/3 >=5)){
    console.log('Gautas vidurkis telpa i [5-8]');
}
//3.3
else if (Math.floor((egz1 + egz2 + egz3) /3 < 5 )){
    console.log('Gautas vidurkis mazesnis uz 5');
}
//4.1
console.log(eilute);
if (a > b || a == 0)
    console.log(a + ' didesnis uz ' + b + ' arba lygus 0');
//4.2
else if (b > a || b == 5){
    console.log(b + ' didesnis uz ' + a + ' arba lygus 5 ');
}
//4.3
else if (a > b || b == 20){
    console.log(a + ' didesnis uz ' + b + 'arba lygus 20 ');
}
//4.4
else if (b > a || b < 100){
    console.log(b + ' didesnis uz ' + a + 'arba mazesnis uz 100 ');
}


