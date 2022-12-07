const UserController = require("../controllers/userController");

const router = require("express").Router();

router.get("/", (req, res) => res.status(200).json({ message: "ok" }));
router.get("/users", UserController.getUsers);

module.exports = router;
