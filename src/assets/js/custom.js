jQuery(function(){
    $('.ok').on('click',function(){
        console.log("niko hapa kwa custom js");
    })
})

$(".side-nav .side-nav-menu li a").on("click", (e) => {
    $this = $(e.currentTarget);

    console.log("cliked here man");

    if ($this.parent().hasClass("open")) {
        $this
            .parent()
            .children(".dropdown-menu")
            .slideUp(200, () => {
                $this.parent().removeClass("open");
            });
    } else {
        $this
            .parent()
            .parent()
            .children("li.open")
            .children(".dropdown-menu")
            .slideUp(200);
        $this
            .parent()
            .parent()
            .children("li.open")
            .children("a")
            .removeClass("open");
        $this.parent().parent().children("li.open").removeClass("open");
        $this
            .parent()
            .children(".dropdown-menu")
            .slideDown(200, () => {
                $this.parent().addClass("open");
            });
    }
});

$(".header .nav-left .desktop-toggle").on("click", () => {
    appLayout.toggleClass(isFolded);
    $(".header .nav-left .mobile-toggle").on("click", () => {
        appLayout.toggleClass(isExpand);
    });
});
