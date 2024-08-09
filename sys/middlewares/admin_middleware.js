import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url"
dotenv.config({path: path.join(path.dirname(fileURLToPath(import.meta.url)), "../env/secret.env")})
import admin_model from "../models/admin_model.js"

function checkAdmin(req, res, next) {
	const authorization = req.get("Authorization")
	if(authorization){
		jwt.verify(authorization, process.env.ACCESS_TOKEN_SECRET, async (err, admin) => {
		if (!err){
			try{
				var login = await admin_model.getAdmin(admin.email)
				if (login[0].email == admin.email){
					req.admin = admin
					next()
				}
				else{
					req.status(403).end()
				}
			}
			catch(err){
				req.status(403).end()
			}
		}
		else {
			req.status(403).end()
			throw err
		}
	})}
	else{req.status(400).end()}
}

const admin_middleware = {checkAdmin}

export default admin_middleware