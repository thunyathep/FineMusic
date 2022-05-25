const   mongoose = require('mongoose');
        

const musicSchema = new mongoose.Schema({
    music : String,
    artist : String,
    artistImage : String,
    musicImage : String ,
    lyric : String ,
    filemusic : String,
    favorite : {
        type:Number,
        default: 0
    }
});



module.exports = mongoose.model('Music',musicSchema);