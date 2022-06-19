function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let overlay = menu.find('.burger-menu__overlay');
    
    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });
    
    
    overlay.on('click', () => toggleMenu());
    function toggleMenu() {
        menu.toggleClass('burger-menu_active');
        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    }
    
 
}

burgerMenu ('.burger-menu');


let flag = false;
  $('.burger-menu__link1').click(function () {
    if(!flag){
     $('.burger-menu__sublink1').slideDown();
    }else{
     $('.burger-menu__sublink1').slideUp();
    }
    flag = !flag;
  });


let flag1 = false;
  $('.burger-menu__link2').click(function () {
    if(!flag1){
     $('.burger-menu__sublink2').slideDown();
    }else{
     $('.burger-menu__sublink2').slideUp();
    }
    flag1 = !flag1;
  });

