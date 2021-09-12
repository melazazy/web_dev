
$(document).ready(function () {
    $(window).scroll(function () {
        /* sticky navbar on scroll script*/
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

