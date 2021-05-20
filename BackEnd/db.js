const Sequelize = require('sequelize')

const PostModel = require('./models/post')

const CategoriaModel = require('./models/categorias')

const sequelize = new Sequelize('blog', 'root', '',{
    host:'localhost',
    dialect:'mysql',
    //logging:false,
});

const Post = PostModel(sequelize,Sequelize );
const Categoria = CategoriaModel(sequelize,Sequelize );

sequelize.sync({force:false})
    .then(() =>{
        console.log('Tablas sincronizadas');
    })

    module.exports ={
        Post,
        Categoria
    }