let valandos=8;
let kiekPerVal=20;
let darbuotojai=4;
let savikaina=0.35;
let kaina=1.2;
let uzsakymas=200;
let eilute='-----------------';

//1
console.log((valandos * kiekPerVal * 4) + ' - kepykla iskepa per diena');

//2
console.log(eilute);
console.log(valandos * kiekPerVal * savikaina * 4 + ' - visos dienos kepalu savikaina');

console.log(valandos * kiekPerVal * kaina * 4 + ' - gautos pajamos pardavus');

console.log ((valandos * kiekPerVal * kaina)*4 - (valandos * kiekPerVal * savikaina)*4 + ' - dienos pelnas pardavus')

//3
console.log(eilute);
if ((valandos * kiekPerVal * 4) >= 200){
    console.log('kepykla ivykdys dienos uzsakyma');
}
else if ((valandos * kiekPerVal * 4) < 200){
    console.log('kepykla neivykdys dienos uzsakymo');
}

//4
console.log(eilute);
console.log(200 * savikaina + ' - vieno uzsakymo savikaina' );
console.log(200 * kaina + ' - vieno uzsakymo pardavimai');
console.log((200 * kaina) - (200 * savikaina) + ' - tikrasis dienos pelnas');