const User = require ("../models/user");




module.exports.renderSignUpForm  = (req, res) => {
    res.render("./users/signup.ejs");
};



module.exports.postSignUpForm =  async(req, res) => {
    try{
        const { username, email, password } = req.body;
    const newUser = new User({ username, email });
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    req.login(registeredUser, (err) => {
        if(err) {
            return next (err);
        }
    req.flash("success", "Welcome here");
    res.redirect("/listings");
    })
    } catch(e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }  
};




module.exports.renderLoginForm =  (req, res) => {
    res.render("./users/login.ejs");
};




module.exports.postLogInForm =  async (req, res) => {
    req.flash("success", "Welcome back");
    let redirectUrl = res.locals.redirectUrl || ("/listings");
    res.redirect(redirectUrl);
};




module.exports.logOutUser =  (req, res, next) =>{
    req.logout((err) => {
        if(err) {
           return next(err);
        }
        req.flash("success","you are successfuly logout");
        res.redirect("/listings");
    })
};