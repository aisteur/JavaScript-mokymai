let a=3;
let b=6;
let c=9;
let d=11;
let eilute='---------------';
 
//1
switch (3) {
    case 1:
        console.log('Vartotojas laimejo vandens');
        break;
    case 2:
        console.log('Vartotojas laimejo limonada');
        break;
    case 3:
        console.log('Vartotojas laimejo arbata');
        break;
    case 4:
        console.log('Vartotojas laimejo kava');
        break;
    default:
        alert('Pasirinkimas neegzistuoja');
}

//2
console.log(eilute);
switch (6) {
    case 1:
        console.log(b + c + d);
        break;
    case 2:
        console.log(c * d);
        break;
    case 3:
        console.log(b * 6);
        break;
    default:
            alert('Pasirinkimas neegzistuoja');
}

//3
let role='alert';

switch (role){
    case 'alert1':
        alert('Jums reikes perkrauti kompiuteri');
        break;
    case 'alert2':
        alert('DEMESIO! Jusu duomenys buvo pavogti');
        break;
    case 'alert3':
        alert('Ivyko klaida');
        break;
    case 'alert':
        alert('Pabandykite dar karta');
        break;
    default:
        alert('Nerasta');
}
