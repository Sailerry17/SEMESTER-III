const userProfile = {
    firstname: "Adhitya",
    lastname: "Prahma",
    age: 20,
    email: "adhityaprahma@gmail.com",
    isActive: true,

    getfullname: function() {
        return this.firstname + " " + this.lastname;
    },

    greet() {
        return "Hello, Saya " + this.getfullname() + "!";
    }
};

// 🔹 Ubah nilai lastname
userProfile.lastname = "Jono";

// 🔹 Ubah nilai firstname menggunakan variabel
let namaawal = "firstname";
userProfile[namaawal] = "Budi";

// 🔹 Tambah properti baru
userProfile.telepon = "085721329929";

// 🔹 Tampilkan hasil dengan format rapi
console.log("========== PROFIL PENGGUNA ==========");
console.log(`Nama Lengkap : ${userProfile.getfullname()}`);
console.log(`Umur         : ${userProfile.age}`);
console.log(`Email        : ${userProfile.email}`);
console.log(`Telepon      : ${userProfile.telepon}`);
console.log(`Status Aktif : ${userProfile.isActive ? "Aktif" : "Tidak Aktif"}`);
console.log("-------------------------------------");
console.log(userProfile.greet());
console.log("=====================================");
