$(function() {
    console.debug('jquery loaded');
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $(this).siblings(".sidebar-icon").toggle();
    });
});