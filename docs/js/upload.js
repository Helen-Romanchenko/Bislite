$(function(){
  $(".button--upload").on("click", function(){
    var btn = $(this);
    var loader = btn.find("span");
    $.ajax({
      url: "../assets/uploading-data.html",
      type: "GET",
      beforeSend: function(){
        btn.attr("disabled", true);
        loader.removeClass("d-none");
        loader.addClass("works__spinner-show");
      },
      success: function(responce){
        setTimeout(function(){
          loader.removeClass("works__spinner-show");
          loader.addClass("d-none");
          btn.attr("disabled", false);
          $(".works__upload").before(responce);
        }, 1000);
      }
    });
  });
});
