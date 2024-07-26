
const {Sequelize, DataTypes, Model }= require('sequelize')

const GENRES_TABLE = 'genre';

const GenreScehma = {
id:{
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
    type:DataTypes.INTEGER
},
title:{
    allowNull:false,
    type:DataTypes.STRING,
    unique:true
},
description:{
    allowNull:false,
    type:DataTypes.STRING
}
}



class Genre extends Model{
    static associate(models){
        //
    }
    static config(sequelize){
        return{
            sequelize,
            tableName:GENRES_TABLE,
            modelName:'Genre',
            timestamps:false
        }
    }
}

module.exports ={Genre,GenreScehma,GENRES_TABLE}
