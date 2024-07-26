const {Sequelize, DataTypes, Model }= require('sequelize')

const PLAYLIST_TABLE = 'playlist';

const PlaylistSchema = {
id:{
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
    type:DataTypes.INTEGER
},
title:{
    allowNull:false,
    type:DataTypes.STRING
}

}

class PlayList extends Model{
    static associate(models){
        //
    }
    static config(sequelize){
        return{
            sequelize,
            tableName:PLAYLIST_TABLE,
            modelName:'Playlist',
            timestamps:false
        }
    }
}


module.exports ={PlayList,PLAYLIST_TABLE,PlaylistSchema}