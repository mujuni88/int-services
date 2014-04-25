var app = app || {};

app = (function($){
    "use strict";
    var $tab;
    function init(){
        var hash = window.location.hash;
        hash && $('ul.nav a[href="' + hash + '"]').tab('show');

        $('.nav-tabs a').click(function (e) {
            $(this).tab('show');
            window.location.hash = this.hash;
        });
    }

    function tabClickEvent(){
        $tab.click(function(e){
            e.preventDefault();
            $(this).tab('show');
        });
    }

    function faqsEvents() {
        var minus = "/resources/images/promos/new_plan/minus.png",
            plus = "/resources/images/promos/new_plan/plus.png",
            clicked = "clicked",
            $ans, $this;
        $faqs.click(function(e) {
            $ans = $(this).find(".ans");
            $this = $(this).find("img");
            if ($this.hasClass(clicked)) {
                $this.attr({
                    src: plus
                }).removeClass(clicked);
                $ans.hide();
            } else {
                $this.attr({
                    src: minus
                }).addClass(clicked);
                $ans.show();
            }
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