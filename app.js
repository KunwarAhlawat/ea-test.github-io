const express = require("express")
const ejs = require("ejs")
const path = require("path")

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended : true}))
app.use(express.json())

app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname, 'views'))


// routes 
const indexRoute = require("./routes/indexRoute")
const courseRoute = require("./routes/courseRoute")
const courseViewRoute = require("./routes/courseViewRoute")
const adminRoute = require('./routes/adminRoute');
const notFoundRoute = require("./routes/notFoundRoute")
app.use("/" , indexRoute)
app.use("/" , courseRoute)
app.use("/" , courseViewRoute)
app.use("/" , notFoundRoute)
app.use('/', adminRoute);
const port = 3000

app.listen(port , ()=>{
    console.log(`Server is running at ${port}`)
})