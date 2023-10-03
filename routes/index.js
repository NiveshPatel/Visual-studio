var express = require('express');
var router = express.Router();
var fs = require("fs");

router.get('/', function (req, res, next) {
  var arr = []

  fs.readdir("./uploads", { withFileTypes: true }, function (err, files) {
    files.forEach(function (dirent) {
      arr.push({ filename: dirent.name, isfolder: dirent.isDirectory() })
    })
    res.render('index', { files: arr });

  })

});


router.get('/createfile', function (req, res) {
  fs.writeFile(`./uploads/${req.query.filename}`, "", function (err) {

    if (err) {
      console.log(err)
    } else {
      res.redirect("/")
    }

  })
})
router.get('/createfolder', function (req, res) {
  fs.mkdir(`./uploads/${req.query.foldername}`, function (err) {

    if (err) {
      console.log(err)
    } else {
      res.redirect("/")
    }

  })
})


router.get('/file/:filename', function (req, res) {
  var arr = []

  fs.readdir("./uploads", { withFileTypes: true }, function (err, files) {
    files.forEach(function (dirent) {
      arr.push({ filename: dirent.name, isfolder: dirent.isDirectory() })
    })
    fs.readFile(`./uploads/${req.params.filename}`, "utf-8", function (err, data) {
      res.render('index2', { files: arr, filename: req.params.filename });

    })

  })
}) 


module.exports = router;
