module.exports = (sequelize, DataTypes) => {

alias="Products"

    let cols = {

        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        image:{
            type: DataTypes.STRING(255),
            allowNull: false
        },
        name:{
            type: DataTypes.STRING(255),
            allowNull: false
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        price:{
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        in_sale:{
            type: DataTypes.STRING(255),
            allowNull: false
        },
        category_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
        
    };

let config = {
    tableName:"products",
    timestamps:false,
}

    const Product = sequelize.define(alias,cols,config);


        Product.associate = function(models){

            Product.belongsTo(models.Category,{
                as:"category",
                foreignKey:"category_id"
            })

            Product.belongsToMany(models.User,{
                as:"productShop",
                through:'shop',
                foreignKey:'products_id',
                otherKey: 'users_id',
                timestamps:false,
            })
            Product.belongsToMany(models.User,{
                as:"productCart",
                through:'cart',
                foreignKey:'products_id',
                otherKey: 'users_id',
                timestamps:false,
            })
            Product.hasMany(models.Stock,{
                as: "products",
                foreignKey: "products_id"
            })

        }
    
         
    return Product;

}