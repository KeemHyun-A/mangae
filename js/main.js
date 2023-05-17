// $(document).read(function () {
//   $("article").hover(function () {
//     $(".tv1").mouseover(function () {
//       $(this).css("background-color", "black");
//     });
//     $(".tv2").mouseover(function () {
//       $(this).css("background-color", "black");
//     });
//     $(".tv3").mouseover(function () {
//       $(this).css("background-color", "black");
//     });
//     $(".tv4").mouseover(function () {
//       $(this).css("background-color", "black");
//     });
//   });
// });

$(document).ready(function () {
  var current = 0;
  var setIntervalId;
  $(this).eq(current).addClass("on");

  $(".btns li").on({
    click: function () {
      var tg = $(this);
      var i = tg.index();

      movie(i);

      $(".btns li").removeClass("on");
      $(this).addClass("on");
    },
  });
  $("#main").on({
    mouseover: function () {
      clearInterval(setIntervalId);
    },
    mouseout: function () {
      timer();
    },
  });

  timer();
  function timer() {
    setIntervalId = setInterval(function () {
      var n = current + 1;
      if (n == 3) {
        n = 0;
      }
      movie(n);
      $(".btns li").removeClass("on");
      $(".btns li").eq(n).addClass("on");
    }, 3000);
  }
  function movie(i) {
    if (current == i) return;
    var currentEl = $("#main > ul.main_img > li").eq(current);
    var nextEl = $("#main > ul.main_img > li").eq(i);

    currentEl.css({ opacity: 1 }).stop().animate({ opacity: 0 });
    nextEl.css({ opacity: 0 }).stop().animate({ opacity: 1 });

    current = i;
  }
});
