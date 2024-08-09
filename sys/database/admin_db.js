import mysql from "mysql2"
import path from "path"
import { fileURLToPath } from "url"
import dotenv from "dotenv"
dotenv.config({path: path.join(path.dirname(fileURLToPath(import.meta.url)), "../env/admin_db.env")})

export const admin_db = mysql.createPool({
	host:process.env.MYSQL_ADMIN_HOST,
	port:process.env.MYSQL_ADMIN_PORT,
	user:process.env.MYSQL_ADMIN_USER,
	password:process.env.MYSQL_ADMIN_PASSWORD,
	database:process.env.MYSQL_ADMIN_DATABASE
}).promise()