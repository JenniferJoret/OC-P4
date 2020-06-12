// Blocs.js Minified
function setUpSpecialNavs() {
    $(".navbar-toggle").click(function (t) {
        var e = $(this).closest("nav"),
            i = e.find("ul.site-navigation"),
            a = i.clone();
        if (i.parent().hasClass("nav-special"))
            if (t.stopPropagation(), $(this).hasClass("selected-nav")) $(".blocsapp-special-menu blocsnav").removeClass("open"), $(".selected-nav").removeClass("selected-nav"), setTimeout(function () {
                $(".blocsapp-special-menu").remove(), $("body").removeClass("lock-scroll"), $(".selected-nav").removeClass("selected-nav")
            }, 300);
            else {
                $(this).addClass("selected-nav");
                var o = e.attr("class").replace("navbar", "").replace("row", ""),
                    l = i.parent().attr("class").replace("navbar-collapse", "").replace("collapse", "");
                ($(".content-tint").length = -1) && $("body").append('<div class="content-tint"></div>'), a.insertBefore(".page-container").wrap('<div class="blocsapp-special-menu ' + o + '"><blocsnav class="' + l + '">'), $("blocsnav").prepend('<a class="close-special-menu animated fadeIn" style="animation-delay:0.5s;"><div class="close-icon"></div></a>'),
                    function () {
                        var t = "fadeInRight",
                            e = 0,
                            i = 60;
                        $(".blocsapp-special-menu blocsnav").hasClass("fullscreen-nav") ? (t = "fadeIn", i = 100) : $(".blocsapp-special-menu").hasClass("nav-invert") && (t = "fadeInLeft");
                        $(".blocsapp-special-menu blocsnav li").each(function () {
                            $(this).parent().hasClass("dropdown-menu") ? $(this).addClass("animated fadeIn") : (e += i, $(this).attr("style", "animation-delay:" + e + "ms").addClass("animated " + t))
                        })
                    }(), setTimeout(function () {
                        $(".blocsapp-special-menu blocsnav").addClass("open"), $(".content-tint").addClass("on"), $("body").addClass("lock-scroll")
                    }, 10)
            }
    }), $("body").on("mousedown touchstart", ".content-tint, .close-special-menu", function (t) {
        $(".content-tint").removeClass("on"), $(".selected-nav").click(), setTimeout(function () {
            $(".content-tint").remove()
        }, 10)
    }).on("click", ".blocsapp-special-menu a", function (t) {
        $(t.target).closest(".dropdown-toggle").length || $(".close-special-menu").mousedown()
    })
}

function extraNavFuncs() {
    $(".site-navigation a").click(function (t) {
        $(t.target).closest(".dropdown-toggle").length || $(".navbar-collapse").collapse("hide")
    }), $("a.dropdown-toggle").click(function (t) {
        $(this).parent().addClass("target-open-menu"), $(this).closest(".dropdown-menu").find(".dropdown.open").each(function (t) {
            $(this).hasClass("target-open-menu") || $(this).removeClass("open")
        }), $(".target-open-menu").removeClass("target-open-menu")
    })
}

function setFillScreenBlocHeight() {
    $(".bloc-fill-screen").each(function (t) {
        var e = $(this);
        window.fillBodyHeight = 0, $(this).find(".container").each(function (t) {
            fillPadding = 2 * parseInt($(this).css("padding-top")), e.hasClass("bloc-group") ? fillBodyHeight = fillPadding + $(this).outerHeight() + 50 : fillBodyHeight = fillBodyHeight + fillPadding + $(this).outerHeight() + 50
        }), $(this).css("height", getFillHeight() + "px")
    })
}

function getFillHeight() {
    var t = $(window).height();
    return t < fillBodyHeight && (t = fillBodyHeight + 100), t
}

function scrollToTarget(t) {
    1 == t ? t = 0 : 2 == t ? t = $(document).height() : (t = $(t).offset().top, $(".sticky-nav").length && (t -= $(".sticky-nav .navbar-header").height())), $("html,body").animate({
        scrollTop: t
    }, "slow"), $(".navbar-collapse").collapse("hide")
}

function animateWhenVisible() {
    hideAll(), inViewCheck(), $(window).scroll(function () {
        inViewCheck(), scrollToTopView(), stickyNavToggle()
    })
}

function setUpDropdownSubs() {
    $("ul.dropdown-menu [data-toggle=dropdown]").on("click", function (t) {
        t.preventDefault(), t.stopPropagation(), $(this).parent().siblings().removeClass("open"), $(this).parent().toggleClass("open");
        var e = $(this).parent().children(".dropdown-menu");
        e.offset().left + e.width() > $(window).width() && e.addClass("dropmenu-flow-right")
    })
}

function stickyNavToggle() {
    var t = 0,
        e = "sticky";
    if ($(".sticky-nav").hasClass("fill-bloc-top-edge")) {
        var i = $(".fill-bloc-top-edge.sticky-nav").parent().css("background-color");
        "rgba(0, 0, 0, 0)" == i && (i = "#FFFFFF"), $(".sticky-nav").css("background", i), t = $(".sticky-nav").height(), e = "sticky animated fadeInDown"
    }
    $(window).scrollTop() > t ? ($(".sticky-nav").addClass(e), "sticky" == e && $(".page-container").css("padding-top", $(".sticky-nav").height())) : ($(".sticky-nav").removeClass(e).removeAttr("style"), $(".page-container").removeAttr("style"))
}

function hideAll() {
    $(".animated").each(function (t) {
        $(this).closest(".hero").length || $(this).removeClass("animated").addClass("hideMe")
    })
}

function inViewCheck() {
    $($(".hideMe").get().reverse()).each(function (t) {
        var e = jQuery(this),
            i = e.offset().top + e.height(),
            a = $(window).scrollTop() + $(window).height();
        if (e.height() > $(window).height() && (i = e.offset().top), i < a) {
            var o = e.attr("class").replace("hideMe", "animated");
            e.css("visibility", "hidden").removeAttr("class"), setTimeout(function () {
                e.attr("class", o).css("visibility", "visible")
            }, .01)
        }
    })
}

function scrollToTopView() {
    $(window).scrollTop() > $(window).height() / 3 ? $(".scrollToTop").hasClass("showScrollTop") || $(".scrollToTop").addClass("showScrollTop") : $(".scrollToTop").removeClass("showScrollTop")
}

function setUpVisibilityToggle() {
    $(document).on("click", "[data-toggle-visibility]", function (t) {
        t.preventDefault();
        var e = $(this).attr("data-toggle-visibility");
        if (-1 != e.indexOf(",")) {
            var i = e.split(",");
            $.each(i, function (t) {
                a($("#" + i[t]))
            })
        } else a($("#" + e));

        function a(t) {
            t.is("img") ? t.toggle() : t.slideToggle()
        }
    })
}


$(document).ready(function () {
    $("#scroll-hero").click(function (t) {
        t.preventDefault(), $("html,body").animate({
            scrollTop: $("#scroll-hero").closest(".bloc").height()
        }, "slow")
    }), extraNavFuncs(), setUpSpecialNavs(), setUpDropdownSubs(), setUpLightBox(), setUpVisibilityToggle(), addSwipeSupport(), addKeyBoardSupport(), -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") && $("#page-loading-blocs-notifaction").remove()
}), $(window).load(function () {
    setFillScreenBlocHeight(), animateWhenVisible(), $("#page-loading-blocs-notifaction").remove()
}).resize(function () {
    setFillScreenBlocHeight()
}), $(function () {
    $('[data-toggle="tooltip"]').tooltip()
});