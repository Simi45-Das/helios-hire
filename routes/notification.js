const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const notificationController = require("../controllers/notification");

// Multer configuration for PDF uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Temporary storage folder
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });

router.post(
  "/submit-notification",
  upload.single("notificationPdf"),
  notificationController.createNotification
);

module.exports = router;
