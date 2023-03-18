const { DisTube } = require('distube');
const { SpotifyPlugin } = require('@distube/spotify');
const { SoundCloudPlugin } = require('@distube/soundcloud');
const { YtDlpPlugin } = require('@distube/yt-dlp')

module.exports = (client, Discord) => {
    console.log(`Modulo de MÚSICA Cargado!`.red)

    // client.distube = new DisTube(client, {
    //     emitNewSongOnly: true,
    //     leaveOnEmpty: true,
    //     leaveOnFinish: true,
    //     leaveOnStop: true,
    //     savePreviousSongs: true,
    //     emitAddSongWhenCreatingQueue: true,
    //     searchSongs: 0,
    //     emptyCooldown: 25,
    //     ytdlOptions: {
    //         highWaterMark: 1024 * 1024 * 64,
    //         quality: "highestaudio",
    //         format: "audioonly",
    //         liveBuffer: 60000,
    //         dlChunkSize: 1024 * 1024 * 4,
    //     },
    //     plugins: [
    //         new SpotifyPlugin({
    //             parallel: true,
    //             emitEventsAfterFetching: true,
    //         }),
    //         new SoundCloudPlugin(),
    //         new YtDlpPlugin()
    //     ],
    // });

    client.distube = new DisTube(client, {
        emitNewSongOnly: true,
        leaveOnFinish: true, 
        emitAddSongWhenCreatingQueue: false,
        plugins: [new SpotifyPlugin()]
      });

}