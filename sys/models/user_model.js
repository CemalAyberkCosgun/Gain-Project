import mysql from "mysql2"
import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url"
dotenv.config({path: path.join(path.dirname(fileURLToPath(import.meta.url)), "../env/db.env")})

const db = mysql.createPool({
	host:process.env.MYSQL_HOST,
	port:process.env.MYSQL_PORT,
	user:process.env.MYSQL_USER,
	password:process.env.MYSQL_PASSWORD,
	database:process.env.MYSQL_DATABASE
}).promise()

async function getUser(email){
	try{
		var a = await db.query(`select * from users where email = "${email}";`)
		return a[0]
	}
	catch(err){
		throw new Error("Couldn't find user")
	}
}

async function createUser(email, name, surname, password){
	try{
		await db.query(`insert into users values ("${email}", "${name}", "${surname}", "${password}");`)
	}
	catch(err){
		throw new Error("Incomplete information")
	}
}

async function updateUser(email, password){
	try{
		await db.query(`update users set password="${password}" where email="${email}";`)
	}
	catch(err){
		throw new Error("Improper values")
	}
}

const user_model = {getUser, createUser, updateUser}

export default user_model