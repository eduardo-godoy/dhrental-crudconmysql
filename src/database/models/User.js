module.exports = (sequelize, DataTypes) => {

    alias="User"
    
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
            last_name:{
                type: DataTypes.STRING(255),
                allowNull: false
            },
            email:{
                type: DataTypes.STRING(255),
                allowNull: false
            },
            password:{
                type: DataTypes.STRING(255),
                allowNull: false
            },
            adress:{
                type: DataTypes.STRING(255),
                allowNull: false
            },
            cell_phone:{
                type: DataTypes.DECIMAL,
                allowNull: false
            },
            rol:{
                type: DataTypes.INTEGER,
                allowNull: true
            }

        };
    
    let config = {
        tableName:"users",
        timestamps:false,
        underscore : true,
    }

        const Users = sequelize.define(alias,cols,config);

        Users.associate = function(models){
            Users.belongsToMany(models.Products,{
                as:"usersCart",
                through:'cart',
                foreignKey:'users_id',
                otherKey: 'products_id',
                timestamps:false,
            })

            Users.associate = function(models){
                Users.belongsToMany(models.Products,{
                    as:"usersShop",
                    through:'shop',
                    foreignKey:'users_id',
                    otherKey: 'products_id',
                    timestamps:false,
                })}
        
        }
        return Users;
    }
    
    
    