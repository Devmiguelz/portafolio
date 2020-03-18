$(document).ready(function() {
    // body...

    $(window).scroll(function() {

        var windowHeight = $(window).scrollTop();
        var services = $("#services").offset().top - 50;
        var team = $("#team").offset().top - 50;
        var skills = $("#skills").offset().top - 50;
        var portfolio = $("#portfolio").offset().top - 50;
        var testimonials = $("#testimonials").offset().top - 50;
        var git = $("#git").offset().top - 50;

        if (windowHeight > 50) {

            $("#mainNav").addClass("navbar-animacion");

        } else {

            $("#mainNav").removeClass("navbar-animacion");

        }

        if (windowHeight < services) {

            $("#mainNav").css({ "background-color": "#87509c" });
            $(".btn-nav").css({ "color": "#ffffff" });
            $("#logo").css({ "color": "#ffffff" });
            $("#mainNav .navbar-toggler").css({ "color": "#87509c" });
            $("#mainNav .navbar-toggler").css({ "background-color": "#ffffff" });


        } else if (windowHeight >= services && windowHeight < team) {

            $("#mainNav").css({ "background-color": "#17c2a4" });
            $(".btn-nav").css({ "color": "#ffffff" });
            $("#logo").css({ "color": "#ffffff" });
            $("#mainNav .navbar-toggler").css({ "color": "#17c2a4" });
            $("#mainNav .navbar-toggler").css({ "background-color": "#ffffff" });


        } else if (windowHeight >= team && windowHeight < skills) {

            $("#mainNav").css({ "background-color": "#e7f1f8" });
            $(".btn-nav").css({ "color": "#5d677b" });
            $("#logo").css({ "color": "#5d677b" });
            $("#mainNav .navbar-toggler").css({ "color": "#e7f1f8" });
            $("#mainNav .navbar-toggler").css({ "background-color": "#5d677b" });


        } else if (windowHeight >= skills && windowHeight < portfolio) {

            $("#mainNav").css({ "background-color": "#ffffff" });
            $(".btn-nav").css({ "color": "#5d677b" });
            $("#logo").css({ "color": "#5d677b" });
            $("#mainNav .navbar-toggler").css({ "color": "#ffffff" });
            $("#mainNav .navbar-toggler").css({ "background-color": "#5d677b" });


        } else if (windowHeight >= portfolio && windowHeight < testimonials) {

            $("#mainNav").css({ "background-color": "#ffdd99" });
            $(".btn-nav").css({ "color": "#ffffff" });
            $("#logo").css({ "color": "#ffffff" });
            $("#mainNav .navbar-toggler").css({ "color": "#ffdd99" });
            $("#mainNav .navbar-toggler").css({ "background-color": "#ffffff" });


        } else if (windowHeight >= testimonials && windowHeight < git) {

            $("#mainNav").css({ "background-color": "#d74680" });
            $(".btn-nav").css({ "color": "#ffffff" });
            $("#logo").css({ "color": "#ffffff" });
            $("#mainNav .navbar-toggler").css({ "color": "#d74680" });
            $("#mainNav .navbar-toggler").css({ "background-color": "#ffffff" });


        } else if (windowHeight >= git) {

            $("#mainNav").css({ "background-color": "#3c5499" });
            $(".btn-nav").css({ "color": "#ffffff" });
            $("#logo").css({ "color": "#ffffff" });
            $("#mainNav .navbar-toggler").css({ "color": "#3c5499" });
            $("#mainNav .navbar-toggler").css({ "background-color": "#ffffff" });

        }
    });

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
       
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});