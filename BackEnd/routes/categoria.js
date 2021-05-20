const router = require('express').Router();
const {Categoria} = require('../db');

    router.get('/', async (req, res) =>{
        try {
            const categoria = await Categoria.findAll();
            res.json(categoria) ;

        } catch (error) {
            console.error('Error');   
            res.status(413).send("Error");
        }
        
    });


    router.get('/:categoriaID', async (req, res) =>{
        try {
            let categoriaID = req.params.categoriaID

            let categoria = await Categoria.findAll({
                where:{id: categoriaID}
            });
            if(categoria.length === 0) throw new Error('La categoria que se quiere visualizar no existe');
            
            categoria = await Categoria.findAll({
                where:{id: categoriaID}
            });
            res.json(categoria) ;

        } catch (e) {
            console.error(e.message);   
            res.status(413).send({"Error": e.message});
        }
        
    });


    router.post('/', async (req, res) =>{
        try {
            let nombre=req.body.nombre;

            if(!nombre || nombre.trim().length===0) throw new Error('Falto enviar información')
                
            
            let categoria = await Categoria.findAll({
                where:{nombre:nombre}
            });
            if(categoria.length > 0)  throw new Error('Ya existe la categoria ingresada');

            categoria = await Categoria.create(req.body);
            res.json(categoria)

        } catch (e) {
            console.error(e.message);   
            res.status(413).send({"Error": e.message});
        }
        
    });


    router.put('/:categoriaID', async (req, res) =>{
        try {
            let nombre=req.body.nombre;
            let categoriaID = req.params.categoriaID

            if(!nombre || nombre.trim().length===0) throw new Error('Falto enviar información');
                
            let categoria = await Categoria.findAll({
                where:{nombre:nombre}
            });
            if(categoria.length > 0)  throw new Error('El nuevo nombre que se quiere ingresar ya existe');
                
            
            categoria = await Categoria.findAll({
                where:{id: categoriaID}
            });
            if(categoria.length === 0) throw new Error('La categoria que se quiere modificar no existe');
                
            
            categoria = await Categoria.update(req.body,{
                where : {id: categoriaID}
            });
            res.json({succes:'Se ha modificado correctamente'})

        } catch (e) {
            console.error(e.message);   
            res.status(413).send({"Error": e.message});
        }
        
    });


    router.delete('/:categoriaID', async (req, res) =>{
        try {
            let categoriaID = req.params.categoriaID
            
            let categoria = await Categoria.findAll({
                where:{id: categoriaID}
            });
            if(categoria.length === 0) throw new Error('La categoria que se quiere eliminar no existe');

            await Categoria.destroy({
                where : {id: categoriaID}
            });
            res.json({succes:'Se ha Borrado correctamente'})

        } catch (e) {
            console.error(e.message);   
            res.status(413).send({"Error": e.message});
        }
        
    })

module.exports = router;