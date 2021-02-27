let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();


let grade1Schema = require('../models/grade1');

router.route('/create-grade1').post((req, res, next) => {
console.log(req.body)
  grade1Schema.create(req.body, (error, data) => {
    if (error) {
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

router.route('/').get((req, res) => {
  grade1Schema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


router.route('/edit-grade1/:id').get((req, res) => {
  grade1Schema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


router.route('/update-grade1/:id').put((req, res, next) => {
  grade1Schema.findByIdAndUpdate(req.params.id, {
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

router.route('/delete-grade1/:id').delete((req, res, next) => {
  grade1Schema.findByIdAndRemove(req.params.id, (error, data) => {
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