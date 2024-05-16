const {getAll ,get ,add,update ,remove}= require('./model');


async function listComic (request,response)
{
    const comics = await getAll();
    response.json(comics);
}

async function detailComic (request,response)
{
    const comic_id = await get(parseInt(request.params.id,10));
    response.json(comic_id);
}

async function addComic (request,response)
{
    try {
        const comic = {
            comic_name: request.body.comic_name,
            story_by: request.body.story_by,
            pictures_by: request.body.pictures_by,
            original_by: request.body.original_by,
            share_by: request.body.share_by,
            synopsis: request.body.synopsis,
            comic_status: request.body.comic_status,
            update_date: request.body.update_date,
            view: request.body.view,
            comic_like: request.body.comic_like,
            bg_color: request.body.bg_color,
            bg_img: request.body.bg_img,
            character_img: request.body.character_img,
            comic_name_img: request.body.comic_name_img,
            blur_bottom_color0: request.body.blur_bottom_color0, 
            blur_bottom_color1: request.body.blur_bottom_color1,
            blur_bottom_color2: request.body.blur_bottom_color2,
            blur_bottom_color3: request.body.blur_bottom_color3,
            genre_id: request.body.genre_id
        };
        
        await add(comic);
        return response.status(200).json("Add comcic successfully");
    } 
    catch (error) {
        console.error(error);
        return response.status(500).json("Error adding comic");
    } 
}

async function updateComic (request,response)
{
    try { 
        const comic =
        {
            comic_id : request.params.id,
            comic_name: request.body.comic_name,
            story_by: request.body.story_by,
            pictures_by: request.body.pictures_by,
            original_by: request.body.original_by,
            share_by: request.body.share_by,
            synopsis: request.body.synopsis,
            comic_status: request.body.comic_status,
            update_date: request.body.update_date,
            view: request.body.view,
            comic_like: request.body.comic_like,
            bg_color: request.body.bg_color,
            bg_img: request.body.bg_img,
            character_img: request.body.character_img,
            comic_name_img: request.body.comic_name_img,
            blur_bottom_color0: request.body.blur_bottom_color0, 
            blur_bottom_color1: request.body.blur_bottom_color1,
            blur_bottom_color2: request.body.blur_bottom_color2,
            blur_bottom_color3: request.body.blur_bottom_color3,
            genre_id: request.body.genre_id
        }
        
        await update(comic);
        return response.status(200).json({ message: "The comic updated successfully" });
    } 
    catch (error) {
        console.error(error);
        return response.status(500).json({ error: "Failed to update the comic" });
    }
}

async function removeComic (request,response)
{
    try {
        const comic_id = request.params.id ; 
        await remove(comic_id);
        return response.status(200).json({ message: "The comic was deleted successfully" });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ error: "Failed to delete the comic" });
    }
}

module.exports = {listComic,detailComic,addComic,updateComic,removeComic}