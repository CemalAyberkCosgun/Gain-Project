//Initializations
import express from "express"
import dotenv from "dotenv"
import user_middleware from "./sys/middlewares/user_middleware.js"
import user_route from "./sys/routes/user_routes.js"
dotenv.config()

const server = express()
server.use(express.urlencoded({extended:false}))
server.use(express.json())

//Server Methods
server.get("/api/v1/auth", user_middleware.checkUser, user_route.authGetMethod)

server.post("/api/v1/auth/sign-in", user_route.signinPostMethod)

server.post("/api/v1/auth/sign-up", user_route.signupPostMethod)

server.post("/api/v1/auth/reset-password", user_route.resetPasswordPostMethod)

server.post("/api/v1/auth/update-password", user_middleware.checkUser, user_route.updatePasswordPostMethod)

server.listen(1234, ()=>{console.log("Site started")})