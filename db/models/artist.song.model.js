const { Sequelize,Model,DataTypes } = require("sequelize")
const { Album } = require("./album.model")


const ARTIST_SONG_TABLE = 'artist_song'

const ArtistSongSchema={
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    artistId:{
        field:'artist_id',
        allowNull:false,
        type:DataTypes.INTEGER,
        references:{
            model:'artist',
            key:'id'
        },
        songId:{
            field:'song_id',
            allowNull:false,
            type:DataTypes.INTEGER,
            references:{
                model:'song',
                key:'id'
            }   
        }
    }
}


class ArtistSong extends Model{
    static associate(models){
        //
    }
    static config(sequelize){
        return{
            sequelize,
            tableName:ARTIST_SONG_TABLE,
            modelName:'ArtistSong',
            timestaps:false
        }

    }
}

module.exports = {ArtistSong, ArtistSongSchema, ARTIST_SONG_TABLE}