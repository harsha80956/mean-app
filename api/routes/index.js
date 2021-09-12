const ctrlAuth = require('../controllers/authentication');
const ctrlProfile = require('../controllers/profile');
const ctrlCategory  = require('../controllers/category')
const ctrlEmail  = require('../controllers/email')
const express = require('express');
const jwt = require('express-jwt');
const router = express.Router();

const auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});


// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// category
router.get('/category', auth, ctrlCategory.categoryRead);
router.post('/category', auth, ctrlCategory.categoryWrite);
router.delete('/category/:id', auth, ctrlCategory.categoryDelete);

// Email
router.get('/email/:id', auth, ctrlEmail.emailRead);
router.post('/email', auth, ctrlEmail.emailWrite);
router.delete('/email/:id', auth, ctrlEmail.emailDelete);



// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
