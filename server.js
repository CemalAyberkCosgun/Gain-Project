//Initializations
import express from "express"
import jwt from "jsonwebtoken"
import randomstring from "randomstring"
import dotenv from "dotenv"
dotenv.config()

const server = express()
server.use(express.urlencoded({extended:false}))
server.use(express.json())

//Functions

import middleware from "./project/middleware.js"

//Server Methods
server.get("/api/v1/auth", middleware.checkUser, (req, res)=>{
	if(req.user){
		console.log("oh wow")
		return res.status(200).json(req.user.email);
	}
	else {
		console.log("oh wow")
		return res.status(200).end();
	}
})

server.post("/api/v1/auth/sign-in", async(req, res)=>{
	const {email, password} = req.body
	const user = {email, password}
	var x = await middleware.getUser(user.email)
	if(x.length){
		x=x[0]
		if(x.password === user.password){
			const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
			res.set("content-type", "text/plain")
			res.status(200).json(accessToken)
		}
		else{
			res.status(403).end()
		}
	}
	else{
		res.status(403).end()
	}
})

server.post("/api/v1/auth/sign-up", async(req, res)=>{
	const {email, password, confirm, name, surname} = req.body
	var user = {email, password, name, surname}
	var x = await middleware.getUser(user.email)
	
	if(!x.length){
		if(password === confirm){
			await middleware.createUser(user.email, user.name, user.surname, user.password)
			user = await middleware.getUser(user.email)
			res.status(200).json(user[0])
		}
		else{
			res.status(403).end()
		}
	}
	else{
		res.status(403).end()
	}
})

server.post("/api/v1/auth/reset-password", async(req, res)=>{
	const index = await middleware.getUser(req.body.email)
	if(index.length){
		const tempPass = randomstring.generate(16)
		await middleware.updateUser(req.body.email, tempPass)
		var user = await middleware.getUser(req.body.email)
		res.status(200).json(user[0])
	}
	else{
		res.status(403).end()
	}
})

server.post("/api/v1/auth/update-password", middleware.checkUser, async(req, res)=>{
	console.log(req.user, "\n", req.body.password, "\n", req.body.confirm)
	console.log(Boolean(req.user && (req.body.password == req.body.confirm)))
	if (req.user && req.body.password == req.body.confirm){
		await middleware.updateUser(req.user.email, req.body.password)
		res.status(200).end()
	}
	else if (!req.user){
		res.status(403).end()
	}
	else{
		res.status(403).end()
	}
})

server.listen(1234, ()=>{
	console.log("Site started")
})