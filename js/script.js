
$('#about_us_link').popover({
       container:   'body',
        content:    '<div class="about-menu flex-box">\
                        <ul class="first-menu">\
                            <li><a class="about-item" href="how-it-works.html">How it works</a></li>\
                            <li><a class="about-item" href="our-story.html">Our story</a></li>\
                            <li><a class="about-item" href="careers.html">Careers</a></li>\
                            <li><a class="about-item" href="#">Auto dealerships</a></li>\
                            <li><a class="about-item" href="trust&safety.html">Trust & safety</a></li>\
                            <li><a class="about-item" href="#">Terms</a></li>\
                        </ul>\
                        <ul class="second-menu">\
                            <li><a class="about-item" href="community.html">Community</a></li>\
                            <li><a class="about-item" href="#">Blog</a></li>\
                            <li><a class="about-item" href="get-in-touch.html">Press</a></li>\
                            <li><a class="about-item" href="#">Help</a></li>\
                            <li><a class="about-item" href="#">Privacy</a></li>\
                        </ul>\
                    </div>',
        html:true,
        placement: 'bottom',
        trigger:'focus',
        offset: '-50,12',
    });

    $('#about_us_link').on('shown.bs.popover', function () {
        $("#about_us_link").find(".fa-chevron-down").addClass('d-none');
        $("#about_us_link").find(".fa-chevron-up").removeClass('d-none');
    });

    $('#about_us_link').on('hidden.bs.popover', function () {
        $("#about_us_link").find(".fa-chevron-down").removeClass('d-none');
        $("#about_us_link").find(".fa-chevron-up").addClass('d-none');
    });
    
    $('#products-link').popover({
        content:    '<div class="more-links flex-box">\
                        <ul class="more">\
                            <li><a href="#">Antiques</a></li>\
                            <li><a href="#">Appliances</a></li>\
                            <li><a href="#">Art & crafts</a></li>\
                            <li><a href="#">Audio equipment</a></li>\
                            <li><a href="#">auto parts</a></li>\
                            <li><a href="#">Baby & kids</a></li>\
                            <li><a href="#">Beauty & health</a></li>\
                            <li><a href="#">Bicycles</a></li>\
                            <li><a href="#">Boats & marine</a></li>\
                            <li><a href="#">Books & magazines</a></li>\
                        </ul>\
                        <ul class="more">\
                            <li><a href="#">Business equipment</a></li>\
                            <li><a href="#">Campers & RVs</a></li>\
                            <li><a href="#">Cars & trucks</a></li>\
                            <li><a href="#">CDs & DVDs</a></li>\
                            <li><a href="#">Cell phones</a></li>\
                            <li><a href="#">Clothing & shoes</a></li>\
                            <li><a href="#">Collectibles</a></li>\
                            <li><a href="#">Computer equipments</a></li>\
                            <li><a href="#">Electronics</a></li>\
                            <li><a href="#">Exercise</a></li>\
                        </ul>\
                        <ul class="more">\
                            <li><a href="#">Farming</a></li>\
                            <li><a href="#">Free</a></li>\
                            <li><a href="#">Furniture</a></li>\
                            <li><a href="#">Games & toys</a></li>\
                            <li><a href="#">General</a></li>\
                            <li><a href="#">Homes & garden</a></li>\
                            <li><a href="#">Household</a></li>\
                            <li><a href="#">Jewellery & accessories</a></li>\
                            <li><a href="#">Motorcycles</a></li>\
                            <li><a href="#">Musical instruments</a></li>\
                        </ul>\
                        <ul class="more">\
                            <li><a href="#">Pet supplies</a></li>\
                            <li><a href="#">Photography</a></li>\
                            <li><a href="#">Software</a></li>\
                            <li><a href="#">Sports & outdoors</a></li>\
                            <li><a href="#">Tickets</a></li>\
                            <li><a href="#">Tools & machinery</a></li>\
                            <li><a href="#">TVs</a></li>\
                            <li><a href="#">Video equipment</a></li>\
                            <li><a href="#">video games</a></li>\
                        </ul>\
                    </div>',
        html:true,
        placement:'top',
        trigger:'focus',
        offset: '-310,15'
    })

    $('#products-link').on('shown.bs.popover', function () {
        $("#products-link").find(".fa-chevron-down").addClass('d-none');
        $("#products-link").find(".fa-chevron-up").removeClass('d-none');
    });

    $('#products-link').on('hidden.bs.popover', function () {
        $("#products-link").find(".fa-chevron-down").removeClass('d-none');
        $("#products-link").find(".fa-chevron-up").addClass('d-none');
    });
    

    // $('#products-link').on('shown.bs.popover', function () {
    //     $("#products-link").find(".fa-chevron-down").hide();
    //     $("#products-link").find(".fa-chevron-up").show();
    // });

    // $('#products-links').on('hidden.bs.popover', function () {
    //     $("#products-link").find(".fa-chevron-up").hide();
    //     $("#products-link").find(".fa-chevron-down").show();
    // });


    $(".location-input").click(function(){
        $(".my-location").collapse('toggle');
      

      });

    












    $('.owl-carousel').owlCarousel({
        nav: true,
        loop: true,
        margin: 10,
        autoplay: true,
        autoWidth: true,
        dots: false,
        // responsive:{
        //     0:{
        //         items:1
        //     },
        //     600:{
        //         items:3
        //     },
        //     1000:{
        //         items:5
        //     }
        // }
    })