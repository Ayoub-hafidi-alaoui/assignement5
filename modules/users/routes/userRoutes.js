const express = require('express')
const router = express.Router();
const {getAllUsers} = require('../controllers/userController')
const {addUser} = require('../controllers/userController')
const {updateUser} = require('../controllers/userController')
const {deleteUser} = require('../controllers/userController')
const {getUserById} = require('../controllers/userController')
const {searchUserByName} = require('../controllers/userController')

router.get("/allUsers",getAllUsers)
router.post("/addUser",addUser)
router.patch("/updateById",updateUser)
router.delete("/deleteUser",deleteUser)
router.get("/getUserById/:id",getUserById)
router.get("/searchUserByName/",searchUserByName)
module.exports = router