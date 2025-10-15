function buatPemain(nama, skor) {
    return {
        nama, // shorthand
        skor,
        tambahSkor (poin) {// method shorthand
            this.skor += poin;
        }
    };
}

const pemain1 = buatPemain("Doni", 50);
pemain1.tambahSkor(10);
console.log(pemain1.skor); // Output: 60