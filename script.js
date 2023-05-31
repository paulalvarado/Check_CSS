jQuery(document).ready(($) => {
    $('.check').click(() => {
        $('.check').toggleClass('active');
        $('body').toggleClass('darkmode');
    });
})