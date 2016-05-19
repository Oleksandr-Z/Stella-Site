$(function () {
    var hover_block = $("div#toHover");
    var anim_block = $("#nav");
    hover_block.on("mouseover", unslideIt);
    anim_block.on("mouseover", unslideIt);
    window.addEventListener("scroll", scrollSlide);
    function scrollSlide() {
        if (window.pageYOffset > 90) {
            hover_block.on("mouseout", slideIt);
            hover_block.trigger("mouseout");
        }
        if (window.pageYOffset < 90) {
            hover_block.off("mouseout", slideIt);
            hover_block.trigger("mouseover");
        }
    };
    function slideIt() {
        anim_block.delay(1750).slideUp();
    };
    function unslideIt() {
        var top = $(document.body).offset().top - document.documentElement.scrollTop;
        if (top < 85) {
            anim_block.stop(true, false).slideDown();
        };
    };
});
