import jwt from "jsonwebtoken"
import randomstring from "randomstring"
import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url"
dotenv.config({path: path.join(path.dirname(fileURLToPath(import.meta.url)), "../env/secret.env")})

import user_model from "../models/user_model.js"
import encrypt_model from "../models/encrypt_model.js"


function getAuthMethod(req,res){
	if(req.user){
		var a = {"email":req.user.email};
		return res.status(200).json(req.user.email);
	}
	else {
		console.log("oh wow")
		return res.status(200).end();
	}
}

async function postSignInMethod(req,res){
	const {email, password} = req.body
	const user = {email, password}
	try{var x = await user_model.getUser(user.email)}
	catch(err){var x = [];}
	if(x.length){
		x=x[0]
		if(await encrypt_model.verifyHash(x.password, user.password)){
			const accessToken = jwt.sign({"email": x.email, "name": x.name, "surname": x.surname}, process.env.ACCESS_TOKEN_SECRET)
			res.set("content-type", "text/plain")
			res.status(200).json({"Authorization": accessToken})
		}
		else{
			res.status(403).end()
		}
	}
	else{
		res.status(400).end()
	}
}

async function postSignUpMethod(req, res){
	const {email, password, confirm, name, surname} = req.body
	var user = {email, password, name, surname}
	try{
		var x = await user_model.getUser(user.email)
	}
	catch(err){var x = []}
	
	if(!x.length){
		if(password === confirm){
			try{
				await user_model.createUser(user.email, user.name, user.surname, await encrypt_model.createHash(user.password))
				user = await user_model.getUser(user.email)
				res.status(200).json(user[0])
			}
			catch(err){res.status(403).end()}
		}
		else{
			res.status(403).end()
		}
	}
	else{
		res.status(403).end()
	}
}

async function postResetPasswordMethod(req, res){
	try{const index = await user_model.getUser(req.body.email)}
	catch(err){const index = []}
	if(index.length){
		const tempPass = randomstring.generate(16)
		await user_model.updateUser(req.body.email, await encrypt_model.createHash(tempPass))
		var user = await user_model.getUser(req.body.email)
		res.status(200).json(user[0])
	}
	else{
		res.status(403).end()
	}
}

async function postUpdatePasswordMethod(req, res){
	console.log(req.user, "\n", req.body.password, "\n", req.body.confirm)
	console.log(Boolean(req.user && (req.body.password == req.body.confirm)))
	if (req.user && req.body.password == req.body.confirm){
		try{
			await user_model.updateUser(req.user.email, await encrypt_model.createHash(req.body.password))
			res.status(200).end()
		}
		catch(err){
			res.status(403).end()
		}
	}
	else if (!req.user){
		res.status(403).end()
	}
	else{
		res.status(403).end()
	}
}

const user_routes = {getAuthMethod, postSignInMethod, postSignUpMethod, postResetPasswordMethod, postUpdatePasswordMethod}

export default user_routes