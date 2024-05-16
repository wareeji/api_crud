const mysql = require('mysql2')
require('dotenv').config()

const connection = mysql.createConnection(process.env.DATABASE_URL)

//query all
async function getAll() {
    const sql = `SELECT c.comic_id,c.comic_name,c.story_by,c.pictures_by,c.original_by,c.share_by,c.comic_status,c.update_date,g.genres_name 
                 FROM comics c
                 JOIN genres g ON c.genre_id = g.genre_id
                 ORDER BY c.comic_id DESC `;
    const [data] = await connection.promise().query(sql);
    return data;
}

//query some
async function get(comic_id) {
    const sql = `SELECT c.comic_id,c.comic_name,c.story_by,c.pictures_by,c.original_by,c.share_by,c.synopsis,c.comic_status,c.update_date,
                 c.view,c.comic_like,c.bg_color,c.bg_img,c.character_img,c.comic_name_img,c.blur_bottom_color0,c.blur_bottom_color1,
                 c.blur_bottom_color2,c.blur_bottom_color3,c.genre_id, 
                 g.genre_id,g.genres_name 
                 FROM comics c
                 JOIN genres g ON c.genre_id = g.genre_id
                 WHERE c.comic_id = ? `;
    const [data] = await connection.promise().query(sql,[comic_id]);
    return data;
}

//create
async function add(comic) {
    const sql = `INSERT INTO comics 
                    (comic_name, story_by, 
                    pictures_by, original_by, 
                    share_by, synopsis, 
                    comic_status, update_date, 
                    view, comic_like, 
                    bg_color, bg_img,
                    character_img, comic_name_img,
                    blur_bottom_color0,
                    blur_bottom_color1,
                    blur_bottom_color2, 
                    blur_bottom_color3, 
                    genre_id)
                VALUES 
                    (?, ?, 
                    ?, ?, 
                    ?, ?, 
                    ?, ?, 
                    ?, ?, 
                    ?, ?, 
                    ?, ?, 
                    ?, ?, 
                    ?, ?, 
                    ?)`;
    const [result] = await connection.promise()
    .query(sql, [
        comic.comic_name,
        comic.story_by,
        comic.pictures_by,
        comic.original_by,
        comic.share_by,
        comic.synopsis, 
        comic.comic_status,
        comic.update_date,
        comic.view,
        comic.comic_like,
        comic.bg_color,
        comic.bg_img,
        comic.character_img,
        comic.comic_name_img,
        comic.blur_bottom_color0,
        comic.blur_bottom_color1,
        comic.blur_bottom_color2,
        comic.blur_bottom_color3,
        comic.genre_id
        ]);
    return {...comic, comic_id:result.insertId} ;
}

//update
async function update(comic) {
    const sql =`UPDATE comics SET 
                comic_name = ?, story_by = ?, 
                pictures_by = ?, original_by = ?, 
                share_by = ?, synopsis = ?, 
                comic_status = ?, update_date = ?, 
                view = ?, comic_like = ?, 
                bg_color = ?, bg_img = ?,
                character_img = ?, comic_name_img = ?,
                blur_bottom_color0 = ?,
                blur_bottom_color1 = ?,
                blur_bottom_color2 = ?, 
                blur_bottom_color3 = ?, 
                genre_id = ?
                WHERE comic_id = ?`;

    await connection.promise()
        .query(sql,[comic.comic_name, 
            comic.story_by, 
            comic.pictures_by, 
            comic.original_by, 
            comic.share_by, 
            comic.synopsis, 
            comic.comic_status, 
            comic.update_date, 
            comic.view, 
            comic.comic_like, 
            comic.bg_color, 
            comic.bg_img,
            comic.character_img, 
            comic.comic_name_img,
            comic.blur_bottom_color0,
            comic.blur_bottom_color1,
            comic.blur_bottom_color2, 
            comic.blur_bottom_color3, 
            comic.genre_id,
            comic.comic_id
        ]);
        return comic;
}

//remove
async function remove(comic_id) {
    const sql = `DELETE FROM comics WHERE comic_id = ?`;
    await connection.promise().query(sql,[comic_id]);

    
    return ;
}


module.exports = {getAll,get,add,update,remove}; 