//heads
//when active show border and text
$(document).ready(function() {
    $('div.team-heads').on('click', function() {
        $(this).parent().find('div.active').removeClass('active');
        $(this).addClass('active');
        properText();
    });
});

function properText() {
    if ($('.team-heads').is('#100.active')) {
        $('.marko').show();
        $('.dusan').hide();
        $('.bojan').hide();
    } else if ($('.team-heads').is('#200.active')) {
        $('.marko').hide();
        $('.dusan').show();
        $('.bojan').hide();
    } else if ($('.team-heads').is('#300.active')) {
        $('.marko').hide();
        $('.dusan').hide();
        $('.bojan').show();
    }
}

//categories
$(document).ready(function() {
    $('.btn').on('click', function() {
        $(this).parent().find('a.active-menu').removeClass('active-menu');
        $(this).addClass('active-menu');
        properNews();
    });
});

function properNews() {
    if ($('a').is(".active-menu.mem")) {
        $('.member').show();
        $('.product').hide();
        $('.service').hide();
    } else if ($('a').is(".active-menu.prod")) {
        $('.member').hide();
        $('.product').show();
        $('.service').hide();
    } else if ($('a').is(".active-menu.cat")) {
        $('.member').hide();
        $('.product').hide();
        $('.service').show();
    } else if ($('a').is(".active-menu.all")) {
        $('.member').show();
        $('.product').show();
        $('.service').show();
    }
}

//read more
$(document).ready(function() {
    // Configure/customize these variables.
    var showChar = 550; // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Show more";
    var lesstext = "Show less";


    $('.more').each(function() {
        var content = $(this).html();

        if (content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);

            var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

            $(this).html(html);
        }

    });

    $(".morelink").click(function() {
        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
//toggle nav

$(document).ready(function() {
    $(".toggle").click(function() {
        $("ul").toggleClass(function() {
            return "responsive"
        });
    });
});

//canvas animation coin

(function() {

    var logo,
        logoImage,
        canvas;

    function logoLoop() {

        window.requestAnimationFrame(logoLoop);

        logo.update();
        logo.render();
    }

    function sprite(options) {

        var that = {},
            frameIndex = 0,
            tickCount = 0,
            ticksPerFrame = options.ticksPerFrame || 0,
            numberOfFrames = options.numberOfFrames || 1;

        that.context = options.context;
        that.width = options.width;
        that.height = options.height;
        that.image = options.image;

        that.update = function() {

            tickCount += 1;

            if (tickCount > ticksPerFrame) {

                tickCount = 0;

                // If the current frame index is in range
                if (frameIndex < numberOfFrames - 1) {
                    // Go to the next frame
                    frameIndex += 1;
                } else {
                    frameIndex = 0;
                }
            }
        };

        that.render = function() {

            // Clear the canvas
            that.context.clearRect(0, 0, that.width, that.height);

            // Draw the animation
            that.context.drawImage(
                that.image,
                frameIndex * that.width / numberOfFrames,
                0,
                that.width / numberOfFrames,
                that.height,
                0,
                0,
                that.width / numberOfFrames,
                that.height);
        };

        return that;
    }

    // Get canvas
    canvas = document.getElementById("logoAnimation");
    canvas.width = 200;
    canvas.height = 100;

    // Create sprite sheet
    logoImage = new Image();

    // Create sprite
    logo = sprite({
        context: canvas.getContext("2d"),
        width: 2000,
        height: 100,
        image: logoImage,
        numberOfFrames: 10,
        ticksPerFrame: 4
    });

    // Load sprite sheet
    logoImage.addEventListener("load", logoLoop);
    logoImage.src = "img/sprite-sheet2.png";

}());