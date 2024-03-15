function toggleNav(){
    // if nav is open, close it
    if($("#menu_list").is(":visible")){
        $("#menu_list").fadeOut();
        $(".header_button").removeClass("menu");
    }
    // if nav is closed, open it
    else {
        $(".header_button").addClass("menu");
        $("#menu_list").fadeIn().css('display', 'flex');
    }
}

// when clicking + or ☰ button
$( ".header_button" ).click(function(){
    // when clicking ☰ button, open nav
    if($("#header_wrap").hasClass("open")) {
        toggleNav();
    }
    else{
        $("#header_wrap").addClass("open");
    }
});


$( ".close_btn" ).on( "click", () => {
    toggleNav();
});

// scroll to sections
$(".nav_list a").click(function(){
    // get index of clicked li and select according section
    let index = $(this).index();
    let target = $(".nav_list a").eq(index);

    toggleNav();

    $('html,body').delay(300).animate({
        scrollTop: target.offset().top
    }, 500);
});
