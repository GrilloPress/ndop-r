// External dependencies
const express = require('express');
const router = express.Router();

router.post('/opt-out/v1/details/4_do-you-know-your-NHS-number', function (req, res) {
  let answer = req.body.auth;

  if (answer === 'yes') {

    res.redirect('/opt-out/v1/nhs-number/5_enter-your-NHS-number')

  } else if (answer === 'no') {

    res.redirect('/opt-out/v1/postcode/5_enter-your-postcode')

  } else {
    res.redirect('/opt-out/v1/errors/details/4_no-choice-made')
  }
});

// Branching example
router.post('/opt-out/v1/OTP/7_get-your-security-code', function (req, res) {
  let answer = req.body.channelChoice;

  if (answer === 'email') { // the || means this OR that

    res.redirect('/opt-out/v1/OTP/8_enter-your-security-code')

  } else if (answer === 'text') {

    res.redirect('/opt-out/v1/OTP/8_enter-your-security-code')

  } else if (answer === 'unrecognised') {

    res.redirect('/opt-out/v1/OTP/8X_wrong-details')

  } else {
    res.redirect('/opt-out/v1/errors/OTP/7_no-choice-made')
  }
});

module.exports = router;
