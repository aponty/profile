"use strict";
window.onload = () => {
    //prevents skrollr from jumping to leftover hash in url on refresh
    document.location.hash = null;

    const scroll = skrollr.init({
        constants: {
            box: '100p'
        },
        //for debugging
        render: function(data) {
            console.log(data.curTop)
        }
    });

    skrollr.menu.init(scroll)



}
