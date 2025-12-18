const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

// middleware bawaan
app.use(express.json());

// ===== ROOT =====
app.get("/", (req, res) => {
  res.send("Student Activity Management System API is running");
});

// ===== TEST LOGIN (BROWSER) =====
app.get("/test-login", (req, res) => {
  const { username, password } = req.query;

  const users = [
    { username: "admin", password: "123", role: "admin" },
    { username: "mhs", password: "123", role: "mahasiswa" }
  ];

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) return res.send("Login gagal");

  const token = jwt.sign(
    { username: user.username, role: user.role },
    "SECRET_KEY"
  );

  res.send(`
    <h2>Login Berhasil</h2>
    <p>Role: ${user.role}</p>
    <p>Token:</p>
    <textarea rows="6" cols="80">${token}</textarea>
  `);
});

// ===== TEST ACTIVITIES (BROWSER) =====
app.get("/test-activities", (req, res) => {
  const token = req.query.token;

  if (!token) return res.send("Token tidak ada");

  try {
    const decoded = jwt.verify(token, "SECRET_KEY");

    res.send(`
      <h2>Daftar Kegiatan</h2>
      <pre>
[
  {
    "title": "Workshop Backend",
    "description": "Belajar Node.js",
    "date": "2025-02-01"
  }
]
      </pre>
      <p>Login sebagai: <b>${decoded.role}</b></p>
    `);
  } catch {
    res.send("Token tidak valid");
  }
});

// ===== TEST JOIN =====
app.get("/test-join", (req, res) => {
  const token = req.query.token;

  try {
    const decoded = jwt.verify(token, "SECRET_KEY");

    if (decoded.role !== "mahasiswa") {
      return res.send("Akses ditolak (bukan mahasiswa)");
    }

    res.send("Mahasiswa berhasil join kegiatan");
  } catch {
    res.send("Token invalid");
  }
});

// ===== SERVER =====
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
