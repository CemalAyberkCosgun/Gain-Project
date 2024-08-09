import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url"
dotenv.config({path: path.join(path.dirname(fileURLToPath(import.meta.url)), "../env/secret.env")})

import admin_model from "../models/admin_model.js"
import encrypt_model from "../models/encrypt_model.js"

async function postSignInAdminMethod(req,res){
	const {email, password} = req.body
	const admin = {email, password}
	try{var x = await admin_model.getAdmin(admin.email)}
	catch(err){var x = [];}
	if(x.length){
		x=x[0]
		if(await encrypt_model.verifyHash(x.password, admin.password)){
			const accessToken = jwt.sign({"email": x.email, "name": x.name, "surname": x.surname, "admin": true}, process.env.ACCESS_TOKEN_SECRET)
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

async function postTitleMethod(req, res) {
	const {title_name, title_desc, title_rating, title_image} = req.body
	try{
		await admin_model.createTitle(title_name, title_desc, title_rating, title_image)
		res.status(200).end()
	}
	catch(err){
		res.status(403).json(err)
	}
}

async function postSeasonMethod(req, res) {
	const {season_no, episode_no, title_name} = req.body
	try{
		await admin_model.createSeason(season_no, episode_no, title_name)
		res.status(200).end()
	}
	catch(err){
		res.status(403).json(err)
	}
}

async function postEpisodeMethod(req, res){
	const {episode_name, episode_desc, episode_url, title_name, season_no} = req.body
	try{
		await admin_model.createEpisode(episode_name, episode_desc, episode_url, title_name, season_no)
		res.status(200).end()
	}
	catch(err){
		res.status(403).json(err)
	}
}

const admin_routes = {postSignInAdminMethod, postTitleMethod, postSeasonMethod, postEpisodeMethod}

export default admin_routes