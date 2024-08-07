import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url"
dotenv.config({path: path.join(path.dirname(fileURLToPath(import.meta.url)), "../env/secret.env")})

function checkUser(req, res, next) {
	const authorization = req.get("Authorization")
	if(authorization){
		jwt.verify(authorization, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
		if (!err){
			req.user = user
			next()}
		else {throw err}
	})}
	else{next()}
}

const user_middleware = {checkUser}

export default user_middleware