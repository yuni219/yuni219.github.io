$(function () {
 $(".sidebar-link").click(function () {
  $(".sidebar-link").removeClass("is-active");
  $(this).addClass("is-active");
 });
});

$(window)
 .resize(function () {
  if ($(window).width() > 1090) {
   $(".sidebar").removeClass("collapse");
  } else {
   $(".sidebar").addClass("collapse");
  }
 })
 .resize();

const allVideos = document.querySelectorAll(".video");

allVideos.forEach((v) => {
 v.addEventListener("mouseover", () => {
  const video = v.querySelector("video");
  video.play();
 });
 v.addEventListener("mouseleave", () => {
  const video = v.querySelector("video");
  video.pause();
 });
});

$(function () {
 $(".logo, .logo-expand, .discover").on("click", function (e) {
  $(".main-container").removeClass("show");
  $(".music").addClass("showmusic");
  $(".music").scrollTop(0);
  $(".main-container").scrollTop(0);
 });
 $(".trending, .video").on("click", function (e) {
  $(".main-container").addClass("show");
  $(".stream-area").removeClass("shows");
  $(".stream-area").scrollTop(0);
  $(".main-container").scrollTop(0);
  $(".sidebar-link").removeClass("is-active");
  $(".trending").addClass("is-active");
  $(".music").addClass("showmusic");
  $(".music").scrollTop(0);
  $(".playlist").addClass("showplaylist");
    $(".musPlaylistic").scrollTop(0);
 });
  $(".streaming").on("click", function (e) {
    $(".main-container").addClass("show");
    $(".stream-area").addClass("shows");
    $(".main-container").scrollTop(0);
    $(".stream-area").scrollTop(0);
    $(".streaming").addClass("is-active");
    $(".music").removeClass("showmusic");
    $(".music").scrollTop(0);
    $(".playlist").addClass("showplaylist");
    $(".playlist").scrollTop(0);

    
 });


 $(".Playlist").on("click", function (e) {
  $(".main-container").addClass("show");
  $(".stream-area").addClass("shows");
  $(".main-container").scrollTop(0);
  $(".music").addClass("showmusic");
  $(".stream-area").scrollTop(0);
  $(".Playlist").addClass("is-active");

  $(".playlist").removeClass("showplaylist");
  $(".music").scrollTop(0);

  
  
});

 $(".video").click(function () {
  var source = $(this).find("source").attr("src");
  var title = $(this).find(".video-name").text();
  var person = $(this).find(".video-by").text();
  var img = $(this).find(".author-img").attr("src");
  $(".video-stream video").stop();
  $(".video-stream source").attr("src", source);
  $(".video-stream video").load();
  $(".video-p-title").text(title);
  $(".video-p-name").text(person);
  $(".video-detail .author-img").attr("src", img);
 });




     //默认访问第一页
  // $("#pagination1").pagination({
  //   currentPage: 1,
  //   totalPage: 3,
  //   callback: function(current) {//当前页数
  //   console.log("当前页数:"+current)
  //       currentPage=current;
  //     getInfoPage();
  //   }
  // });
    
    
});

