const Express = require("express");
const router = Express.Router();
const fs = require("fs")

router.get("/", (req, res)=>{
    const path = __dirname+"/../public/texts/text.txt"
    var text = ""
     fs.readFile(path, (err, data)=>{
        if(err){
            console.log(err);
        }else{
            text = `${data}`
            res.render("./index", {text})
        }
    })
    console.log(text)
})


module.exports = router