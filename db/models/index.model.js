const { Song, SongSchema } = require('./song.model');
const { Artist, ArtistSchema } = require('./artist.model');
const { Genre, GenreSchema } = require('./genres.model');
const { User, UserSchema } = require('./user.model');
const { Manager, ManagerSchema } = require('./manager.model');
const { Album, AlbumSchema } = require('./album.model');
const { PlayList, PlaylistSchema }= require('./playlist.model')
const {ArtistSong,ArtistSongSchema  }= require('./artist.song.model')
const{PlaylistSong,PlayListSongSchema   } = require('./playlist.sog.model')
 
function setUpModels(sequelize) {
    // Inicializar modelos
    Song.init(SongSchema, Song.config(sequelize));
    Artist.init(ArtistSchema, Artist.config(sequelize));
    Genre.init(GenreSchema, Genre.config(sequelize));
    User.init(UserSchema, User.config(sequelize));
    Manager.init(ManagerSchema, Manager.config(sequelize));
    Album.init(AlbumSchema, Album.config(sequelize));
    PlayList.init(PlaylistSchema, PlayList.config(sequelize));
    ArtistSong.init(ArtistSongSchema, ArtistSong.config(sequelize))
    PlaylistSong.init(PlayListSongSchema, PlaylistSong.config(sequelize))

    //asociaciones
    Song.associate(sequelize.models);
    Album.associate(sequelize.models);
    Genre.associate(sequelize.models);
    Manager.associate(sequelize.models);
    Artist.associate(sequelize.models);
    PlayList.associate(sequelize.models);
    User.associate(sequelize.models);

}


module.exports = setUpModels