$(document).ready(function() {

    $("#employeer").click(function() {
        ckeckBoxStatus = $("#employeer").is(':checked');

        if (ckeckBoxStatus == true) {
            $('.lookiner').css("display", "none");
            $('.employers').css("display", "block");
            $('.employeer-form-box').css("display", "block");
            $('.employee-form-box').css("display", "none");
            $('#employee').removeAttr('checked');
            $('.text-box').css("display", "block");
            $("#employeer").parent().addClass('active');
        }

        if (ckeckBoxStatus == false) {

        }
    });

    $("#employee").click(function() {
        ckeckBoxStatus = $("#employee").is(':checked');

        if (ckeckBoxStatus == true) {
            $('.lookiner').css("display", "block");
            $('.employers').css("display", "none");
            $('.employee-form-box').css("display", "block");
            $('.employeer-form-box').css("display", "none");
            $('#employeer').removeAttr('checked');
            $('.text-box').css("display", "block");
            $("#employee").parent().addClass('active');
        }

        if (ckeckBoxStatus == false) {

        }
    });


    /* Scrool animation */
    $(window).scroll(function() {

        $('.mov-left').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 600) {
                $(this).addClass('fadeInLeft animated');
                $(this).css('opacity', '1');
            }
        });


    });
});