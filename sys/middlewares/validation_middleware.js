import validator from "express-validator";

function handleResult(req, res, next){
	const result = validator.validationResult(req)
	if(!result.isEmpty()){
		console.log(result.array())
		res.status(403).end()
	}
	next()
}

function validatePostSignIn(req, res, next){
	validator.body("email").isEmail()
	validator.body("password").isEmpty().isLength({max: 32})
	handleResult(req, res, next)
}

function validatePostSignUp(req, res, next){
	validator.body("name").isEmpty()
	validator.body("surname").isEmpty()
	validator.body("email").isEmail()
	validator.body("password").isEmpty().isLength({max: 32})
	validator.body("confirm").equals(req.body.password)
	handleResult(req, res, next)
}

function validatePostResetPassword(req, res, next){
	validator.body("email").isEmail()
	handleResult(req, res, next)
}

function validatePostUpdatePassword(req, res, next){
	validator.header("Authorization").isJWT()
	validator.body("password").isEmpty().isLength({max: 32})
	validator.body("confirm").equals(req.body.password)
	handleResult(req, res, next)
}

function validatePostSignInAdmin(req, res, next){
	validator.body("email").isEmail()
	validator.body("password").isEmpty().isLength({max: 32})
	handleResult(req, res, next)
}

function validatePostTitle(req, res, next){
	validator.header("Authorization").isJWT()
	validator.body("title_name").isEmpty()
	validator.body("title_desc").optional().isEmpty()
	validator.body("title_rating").isEmpty()
	validator.body("title_image").optional().isEmpty()
	handleResult(req, res, next)
}

function validatePostSeason(req, res, next){
	validator.header("Authorization").isJWT()
	validator.body("season_no").isEmpty()
	validator.body("episode_no").isEmpty()
	validator.body("title_name").isEmpty()
	handleResult(req, res, next)
}

function validatePostEpisode(req, res, next){
	validator.header("Authorization").isJWT()
	validator.body("episode_name").isEmpty()
	validator.body("episode_desc").optional().isEmpty()
	validator.body("episode_url").optional().isEmpty()
	validator.body("title_name").isEmpty()
	validator.body("season_no").isEmpty()
	handleResult(req, res, next)
}

function validateGetTitle(req, res, next){
	validator.header("Authorization").isJWT()
	validator.body("title_name").isEmpty()
	handleResult(req, res, next)
}

function validateGetSeason(req, res, next){
	validator.header("Authorization").isJWT()
	validator.body("season_no").isEmpty()
	validator.body("title_name").isEmpty()
	handleResult(req, res, next)
}

function validateGetEpisode(req, res, next){
	validator.header("Authorization").isJWT()
	validator.body("episode_name").isEmpty()
	validator.body("season_no").isEmpty()
	validator.body("title_name").isEmpty()
	handleResult(req, res, next)
}

const validation_middleware = {validatePostSignIn, validatePostSignUp, validatePostResetPassword, validatePostUpdatePassword, validatePostSignInAdmin, validatePostTitle, validatePostSeason, validatePostEpisode, validateGetTitle, validateGetSeason, validateGetEpisode}

export default validation_middleware