const express = require("express")
const router = express.Router()
const courseData = require("../database/data")

router.get("/" , (req, res)=>{
    res.render('home' , {courseData})
})

module.exports = router 