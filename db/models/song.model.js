
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
},
albumId:{
    field:'album_id',
    allowNull:false,
    type:DataTypes.INTEGER,
    references:{
        model:'album',
        key:'id'
    },
    onUpdate:'CASCADE',
    onDelete:'SET NULL'
},
genreId:{
    field:'genre_id',
    allowNull:false,
    type:DataTypes.INTEGER,
    references:{
        model:'genre',
        key:'id'
    },
    onUpdate:'CASCADE',
    onDelete:'SET NULL'
}
}


class Song extends Model{
    static associate(models){
        this.belongsTo(models.Album,{
            as:'album',
            foreignKey:'albumId'
        })
        this.belongsTo(models.Genre,{
            as:'gere',
            foreignKey:'genreId'
        })
        this.belongsToMany(models.Artis,{
            through:models.ArtistSong,
            as:'artists',
            foreignKey:'songId',
            otherKey:'artistId'
        })
        this.belongsToMany(models.Playlist,{
            through:models.PlaylisSong,
            as:'playlists',
            foreignKey:'songId',
            otherKey:'playlistId'
        })
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