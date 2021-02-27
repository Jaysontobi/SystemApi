let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();


let gradesSchema = require('../models/grades');

router.route('/create-grades').post((req, res, next) => {
console.log(req.body)
  gradesSchema.create(req.body, (error, data) => {
    if (error) {
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

router.route('/').get((req, res) => {
  gradesSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


router.route('/edit-grades/:id').get((req, res) => {
  gradesSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


router.route('/update-grades/:id').put((req, res, next) => {
  gradesSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Student updated successfully !')
    }
  })
})

router.route('/delete-grades/:id').delete((req, res, next) => {
  gradesSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;