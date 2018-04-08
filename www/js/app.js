(function (){  
// init tabs
    function initTabs(){
        $('#tabs').tabs({
            hide: {
                effect: "fade",
                duration: 100
            },
            show:  {
                effect: "fade",
                duration: 100
            }
        });
        $('#tabs-portfolio').tabs();
    }
// --- init tabs

// slickCarousel
    function initSlickCarousel(){
        $('.reviews-carousel').slick({
            dots: true,
            prevArrow: '<div class="slick-prev slick-arrow"><div class="carousel-button"><i class="fa fa-chevron-left"></i></div></div>',
            nextArrow: '<div class="slick-next slick-arrow"><div class="carousel-button"><i class="fa fa-chevron-right"></i></div></div>',
        });
    }
// --- slickCarousel

// map-actions
    function initMapActions(){
        function actionDo(){
            if ($(this).attr('data-act') == 'show'){
                $('.on-map-block').addClass('minimized');
            } else{
                $('.on-map-block').removeClass('minimized');
            }
        }
        $('.act-map').on('click',  actionDo);
    }
// --- map-actions

//skillsHook
    function skillsHook(){
        function animate(){
            $(this).unbind('mouseenter mouseleave');
            $(this).find('.team-item-skills .skill-item .progress').each((ind,elem)=>{
                var rnd = Math.random() - 0.5;
                if (rnd<0) rnd +=0.5;
                rnd = Math.ceil((rnd+0.5)*100);
                $(elem).css({
                    'width': rnd+'%'
                });
            });
        }
        $('.team-item-img').hover(animate);
    }
// --- skillsHook

// onReadyListener
    $(window).on('load',function(){
        initTabs(); //tabs
        initSlickCarousel(); //slickCarousel
        initMapActions(); //map-actions
        skillsHook(); //skillsHook;
    });
})();
