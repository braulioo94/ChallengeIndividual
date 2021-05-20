module.exports = (sequelize, type) =>{
    return sequelize.define('categorias',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING,
    })
    
}