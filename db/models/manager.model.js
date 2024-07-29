
const {Sequelize, DataTypes, Model }= require('sequelize')

const MANAGER_TABLE = 'manager';

const ManagerSchema = {
id:{
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
    type:DataTypes.INTEGER
},
name:{
    allowNull:false,
    type:DataTypes.STRING
},
LastName:{
    field:'last_name',
    allowNull:false,
    type:DataTypes.STRING
},
company:{
    allowNull:false,
    type:DataTypes.STRING
},
username:{
    allowNull:false,
    type:DataTypes.STRING,
    unique:true
},
password:{
    allowNull:false,
    type:DataTypes.STRING,
}
}



class Manager extends Model{
    static associate(models){
        this.hasMany(models.Artist,{
            as:'artists',
            foreignKey:'managerId'
        })
    }
    static config(sequelize){
        return{
            sequelize,
            tableName:MANAGER_TABLE,
            modelName:'Manager',
            timestamps:false
        }
    }
}

module.exports ={Manager,ManagerSchema,MANAGER_TABLE}
