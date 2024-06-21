const express = require("express");
const router = express.Router();    
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware");
const { renderSignUpForm, postSignUpForm, renderLoginForm, postLogInForm, logOutUser } = require("../controllers/users");

router.route("/signup")
.get( (renderSignUpForm))
.post( wrapAsync(postSignUpForm));



router.route("/login")
.get((renderLoginForm))
.post( saveRedirectUrl, passport.authenticate('local', { failureRedirect: '/login', failureFlash: true, }), (postLogInForm));


router.get("/logout", (logOutUser))

module.exports = router;  