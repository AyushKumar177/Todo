
//click to LINE THROUGH
$("ul").on("click","li",function(){
    $(this).toggleClass("completed")

    // if($(this).css("color") === "rgb(128, 128, 128)"){
    //     $(this).css("color","black");
    //     $(this).css("text-decoration","none");
    // }else{
    //     $(this).css({
    //         color:"gray",
    //         textDecoration : "line-through"
    //     });     
    // }
});

// X to DELETE
$("ul").on("click","span",function(event){
    //$(this).parent().fadeOut(500,function(){
    //    $(this).remove();
    $(this).parent().remove();
    event.stopPropagation();
});
// ADDING
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todotext = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todotext + "</li>");
    }
});
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle()
});