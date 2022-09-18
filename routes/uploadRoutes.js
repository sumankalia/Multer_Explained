const express = require("express");
const csvController = require("../controllers/uploadController");
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    if(!fs.existsSync('public')){
      fs.mkdirSync('public');
    }

    if(!fs.existsSync('public/files')){
      fs.mkdirSync('public/files');
    }

    cb(null, 'public/files');
  },
  filename: function(req, file, cb){
    cb(null, Date.now() + file.originalname);
  }
})


const upload = multer({
  storage: storage,
  // fileFilter: function(req, file, cb){
  //   const ext = path.extname(file.originalname);

  //   if(ext !== '.jpg' && ext !== '.png'){
  //     return cb(new Error('Only jpg files are allowed'));
  //   }

  //   cb(null, true);
  // }
})

const router = express.Router();

//post create new media
router.post(
  "/create",
  upload.fields([
    {
      name: 'uploads',
      maxCount: 5
    }
  ]),
  csvController.create
);

module.exports = router;
