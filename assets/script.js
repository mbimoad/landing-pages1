$(window).on('load', function() {
    let background = document.querySelector('.bg');
    console.log(background);
    if(window.innerWidth <= 800) {
        background.src = "assets/background3.png";
    } else {
        background.src = "assets/background1.png";
    }
})
$(window).on('resize', function() {
    let background = document.querySelector('.bg');
    console.log(background);
    if(window.innerWidth <= 800) {
        background.src = "assets/background3.png";
    } else {
        background.src = "assets/background1.png";
    }
})

gsap.from('.map', {
    opacity:0,
    duration:2,
})

gsap.from('.v1', {
    scale:0,
    duration:1,
    delay:1.5,
}) 

gsap.from('.v1', {
    rotate:'360deg',
    duration:120,
    repeat:-1,
})

gsap.from('.cursor', {
    opacity:0,
    repeat:-1,
    duration:0.2,
})

gsap.from('.v2', {
    scale:0,
    delay:2,
    duration:1,
}) 

gsap.from('.v2', {
    rotate:'-360deg',
    duration:500,
    repeat:-1,
})


let ptl = gsap.timeline({repeat: -1, repeatDelay: 2})
let mtl = gsap.timeline({repeat: 1, yoyo:true, repeatDelay: 1, delay:2,})
    mtl.to('.text', {duration: 30, text: `
        Lorem ipsum dolor sit amet consectetur,<br>
        adipisicing elit. Quas deserunt cupiditate<br>
        nisi qui ipsam soluta magnam, id consequatur<br>
        nobis ea veniam, veritatis fuga ut voluptas dolor<br>
        nihil vitae error doloremque.`
    })
    ptl.add(mtl); 


gsap.from('.bg', {
    x: '-100%', 
    duration: 1, 
    delay:0.3,
    opacity:0,
}) 
gsap.from('.hero-detail', {
    scale:2,
    delay:1,
    opacity:0,
    duration:1,
}) 





gsap.from('nav', {
    y:'-100%',
    opacity:0,
    delay:1.5,
    duration: 2, 
    ease: "bounce.out", y: -200,
});

$(window).on('mousemove', function(e) {
    let posx = e.clientX; 
    let posy = e.clientY;    
    // $('.hero .c3').css({
    //     'transform':`translate(${posx/20}px, -${posy/20}px)`,
    // })
    // $('.hero .c4').css({
    //     'transform':`translate(-${posx/20}px, -${posy/20}px)`,
    // })
})

$(window).on('scroll', function(e) {
    let target = $('.main-features').offset().top - 150; 
    let scroll = $(this).scrollTop(); 
    if(scroll > target) {
        $('.main-features .card').each((index, item) => {
            setTimeout(() => {
                $('.main-features .card').eq(index).addClass('muncul');
            }, index * 200)
        })
    }
})



// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 100, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

$('.nav-link').on('click',function(e) {
    e.preventDefault(); 
    var href = $(this).attr('href'); 
    var href = $(href); 
    var href = href.offset().top; 
    $('html,body').animate({
        scrollTop: href, 
    }, 1000, 'easeInOutExpo')
})