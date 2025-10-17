import { formatRupiah,capitalize } from "./2.js";

const harga = 1500000;
const namaProduk = "laptop gaming";

console.log(`Harga Produk: ${formatRupiah(harga)}`);
console.log(`Nama Produk: ${capitalize(namaProduk)}`);