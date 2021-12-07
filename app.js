const express = require('express')
const app = express()
const router = require('./modules/users/routes/userRoutes')

app.use(express.json())
app.use(router)
app.listen(4242,()=>{
    console.log("listening on port 4242");
})
