import { admin_db } from "../database/admin_db.js"

async function getAdmin(email){
	try{
		var a = await admin_db.query(`select * from admins where email = "${email}";`)
		return a[0]
	}
	catch(err){
		throw new Error("Couldn't find admin")
	}
}

async function createTitle(name, description, IMDB, image){
	try{
		await admin_db.query(`INSERT INTO titles (name, description, rating, title_image) VALUES ("${name}","${description}",${IMDB},"${image}");`);
	}
	catch(err){
		throw new Error("Insufficient information")
	}
}

async function createSeason(season_no, episode_count, title_name){
	try{
		var title_id = (await getTitle(title_name)).ID
	}
	catch(err){
		throw err
	}
	try{
		await admin_db.query(`INSERT INTO seasons (season_num, episode_num, title_ID) VALUES (${season_no},${episode_count},${title_id});`);
	}
	catch(err){
		throw new Error("Insufficient information")
	}
}

async function createEpisode(name, description, video_url, title_name, season_no){
	try{
		var title_id = (await getTitle(title_name)).ID
		var season_id = (await getSeason(season_no, await title_id)).ID
	}
	catch(err){
		throw err
	}
	try{
		await admin_db.query(`INSERT INTO episodes (name, description, vid_url, title_ID, season_ID) VALUES ("${name}","${description}","${video_url}",${title_id},${season_id});`);
	}
	catch(err){
		throw new Error("Insufficient information")
	}
}

async function getTitle(name){
	try {
		var title = await admin_db.query(`SELECT * FROM titles WHERE name = "${name}";`);
		return title[0][0]
	}
	catch(err){
		throw new Error("No title found")
	}
}

async function getSeason(season_no, title_id){
	try {
		var season = await admin_db.query(`SELECT * FROM seasons WHERE season_num = ${season_no} AND title_id = ${title_id};`);
		return season[0][0]
	}
	catch(err){
		throw new Error("No season found")
	}
}

async function getEpisode(name, season_id, title_id){
	try {
		var episode = await admin_db.query(`SELECT * FROM episodes WHERE name = "${name}" AND title_ID = ${title_id} AND season_ID = ${season_id};`);
		return episode[0][0]
	}
	catch(err){
		console.log(err)
		throw new Error("No episode found")
	}
}

const admin_model = {getAdmin, createTitle, createSeason, createEpisode, getTitle, getSeason, getEpisode}

export default admin_model