$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){ //if the value specified is "all" in the filtering
            $(".post-box").show("1000") //Then show all with loading time of 1000 ms 
        } else{ 
            $(".post-box")
                .not("." + value)
                .hide(300); // Hide all different values of the filtering with in a time of 300 ms 
            $(".post-box")
            .filter("." + value)
            .show("1000") // And Show only specified value of the filtering in a time of 1000 ms
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});