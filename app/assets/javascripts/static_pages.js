var currentSquarePos = 110;

$(document).ready(function() {

    $(window).bind("resize", checkPosition);

    checkPosition();

    $('.tabrow').hide();
    $('.tabrow2').hide();
    $('#desc-block').hide();
    $('#sprite1').hide();

    $('.sprites').click(function() {
        $('#bottom-right-block').animate({
            width: 1000
        }, 800);
    });

    hoverTabUp($('ul.tabrow > li'));
    hoverTabUp($('ul.tabrow2 > li'));

    myProjectsClick($('#m'));
    myProjectsClick($('.note'));

    $('#a').click(function() {
        console.log('#m was clicked');

        $(".first-letter").fadeOut(function() {
            $(this).text("D");
            $(this).css("color", "#BABABA");
            $(this).parent().css("background-color", "#F7F5F2");
        }).fadeIn();

        $(".name-bottom-right").fadeOut(function() {
            $(this).text("ERRICK");
            $(this).css("color", "#F7F5F2");
        }).fadeIn();

        $('#bottom-right-block').animate({
            width: 1000
        }, 800);

        $('#bottom-right-block').show("slide", {
            direction: "left"
        }, 800);

        $(".desc").fadeOut(function() {
            $(this).css("color", "#4A4A4A");
        }).fadeIn();

        $('#blockslide-first-letter').show("slide", {
            direction: "up"
        }, 800);

        $('#desc-block').hide("slide", {
            direction: "up"
        }, 800);

        // messing up due to float only in chrome
        $('#slideright').show("slide", {
            direction: "right"
        }, 800);

        $("#aboutDesc").removeClass('hidden');
        $("#resumeDesc").addClass('hidden');
        $("#projectsDesc").addClass('hidden');
        $('#sprites1').fadeOut(1200);
        $('#sprites2').fadeIn(1200);

        $('.tabrow').hide("slide", {
            direction: "down"
        }, 800);
        $('.tabrow2').hide("slide", {
            direction: "down"
        }, 800);
    });

    $('#r').click(function() {
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

        $('#blockslide-first-letter').show("slide", {
            direction: "up"
        }, 800);

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

        $('#slideright').hide("slide", {
            direction: "left"
        }, 800);

        // text stuff
        $("#aboutDesc").addClass('hidden');
        $("#resumeDesc").removeClass('hidden');
        $("#projectsDesc").addClass('hidden');
        $('#sprites1').fadeIn(1200);
        $('#sprites2').fadeOut(1200);

        $('.tabrow').show("slide", {
            direction: "down"
        }, 800);
        $('.tabrow2').hide("slide", {
            direction: "down"
        }, 800);
    });

    hoverSlide($("#m"), $('#m-text'), 0);
    hoverSlide($("#a"), $('#a-text'), 110);
    hoverSlide($("#r"), $('#r-text'), 220);
    hoverSlide($(".note"), $('#m-text'), 0);


    squaresMove($('#r'), $('#r-first-letter'), $('#r-text'), 220);
    squaresMove($('#a'), $('#a-first-letter'), $('#a-text'), 110);
    squaresMove($('#m'), $('#m-first-letter'), $('#m-text'), 0);
    squaresMove($('.note'), $('#m-first-letter'), $('#m-text'), 0);

    tabClickedResume($('ul.tabrow > li'));
    tabClickedProjects($('ul.tabrow2 > li'));

    jump61popup();

});

function myProjectsClick(dom) {
    dom.click(function() {
        console.log('myProjects was clicked');
        $(".first-letter").fadeOut(function() {
            $(this).text("P");
            $(this).css("color", "#F7F5F2");
            $(this).parent().css("background-color", "transparent");
        }).fadeIn();
        $(".name-bottom-right").fadeOut(function() {
            $(this).text("ROJECTS");
            $(this).css("color", "#4A4A4A");
        }).fadeIn();

        $('#blockslide-first-letter').hide("slide", {
            direction: "up"
        }, 800);

        $('#bottom-right-block').hide("slide", {
            direction: "up"
        }, 800);

        $('#desc-block').show("slide", {
            direction: "up"
        }, 800);

        $('#slideleft').hide("slide", {
            direction: "left"
        }, 800);

        $('#slideright').hide("slide", {
            direction: "left"
        }, 800);

        // body stuff
        $("#aboutDesc").addClass('hidden');
        $("#resumeDesc").addClass('hidden');
        $("#projectsDesc").removeClass('hidden');
        $('#sprites1').fadeIn(1200);
        $('#sprites2').fadeOut(1200);

        $('.tabrow').hide("slide", {
            direction: "down"
        }, 800);

        $('.tabrow2').show("slide", {
            direction: "down"
        }, 800);
    });
}

function jump61popup() {
    $('#jump61btn').click(function() {
        $('#jump61popup').fadeIn();
    });

    $('.popup').mouseup(function(e) {
        var container = $(this);
        console.log(e.target);
        if (container.is(e.target)) {
            $(this).fadeOut();
        }
    });
}

function hoverTabUp(dom) {
    dom.hover(
        function() {
            console.log("in hoverTabUp");
            if (!$(this).hasClass('selected') && !$(this).hasClass('selected2')) {
                $(this).animate({
                    top: "-=2"
                }, 100);
            }
        }, function(e) {
            if (!$(this).hasClass('selected') && !$(this).hasClass('selected2')) {
                $(this).animate({
                    top: "+=2"
                }, 100);
            }
        });
}

function tabClickedProjects(dom) {
    dom.click(function() {
        if (!$(this).hasClass('selected2')) {
            console.log($(this));
            console.log("in tabClickedProjects");
            $('.selected2').css("top", "0px").removeClass('selected2')
            $(this).addClass('selected2');
            $('#projectsDesc  > div.descOpp:not(.hidden)').addClass('hidden');
            switch ($(this).index()) {
                case 0:
                    $('#tasksimply').removeClass('hidden');
                    break;
                case 1:
                    $('#jump61').removeClass('hidden');
                    break;
                case 2:
                    $('#gymscribe').removeClass('hidden');
                    break;
            }
        }
    });
}

function tabClickedResume(dom) {
    dom.click(function() {
        if (!$(this).hasClass('selected')) {
            console.log("in tabClickedResume");
            $('.selected').css("top", "0px").removeClass('selected')
            $(this).addClass('selected');
            $('#resumeDesc  > div.descOpp:not(.hidden)').addClass('hidden');
            switch ($(this).index()) {
                case 0:
                    $('#skills').removeClass('hidden');
                    break;
                case 1:
                    $('#experience').removeClass('hidden');
                    break;
                case 2:
                    $('#activities').removeClass('hidden');
                    break;
                case 3:
                    $('#academics').removeClass('hidden');
                    break;
            }
        }
    });
}

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

function checkPosition() {
    var width = $(window).width();
    console.log($(window).width());
    // console.log($(window).height());
    if (width < 865) {
        $('.full').addClass('hidden');
        $('#notification').removeClass('hidden');
    } else {
        $('.full').removeClass('hidden');
        $('#notification').addClass('hidden');
    }
}

function hoverSlide(dom, txt, pos) {
    dom.hover(
        function() {
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
                var leavingto = e.toElement || e.relatedTarget;
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