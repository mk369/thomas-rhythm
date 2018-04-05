(function (){  
// init tabs
    function initTabs(){
        log("initTabs");
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

// onReadyListener
    document.addEventListener("DOMContentLoaded",function(){
        initTabs();//tabs
    });
})();
