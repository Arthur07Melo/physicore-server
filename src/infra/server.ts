import express from "express";

const app = express();

app.get("/status", (req, res)=>{
    res.send("<h2>Server is up!!</h2>");
})

app.listen("5000", ()=>{
    console.log("Server running on port: 5000 \nhttp://localhost:5000");
})
