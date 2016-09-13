(function() {
    function AlbumCtrl (Fixtures, SongPlayer) {
        this.albumData = Fixtures.getAlbum();
        this.songPLayer = SongPlayer;
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl])
    
})();