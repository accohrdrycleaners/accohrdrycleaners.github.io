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

// BLOGS
var blogScroll = document.getElementById("blogs-scroll");
if(BLOGS?.length){
    BLOGS.forEach((blog,index)=>{
        blogScroll.innerHTML+=`<div class="col-lg-4 mb-2">
        <div class="shadow mb-4">
            <div class="position-relative">
                <img class="img-fluid w-100" src="${blog?.image}" alt="">
                <a href="" class="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center   text-decoration-none p-4" style="top: 0; left: 0; background: rgba(0, 0, 0, .4);">
                    <h4 class="text-center text-white font-weight-medium mb-3">${blog?.title}</h4>
                    <div class="d-flex text-light">
                        <small class="mr-2"><i class="fa fa-user text-secondary"></i> ${blog?.creator}</small>
                        <!-- <small class="mr-2"><i class="fa fa-folder text-secondary"></i> Web Design</small>
                        <small class="mr-2"><i class="fa fa-comments text-secondary"></i> 15</small> -->
                    </div>
                </a>
            </div>
            <p class="m-0 p-4 pb-0">${blog?.blog}</p>
            <a class="m-0 p-4" href="#">READ MORE</a>
        </div>
    </div>`
    })
}
var current = 0;
blogScroll.addEventListener("scroll",(e)=>{
    let clientWidth = e?.target?.clientWidth;
    let scrollWidth = e?.target?.scrollWidth;
    let scrollLeft = e?.target?.scrollLeft;
    let sliderWidth = 1.00*(clientWidth/scrollWidth)*100.00;
    let marginLeft = (100.00 * (scrollLeft/scrollWidth));
    let sliderBar = document.getElementById("slider-bar");
    sliderBar.style.width=`${sliderWidth}%`;
    sliderBar.style.marginLeft=`${marginLeft}%`;
})

function getNextBlog (){
    if((current+3)>BLOGS?.length){return;}
    const scrollLeft = blogScroll.children[current+3].offsetLeft;
    current = current+3;
    blogScroll.scrollLeft = scrollLeft;

}
function getPrevBlog (){
    if((current-3)<0){return;}
    const scrollLeft = blogScroll.children[current-3].offsetLeft;
    current = current-3;
    blogScroll.scrollLeft = scrollLeft;

}

