module.exports = (sequelize, type) =>{
    return sequelize.define('posts',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: type.STRING,
        contenido:type.STRING,
        imagen:type.STRING,
        categoriaID:type.INTEGER,
        
    })
    
}