const router = require('express').Router();

const {Categoria} = require('../db');
const {Post} = require('../db');

    router.get('/', async(req, res) =>{
        try {
            let post = await Post.findAll();
            console.log(post);
            res.json(post) ;

        } catch (error) {
            console.error('Error');   
            res.status(413).send("Error");
        }
    });


    router.get('/:postID', async(req, res) =>{
        try {
            let postID = req.params.postID

            let post = await Post.findAll({
                where:{id: postID}
            });
            if(post.length === 0) throw new Error('El post que se quiere visualizar no existe');

            res.json(post) ;

        } catch (e) {
            console.error(e.message);   
            res.status(413).send({"Error": e.message});
        }
    });


    router.post('/', async (req, res) =>{
        try {
            let titulo=req.body.titulo;
            let contenido=req.body.contenido;
            let imagen=req.body.imagen;
            let categoriaID=req.body.categoriaID;
            

            if( !titulo || titulo.trim().length=== 0 || !contenido || contenido.trim().length===0|| !imagen || imagen.trim().length===0|| !categoriaID || categoriaID.trim().length===0) throw new Error('Falto enviar información')

            if(imagen.substr(-4) !='.jpg' && imagen.substr(-4) !='.png' && imagen.substr(-4) !='.jpeg'  ) throw new Error('El URL ingresado no corresponde a una imagen')

            let categoria = await Categoria.findAll({
                where:{id: categoriaID}
            });

            if(categoria.length === 0) throw new Error('La categoria ingresada no existe')

            let post = await Post.create(req.body);
            res.json(post)

        } catch (e) {
            console.error(e.message);   
            res.status(413).send({"Error": e.message});
        }
    });


    router.put('/:postID', async (req, res) =>{
        try {
            let titulo=req.body.titulo;
            let contenido=req.body.contenido;
            let imagen=req.body.imagen;
            let categoriaID=req.body.categoriaID;
            let postID = req.params.postID


            if( !titulo || titulo.trim().length=== 0 || !contenido || contenido.trim().length===0|| !imagen || imagen.trim().length===0|| !categoriaID || categoriaID.trim().length===0) throw new Error('Falto enviar información')

            if(imagen.substr(-4) !='.jpg' && imagen.substr(-4) !='.png' && imagen.substr(-4) !='.jpeg'  ) throw new Error('El URL ingresado no corresponde a una imagen')

            let categoria = await Categoria.findAll({
                where:{id: categoriaID}
            });
            if(categoria.length === 0) throw new Error('La categoria ingresada no existe')


            let post = await Post.findAll({
                where:{id: postID}
            });
            if(post.length === 0) throw new Error('El post que se quiere modificar no existe');
            
            post = await Post.update(req.body,{
                where : {id: postID}
            });
            res.json({succes:'Se ha modificado correctamente'})

        } catch (e) {
            console.error(e.message);   
            res.status(413).send({"Error": e.message});
        }
    });


    router.delete('/:postID', async (req, res) =>{
        try {
            let postID = req.params.postID

            let post = await Post.findAll({
                where:{id: postID}
            });
            if(post.length === 0) throw new Error('El post que se quiere eliminar no existe');

            await Post.destroy({
                where : {id: req.params.postID}
            });
            res.json({succes:'Se ha Borrado correctamente'})

        } catch (e) {
            console.error(e.message);   
            res.status(413).send({"Error": e.message});
        }
    })


module.exports = router;