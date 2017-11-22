function main() {
    $('.skillset').hide();
    $('.skillset').fadeIn(1000);

    $('.projects').hide();
    $('.projects-button').on('click', function () {
        //$('.projects').toggle();
        $(this).next().slideToggle(400);
        $(this).toggleClass('active');
        $(this).text('projects Viewed');
    });
}
$(document).ready(main);
