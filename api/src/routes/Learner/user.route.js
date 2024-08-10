const express = require("express");
const router = express.Router();
// const { register, login } = require("../controllers/Learner/user.controller");
const {
  register,
  login,
} = require("../../controllers/Learner/user.controller");

router.route("/sign-up").post(register);
router.route("/sign-in").post(login);

module.exports = router;
