const express = require("express");
const router = express.Router();
const wrapAsync = require ("../utils/wrapAsync.js");       
const Listing = require ("../models/listing.js");
const {isLogedIn, isOwner, validateListing} = require ("../middleware.js");
const { index, renderNewForm, showForm, createForm, editForm, updateForm, deleteForm } = require("../controllers/listings.js");

const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });



router.route("/")
.get( wrapAsync(index))
.post( isLogedIn, upload.single('listing[image]'), validateListing,
        wrapAsync(createForm));


// .post(  (req, res) => {
//         res.send(req.file);
// });


                    
 //  new route
router.get("/new", isLogedIn, (renderNewForm));


router.route("/:id")
.get( wrapAsync( showForm))
.put( isLogedIn, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(updateForm))
.delete( isLogedIn, isOwner, wrapAsync(deleteForm));
                    
                    
// Edit route for get request
router.get("/:id/edit", isLogedIn, isOwner, wrapAsync(editForm));
                


module.exports = router;