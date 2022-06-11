

$(document).ready(function () {
    <!-- Slider-->
    $('.slider1').slick({
        draggable:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite:false,
        dots: true,
        adaptiveHeight: true,
        arrows:false,
        responsive: [
            {

                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {

                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {

                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]

    });

    $(function(){


        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            fade: true,
            nextArrow: '<button class="slick-arrow next"><span></span></button>',
            prevArrow: '<button class="slick-arrow prev"><span></span></button>',
            asNavFor: '.slider-nav'
        });
        $(".slider-for").on('afterChange', function(event, slick, currentSlide){
            $("#cp").text(currentSlide + 01);
        });
    });

    $('.slider-nav').slick({
        slidesToShow: 9,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        infinite: true,
        arrows:false,
        centerMode: true,
        focusOnSelect: true
    });
    <!-- Slider and -->

    <!-- Accordion -->
    $( function() {
        $( "#accordion" ).accordion({
            collapsible: true,
            heightStyle: "content"
        });
    } );


    <!-- Accordion and -->

    $(function() {$('.more').hide()
        $('#showmemore').click(function(){
            $('.more').slideToggle()
        })})

});

