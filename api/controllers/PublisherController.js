const {publisher, comic} = require('../models');

class PublisherController{
    static async getPublishers(req, res){
        try{
            const publishers = await publisher.findAll({
                order:[["id", "ASC"]],
            });

            res.json(publishers);
        }catch(err){
            res.json(err);
        }
    }
    static async add(req, res){
        try{
            const {name, address, avatar} = req.body;
            const result = await publisher.create({
                name,
                address,
                avatar,
            });
            res.json(result);
        }catch(err){
            res.json(err);
        }
    }
    static async remove(req, res){
        try{
            const id = +req.params.id;

            const result = await publisher.destroy({
                where: {
                    id,
                },
            });
            if(result){
                res.json({
                    message:"publisher Successfully removed",
                });
            }
        }catch(err){
            res.json(err);
        }
    }
    static async edit(req, res){
        try{
            const id = +req.params.id;
            const {name, address, avatar} = req.body;

            const result = await publisher.update(
                {
                name,
                address,
                avatar,
                },
                {
                    where: {id},
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
            const result = await publisher.findByPk(id);

            if(result){
                res.json({
                    message:`Publisher id ${id} not found`,
                });
            }
        }catch (err){
            res.json(err);
        }
    }
    static async listComics(req, res){
        try{
            const publisherId = +req.params.id;

            const comics = await comic.findAll({
                where:{
                    publisherId,
                },
            });
            if (comics.length > 0) {
               res.json({
                data : {
                    comics,
                    totalComics: comics.length,
                },
               });
            }else{
                res.json({
                    message:"Publisher dont have a Book Now",
                });
            }
        } catch(err){
            res.json(err);
        }
    }
}

module.exports = PublisherController;