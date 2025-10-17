import { hitungDiskon,hitungPajak } from "./4.js";

const hargaAwal = 6000;

const hargaSetelahDiskon = hitungDiskon(hargaAwal, 10);
console.log(`Harga setelah diskon 10% : ${hargaSetelahDiskon}`);

const hargaAkhir = hitungPajak(hargaSetelahDiskon, 5);
console.log(`Harga setelah ditambah pajak 5% : ${hargaAkhir}`);

hitungDiskon('seribu', 10);