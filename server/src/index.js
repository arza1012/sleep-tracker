const { Router, application } = require("express");
const getFitbitData = require("./routes/getFitbitData");
const getSleep = require("./routes/getSleep");
const getSteps = require("./routes/getSteps");
const userMiddleware = require("./middlewares/user.js");
const signupMiddleware = require("./middlewares/signup.js");
const loginMiddleware = require("./middlewares/login.js");
const records = require("./routes/records.js");
const users = require("./routes/users.js");
const plansRoutes = require("./routes/pagosStripe");
const getUser = require("./routes/getUser.js");
const getComments = require("./routes/Comments/getComments.js");
const postComment = require("./routes/Comments/postComment.js");
const deleteComment = require("./routes/Comments/deleteComment.js");
const updateProfile = require("./routes/updateProfile.js");
const changePassword = require("./routes/changePassword.js");
const deleteUser = require("./routes/deleteUser.js");
const getCurrentComment = require("./routes/Comments/getCurrentComment");

const webHook = require("./routes/webhook");

const router = Router();

router.use("/fitbit", getFitbitData);
router.use("/sleep", getSleep);
router.use("/steps", getSteps);
router.use("/user", userMiddleware);
router.use("/user", deleteUser);
router.use("/signup", signupMiddleware);
router.use("/login", loginMiddleware);
router.use("/records", records);
router.use("/users", users);
router.use("/plans", plansRoutes);
router.use("/myuser", getUser);
router.use("/changeprofile", updateProfile);
router.use("/changepassword", changePassword);
router.use("/deleteuser", deleteUser);
router.use("/getcomments", getComments);
router.use("/postcomment", postComment);
router.use("/deletecomment", deleteComment);
router.use("/getcurrentcomment", getCurrentComment);
router.use("/webhook", webHook);

module.exports = router;
