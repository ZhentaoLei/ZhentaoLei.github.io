var index = 0;
var songlist = $(".banner ul li");
var image = $(".music .music_img img");
var songname = $(".music .song_name");
var prev = $(".music .btn .player_prev");
var next = $(".music .btn .player_next");
var pause = $(".music .btn .player_pause");
var mp3 = $(".music .songs");
var isplaying = false;

pause.click(function () {
  if (isplaying) {
    unspin();
    change_icon_continue();
    isplaying = false;
  } else {
    spin();
    change_icon_pause();
    isplaying = true;
  }
});

songlist.click(function () {
  index = $(this).index();
  change_background(index + 1);
  change_album_pic(index + 1);
  play();
});

function play() {
  mp3.attr("src", songlist.eq(index).attr("datasrc"));
  mp3.get(0).play();
  isplaying = true;
}

function change_background(idx) {
  $("body").css({
    background: "url(img/songback" + idx + ".jpg) no-repeat",
    "background-size": "cover",
  });
}

function change_album_pic(idx) {
  image.attr("src", "img/cubi" + idx + ".jpg");
  spin();
}

function change_icon_continue() {
  pause.removeClass("player_pause");
  pause.addClass("player_continue");
  pause.attr("title", "continue");
}
function change_icon_pause() {
  pause.removeClass("player_continue");
  pause.addClass("player_pause");
  pause.attr("title", "pause");
}
function spin() {
  image.addClass("spin");
}

function unspin() {
  image.removeClass("spin");
}
