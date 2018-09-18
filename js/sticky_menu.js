var $win = $(window),
	$fixed = $(".fixed"),
	limit = 70;

function tgl (state) {
    $fixed.toggleClass("hidden", state);
}

$win.on("scroll", function () {
	var top = $win.scrollTop();
    
    if (top < limit) {
        tgl(true);
    } else {
        tgl(false);
    }
});