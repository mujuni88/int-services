var app = app || {};

app = (function($){
    "use strict";
    var $tab;
    function init(){
        var hash = window.location.hash;
        hash && $('ul.nav a[href="' + hash + '"]').tab('show');

        $('.nav-tabs a').click(function (e) {
            $(this).tab('show');
            var scrollmem = $('body').scrollTop();
            window.location.hash = this.hash;
            $('html,body').scrollTop(scrollmem);
        });
    }

    function tabClickEvent(){
        $tab.click(function(e){
            e.preventDefault();
            $(this).tab('show');
        });
    }

   return {
       init:init
   };
})(window.jQuery_1_11_0);

window.jQuery_1_11_0(document).ready(function(){
    "use strict";

    app.init();
});