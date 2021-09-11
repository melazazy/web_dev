
$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        var scroll = $(window).scrollTop();
        // if (scroll > 20) {
        //     $('header').addClass("sticky1");
        // } else {
        //     $('header').removeClass("sticky1");
        // }
        var first = $("#services");
        var objectPosition = first.offset().top - 100;
        if (scroll > objectPosition) {
            $("header").addClass("change-one");
        } else {
            $("header").removeClass("change-one");
        }


    });
});



// scroling
/*
  var scroll = $(window).scrollTop();
    var first = $("chang1");
    var objectSelect = $("#change_header");
    var objectPosition = objectSelect.offset().top;
    if (scroll > objectPosition) {
        $(".header").addClass("change");
    } else {
        $(".header").removeClass("change");
    }
*/

/*
    var scroll = $(window).scrollTop();
    var first = $("chang1");
    var objectSelect = $("#change_header");
    var objectPosition = first.offset().top;
    if (scroll > objectPosition) {
        $(".header").addClass("change-one");
    } else {
        $(".header").removeClass("change-one");
    }
*/