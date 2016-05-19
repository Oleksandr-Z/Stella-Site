(function ($) {
    $.fn.slideshow = function (options) {
        options = $.extend({
            wrapper: ".slider-wrapper",
            slides: ".slide",
            nav: ".slider-nav",
            speed: 800,
            easing: "linear"

        }, options);

        var slideTo = function (slide, element) {
            var $currentSlide = slide;

            $(options.wrapper, element).
			animate({
			    left: -$currentSlide.position().left
			}, options.speed, options.easing);

        };

        return this.each(function () {
            var $element = $(this),
				$navigationLinks = $("a", options.nav),
				total = $(options.slides, $element).length;

            $(options.slides, $element).width(($(window).width() + 17)).each(function () {
                var $slide = $(this);
                var image = $slide.data("image");
                $slide.css("backgroundImage", "url(" + image + ")");
            });
            $(options.wrapper, $element).width(($(window).width() + 17) * total);

            $navigationLinks.on("click", function (e) {
                e.preventDefault();
                var $a = $(this),
                    $slide = $($a.attr("href"));

                slideTo($slide, $element);
                $a.addClass("current").siblings().
                removeClass("current");

            });

        });
    };

    $(function () {
        $("#main-slider").slideshow();

    });
    $("33").trigger("click");

})(jQuery);