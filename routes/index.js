const express = require('express');
const router = express.Router();
const timesheets = require('../mockData');

/* GET Timesheet by ID */
router.get('/timesheet/:id', (req, res, next) => {
  let reqID = req.params.id;
  checkValidId(reqID);
  let result = timesheets[reqID]
  if(result) {
    res.send(result);
  } else {
    throw `Sorry, no timesheet with supplied id:${reqID}`;
  }
});


//param = ID<int> return = <bool>
const checkValidID = (ID) => {
  
}


module.exports = router;
