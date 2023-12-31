(function ($) {
    "use strict";

    // email submit
    $('#contactus').submit(function(event){
        event.preventDefault();
        const recipient = 'info@accohrdrycleaners.com';
        const subject = 'Suggestions / Claims / Complaints';
        var name = $('input[name=name]').val();
        var mobile = $('input[name=phone]').val();
        var message = $('textarea[name=message]').val();

        const body = 'Name: '+name+'\n'+'Mobile No.: '+mobile+'\n'+'Message: '+message;

        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        $('input[name=name]').val('');
        $('input[name=phone]').val('');
        $('textarea[name=message]').val('');

        window.location.href = mailtoLink;
    })

    // Popup on initial load
    $(document).ready(function () {
        // localStorage.setItem("initialPopup","")
        console.log(localStorage.getItem("initialPopup"))
        if(localStorage.getItem("initialPopup") != '1') {
            $('#onLoadPopup').css('display','flex')
            $('#onLoadPopup').removeClass('fade')
            localStorage.setItem("initialPopup","1")
            $('.dialer,.whatsapp').hide()
            console.log(localStorage.getItem("initialPopup"))
        }
    })
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Pricing Popup
    $('a[data-target=pricingPopup]').click(function () {
        $('#pricingPopup').css('display','flex')
        $('#pricingPopup').removeClass('fade')
        $('.dialer,.whatsapp').hide()
        return false;
    });
    $('.fa-window-close').click(function () {
        $('#pricingPopup').css('display','none')
        $('#pricingPopup').addClass('fade')
        $('.dialer,.whatsapp').show()
        return false;
    })
    $('.fa-window-close').click(function () {
        $('#pricingPopup').css('display','none')
        $('#pricingPopup').addClass('fade')
        $('#onLoadPopup').css('display','none')
        $('#onLoadPopup').addClass('fade')
        $('.dialer,.whatsapp').show()
        return false;
    })


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        margin: 30,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Related Post carousel
    $(".related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        margin: 30,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);


// FAQ
const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})

