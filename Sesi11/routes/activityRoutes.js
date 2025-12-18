const express = require("express");
const router = express.Router();

const auth = require("../middlewares/authMiddleware");
const role = require("../middlewares/roleMiddleware");
const validate = require("../middlewares/activityValidation");

let activities = [];

// GET activities
router.get("/activities", auth, (req, res) => {
  res.json(activities);
});

// POST activities (admin)
router.post("/activities", auth, role("admin"), validate, (req, res) => {
  activities.push(req.body);
  res.json({ message: "Kegiatan berhasil ditambahkan" });
});

// PUT activities (admin)
router.put("/activities/:id", auth, role("admin"), (req, res) => {
  activities[req.params.id] = req.body;
  res.json({ message: "Kegiatan berhasil diperbarui" });
});

// JOIN activity (mahasiswa)
router.post("/activities/:id/join", auth, role("mahasiswa"), (req, res) => {
  res.json({ message: "Mahasiswa berhasil mendaftar kegiatan" });
});

module.exports = router;
