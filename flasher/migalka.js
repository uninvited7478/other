$(function() {
    let colors = ["0015ff","ff00bf","#ff9000","#9d00ff","#00f2ff","#ff6a00","#99081E", "#ff0000", "#00ff04"]

    setInterval(function() {
        let bodybgarrayno = Math.floor(Math.random() * colors.length)
        let selectedcolor = colors[bodybgarrayno]
        $("body").css("background",selectedcolor)
    }, 10);
})