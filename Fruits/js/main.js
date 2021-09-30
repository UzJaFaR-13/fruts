// menu
$("#li1").css({background:'#fff'});
$("#a1").css({color:'#555'});
$("#li1").click(function(){
    $("#li1").css({background:"#fff"})
    $("#a1").css({color:"#000"});
    $("#li2").css({background:"#008080"})
    $("#a2").css({color:"#fff"});
    $("#li3").css({background:"#008080"})
    $("#a3").css({color:"#fff"});
    $("#li4").css({background:"#008080"})
    $("#a4").css({color:"#fff"});
});
$("#li2").click(function(){
    $("#li2").css({background:"#fff"})
    $("#a2").css({color:"#000"});
    $("#li1").css({background:"#008080"})
    $("#a1").css({color:"#fff"});
    $("#li3").css({background:"#008080"})
    $("#a3").css({color:"#fff"});
    $("#li4").css({background:"#008080"})
    $("#a4").css({color:"#fff"});
});
$("#li3").click(function(){
    $("#li3").css({background:"#fff"})
    $("#a3").css({color:"#000"});
    $("#li2").css({background:"#008080"})
    $("#a2").css({color:"#fff"});
    $("#li1").css({background:"#008080"})
    $("#a1").css({color:"#fff"});
    $("#li4").css({background:"#008080"})
    $("#a4").css({color:"#fff"});
});
$("#li4").click(function(){
    $("#li4").css({background:"#fff"})
    $("#a4").css({color:"#000"});
    $("#li2").css({background:"#008080"})
    $("#a2").css({color:"#fff"});
    $("#li3").css({background:"#008080"})
    $("#a3").css({color:"#fff"});
    $("#li1").css({background:"#008080"})
    $("#a1").css({color:"#fff"});
});
// move-up
$(".move-up").click(function(){
    $("html").animate({
        scrollTop:0
    },1500)
});
//search
$(".search-input input").keyup(function(){
    var x=$(this).val().toLowerCase();
    $(".product").hide();
    $(".product").each(function(){
        var y=$(this).text().toLowerCase();
        if(y.indexOf(x)!=-1){
            $(this).show();
        }
    });
})
$(".search-input2 #input2").keyup(function(){
    var x=$(this).val().toLowerCase();
    $(".product2").hide();
    $(".product2").each(function(){
        var y=$(this).text().toLowerCase();
        if(y.indexOf(x)!=-1){
            $(this).show();
        }
    });
});
$(".search-input input").click(function(){
    $(".search-input").css({
        "border":"2px solid dimgrey",
        "border-radius":"6px"
    })
})