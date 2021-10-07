var index = 0;
var songlist = $(".banner ul li");
var image = $(".music .music_img img");
var songname = $(".music .song_name");
var prev = $(".music .btn .player_prev");
var next = $(".music .btn .player_next");
var pause = $(".music .btn .player_continue");
var mp3 = $(".music .songs");
var isplaying = false;
var slider = document.getElementById("myRange");

pause.click(function () {
  if (isplaying) {
    unspin();
    change_icon_continue();
    isplaying = false;
    mp3.get(0).pause();
  } else {
    spin();
    change_icon_pause();
    isplaying = true;
    mp3.get(0).play();
    mp3.get(0).volume = slider.value / 100;

    change_background(index + 1);
  }
});
prev.click(function () {
  index--;
  if (index < 0) {
    index = songlist.length - 1;
  }
  change_background(index + 1);
  change_album(index + 1);
  play();
});

next.click(function () {
  index++;
  if (index > songlist.length - 1) {
    index = 0;
  }
  change_background(index + 1);
  change_album(index + 1);
  play();
});

songlist.click(function () {
  index = $(this).index();
  change_background(index + 1);
  change_album(index + 1);
  play();
  change_icon_pause();
});

slider.oninput = function () {
  mp3.get(0).volume = this.value / 100;
};

function play() {
  mp3.attr("src", songlist.eq(index).attr("datasrc"));
  mp3.get(0).play();
  mp3.get(0).volume = slider.value / 100;
  isplaying = true;
}

function change_background(idx) {
  $("body").css({
    background: "url(img/songback" + idx + ".jpg) no-repeat",
    "background-size": "cover",
  });
}

function change_album(idx) {
  image.attr("src", "img/cubi" + idx + ".jpg");
  songname.html(songlist.eq(idx).attr("title"));
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
