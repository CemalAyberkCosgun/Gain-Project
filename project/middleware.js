const fs = require("fs")
const jwt = require("jsonwebtoken")

function updateJSON(userList){
	fs.writeFileSync("./user_list.json", JSON.stringify(userList, null, "\t"), err =>{if(err) throw err;})
}

function checkUser(req, res, next) {
	const {authorization} = req.body
	if(authorization){
		jwt.verify(authorization, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
		if (!err){
			req.user = user
			next()}
		else {throw err}
	})}
	else{res.status(403)}
}

module.exports.updateJSON = updateJSON
module.exports.checkUser = checkUser