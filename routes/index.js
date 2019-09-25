const express = require('express');
const router = express.Router();
const timesheets = require('../mockData');

/* GET Timesheet by ID */
router.get('/timesheet/:id', (req, res) => {
  let reqID = req.params.id;
  let validated = checkValidID(reqID);
  if(validated.valid){
    let result = timesheets[reqID];
    if(result) {
      res.json(result);
    } else {
      throw new Error(`Sorry, no timesheet with supplied id: ${reqID}.`);
    }
  } else {
    throw new Error(`${validated.message}`);
  };
});


//param = ID<int> return = <bool>
const checkValidID = (ID) => {
  switch (true) {
    case (ID.length < 5):
      return {
        "valid": false,
        "message": "ID contains too few integers."
      };
    case (isNaN(ID)):
      return {
        "valid": false,
        "message": "ID is not a number."
      };
    default:
      return {
        "valid": true
      };
  }
}


module.exports = router;
