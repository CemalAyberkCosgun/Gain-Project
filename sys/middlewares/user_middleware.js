import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config(".../.env")

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