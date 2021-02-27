let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');

// Express Route
const userRoute = require('./routes/user.route')
const itemRoute = require('./routes/item.route')
const grade1Route = require('./routes/grade1.route')
const grade2Route = require('./routes/grade2.route')
const grade3Route = require('./routes/grade3.route')
const grade4Route = require('./routes/grade4.route')
const grade5Route = require('./routes/grade5.route')
const grade6Route = require('./routes/grade6.route')
const grade7Route = require('./routes/grade7.route')
const grade8Route = require('./routes/grade8.route')
const grade9Route = require('./routes/grade9.route')
const grade10Route = require('./routes/grade10.route')
const gradesRoute = require('./routes/grades.route')
const teacherRoute = require('./routes/teacher.route')
const advisoryRoute = require('./routes/advisory.route')
const timeKeepingRoute = require('./routes/timeKeepingRoute')
const auditTrailRoute = require('./routes/auditTrail.route')

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true
}).then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/user', userRoute)
app.use('/item', itemRoute)
app.use('/grade1', grade1Route)
app.use('/grade2', grade2Route)
app.use('/grade3', grade3Route)
app.use('/grade4', grade4Route)
app.use('/grade5', grade5Route)
app.use('/grade6', grade6Route)
app.use('/grade7', grade7Route)
app.use('/grade8', grade8Route)
app.use('/grade9', grade9Route)
app.use('/grade10', grade10Route)
app.use('/grades', gradesRoute)
app.use('/teacher', teacherRoute)
app.use('/timekeeping', timeKeepingRoute)
app.use('/advisory', advisoryRoute)
app.use('/auditTrail',auditTrailRoute)


// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});