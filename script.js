var scrollValue;
var lastPosition = 0;
var naviMenu = $('nav');
var menuHeight = naviMenu.outerHeight(); 

function slideMenu() {
    scrollValue= $(this).scrollTop();
    if(scrollValue>lastPosition){
        //scrolling downwards
        console.log('scrolling downwards')
        lastPosition = scrollValue;
        naviMenu.css('top', -menuHeight + 'px')
    } else {
        console.log('haal het menu');
        lastPosition = scrollValue;
        naviMenu.css('top', 0)
    }
    
    
}

$(window).on('scroll', slideMenu);