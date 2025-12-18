module.exports = (req, res, next) => {
  const { title, description, date } = req.body;

  if (!title || !description || !date) {
    return res.status(400).json({
      message: "Input kegiatan tidak lengkap"
    });
  }
  next();
};
