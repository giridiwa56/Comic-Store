const {publisher, comic} = require('../models');

class ComicController{
    static async getComics(req, res){
        try{
            const comics = await comic.findAll({
                include:[publisher],
            });
            res.json(comics);
        }catch(err){
            res.json(err);
        }
    }
    static async add(req, res){
        try{
            const{title, genre, price, page, image, information, publisherId} = req.body;
            const result = await comic.create({
                title,
                genre,
                image,
                price,
                page,
                information,
                publisherId,
            });

            res.json(result);
        }catch (err){
            res.json(err);
        }
    }
    static async remove(req, res){
        try{
            const id = +req.params.id;

            const result = await comic.destroy({
                where: { id },
            });

            if (result){
                res.json({
                    message:"Comic has been removed"
                });
            }
            
        }catch(err){
            res.json(err);
        }
    }
    static async edit(req, res){
        try{
            const id = +req.params.id;
            const {title, genre, price, page, image, information, publisherId} = req.body;

            const result = await comic.update(
                {
                title,
                genre,
                image,
                price,
                page,
                information,
                publisherId,
                },
                {
                    where: { id },
                }
            );
            
            res.json(result);
        }catch(err){
            res.json(err);
        }
    }
    static async detail(req, res){
        try{
            const id = +req.params.id;
            const result = await comic.findByPk(id);

            if (result){
                res.json(result);
            }else{
                res.json({message:`Comic ${id} not found`});
            }
            res.json(result);
        }catch(err){
            res.json(err);
        }   
    }

    static async searchTitle(req, res){
        try{
            const title = req.params.title;

            const comics = await comic.findAll({
                where:{
                   title,
                }
            });

            res.json(comics)
        } catch (err){
            res.json(err);
        }
    }
}

module.exports = ComicController;

