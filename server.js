//Initializations
import express from "express"
import dotenv from "dotenv"
import user_middleware from "./sys/middlewares/user_middleware.js"
import user_route from "./sys/routes/user_routes.js"
import admin_middleware from "./sys/middlewares/admin_middleware.js"
import admin_route from "./sys/routes/admin_routes.js"
import validation_middleware from "./sys/middlewares/validation_middleware.js"
import path from "path"
import { fileURLToPath } from "url"
dotenv.config({path: path.join(path.dirname(fileURLToPath(import.meta.url)), "../env/secret.env")})

const server = express()
server.use(express.urlencoded({extended:false}))
server.use(express.json())

//Server Methods
server.get("/api/v1/auth", user_middleware.checkUser, user_route.getAuthMethod)

server.post("/api/v1/auth/sign-in", validation_middleware.validatePostSignIn, user_route.postSignInMethod)

server.post("/api/v1/auth/sign-up", validation_middleware.validatePostSignUp, user_route.postSignUpMethod)

server.post("/api/v1/auth/reset-password", validation_middleware.validatePostResetPassword, user_route.postResetPasswordMethod)

server.post("/api/v1/auth/update-password", validation_middleware.validatePostUpdatePassword, user_middleware.checkUser, user_route.postUpdatePasswordMethod)

server.post("/api/v1/admin/sign-in-admin", validation_middleware.validatePostSignInAdmin, admin_route.postSignInAdminMethod)

server.post("/api/v1/admin/title", validation_middleware.validatePostTitle, admin_middleware.checkAdmin, admin_route.postTitleMethod)

server.post("/api/v1/admin/season", validation_middleware.validatePostSeason, admin_middleware.checkAdmin, admin_route.postSeasonMethod)

server.post("/api/v1/admin/episode", validation_middleware.validatePostEpisode, admin_middleware.checkAdmin, admin_route.postEpisodeMethod)

server.get("/api/v1/admin/title", validation_middleware.validateGetTitle, admin_middleware.checkAdmin, admin_route.getTitleMethod)

server.get("/api/v1/admin/season", validation_middleware.validateGetSeason, admin_middleware.checkAdmin, admin_route.getSeasonMethod)

server.get("/api/v1/admin/episode", validation_middleware.validateGetEpisode, admin_middleware.checkAdmin, admin_route.getEpisodeMethod)

server.listen(1234, ()=>{console.log("Site started")})