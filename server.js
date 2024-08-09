//Initializations
import express from "express"
import dotenv from "dotenv"
import user_middleware from "./sys/middlewares/user_middleware.js"
import user_route from "./sys/routes/user_routes.js"
import admin_middleware from "./sys/middlewares/admin_middleware.js"
import admin_route from "./sys/routes/admin_routes.js"
import path from "path"
import { fileURLToPath } from "url"
dotenv.config({path: path.join(path.dirname(fileURLToPath(import.meta.url)), "../env/secret.env")})

const server = express()
server.use(express.urlencoded({extended:false}))
server.use(express.json())

//Server Methods
server.get("/api/v1/auth", user_middleware.checkUser, user_route.getAuthMethod)

server.post("/api/v1/auth/sign-in", user_route.postSignInMethod)

server.post("/api/v1/auth/sign-up", user_route.postSignUpMethod)

server.post("/api/v1/auth/reset-password", user_route.postResetPasswordMethod)

server.post("/api/v1/auth/update-password", user_middleware.checkUser, user_route.postUpdatePasswordMethod)

server.post("/api/v1/admin/sign-in-admin", admin_route.postSignInAdminMethod)

server.post("/api/v1/admin/title", admin_middleware.checkAdmin, admin_route.postTitleMethod)

server.post("/api/v1/admin/season", admin_middleware.checkAdmin, admin_route.postSeasonMethod)

server.post("/api/v1/admin/episode", admin_middleware.checkAdmin, admin_route.postEpisodeMethod)

server.listen(1234, ()=>{console.log("Site started")})