import { user_db } from "../database/user_db.js"

async function getUser(email){
	try{
		var a = await user_db.query(`select * from users where email = "${email}";`)
		return a[0]
	}
	catch(err){
		throw new Error("Couldn't find user")
	}
}

async function createUser(email, name, surname, password){
	try{
		await user_db.query(`insert into users values ("${email}", "${name}", "${surname}", "${password}");`)
	}
	catch(err){
		throw new Error("Incomplete information")
	}
}

async function updateUser(email, password){
	try{
		await user_db.query(`update users set password="${password}" where email="${email}";`)
	}
	catch(err){
		throw new Error("Improper values")
	}
}

const user_model = {getUser, createUser, updateUser}

export default user_model