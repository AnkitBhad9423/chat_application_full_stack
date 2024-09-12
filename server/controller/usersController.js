const User = require("../model/userModel");
const bcrypt = require("bcrypt");

module.exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const usernameCheck = await User.findOne({ username });
    if (usernameCheck)
      return res.json({ msg: "Username already used", status: false });
    const emailCheck = await User.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "Email already used", status: false });
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      username,
      password: hashPassword,
    });
    delete user.password;
    return res.json({ status: true, user });
  } catch (err) {
    next(err);
  }
  // console.log("At useModel")

  // console.log(req.body);
};

module.exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user_login = await User.findOne({ username });
    if (!user_login)
      return res.json({ msg: "Incorect username or password", status: false });

    const isPassword = await bcrypt.compare(password, user_login.password);

    if (!isPassword)
      return res.json({ msg: "Incorect username or password", status: false });

    delete user_login.password;

    return res.json({ status: true, user_login });
  } catch (err) {
    next(err);
  }
  // console.log("At useModel")

  // console.log(req.body);
};

module.exports.setAvatar = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const avatarImage = req.body.image;
    const userData = await User.findByIdAndUpdate(userId, {
      isAvatarImageSet: true,
      avatarImage,
    });
    return res.json({
      isSet: userData.isAvatarImageSet,
      image: userData.avatarImage,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({ _id: { $ne: req.params.id } }).select([
      "email",
      "username",
      "avatarImage",
      "_id",
    ]);
    return res.json(users);
  } catch (err) {
    next(err);
  }
};
