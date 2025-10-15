const mahasiswa1 = {
    nama: "Budi Santoso",
    nim: "2023001",
    jurusan: "Teknik Informatika"
};

const mahasiswa2 = {
    nama: "Siti Aminah",
    nim: "2023002",
    jurusan: "Sistem Informasi"
};

function tampilkanInfoMahasiswa(mahasiswa) {
    console.log(`Nama: ${mahasiswa.nama}`);
    console.log(`NIM: ${mahasiswa.nim}`);
    console.log(`Jurusan: ${mahasiswa.jurusan}`);
    console.log('-----------------------');
}

tampilkanInfoMahasiswa(mahasiswa1);
tampilkanInfoMahasiswa(mahasiswa2);
