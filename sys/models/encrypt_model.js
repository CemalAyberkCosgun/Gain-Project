import argon2 from "argon2"

async function createHash(text){
	var hash = await argon2.hash(text)
	return hash
}

async function verifyHash(hash, text){
	var bool = await argon2.verify(hash, text)
	return bool
}

const encrypt_model = {createHash, verifyHash}

export default encrypt_model