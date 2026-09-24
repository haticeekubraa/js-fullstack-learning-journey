let vize = 55;
let final = 82;

const ortlamaVize = (vize * 40) / 100;
const ortalamaFinal = (final * 60) / 100;

const genelOrtalama = ortlamaVize + ortalamaFinal;

if (genelOrtalama >= 50) {
    console.log(`Tebrikler, ${genelOrtalama} ortalama ile geçtiniz!`);
}
else {
    console.log(`Maalesef, ${genelOrtalama} ortalama ile kaldınız!`);
}