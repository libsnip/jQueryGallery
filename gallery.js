$(".Thumbnails").click(function(e) {
    e.preventDefault();
    /*Thumbnails*/
    $(".Gallery nav a").removeClass("Active");
    $(this).addClass("Active");
    /*MainPhoto*/
    $("#MainPhoto img").removeClass("Active");
    $("#MainPhoto img:nth-child("+ ($(this).index()+1) +")").addClass("Active");
});