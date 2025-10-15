const mobil = {
	merek: "Toyota",
	model: "Avanza",
	tahun: 2022,
	warna: "Putih",

	nyalakan: function() {
		console.log("Mesin menyala!");
	}
}

console.log("Mobil:", mobil.merek, mobil.model, "-", mobil.warna, mobil.tahun);

mobil.nyalakan();
