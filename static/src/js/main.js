//(function() {
//  "use strict";
//
//  /**
//   * Easy selector helper function
//   */
//  const select = (el, all = false) => {
//    el = el.trim()
//    if (all) {
//      return [...document.querySelectorAll(el)]
//    } else {
//      return document.querySelector(el)
//    }
//  }
//
//  /**
//   * Easy event listener function
//   */
//  const on = (type, el, listener, all = false) => {
//    let selectEl = select(el, all)
//    if (selectEl) {
//      if (all) {
//        selectEl.forEach(e => e.addEventListener(type, listener))
//      } else {
//        selectEl.addEventListener(type, listener)
//      }
//    }
//  }
//
//  /**
//   * Easy on scroll event listener
//   */
//  const onscroll = (el, listener) => {
//    el.addEventListener('scroll', listener)
//  }
//
//  /**
//   * Navbar links active state on scroll
//   */
//  let navbarlinks = select('#navbar .scrollto', true)
//  const navbarlinksActive = () => {
//    let position = window.scrollY + 200
//    navbarlinks.forEach(navbarlink => {
//      if (!navbarlink.hash) return
//      let section = select(navbarlink.hash)
//      if (!section) return
//      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
//        navbarlink.classList.add('active')
//      } else {
//        navbarlink.classList.remove('active')
//      }
//    })
//  }
//  window.addEventListener('load', navbarlinksActive)
//  onscroll(document, navbarlinksActive)
//
//  /**
//   * Scrolls to an element with header offset
//   */
//  const scrollto = (el) => {
//    let header = select('#header')
//    let offset = header.offsetHeight
//
//    if (!header.classList.contains('header-scrolled')) {
//      offset -= 20
//    }
//
//    let elementPos = select(el).offsetTop
//    window.scrollTo({
//      top: elementPos - offset,
//      behavior: 'smooth'
//    })
//  }
//
//  /**
//   * Toggle .header-scrolled class to #header when page is scrolled
//   */
//  let selectHeader = select('#header')
//  if (selectHeader) {
//    const headerScrolled = () => {
//      if (window.scrollY > 100) {
//        selectHeader.classList.add('header-scrolled')
//      } else {
//        selectHeader.classList.remove('header-scrolled')
//      }
//    }
//    window.addEventListener('load', headerScrolled)
//    onscroll(document, headerScrolled)
//  }
//
//  /**
//   * Back to top button
//   */
//  let backtotop = select('.back-to-top')
//  if (backtotop) {
//    const toggleBacktotop = () => {
//      if (window.scrollY > 100) {
//        backtotop.classList.add('active')
//      } else {
//        backtotop.classList.remove('active')
//      }
//    }
//    window.addEventListener('load', toggleBacktotop)
//    onscroll(document, toggleBacktotop)
//  }
//
//  /**
//   * Mobile nav toggle
//   */
//  on('click', '.mobile-nav-toggle', function(e) {
//    select('#navbar').classList.toggle('navbar-mobile')
//    this.classList.toggle('bi-list')
//    this.classList.toggle('bi-x')
//  })
//
//  /**
//   * Mobile nav dropdowns activate
//   */
//  on('click', '.navbar .dropdown > a', function(e) {
//    if (select('#navbar').classList.contains('navbar-mobile')) {
//      e.preventDefault()
//      this.nextElementSibling.classList.toggle('dropdown-active')
//    }
//  }, true)
//
//  /**
//   * Scrool with ofset on links with a class name .scrollto
//   */
//  on('click', '.scrollto', function(e) {
//    if (select(this.hash)) {
//      e.preventDefault()
//
//      let navbar = select('#navbar')
//      if (navbar.classList.contains('navbar-mobile')) {
//        navbar.classList.remove('navbar-mobile')
//        let navbarToggle = select('.mobile-nav-toggle')
//        navbarToggle.classList.toggle('bi-list')
//        navbarToggle.classList.toggle('bi-x')
//      }
//      scrollto(this.hash)
//    }
//  }, true)
//
//  /**
//   * Scroll with ofset on page load with hash links in the url
//   */
//  window.addEventListener('load', () => {
//    if (window.location.hash) {
//      if (select(window.location.hash)) {
//        scrollto(window.location.hash)
//      }
//    }
//  });
//
//  /**
//   * Porfolio isotope and filter
//   */
//  window.addEventListener('load', () => {
//    let portfolioContainer = select('.portfolio-container');
//    if (portfolioContainer) {
//      let portfolioIsotope = new Isotope(portfolioContainer, {
//        itemSelector: '.portfolio-item'
//      });
//
//      let portfolioFilters = select('#portfolio-flters li', true);
//
//      on('click', '#portfolio-flters li', function(e) {
//        e.preventDefault();
//        portfolioFilters.forEach(function(el) {
//          el.classList.remove('filter-active');
//        });
//        this.classList.add('filter-active');
//
//        portfolioIsotope.arrange({
//          filter: this.getAttribute('data-filter')
//        });
//        portfolioIsotope.on('arrangeComplete', function() {
//          AOS.refresh()
//        });
//      }, true);
//    }
//
//  });
//
//  /**
//   * Initiate portfolio lightbox
//   */
//  const portfolioLightbox = GLightbox({
//    selector: '.portfolio-lightbox'
//  });
//
//  /**
//   * Portfolio details slider
//   */
//  new Swiper('.portfolio-details-slider', {
//    speed: 400,
//    loop: true,
//    autoplay: {
//      delay: 5000,
//      disableOnInteraction: false
//    },
//    pagination: {
//      el: '.swiper-pagination',
//      type: 'bullets',
//      clickable: true
//    }
//  });
//
//  /**
//   * Testimonials slider
//   */
//  new Swiper('.testimonials-slider', {
//    speed: 600,
//    loop: true,
//    autoplay: {
//      delay: 5000,
//      disableOnInteraction: false
//    },
//    slidesPerView: 'auto',
//    pagination: {
//      el: '.swiper-pagination',
//      type: 'bullets',
//      clickable: true
//    }
//  });
//
//  /**
//   * Clients Slider
//   */
//  new Swiper('.clients-slider', {
//    speed: 400,
//    loop: true,
//    autoplay: {
//      delay: 5000,
//      disableOnInteraction: false
//    },
//    slidesPerView: 'auto',
//    pagination: {
//      el: '.swiper-pagination',
//      type: 'bullets',
//      clickable: true
//    },
//    breakpoints: {
//      320: {
//        slidesPerView: 2,
//        spaceBetween: 40
//      },
//      480: {
//        slidesPerView: 3,
//        spaceBetween: 60
//      },
//      640: {
//        slidesPerView: 4,
//        spaceBetween: 80
//      },
//      992: {
//        slidesPerView: 6,
//        spaceBetween: 120
//      }
//    }
//  });
//
//  /**
//   * Animation on scroll
//   */
//  window.addEventListener('load', () => {
//    AOS.init({
//      duration: 1000,
//      easing: 'ease-in-out',
//      once: true,
//      mirror: false
//    })
//  });
//
//  /**
//   * Initiate Pure Counter
//   */
//  new PureCounter();
//
//})()
//
//
//// Typing Effect
//
////const type = document.querySelector('.type-text');
////if(type) {
////
////let listTexts = ['Multipurpose','Innovative', 'Creative '];
////
////let index = -1;
////let current = 0;
////
////function typeTextFunc() {
////    if (current === listTexts.length) {
////        current = 0;
////    }
////    let typeText = setInterval(() => {
////        if (index == listTexts[current].length - 1) {
////            clearInterval(typeText);
////            clearTextFunc();
////        } else {
////            index++;
////            type.textContent += listTexts[current][index];
////        }
////    }, 150);
////};
////
////function clearTextFunc() {
////    let clearText = setInterval(() => {
////        if (type.textContent.length == 0) {
////            clearInterval(clearText);
////            index = -1;
////            current++
////            typeTextFunc();
////        } else {
////            type.textContent = type.textContent.slice(0, -1)
////        }
////    }, 150);
////};
////
////typeTextFunc();
////
////} else {
////  console.log("Element with class 'type-text' not found.")
////}
//
//const contact = document.querySelector('.contact-heading');
//if (contact) {
//
//  let contactList = ['With Us'];
//
//  let index1 = -1;
//  let current1 = 0;
//
//  function contactTextFunc() {
//      if (current1 === contactList.length) {
//          current1 = 0;
//      }
//      let typeText1 = setInterval(() => {
//          if (index1 == contactList[current1].length - 1) {
//              clearInterval(typeText1);
//              clearContactFunc();
//          } else {
//              index1++;
//              contact.textContent += contactList[current1][index1];
//          }
//      }, 150);
//  };
//
//  function clearContactFunc() {
//      let clearText1 = setInterval(() => {
//          if (contact.textContent.length == 0) {
//              clearInterval(clearText1);
//              index1 = -1;
//              current1++
//              contactTextFunc();
//          } else {
//            contact.textContent = contact.textContent.slice(0, -1)
//          }
//      }, 150);
//  };
//
//  contactTextFunc();
//} else {
//  console.error("Element with class 'contact-heading' not found.");
//}
//
//
//// const service = document.querySelector('.service-heading');
//// if(service){
//
////   let serviceList = ['We Offer'];
//
////   let index2 = -1;
////   let current2 = 0;
//
////   function serviceTextFunc() {
////       if (current2 === serviceList.length) {
////           current2 = 0;
////       }
////       let typeText2 = setInterval(() => {
////           if (index2 === serviceList[current2].length - 1) {
////               clearInterval(typeText2);
////               clearServiceFunc();
////           } else {
////               index2++;
////               service.textContent += serviceList[current2][index2];
////           }
////       }, 150);
////   }
//
////   function clearServiceFunc() {
////       let clearText2 = setInterval(() => {
////           if (service.textContent.length === 0) {
////               clearInterval(clearText2);
////               index2 = -1;
////               current2++;
////               serviceTextFunc();
////           } else {
////               service.textContent = service.textContent.slice(0, -1);
////           }
////       }, 150);
////   }
//
////   serviceTextFunc(); // Start the animation
//// } else {
////   console.error("Element with class 'service-heading' not found.");
//// }
//
//
////function showDetails(card) {
////  card.querySelector('.project-details').style.opacity = '1';
////  card.querySelector('.project-details').style.transform = 'translateY(0)';
////}
////
////function hideDetails(card) {
////  card.querySelector('.project-details').style.opacity = '0';
////  card.querySelector('.project-details').style.transform = 'translateY(-20px)';
////}
