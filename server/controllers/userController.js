const User = require("../models/user");

class UserController {
  static async getUsers(req, res, next) {
    try {
      const users = await User.getUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = UserController;
