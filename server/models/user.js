const { getDB } = require("../config/mongo");
class DbConnect {
  static getCollection() {
    const collection = getDB().collection("Users");
    return collection;
  }
}

class User {
  static async getUsers() {
    try {
      const users = await DbConnect.getCollection()
        .aggregate([
          {
            $lookup: {
              from: "Addresses",
              localField: "address_id",
              foreignField: "_id",
              as: "addr",
            },
          },
        ])
        .toArray();
      return users;
    } catch (error) {
      return error;
    }
  }
}

module.exports = User;
