const {
  addMessage,
  getAllMessage,
} = require("../controller/messagesController");

const router = require("express").Router();

// console.log("At useRouter");
router.post("/addmsg/", addMessage);
router.post("/getmsg/", getAllMessage);

module.exports = router;
