import mysql from "mysql2"
import path from "path"
import { fileURLToPath } from "url"
import dotenv from "dotenv"
dotenv.config({path: path.join(path.dirname(fileURLToPath(import.meta.url)), "../env/user_db.env")})

export const user_db = mysql.createPool({
	host:process.env.MYSQL_USER_HOST,
	port:process.env.MYSQL_USER_PORT,
	user:process.env.MYSQL_USER_USER,
	password:process.env.MYSQL_USER_PASSWORD,
	database:process.env.MYSQL_USER_DATABASE
}).promise()