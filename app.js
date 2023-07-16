const express=require("express")
const bodyParser=require("body-parser")
const mongoose=require("mongoose");
const ejs=require("ejs")
const app=express();
const url="mongodb://127.0.0.1:27017/wikiDB"
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
async function connectDB(url){
 try{
    mongoose.connect(url)
 }
 catch(err){
    console.log(err)
 }
}
const articleSchema=new mongoose.Schema({
    title:String,
    content:String
})
const Article=mongoose.model("article",articleSchema);
app.listen(3000,function(req,res){
    console.log("Listening on port 3000")
})