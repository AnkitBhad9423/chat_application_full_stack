const {
  register,
  login,
  setAvatar,
  getAllUsers,
} = require("../controller/usersController");

const router = require("express").Router();

// console.log("At useRouter");
router.post("/register", register);
router.post("/login", login);
router.post("/setAvatar/:id", setAvatar);
router.get("/allusers/:id", getAllUsers);

module.exports = router;
