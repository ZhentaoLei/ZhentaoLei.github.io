var index = 0;
var songlist = $(".banner ul li");
var image = $(".music .music_img");
var songname = $(".music .song_name");
var prev = $(".music .btn .player_prev");
var next = $(".music .btn .player_next");
var pause = $(".music .btn .player_pause");
var mp3 = $(".music .songs");
var isplaying = false;

songlist.click(function () {
  play();
});

function play() {
  mp3.attr("src", songlist.eq(index).attr("datasrc"));
  mp3.get(0).play();
}
