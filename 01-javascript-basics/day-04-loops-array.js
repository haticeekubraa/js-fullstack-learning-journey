let sayilar = [15, 42, 8, 99, 23, 4];

let enBuyukSayi = sayilar[0];
let enKuyukSayi = sayilar[0];

sayilar.forEach((i) => {
    
    if(i > enBuyukSayi) {
        enBuyukSayi = i;
    }

    if(i < enKuyukSayi) {
        enKuyukSayi = i;
    }
});
console.log("Dizideki en büyük sayı:", enBuyukSayi);
console.log("Dizideki en küçük sayı:", enKuyukSayi);


