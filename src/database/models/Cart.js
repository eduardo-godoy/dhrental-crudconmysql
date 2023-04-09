module.exports = (sequelize, DataTypes) => {

    alias="Cart"
    
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
            }
        }
    
    let config = {
        tableName:"cart",
        timestamps:false,
    }

    const Cart = sequelize.define(alias,cols,config);

    return Cart;

}
