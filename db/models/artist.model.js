const {Sequelize, DataTypes, Model }= require('sequelize')

const ARTIST_TABLE = 'artist';

const ArtistSchema = {
id:{
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
    type:DataTypes.INTEGER
},
Name:{
    allowNull:true,
    type:DataTypes.STRING
},
LastName:{
    allowNull:true,
    type:DataTypes.STRING,
    field:'last_name'
},
NickName:{
    allowNull:true,
    type:DataTypes.STRING,
    field:'nick_name'
},
info:{
    allowNull:false,
    type:DataTypes.STRING,
},
birthDate:{
    allowNull:true,
    type:DataTypes.DATE,
    field:'birth_date'
},
managerId:{
    field:'manager_id',
    allowNull:false,
    type:DataTypes.INTEGER,
    references:{
        model:'manager',
        key:'id'
    },
    onUpdate:'CASCADE',
    onDelete:'SET NULL'
}





}



class Artist extends Model{
    static associate(models){
        this.belongsTo(models.Album,{
            as:'album',
            foreignKey:'artistId'
        })
        this.hasMany(models.Manager,{
            as:'manager',
            foreignKey:'managerId'
        })
    }
    static config(sequelize){
        return{
            sequelize,
            tableName:ARTIST_TABLE,
            modelName:'Artist',
            timestamps:false
        }
    }
}

module.exports ={Artist,ArtistSchema,ARTIST_TABLE}
