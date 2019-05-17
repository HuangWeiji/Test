$(document).ready(function () {
    $(".hover").each(function () {
        $(this).mouseover(
            function()
            {
                $(this).children().last().show();
            }
        )
        $(this).mouseleave(
            function()
            {
                $(this).children().last().hide();
            }
        )
    });
}
);