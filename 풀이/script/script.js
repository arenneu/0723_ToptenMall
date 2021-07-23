$(function(){
    // 멀티탭 구현 시작
    $("#multiTapArea>div").click(function(){
        $("#multiTapArea>div").removeClass("selected");
        $(this).addClass("selected");
    });
    // 멀티탭 구현 끝
});