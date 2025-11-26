const express=require("express");
const router=express.Router();
router.get("/",(req,res)=>{
    res.send("Welcome to the Blog Home Page");
});
router.get("/posts",(req,res)=>{
    res.send("List of blog posts");
});