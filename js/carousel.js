function setUpLightBox() {
    window.targetLightbox,
        $(document)
            .on("click", "[data-lightbox]", function (t) {
                t.preventDefault(), (targetLightbox = $(this));
                var a = targetLightbox.attr("data-lightbox"),
                    i = targetLightbox.attr("data-autoplay"),
                    e = '<p class="lightbox-caption">' + targetLightbox.attr("data-caption") + "</p>",
                    o = "no-gallery-set",
                    l = targetLightbox.attr("data-frame");
                targetLightbox.attr("data-gallery-id") && (o = targetLightbox.attr("data-gallery-id")), targetLightbox.attr("data-caption") || (e = "");
                var d = "";
                1 == i && (d = "autoplay");
                var g = $(
                    ' <div id="lightbox-modal" class="modal fade"> <div class="modal-dialog"> <div class = "modal-content ' +
                        l +
                        ' blocs-lb-container"> <button id="blocs-lightbox-close-btn" type="button" class="close-lightbox" data-dismiss="modal" aria-label="Fermer"> <span aria-hidden="true"> &times; </span></button> <div class="modal-body"> <a href="#" class="prev-lightbox" aria-label="image précédente"> <span class="fa fa-chevron-left" > </span></a> <a href="#" class="next-lightbox" aria-label="image suivante"> <span class="fa fa-chevron-right"> </span></a> <img id="lightbox-image" class="img-fluid" src="' +
                        a +
                        '"> <div id="lightbox-video-container" class="embed-responsive embed-responsive-16by9"> <video controls ' +
                        d +
                        ' class="embed-responsive-item"> <source id="lightbox-video" src = "' +
                        a +
                        '" type="video/mp4"> </video></div> ' +
                        e +
                        "</div></div></div></div>"
                );
                $("body").append(g),
                    "fullscreen-lb" == l &&
                        ($("#lightbox-modal")
                            .addClass("fullscreen-modal")
                            .append('<a class="close-full-screen-modal animated fadeIn" style="animation-delay:0.5s;" onclick="$(\'#lightbox-modal\').modal(\'hide\');"><div class="close-icon"></div></a>'),
                        $("#blocs-lightbox-close-btn").remove()),
                    ".mp4" == a.substring(a.length - 4) ? ($("#lightbox-image, .lightbox-caption").hide(), $("#lightbox-video-container").show()) : ($("#lightbox-image,.lightbox-caption").show(), $("#lightbox-video-container").hide()),
                    $("#lightbox-modal").modal("show"),
                    "no-gallery-set" == o
                        ? (0 == $("a[data-lightbox]").index(targetLightbox) && $(".prev-lightbox").hide(), $("a[data-lightbox]").index(targetLightbox) == $("a[data-lightbox]").length - 1 && $(".next-lightbox").hide())
                        : (0 == $('a[data-gallery-id="' + o + '"]').index(targetLightbox) && $(".prev-lightbox").hide(),
                          $('a[data-gallery-id="' + o + '"]').index(targetLightbox) == $('a[data-gallery-id="' + o + '"]').length - 1 && $(".next-lightbox").hide()),
                    addLightBoxSwipeSupport();
            })
            .on("hidden.bs.modal", "#lightbox-modal", function () {
                $("#lightbox-modal").remove();
            }),
        $(document).on("click", ".next-lightbox, .prev-lightbox", function (t) {
            t.preventDefault();
            var a = "no-gallery-set",
                i = $("a[data-lightbox]").index(targetLightbox),
                e = $("a[data-lightbox]").eq(i + 1);
            targetLightbox.attr("data-gallery-id") && ((a = targetLightbox.attr("data-gallery-id")), (i = $('a[data-gallery-id="' + a + '"]').index(targetLightbox)), (e = $('a[data-gallery-id="' + a + '"]').eq(i + 1))),
                $(this).hasClass("prev-lightbox") && ((e = $('a[data-gallery-id="' + a + '"]').eq(i - 1)), "no-gallery-set" == a && (e = $("a[data-lightbox]").eq(i - 1)));
            var o = e.attr("data-lightbox");
            if (".mp4" == o.substring(o.length - 4)) {
                var l = "";
                1 == e.attr("data-autoplay") && (l = "autoplay"),
                    $("#lightbox-image, .lightbox-caption").hide(),
                    $("#lightbox-video-container")
                        .show()
                        .html("<video controls " + l + ' class="embed-responsive-item"><source id="lightbox-video" src="' + o + '" type="video/mp4"></video>');
            } else $("#lightbox-image").attr("src", o).show(), $(".lightbox-caption").html(e.attr("data-caption")).show(), $("#lightbox-video-container").hide();
            (targetLightbox = e),
                $(".next-lightbox, .prev-lightbox").hide(),
                "no-gallery-set" == a
                    ? ($("a[data-lightbox]").index(e) != $("a[data-lightbox]").length - 1 && $(".next-lightbox").show(), $("a[data-lightbox]").index(e) > 0 && $(".prev-lightbox").show())
                    : ($('a[data-gallery-id="' + a + '"]').index(e) != $('a[data-gallery-id="' + a + '"]').length - 1 && $(".next-lightbox").show(), $('a[data-gallery-id="' + a + '"]').index(e) > 0 && $(".prev-lightbox").show());
        });
}
function addSwipeSupport() {
    $(".carousel-inner").length &&
        $(".carousel-inner").swipe({
            swipeLeft: function (t, a, i, e, o) {
                $(this).parent().carousel("next");
            },
            swipeRight: function () {
                $(this).parent().carousel("prev");
            },
            threshold: 0,
        });
}
function addKeyBoardSupport() {
    $(window).keydown(function (t) {
        37 == t.which ? $(".prev-lightbox").is(":visible") && $(".prev-lightbox").click() : 39 == t.which && $(".next-lightbox").is(":visible") && $(".next-lightbox").click();
    });
}
function addLightBoxSwipeSupport() {
    $("#lightbox-image").length &&
        $("#lightbox-image").swipe({
            swipeLeft: function (t, a, i, e, o) {
                $(".next-lightbox").is(":visible") && $(".next-lightbox").click();
            },
            swipeRight: function () {
                $(".prev-lightbox").is(":visible") && $(".prev-lightbox").click();
            },
            threshold: 0,
        });
}
$(document).ready(function () {
    $("#scroll-hero").click(setUpLightBox(), addSwipeSupport(), addLightBoxSwipeSupport(), addKeyBoardSupport());
});
