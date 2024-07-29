const {Sequelize, DataTypes, Model }= require('sequelize')

const PLAYLIST_SONG_TABLE = 'playlist_song'
const PlayListSongSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    playlistId:{
        field:'playlist_id',
        allowNull:false,
        type:DataTypes.INTEGER,
    references: {
            model: 'playlist',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
    },
    songId:{
        field:'song_id',
        allowNull:false,
        type:DataTypes.INTEGER,
    references: {
            model: 'song',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',

    }
}

class PlaylistSong extends Model{
    static associate(models){
        //
    }
    static config(sequelize){
        return{
            sequelize,
            tableName:PLAYLIST_SONG_TABLE,
            modelName:'PlaylisSong',
            timestamps:false
        }
    }
}

module.exports = {PlaylistSong,PlayListSongSchema,PLAYLIST_SONG_TABLE }