// Data yang diberikan
const dataSiswa = [
    { nama: "Asep", tugas: 80, uts: 95, uas: 85 },
    { nama: "Iwan", tugas: 75, uts: 75, uas: 90 },
    { nama: "Cepi", tugas: 70, uts: 80, uas: 90 },
    { nama: "Agus", tugas: 65, uts: 40, uas: 55 },
    { nama: "Dadang", tugas: 60, uts: 70, uas: 60 }
];

// Fungsi untuk menghitung Nilai Akhir (NA)
function hitungNA(tugas, uts, uas) {
    const na = (0.4 * tugas) + (0.3 * uts) + (0.3 * uas);
    return na;
}

// Mendapatkan elemen <tbody> dari tabel
const tabelBody = document.getElementById("tabelNilai").getElementsByTagName("tbody")[0];

// Melakukan iterasi (perulangan) pada setiap data siswa
dataSiswa.forEach((siswa, index) => {
    // Menghitung NA untuk setiap siswa
    const na = hitungNA(siswa.tugas, siswa.uts, siswa.uas);

    // Membuat baris (tr) baru
    const row = tabelBody.insertRow();

    // Membuat sel (td) untuk setiap kolom
    const cellNo = row.insertCell(0);
    const cellNama = row.insertCell(1);
    const cellTugas = row.insertCell(2);
    const cellUts = row.insertCell(3);
    const cellUas = row.insertCell(4);
    const cellNa = row.insertCell(5);

    // Mengisi data ke dalam sel
    cellNo.textContent = index + 1;
    cellNama.textContent = siswa.nama;
    cellTugas.textContent = siswa.tugas;
    cellUts.textContent = siswa.uts;
    cellUas.textContent = siswa.uas;

    // Menggunakan toFixed(1) untuk membulatkan NA ke 1 desimal, agar sesuai dengan contoh.
    cellNa.textContent = na.toFixed(1); 
});