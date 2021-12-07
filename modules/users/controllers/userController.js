const query = require("../../../configuration/config")

const getAllUsers = (req, res, next)=>{
    const q = "SELECT * FROM users"
    query.execute(q,(err, data)=>{
        if(err) {
            res.json({message: "error",err})
        }
        else {
            res.json({message: "success", data})
        }
    })
}
const addUser = (req, res, next) => {
    const {first_name,last_name,email} = req.body
    const q = `INSERT INTO users(first_name, last_name, email) values ('${first_name}','${last_name}','${email}')`
    query.execute(q,(err,data)=>{
        if(err) {
            res.json({message:"error",err})
        }
        else {
            res.json({message:"success",data})
        }
    })
}
const updateUser = (req, res, next) => {
    const {id, first_name} = req.body;
    const q = `update users set first_name = '${first_name}' where id = '${id}'`
    query.execute(q,(err,data)=>{
        if(err) {
            res.json({message:"error",err})
        }
        else {
            res.json({message: "success",data})
        }
    })
}

const deleteUser = (req, res, next) => {
    const {id} = req.body;
    const q = `DELETE FROM users where id = '${id}'`
    query.execute(q,(err,data) => {
        if(err) {
            res.json({message: "error",err})
        }
        else { 
            res.json({message: "success",data})
        }
    })
}
const getUserById = (req, res, next) => {
    const {id} = req.params;
    const q = `select * from users where id = '${id}'`
    query.execute(q,(err,data)=>{
        if(err) {
            res.json({message:"error",err})
        }
        else { 
            res.json({message:"success",data})
        }
    })
}
const searchUserByName = (req, res, next) => {
    const {first_name} = req.query.name
    const q = `select * from users where first_name like %'${first_name}'%`
    query.execute(q,(err,data)=>{
        if(err) {
            res.json({message:"error",err})
        }
        else {
            res.json({message:"success",data})
        }
    })
}
const getAllUsersReversed = (req, res, next) => {
    const q = "select * from users"
    query.execute(q,(err,data)=>{
        if(err) {
            res.json({message:"error",err})
        }
        else {
            res.json({message:"success",data})
        }
    })
}

const searchUserBtw20and40 = (req, res, next) => {
    const q = "select * from users where age < 30 "
    query.execute(q, (err, data) => {
        if (err) {
            res.json({message:"error",err})
        }
        else {
            res.json({message:"success",data})
        }
    })
}

module.exports = {
    getAllUsers,
    addUser,
    updateUser,
    deleteUser,
    getUserById,
    searchUserByName
}