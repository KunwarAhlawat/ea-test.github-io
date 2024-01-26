const express = require("express")
const router = express.Router()
const courseData = require("../database/data")

router.get("/courses" , (req, res)=>{


    res.render('courseList' , {courseData})
})

module.exports = router