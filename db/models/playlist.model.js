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
},
userId:{
    field:'user_id',
    allowNull:false,
    type:DataTypes.INTEGER,
    references:{
        model:'user',
        key:'id'
    },
    onUpdate:'CASCADE',
    onDelete:'SET NULL'
}

}

class PlayList extends Model{
    static associate(models){
        this.belongsTo(models.User,{
            as:'user',
            foreignKey:'userId'
        })
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