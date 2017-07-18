"use strict";
window.onload = () => {
    console.log('linked')
    const scroll = skrollr.init({
        constants: {
            //fill the box for a "duration" of 150% of the viewport (pause for 150%)
            //adjust for shorter/longer pause
            box: '100p'
        },
        //for debugging
        render: function(data) {
            console.log(data.curTop)
        }
    });
}
