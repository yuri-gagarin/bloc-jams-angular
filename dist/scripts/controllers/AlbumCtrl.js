(function() {
    function AlbumCtrl (Fixtures, SongPlayer) {
        this.albumData = Fixtures.getAlbum();
        this.songPlayer = SongPlayer;
        this.log = function(val) { console.log(val)};
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl])
    
})();