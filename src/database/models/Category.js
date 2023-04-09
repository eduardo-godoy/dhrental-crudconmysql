module.exports = (sequelize, DataTypes) => {

    alias="Category"
    
        let cols = {
    
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name:{
                type: DataTypes.STRING(45),
                allowNull: false   
            }
        }
    
    let config = {
        tableName:"category",
        timestamps:false,
    }

    const Category = sequelize.define(alias,cols,config);


    Category.associate = function(models){
        Category.hasMany(models.Products,{
            as:"products",
            foreignKey:"category_id"
        })
     }

    return Category;

}
