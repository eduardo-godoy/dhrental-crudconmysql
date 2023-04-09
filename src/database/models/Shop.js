module.exports = (sequelize, DataTypes) => {

    alias="Shop"
    
        let cols = {
    
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            quantity:{
                type: DataTypes.DECIMAL,
                allowNull: false   
            },
            total_price:{
                type: DataTypes.DECIMAL,
                allowNull: false   
            }
        }
    
    let config = {
        tableName:"Shop",
        timestamps:false,
    }

    const Shop = sequelize.define(alias,cols,config);

    return Shop;

}