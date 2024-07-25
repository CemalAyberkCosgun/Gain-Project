import jwt from "jsonwebtoken"
import mysql from "mysql2"
import dotenv from "dotenv"
dotenv.config()

const db = mysql.createPool({
	host:process.env.MYSQL_HOST,
	port:process.env.MYSQL_PORT,
	user:process.env.MYSQL_USER,
	password:process.env.MYSQL_PASSWORD,
	database:process.env.MYSQL_DATABASE
}).promise()

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

async function getUser(email){
	var a = await db.query(`select * from users where email = "${email}";`)
	return a[0]
}

async function createUser(email, name, surname, password){
	await db.query(`insert into users values ("${email}", "${name}", "${surname}", "${password}");`)
}

async function updateUser(email, password){
	await db.query(`update users set password="${password}" where email="${email}";`)
}
const middleware = {checkUser, getUser, updateUser, createUser}

export default middleware