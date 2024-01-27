const express = require("express")
const router = express.Router()
 

router.get("/faculty" , (req, res)=>{
    const facultyData = res.locals.commonData.Data.faculty;
    res.render('faculty' , {facultyData})
})

module.exports = router