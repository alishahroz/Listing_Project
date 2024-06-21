const express = require("express");
const router = express.Router({mergeParams: true});                      //merge params used to access parent routes here from app.js file
const wrapAsync = require ("../utils/wrapAsync.js");  
const Review = require ("../models/review.js");   
const Listing = require ("../models/listing.js");                //this will also require for reviews
const {validateReview, isLogedIn, isReviewAuthor} = require ("../middleware.js");
const { deleteReview, postNewReview } = require("../controllers/reviews.js");







// Review
// post route
router.post("/", isLogedIn, validateReview, wrapAsync( postNewReview));




// delete review route
router.delete("/:reviewId", isLogedIn, isReviewAuthor, wrapAsync(deleteReview));


module.exports = router;