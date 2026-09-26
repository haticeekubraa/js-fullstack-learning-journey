const indirimHesapla = (fiyat, indirimOranı) => {
    const indirim = (indirimOranı/100) * fiyat;
    const sonFiyat = fiyat - indirim;
    return sonFiyat;
}

let urun1 = indirimHesapla(500, 15);
console.log(`1. Ürünün indirimli fiyatı ${urun1} TL`);

let urun2 = indirimHesapla(200, 25);
console.log(`2. Ürünün indirimli fiyatı ${urun2} TL`);