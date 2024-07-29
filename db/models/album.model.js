const {Sequelize, DataTypes, Model }= require('sequelize')

const ALBUM_TABLE = 'album';

const AlbumSchema = {
id:{
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
    type:DataTypes.INTEGER
},
title:{
    allowNull:false,
    type:DataTypes.STRING,
},
ReleseDate:{
    field:'relese_date',
    type:DataTypes.STRING,
    allowNull:false
},
artistId:{
    field:'artist_id',
    allowNull:false,
    type:DataTypes.INTEGER,
    references:{
        model:'artist',
        key:'id'
    },
    onUpdate:'CASCADE',
    onDelete:'SET NULL'
}
}



class Album extends Model{
    static associate(models){
        this.hasMany(models.Song,{
            as:'songs',
            foreignKey:'albumId'
        })
        this.belongsTo(models.Artist,{
            as:'artist',
            foreignKey:'artistId'
        })
    }
    static config(sequelize){
        return{
            sequelize,
            tableName:ALBUM_TABLE,
            modelName:'Album',
            timestamps:false
        }
    }
}

module.exports ={Album,AlbumSchema,ALBUM_TABLE}
