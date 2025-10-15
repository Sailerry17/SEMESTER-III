// Import prompt-sync
const prompt = require("prompt-sync")({ sigint: true });

function hitungHargaAkhir(totalBelanja) {
  let diskon = 0;

  if (totalBelanja > 1000000) {
    diskon = 0.15;
  } else if (totalBelanja > 500000) {
    diskon = 0.10;
  } else {
    diskon = 0;
  }

  let hargaAkhir = totalBelanja - (totalBelanja * diskon);
  return { hargaAkhir, diskon };
}

// Minta input dari user
let input = prompt("Masukkan total belanja: Rp ");
let totalBelanja = parseFloat(input);

// Hitung harga akhir
let hasil = hitungHargaAkhir(totalBelanja);

// Tampilkan hasil
console.log(`Total Belanja : Rp${totalBelanja}`);
console.log(`Diskon        : ${hasil.diskon * 100}%`);
console.log(`Harga Akhir   : Rp${hasil.hargaAkhir}`);
