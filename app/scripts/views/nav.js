var nav = {
    init:function(){
        $(".header__nav").find('a').on("click", function(){
            $(".header__nav").find('a').removeClass('header__nav--active');
            $(this).addClass('header__nav--active');
        });
    }
}
