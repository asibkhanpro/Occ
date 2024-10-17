(function ($) {
    "use strict";

    $(window).on('load', function () {
        //===== Prealoder
        $("#preloader").delay(400).fadeOut();
    });

    $(document).ready(function () {


        // toggleWhiteMenuClass
        function toggleWhiteMenuClass() {
            if ($(window).scrollTop() > 100) {
                $('.site_header').addClass('white_menu');
            } else {
                $('.site_header').removeClass('white_menu');
            }
        }
        // Check on page load (for page refresh case)
        toggleWhiteMenuClass();

        // Check on scroll
        $(window).on('scroll', function () {
            toggleWhiteMenuClass();
        });


        // back to top
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').addClass("topbtn_hide");
            } else {
                $('.back-to-top').removeClass("topbtn_hide");
            }
        });
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0,
            }, 1500);

        });

        // popup-youtube
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });


        // Hamburger-menu
        $('.hamburger_btn svg').on('click', function () {
            $('body').toggleClass('overflow-hidden menu_toggled');

            $('.site_header').removeClass('submenu_opened');
        });

        // dropdown_available
        $('.dropdown_available > a').on('click', function (e) {

            // Toggle active class on the clicked dropdown
            var dropdownAvailable = $(this).closest('.dropdown_available');

            $('.dropdown_available').not($(this).closest(".dropdown_available")).removeClass("active");
            dropdownAvailable.toggleClass("active");


            $('.site_header').addClass('dropdown_toggled');

            $('.site_header').addClass('submenu_opened');

            e.preventDefault();

        });

        $('.dropdown_back').on('click', function () {
            $('.site_header').removeClass('submenu_opened');
        });


        $('body').on('click', function (e) {
            // Close all dropdowns when clicking outside
            if (!$(e.target).closest('.dropdown_menu, .dropdown_available > a').length) {
                $('.site_header').removeClass('dropdown_toggled');
                $('.dropdown_available').removeClass('active');
                $('.site_header').removeClass('submenu_opened');
            }
        });

        // ====================== Sliders ================= //
        function Slider1(sliderSelector, leftArrowSelector, rightArrowSelector) {
            // Function to convert rem to px based on the root font size
            function remToPx(rem) {
                return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
            }

            // Convert rem values to px
            var marginSmall = remToPx(1.5); // 1.5rem
            var marginMedium = remToPx(2.0);  // 2rem
            var marginLarge = remToPx(2.4); // 2.4rem

            // Initialize the Owl Carousel
            $(sliderSelector).owlCarousel({
                loop: true,
                nav: false,
                dots: false,
                items: 3,
                autoplay: false,
                responsive: {
                    0: {
                        margin: marginSmall,
                        items: 1,
                    },
                    768: {
                        margin: marginMedium,
                        items: 2,
                    },
                    992: {
                        margin: marginLarge,
                        items: 3,
                    }
                }
            });

            // Custom arrows navigation
            $(leftArrowSelector).click(function () {
                $(sliderSelector).trigger('prev.owl.carousel');
            });

            $(rightArrowSelector).click(function () {
                $(sliderSelector).trigger('next.owl.carousel');
            });
        }
        // Slider1:
        Slider1('.slider1', '.promtion_area .arrow_left', '.promtion_area .arrow_right');


        function Slider2(sliderSelector, leftArrowSelector, rightArrowSelector) {
            // Function to convert rem to px based on the root font size
            function remToPx(rem) {
                return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
            }

            // Convert rem values to px
            var marginSmall = remToPx(1.5); // 1.5rem
            var marginMedium = remToPx(2);  // 2rem
            var marginLarge = remToPx(2.4); // 2.4rem

            // Initialize the Owl Carousel
            $(sliderSelector).owlCarousel({
                loop: true,
                nav: false,
                dots: false,
                items: 3,
                autoplay: false,
                responsive: {
                    0: {
                        margin: marginSmall,
                        items: 1,
                    },
                    768: {
                        margin: marginMedium,
                        items: 3,
                    },
                    992: {
                        margin: marginLarge,
                        items: 3,
                    }
                }
            });

            // Custom arrows navigation
            $(leftArrowSelector).click(function () {
                $(sliderSelector).trigger('prev.owl.carousel');
            });

            $(rightArrowSelector).click(function () {
                $(sliderSelector).trigger('next.owl.carousel');
            });
        }
        // Slider2:
        Slider2('.slider2', '.happenings_area .arrow_left', '.happenings_area .arrow_right');

        function Slider3(sliderSelector) {

            // Initialize the Owl Carousel
            $(sliderSelector).owlCarousel({
                loop: true,
                nav: false,
                dots: false,
                items: 4,
                autoplay: false,
                margin: 0,
                responsive: {
                    0: {
                        items: 2,
                    },
                    768: {
                        items: 4,
                    },
                    992: {
                        items: 4,
                    }
                }
            });

        }
        // Slider3:
        Slider3('.slider3');


        // slider4
        function Slider4(sliderSelector, leftArrowSelector, rightArrowSelector) {

            // Initialize the Owl Carousel
            $(sliderSelector).owlCarousel({
                loop: true,
                nav: false,
                dots: false,
                items: 1,
                autoplay: true,
            });

            // Custom arrows navigation
            $(leftArrowSelector).click(function () {
                $(sliderSelector).trigger('prev.owl.carousel');
            });

            $(rightArrowSelector).click(function () {
                $(sliderSelector).trigger('next.owl.carousel');
            });
        }
        // Slider4:
        Slider4('.slider4', '.text_slider .arrow_left', '.text_slider .arrow_right');


    });
    // Show the first tab by default

    $('.slider5').owlCarousel({
        items: 1,
        loop: true,
        margin: 20,
        slideSpeed: 100,

        smartSpeed: 1000,
        nav: true,
        dots: false,
        autoplay: false,
        navText: [
            '<img src="./assets/img/arrow_left.svg" class="slider_arrow arrow arrow_left" alt="arrow_left">',
            '<img src="./assets/img/arrow_right.svg" class="slider_arrow arrow_right" alt="arrow_right">',
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1,
                margin: 0,
            }
        }
    })
    $('.slider6').owlCarousel({
        items: 1,
        margin: 24,
        loop: true,
        nav: true,
        dots: false,
        autoplay: false,
        navText: [
            '<img src="./assets/img/angle-left.svg" class="slider_arrow arrow arrow_left" alt="arrow_left">',
            '<img src="./assets/img/angle-right.svg" class="slider_arrow arrow_right" alt="arrow_right">',
        ],
        responsive: {
            0: {
                items: 1
            }
        }
    })
    $('.slider8').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        autoplay: false,
        navText: [
            '<img src="./assets/img/angle-right.svg" class="slider_arrow arrow arrow_left" alt="arrow_left">',
            '<img src="./assets/img/angle-left.svg" class="slider_arrow arrow_right" alt="arrow_right">',
        ],
        responsive: {
            0: {
                items: 1
            }
        }
    })
    $('.slider7').owlCarousel({
        items: 2,
        margin: 24,
        loop: true,
        nav: false,
        dots: false,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },

            600: {
                items: 2
            }
        }
    })
    $('.owl-caroussel').owlCarousel({
        center: true,
        dots: true,
        items: 1,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                margin: 50,
            },
            991: {
                margin: 85,
            }
        }
    });
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 40,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 4,
            },
            991: {
                slidesPerView: 5,
            }
        }
    });
    var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-ndext",
            prevEl: ".swiper-button-prdev",
        },
        thumbs: {
            swiper: swiper,
        },

    });

    $(document).ready(function () {

        $('ul.tabs li').click(function () {
            var tab_id = $(this).attr('data-tab');

            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');

            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
        })

    })

    $('.nice-select').niceSelect();


    // slider-tabs


    $('.programmes_slider').owlCarousel({
        items: 1,
        loop: true,
        slideSpeed: 100,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        autoplay: false,
        navText: [
            '<img src="./assets/img/arrow_left.svg" class="slider_arrow arrow arrow_left" alt="arrow_left">',
            '<img src="./assets/img/arrow_right.svg" class="slider_arrow arrow_right" alt="arrow_right">',
        ]
    })

})(jQuery);