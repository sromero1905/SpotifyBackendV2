
const {Sequelize, DataTypes, Model }= require('sequelize')

const SONG_TABLE = 'song';

const SongSchema = {
id:{
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
    type:DataTypes.INTEGER
},
title:{
    allowNull:false,
    type:DataTypes.STRING
},
duration:{
    allowNull:false,
    type:DataTypes.STRING
},
releseDate:{
    field:'relese_date',
    allowNull:false,
    type:DataTypes.DATE
}}

class Song extends Model{
    static associate(models){
        //
    }
    static config(sequelize){
        return{
            sequelize,
            tableName:SONG_TABLE,
            modelName:'Song',
            timestamps:false
        }
    }
}


module.exports = { Song, SongSchema, SONG_TABLE  }