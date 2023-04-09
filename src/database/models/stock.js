module.exports = (sequelize, DataTypes) => {

    alias="Stock"
    
        let cols = {
    
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            in_stock:{
                type: DataTypes.DECIMAL,
                allowNull: false   
            }
        }
    
    let config = {
        tableName:"stock",
        timestamps:false,
    }

    const Stock = sequelize.define(alias,cols,config);

    Stock.associate = function(models){
        Stock.belongsTo(models.Products,{
            as: "stock",
            foreignKey: "products_id"
        })
    }

    return Stock;

}