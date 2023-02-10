(function() {
    // INITIALIZATION OF MEGA MENU
    // =======================================================
    const megaMenu = new HSMegaMenu('.js-mega-menu', {
      desktop: {
        position: 'left'
      }
    })


    // INITIALIZATION OF SHOW ANIMATIONS
    // =======================================================
    new HSShowAnimation('.js-animation-link')


    // INITIALIZATION OF BOOTSTRAP VALIDATION
    // =======================================================
 


    // INITIALIZATION OF HEADER
    // =======================================================
    new HSHeader('#header').init()
  })()
