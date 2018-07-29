$(document).ready(function(){
    $(document).scroll(function() {
        var alpha = Math.min(0.5 + 0.4 * $(this).scrollTop() / 210, 0.9);
        $("body").css('background-color', 'rgb(14,85,118,1.0)');
    });
});
