const messagesModel = require("../model/messagesModel");

module.exports.addMessage = async (req, res, next) => {
  try {
    const { from, to, message } = req.body;
    const data = await messagesModel.create({
      message: { text: message },
      users: [from, to],
      sender: from,
    });
    if (data) return res.json({ msg: "Message added successfuly" });
    return res.json({ msg: " Failed to add message to the database" });
  } catch (err) {
    next(err);
  }
};

module.exports.getAllMessage = async (req, res, next) => {};
