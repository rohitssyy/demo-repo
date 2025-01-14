
const exp = require("express")
const app = exp()
const port = 5000;

app.set("view engine", "ejs")
app.use(exp.urlencoded( {extended: true}))

const userRouter = require('./routes/userFILE') 
app.use("/rohit/users", userRouter)


// app.use(middlewaree) here if you put it will be for all the server but you can set middleware for individual endpoints too 


app.use(exp.static("public")); // Built-in middleware function // public is a place where a static files are stored like hmtl , css ,js


app.get('/rohit', middlewaree , (req, res)=>{
    
    res.send("inside a get request");
    console.log("Hello World");
    
    
    
    // res.render('index.ejs')
    // res.end("THE END");
    // console.log("Control will reach here but remember you can only send res.anything one time after that no ")
    // res.render("index" , { text : " here you can pass an object as second parameter"}) // it is used to send html files
    // res.end("hello");
    // res.download("Nexpress.js")
    // res.status(404).json({ messa: "hello" })    
    // res.send("hello");  basic thing just to check it
    // res.sendStatus(502); prints the status on the page
    // res.status(404).send("WHATEVER THE 404 IS ")

})


function middlewaree(req, res, next) {
    console.log(req.originalUrl)
    next()
}
    


app.listen(port)
