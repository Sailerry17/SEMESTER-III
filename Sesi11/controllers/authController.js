const jwt = require("jsonwebtoken");

const users = []; // in-memory storage

exports.register = (req, res) => {
  const { username, password, role } = req.body;

  if (!username || !password || !role) {
    return res.status(400).json({ message: "Data tidak lengkap" });
  }

  users.push({ username, password, role });
  res.json({ message: "Register berhasil" });
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Login gagal" });
  }

  const token = jwt.sign(
    { username: user.username, role: user.role },
    "SECRET_KEY",
    { expiresIn: "1h" }
  );

  res.json({ token });
};
