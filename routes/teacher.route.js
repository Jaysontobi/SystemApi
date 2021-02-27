let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();


let teacherSchema = require('../models/teacher');

router.route('/create-teacher').post((req, res, next) => {
  teacherSchema.create(req.body, (error, data) => {
    if (error) {
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

router.route('/').get((req, res) => {
  teacherSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

router.route('/edit-teacher/:id').get((req, res) => {
  teacherSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


router.route('/update-teacher/:id').put((req, res, next) => {
  teacherSchema.findByIdAndUpdate(req.params.id, {
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

router.route('/delete-teacher/:id').delete((req, res, next) => {
  teacherSchema.findByIdAndRemove(req.params.id, (error, data) => {
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