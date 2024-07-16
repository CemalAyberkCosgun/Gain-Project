//Initializations
const express = require("express")
const cookieParser = require("cookie-parser")
const path = require("path")
const jwt = require("jsonwebtoken")
const fs = require("fs")
const randomstring = require("randomstring")

require("dotenv").config()

const server = express()
server.use(cookieParser());
server.use(express.urlencoded({extended:false}))
server.use(express.json())

var userList = fs.readFileSync("./user_list.json")
userList = JSON.parse(userList)

//Functions

function authenticateJWT(req, res, next) {
	const {cookies} = req
	const token = cookies.authorization
	if(token==undefined) return res.status(401);
	
	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
		if (err) return res.status(403);
		req.user = user
		next()
	})
}

function updateJSON(userList){
	fs.writeFileSync("./user_list.json", JSON.stringify(userList), err =>{if(err) throw err;})
}

function checkUser(req, res, next) {
	const {cookies} = req
	const token = cookies.authorization
	if(token!=undefined){
		jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
		if (!err){
			req.user = user
			next()}
		else {next()}
	})}
	else{next()}
}

//Variables

const main_page = `<h2><a href="/api/v1/auth/sign-in">sign-in</a></h2>
			<h2><a href="/api/v1/auth/sign-up">sign-up</a></h2>
			<h2><a href="/api/v1/auth/reset-password">reset-password</a></h2>
			<h2><a href="/api/v1/auth/update-password">update-password</a></h2>`

//Server Methods
server.get("/", (req,res)=>{
	res.redirect("/api/v1/auth")
	console.log(userList)
})

server.get("/api/v1/auth", checkUser, (req, res)=>{
	if(req.user){
		return res.send(`
			<h1>Welcome `+req.user.email+`<h1>`+main_page);	
	}
	else {return res.send(main_page);
	}
})
server.get("/api/v1/auth/sign-in", (req, res)=>{
	res.sendFile(path.join(__dirname, "/pages/sign_in.html"))
})

server.post("/api/v1/auth/sign-in", (req, res)=>{
	const {email, password} = req.body
	const user = {email, password}
	const x = userList.find(x => x.email === user.email)
	if(x){
		if(x.password === user.password){
			const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
			res.cookie("authorization", accessToken)
			res.status(200).redirect("/api/v1/auth")
		}
		else{
			res.status(403).send(`<h2>You have entered a wrong password.</h2>
		<h3><a href="/api/v1/auth/sign-in">Go back to sign-in page</a></h3>`)
		}
	}
	else{
		res.status(403).send(`<h2>This email does not exist in the system.</h2>
			<h3><a href="/api/v1/auth/sign-up">Redirect to the sign-up page</a></h3>`)
	}
})

server.get("/api/v1/auth/sign-up", checkUser, (req, res)=>{
	if(req.query.confirm === "true" && req.cookies.newAcc && jwt.verify(req.cookies.newAcc, process.env.ACCESS_TOKEN_SECRET)){
		res.clearCookie("newAcc")
		res.status(200).sendFile(path.join(__dirname, "/pages/sign_up_success.html"))
	}
	else(res.sendFile(path.join(__dirname, "/pages/sign_up.html")))
})

server.post("/api/v1/auth/sign-up", (req, res)=>{
	const {email, password, confirm} = req.body
	const user = {email, password}
	const x = userList.find(x => x.email === user.email)
	
	if(!x){
		if(password === confirm){
			userList.push(user)
			updateJSON(userList)
			const accMade = jwt.sign({email: email, newAcc: true}, process.env.ACCESS_TOKEN_SECRET)
			res.cookie("newAcc", accMade)
			res.redirect("/api/v1/auth/sign-up?confirm=true")
		}
		else{
			res.status(403).send(`<h2>Your passwords don't match.</h2>
			<h3><a href="/api/v1/auth/sign-up">Go back to sign-up page</a></h3>`)
		}
	}
	else{
		res.status(403).send(`<h2>This email already exists in the system.</h2>
			<h3><a href="/api/v1/auth/sign-in">Redirect to the sign-in page</a></h3>`)
	}
})

server.get("/api/v1/auth/reset-password", (req, res)=>{
	res.sendFile(path.join(__dirname, "/pages/reset_password.html"))
})

server.post("/api/v1/auth/reset-password", (req, res)=>{
	var index = userList.findIndex(x=>x.email === req.body.email)
	if(index !== -1){
		const tempPass = randomstring.generate(16)
		userList[index].password = tempPass
		updateJSON(userList)
		res.send(`<h2>Your password has been temporarily changed to `+ tempPass +`</h2>
			<h3><a href="/api/v1/auth/sign-in">Go back to sign-in page</a></h3>`)
	}
	else{
		res.send(`<h2>This e-mail is not registered.</h2>
			<h3><a href="/api/v1/auth/reset-password">Go back to reset password page</a></h3>
			<h3><a href="/api/v1/auth/sign-up">Go to sign-up</a></h3>`)
	}
})

server.get("/api/v1/auth/update-password", checkUser, (req, res)=>{
	if(req.user){
		res.send(`
			<h1>Welcome `+req.user.email+`</h1>
			<form action="/api/v1/auth/update-password" method="POST">
			<label for="pass">New password:</label>
			<input type="password" id="pass" name="password"><br>
			<label for="confirm">Enter your password again:</label>
			<input type="password" id="confirm" name="confirm"><br>
			<button>Update Password</button>
		</form>`)
	}
	else{
		res.send(`<h2>Please sign in first before updating your password.</h2>
			<h3><a href="/api/v1/auth/sign-in">Redirect to the sign-in page</a></h3>`)
	}
})

server.post("/api/v1/auth/update-password", checkUser, (req, res)=>{
	if (req.body.password === req.body.confirm){
		userList[userList.findIndex(x=>x.email === req.user.email)].password = req.body.password
		updateJSON(userList)
		res.clearCookie("authorization")
		res.send(`<h2>Your password has been changed! Make sure you sign-in to your account again!</h2>
			<h3><a href="/api/v1/auth/sign-in"> Go to sign-in page</a></h3>
			<h3><a href="/api/v1/auth"> Go back to main page</a></h3>`)
	}
	else{
		res.send(`<h2>Your passwords didn't match. Please try again</h2>
			<h3><a href="/api/v1/auth/sign-up"> Go back to sign-up page</a></h3>
			<h3><a href="/api/v1/auth"> Go back to main page</a></h3>`)
	}
})

server.listen(1234, ()=>{
	console.log("Site started")
})