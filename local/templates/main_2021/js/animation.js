$(document).ready(function () {
    $('.f-page-section').css('overflow', 'hidden');
    $('.inner-page-section .section-title').parents('.inner-page-section').css('overflow', 'hidden');
    $('.footer .first_row').css('overflow', 'hidden');
    $('.f-page-section .section-title').not('.no-animation').css('opacity', '0').addClass('animation animated').data('animation', 'fadeInUp');
    $('.inner-page-section .section-title').not('.no-animation').css('opacity', '0').addClass('animation animated').data('animation', 'fadeInUp');
    //$('.pricing .price_item').css('opacity', '0').addClass('animation animated').data('animation', 'fadeInRight');
    $('.clients').addClass('animation_incremental');
    $('.clients>div img').css('opacity', '0').addClass('animation_elem animated').attr('data-animation', 'flipInY');

    $('.footer_contacts').addClass('animation_incremental');
    $('.footer_contacts>div').css('opacity', '0').addClass('animation_elem animated').attr('data-animation', 'fadeInUp');
    $('.services_list').addClass('animation_incremental');
    $('.services_list .service_section').css('opacity', '0').addClass('animation_elem animated').attr('data-animation', 'fadeInUp');
    $('.portfolio_front_cols').addClass('animation_incremental');
    $('.portfolio_front_cols .portfolio_item').css('opacity', '0').addClass('animation_elem animated').attr('data-animation', 'fadeInUp');
    $('.pricing').addClass('animation_incremental');
    $('.pricing .price_item').css('opacity', '0').addClass('animation_elem animated').attr('data-animation', 'fadeInRight');
});
$(window).on("load", function (e) {
    setTimeout(function () {
        $(".animation").waypoint(function () {
            $(this.element).css('opacity', '1').addClass($(this.element).data('animation'));
        }, { offset: '85%' });

        $(".animation_incremental").each(function (index, current) {
            $(current).attr('id', "animation_incremental_" + index);
            $("#animation_incremental_" + index).waypoint(function () {

                if (!$(this.element).hasClass('done')) {
                    $(this.element).find('.animation_elem').each(function (i, current) {
                        setTimeout(function () {
                            $(current).css('opacity', '1').addClass($(current).data('animation'));
                        }, i * 300);
                    });
                }
                $(this.element).addClass('done');
            }, { offset: '85%' });
        });
    }, 100);
}); 