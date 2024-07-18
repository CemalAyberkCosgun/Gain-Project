//Initializations
const express = require("express")
const path = require("path")
const jwt = require("jsonwebtoken")
const fs = require("fs")
const randomstring = require("randomstring")

require("dotenv").config()

const server = express()
server.use(express.urlencoded({extended:false}))
server.use(express.json())

var userList = fs.readFileSync("./user_list.json")
userList = JSON.parse(userList)

//Functions

const middleware = require("./project/middleware.js")

//Server Methods
server.get("/api/v1/auth", middleware.checkUser, (req, res)=>{
	if(req.user){
		return res.status(200).json(req.user.email);
	}
	else {return res.status(200);
	}
})

server.post("/api/v1/auth/sign-in", (req, res)=>{
	const {email, password} = req.body
	const user = {email, password}
	const x = userList.find(x => x.email === user.email)
	if(x){
		if(x.password === user.password){
			const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
			res.set("content-type", "text/plain")
			res.status(200).json(accessToken)
		}
		else{
			res.status(403)
		}
	}
	else{
		res.status(403)
	}
})

server.post("/api/v1/auth/sign-up", (req, res)=>{
	const {email, password, confirm} = req.body
	const user = {email, password}
	const x = userList.find(x => x.email === user.email)
	
	if(!x){
		if(password === confirm){
			userList.push(user)
			middleware.updateJSON(userList)
			res.status(200).json(user)
		}
		else{
			res.status(403)
		}
	}
	else{
		res.status(403)
	}
})

server.post("/api/v1/auth/reset-password", (req, res)=>{
	console.log(req.body.email)
	console.log(userList.findIndex(x=>x.email === req.body.email))
	var index = userList.findIndex(x=>x.email === req.body.email)
	if(index !== -1){
		const tempPass = randomstring.generate(16)
		userList[index].password = tempPass
		middleware.updateJSON(userList)
		res.status(200).json(userList[index])
	}
	else{
		res.status(403)
	}
})

server.post("/api/v1/auth/update-password", middleware.checkUser, (req, res)=>{
	if (req.user & req.body.password === req.body.confirm){
		userList[userList.findIndex(x=>x.email === req.user.email)].password = req.body.password
		middleware.updateJSON(userList)
		res.status(200)
	}
	else if (!req.user){
		res.status(403)
	}
	else{
		res.status(403)
	}
})

server.listen(1234, ()=>{
	console.log("Site started")
})