const {Sequelize, DataTypes, Model }= require('sequelize')

const USER_TABLE = 'user';

const UserSchema = {
id:{
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
    type:DataTypes.INTEGER
},
userName:{
    allowNull:false,
    type:DataTypes.STRING,
    unique:true,
    field:"userName"
},
password:{
    allowNull:false,
    type:DataTypes.STRING,
},
name:{
    allowNull:true,
    type:DataTypes.STRING
},
createdAt:{
    allowNull:false,
    type:DataTypes.DATE,
    field:'created_st',
    defaultValue:Sequelize.NOW
}
}

class User extends Model{
    static associate(models){
        this.hasMany(models.Playlist,{
            as:'User',
            foreignKey:'userId'
        })
    }
    static config(sequelize){
        return{
            sequelize,
            tableName:USER_TABLE,
            modelName:'User',
            timestamps:false
        }
    }
}



module.exports = {User,USER_TABLE,UserSchema}