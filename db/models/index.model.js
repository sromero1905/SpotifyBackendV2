const { Song, SongSchema } = require('./song.model');
const { Artist, ArtistSchema } = require('./artist.model');
const { Genre, GenresSchema } = require('./genres.model');
const { User, UserSchema } = require('./user.model');
const { Manager, ManagerSchema } = require('./manager.model');
const { Album, AlbumSchema } = require('./album.model');
const { PlayList, PlaylistSchema }= require('./playlist.model')

function setUpModels(sequelize) {
    // Inicializar modelos
    Song.init(SongSchema, Song.config(sequelize));
    Artist.init(ArtistSchema, Artist.config(sequelize));
    Genre.init(GenresSchema, Genre.config(sequelize));
    User.init(UserSchema, User.config(sequelize));
    Manager.init(ManagerSchema, Manager.config(sequelize));
    Album.init(AlbumSchema, Album.config(sequelize));
    PlayList.init(PlaylistSchema, PlayList.config(sequelize));

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