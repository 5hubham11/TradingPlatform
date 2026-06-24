const { Signup, Login } = require('../Controllers/AuthController')
const router = require('express').Router()
const {userVerification}  = require("../MiddleWares/AuthMiddleware");
 
router.post('/signup', Signup);
router.post('/login', Login);
router.post('/',userVerification);
router.post("/logout", (req, res) => {
  res.clearCookie("token");

  res.json({
    success: true,
  });
});
module.exports = router;    