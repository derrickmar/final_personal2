var currentSquarePos = 110;

$(document).ready(function() {
    // $('#m-hover').hide();
    // $('#a-hover').hide();
    // $('#r-hover').hide();
    $('#r-click').hide();
    $('#bottom-right-block').hide();
    $('#slidehappy').hide();


    // hoverSlide('#r', '#r-hover', '#r-text', "up", "up");
    // hoverSlide('#m', '#m-hover', '#m-text', "down", "down");
    // hoverSlide('#a', '#a-hover', '#a-text', "down", "down");

    $('.sprites').click(function() {
        $('#bottom-right-block').animate({
            width: 1000
        }, 800);
    });
    
    $('#m').click(function() {
        // if (!$(this).hasClass("large-letter-selected")) {
        console.log('#m was clicked');

        $(".first-letter").fadeOut(function() {
            $(this).text("P");
            $(this).css("color", "#BABABA");
            $(this).parent().css("background-color", "#F7F5F2");
        }).fadeIn();

        $(".name-bottom-right").fadeOut(function() {
            $(this).text("ROJECTS");
            $(this).css("color", "#F7F5F2");
        }).fadeIn();


        $('#bottom-right-block').animate({
            width: 1000
        }, 800);

        $('#bottom-right-block').show("slide", {
            direction: "left"
        }, 800);

        $('#blockslide-first-letter').hide("slide", {
            direction: "left"
        }, 800);

        $(".desc").fadeOut(function() {
            $(this).css("color", "#4A4A4A");
        }).fadeIn();


        $('#desc-block').hide("slide", {
            direction: "up"
        }, 800);


        // messing up due to float only in chrome
        $('#slidehappy').show("slide", {
            direction: "right"
        }, 800);
    });


     $('#a').click(function() {
        // if (!$(this).hasClass("large-letter-selected")) {
        console.log('#m was clicked');

        $(".first-letter").fadeOut(function() {
            $(this).text("D");
            $(this).css("color", "#F7F5F2");
            $(this).parent().css("background-color", "transparent");
        }).fadeIn();

        $(".name-bottom-right").fadeOut(function() {
            $(this).text("ERRICK");
            $(this).css("color", "#4A4A4A");
        }).fadeIn();

        $('#bottom-right-block').hide("slide", {
            direction: "up"
        }, 800);

        $('#blockslide-first-letter').show("slide", {
            direction: "up"
        }, 800);

        $(".desc").fadeOut(function() {
            $(this).css("color", "#F7F5F2");
        }).fadeIn();

        $('#desc-block').show("slide", {
            direction: "up"
        }, 800);

        $('#slideleft').hide("slide", {
            direction: "left"
        }, 800);

        $('#slidehappy').hide("slide", {
            direction: "left"
        }, 800);
    });

    $('#r').click(function() {
        // if (!$(this).hasClass("large-letter-selected")) {
        console.log('#r was clicked');

        $(".first-letter").fadeOut(function() {
            $(this).text("R");
            $(this).css("color", "#BABABA");
            $(this).parent().css("background-color", "#F7F5F2");
        }).fadeIn();

        $(".name-bottom-right").fadeOut(function() {
            $(this).text("EDFINED");
            $(this).css("color", "#F7F5F2");
        }).fadeIn();

        $('#blockslide-first-letter').hide("slide", {
            direction: "left"
        }, 800);

        $(".desc").fadeOut(function() {
            $(this).css("color", "#F7F5F2");
        }).fadeIn();

        $('#desc-block').show("slide", {
            direction: "up"
        }, 800);

        // slide with delay for bottom-right-block
        $('#bottom-right-block').animate({
            width: 413
        }, 800);

        $('#bottom-right-block').show("slide", {
            direction: "left"
        }, 800);

        $('#slidehappy').hide("slide", {
            direction: "left"
        }, 800);


    });

    hoverSlide($("#m"), $('#m-text'), 0);
    hoverSlide($("#a"), $('#a-text'), 110);
    hoverSlide($("#r"), $('#r-text'), 220);

    squaresMove($('#r'), $('#r-first-letter'), $('#r-text'), 220);
    squaresMove($('#a'), $('#a-first-letter'), $('#a-text'), 110);
    squaresMove($('#m'), $('#m-first-letter'), $('#m-text'), 0);

});

// function createBRblock() {

// }

function squaresMove(holder, txt, scdtext, pos) {
    // if clause needed
    holder.click(function() {
        console.log($('.large-letter-text-selected'));
        previousSelected = $('.large-letter-text-selected');
        previousSelected.removeClass('large-letter-text-selected');
        previousSelected.addClass('large-letter-text');

        previousSelectedSecondTxt = $('.text-selected');
        console.log(previousSelectedSecondTxt);
        previousSelectedSecondTxt.removeClass('text-selected');
        previousSelectedSecondTxt.addClass('text');
        // previousSelectedSecondTxt.children(":first").addClass('hidden');
        previousSelectedSecondTxt.children(":first").css("display", "");

        scdtext.parent().addClass('text-selected');
        scdtext.parent().removeClass('text');
        scdtext.removeClass('bgcolor');
        // if (!$(this).hasClass("large-letter-selected")) {
        // console.log('#r was clicked');
        txt.removeClass('large-letter-text');
        txt.addClass('large-letter-text-selected');
        $('.clicksquareRight').animate({
            'top': pos + "px"
        }, 800);
        $('.clicksquare').animate({
            'top': pos + "px"
        }, 800);
        currentSquarePos = pos;
    });
}

function hoverSlide(dom, txt, pos) {
    dom.hover(
        function() {
            // won't ever have this class. Need to look at child instead
            // if (!$(this).hasClass("large-letter-selected")) {
            // console.log($(this));
            // console.log($(this).children(".large-letter-text-selected").length);
            // console.log($(this).find("large-letter-text-selected"));
            if ($(this).children(".large-letter-text-selected").length == 0) {
                console.log("square moving up:" + pos);
                $('#a-hover').animate({
                    'top': pos + "px"
                }, 300);
                txt.addClass('bgcolor');
            }
            // }
        }, function(e) {
            // this if statment is important so we don't fadeOut the text for
            // a selected dom
            if ($(this).children(".large-letter-text-selected").length == 0) {
                // console.log("moving out: " + currentSquarePos);
                txt.removeClass('bgcolor');
                var leavingto = event.toElement || e.relatedTarget;
                // console.log(event.toElement || e.relatedTarget);
                if ($(leavingto).hasClass("large-letter") ||
                    $(leavingto).hasClass("large-letter-text")) {
                    console.log("hoverSlide not going back to original");
                } else {
                    console.log("square moving back:" + currentSquarePos);
                    $('#a-hover').animate({
                        'top': currentSquarePos + "px"
                    }, 200);
                }
            }
        });
}