// Angular
(function(angular, $, HASHCTRL) {
    var app = angular.module('app', ['ngSanitize']),
        $modal,
        newCstmr = "new_customer",
        currCstmr = "current_customer";
    app.controller('AppCtrl', ['$scope',
        function($scope) {
            $scope.section1 = {
                info: "Walk in to a C Spire store and walk out with<br/> our greatest value yet on wireless service",
                isTab1Active: true,
                isTab2Active: false,
                discount:"When you add or change to the Unlimited Everything plan, you will see the $80/mo. price. A $15 discount will automatically be applied each month if you don't have a device contract or if you purchase a device using the no-contract Smartphone Payment Plan."
            };
            $scope.section2 = {
                btnUrl: "/coverage/#/stores",
                btnLabel: "FIND A STORE"
            };
            $scope.section3 = {
                info: "",
                price: "$65",
                col1List: ["Purchase a new device outright", "Trade in your non-C Spire device and receive up to $300 towards the purchase of a new one.", "Bring a C Spire eligible device."],
                col3Title: 'Get a New Device with our <b>Smartphone Payment Plan</b>',
                col3List: ['Choose a new smartphone', 'Zero down', 'Zero interest for 24 months', 'No payments until July'],
                btnUrl: "/coverage/#/stores",
                btnLabel: "FIND A STORE"
            };
            $scope.section4 = {
                info: "Our <b>Smartphone Payment Plan </b> lets you walk away today with our latest<br/> and greatest technology - with no money down.",
                phone1Url: "/promos/?q=gs5_landing&WT.mc_ac=mobile_gs5_coming",
                phone1Img: "phone_install_galaxyS5.jpg",
                phone1ImgAlt: "Samsung Galaxy S5",
                phone2Url: "/shop_and_learn/devices/product_device_detail.jsp?id=prod29160150&navAction=push&navCount=0&id=prod29160150",
                phone2Img: "phone_install_iphone5s.jpg",
                phone2ImgAlt: "iPhone 5s",
                phone3Url: "/shop_and_learn/devices/product_device_detail.jsp?id=prod29160143&navAction=push&navCount=0&id=prod29160143",
                phone3Img: "phone_install_iphone5c.jpg",
                phone3ImgAlt: "iPhone 5c",
                phone4Url: "/shop_and_learn/devices/product_phone_detail.jsp?id=prod29100059&navAction=push&navCount=0&id=prod29100059",
                phone4Img: "phone_install_galaxys4.jpg",
                phone5ImgAlt: "Samsung Galaxy S4"
            };
            $scope.dsclmr = {
                show: false,
                isPlus: true
            };
            $scope.dsclmrToggle = function() {
                $scope.dsclmr.show = !$scope.dsclmr.show;
                $scope.dsclmr.isPlus = !$scope.dsclmr.isPlus;
            };
            $scope.init = function() {
                $modal = $("#popUp");
                // Hash changes
                HASHCTRL.on(newCstmr, newCstmrFn);
                HASHCTRL.on(currCstmr, currCstmrFn);
                var hash = HASHCTRL.getHash();
                if (!hash) {
                    $modal.modal();
                } else {
                    // This is a hack to make the on hash change event to  execute
                    HASHCTRL.setHash("");
                    HASHCTRL.setHash(hash);
                }
            };
            $scope.dsclmr = {
                show: false,
                isPlus: true
            };
            $scope.dsclmrToggle = function() {
                $scope.dsclmr.show = !$scope.dsclmr.show;
                $scope.dsclmr.isPlus = !$scope.dsclmr.isPlus;
            };

            function hidePopup() {
                $modal.modal("hide");
            }

            function newCstmrFn(hash) {
                var plan;
                // dismiss modal
                hidePopup();
                if (HASHCTRL.contains("plan80")) {
                    plan = getNewCstmrPlan80();
                } else {
                    plan = getNewCstmrPlan65();
                }
                $scope.$apply(function() {
                    angular.extend($scope, plan);
                });
            }

            function currCstmrFn(hash) {
                var plan;
                // dismiss modal
                hidePopup();
                if (HASHCTRL.contains("plan80")) {
                    plan = getCurrCstmrPlan80();
                } else {
                    plan = getCurrCstmrPlan65();
                }
                $scope.$apply(function() {
                    angular.extend($scope, plan);
                });
            }

            function getNewCstmrPlan80() {
                //            console.log("NEW-CUST Plan80");
                return {
                    isPlan80: true,
                    isPlan80New: true,
                    isPlan65Curr: false,
                    section1: {
                        info: "This great $80/month Unlimited Everything <br/>plan can be yours today.",
                        price: "$80",
                        tabHash: newCstmr,
                        isTab1Active: false,
                        isTab2Active: true
                    },
                    section2: {
                        btnUrl: "/shop_and_learn/plans/",
                        btnLabel: "CHOOSE THIS PLAN"
                    },
                    section3: {
                        info: "",
                        price: "$80",
                        col1Title:"Use your own device",
                        colTitle: 'Sign Up For The Plan',
                        colList: ['Sign up for a 2-year Service Agreement', 'After two years, your monthly Unlimited Everything rate will<br/> automatically drop to $65'],
                        btnUrl: "/shop_and_learn/plans/",
                        btnLabel: "CHOOSE THIS PLAN"
                    },
                    section4: {
                        info: "Your 2-year Service Agreement gives you fantastic discounts<br/> on our latest and greatest technology.",
                        phone1Url: "/promos/?q=gs5_landing&WT.mc_ac=mobile_gs5_coming",
                        phone1Img: "phone_reg_galaxyS5.jpg",
                        phone1ImgAlt: "Samsung Galaxy S5",
                        phone2Url: "/shop_and_learn/devices/product_device_detail.jsp?id=prod29160150&navAction=push&navCount=0&id=prod29160150",
                        phone2Img: "phone_reg_iphone5s.jpg",
                        phone2ImgAlt: "iPhone 5s",
                        phone3Url: "/shop_and_learn/devices/product_device_detail.jsp?id=prod29160143&navAction=push&navCount=0&id=prod29160143",
                        phone3Img: "phone_reg_iphone5c.jpg",
                        phone3ImgAlt: "iPhone 5c",
                        phone4Url: "/shop_and_learn/devices/product_phone_detail.jsp?id=prod29100059&navAction=push&navCount=0&id=prod29100059",
                        phone4Img: "phone_reg_galaxys4.jpg",
                        phone5ImgAlt: "Samsung Galaxy S4"
                    }
                };
            }

            function getNewCstmrPlan65() {
                return {
                    isPlan80: false,
                    isPlan80New: false,
                    isPlan65Curr: false,
                    section1: {
                        info: "Walk in to a C Spire store and walk out with<br/> our greatest value yet on wireless service.",
                        price: "$65",
                        tabHash: newCstmr,
                        isTab1Active: true,
                        isTab2Active: false,
                        discount:"When you add or change to the Unlimited Everything plan, you will see the $80/mo. price. A $15 discount will automatically be applied each month if you don't have a device contract or if you purchase a device using the no-contract Smartphone Payment Plan."

                    },
                    section2: {
                        btnUrl: "/coverage/#/stores",
                        btnLabel: "FIND A STORE"
                    },
                    section3: {
                        info: "",
                        price: "$65",
                        col1Title:"Use your own device",
                        col1List: ["Purchase a new device outright", "Trade in your non-C Spire device and receive up to $300 towards the purchase of a new one.", "Bring a C Spire eligible device."],
                        col3Title: 'Get a New Device with our <b>Smartphone Payment Plan</b>',
                        col3List: ['Choose a new smartphone', 'Zero down', 'Zero interest for 24 months', 'No payments until July'],
                        btnUrl: "/coverage/#/stores",
                        btnLabel: "FIND A STORE"
                    },
                    section4: {
                        info: "Our <b>Smartphone Payment Plan </b> lets you walk away today with our latest<br/> and greatest technology - with no money down.",
                        phone1Url: "/promos/?q=gs5_landing&WT.mc_ac=mobile_gs5_coming",
                        phone1Img: "phone_install_galaxyS5.jpg",
                        phone1ImgAlt: "Samsung Galaxy S5",
                        phone2Url: "/shop_and_learn/devices/product_device_detail.jsp?id=prod29160150&navAction=push&navCount=0&id=prod29160150",
                        phone2Img: "phone_install_iphone5s.jpg",
                        phone2ImgAlt: "iPhone 5s",
                        phone3Url: "/shop_and_learn/devices/product_device_detail.jsp?id=prod29160143&navAction=push&navCount=0&id=prod29160143",
                        phone3Img: "phone_install_iphone5c.jpg",
                        phone3ImgAlt: "iPhone 5c",
                        phone4Url: "/shop_and_learn/devices/product_phone_detail.jsp?id=prod29100059&navAction=push&navCount=0&id=prod29100059",
                        phone4Img: "phone_install_galaxys4.jpg",
                        phone5ImgAlt: "Samsung Galaxy S4"
                    }
                };
            }

            function getCurrCstmrPlan80() {
                return {
                    isPlan80: true,
                    isPlan80New: false,
                    isPlan65Curr: false,
                    section1: {
                        info: "This great $80/month Unlimited Everything <br/>plan can be yours today.",
                        price: "$80",
                        tabHash: currCstmr,
                        isTab1Active: false,
                        isTab2Active: true
                    },
                    section2: {
                        btnUrl: "/shop_and_learn/plans/",
                        btnLabel: "CHOOSE THIS PLAN"
                    },
                    section3: {
                        info: "",
                        price: "$80",
                        col1Title:"Use your own device",
                        colTitle: "If you have an existing C Spire Service Agreement:",
                        colList: ["Switch today, and continue to use your current C Spire device.", "Once your existing service agreement expires, your rate will<br/> automatically drop to $65/month. "],
                        btnUrl: "/shop_and_learn/plans/",
                        btnLabel: "CHOOSE THIS PLAN"
                    },
                    section4: {
                        info: "Your 2-year Service Agreement gives you fantastic discounts<br/> on our latest and greatest technology.",
                        phone1Url: "/promos/?q=gs5_landing&WT.mc_ac=mobile_gs5_coming",
                        phone1Img: "phone_reg_galaxyS5.jpg",
                        phone1ImgAlt: "Samsung Galaxy S5",
                        phone2Url: "/shop_and_learn/devices/product_device_detail.jsp?id=prod29160150&navAction=push&navCount=0&id=prod29160150",
                        phone2Img: "phone_reg_iphone5s.jpg",
                        phone2ImgAlt: "iPhone 5s",
                        phone3Url: "/shop_and_learn/devices/product_device_detail.jsp?id=prod29160143&navAction=push&navCount=0&id=prod29160143",
                        phone3Img: "phone_reg_iphone5c.jpg",
                        phone3ImgAlt: "iPhone 5c",
                        phone4Url: "/shop_and_learn/devices/product_phone_detail.jsp?id=prod29100059&navAction=push&navCount=0&id=prod29100059",
                        phone4Img: "phone_reg_galaxys4.jpg",
                        phone5ImgAlt: "Samsung Galaxy S4"
                    }
                };
            }

            function getCurrCstmrPlan65() {
                return {
                    isPlan80: false,
                    isPlan80New: false,
                    isPlan65Curr: true,
                    section1: {
                        info: "This great $65 Unlimited Everything plan can be yours today if you have completed your current promotional offer contract.",
                        price: "$65",
                        tabHash: currCstmr,
                        isTab1Active: true,
                        isTab2Active: false,
                        discount:"When you add or change to the Unlimited Everything plan, you will see the $80/mo. price. A $15 discount will automatically be applied each month if you don't have a device contract or if you purchase a device using the no-contract Smartphone Payment Plan."

                    },
                    section2: {
                        btnUrl: "/shop_and_learn/plans/",
                        btnLabel: "CHOOSE THIS PLAN"
                    },
                    section3: {
                        info: "",
                        price: "$65",
                        col1Title:"Use or purchase your own device",
                        col1List: ["Use your existing C Spire Device.", "Purchase a new device outright.", "Trade in your non-C Spire device and receive up to $300 towards the purchase of a new one."],
                        col3Title: 'Get a New Device with our <b>Smartphone Payment Plan</b>',
                        col3List: ['Choose a new smartphone', 'Zero down', 'Zero interest for 24 months', 'No payments until July'],
                        btnUrl: "/shop_and_learn/plans/",
                        btnLabel: "CHOOSE THIS PLAN"
                    },
                    section4: {
                        info: "Our <b>Smartphone Payment Plan</b>  lets you walk away today with our latest<br/> and greatest technology - with no money down.",
                        phone1Url: "/promos/?q=gs5_landing&WT.mc_ac=mobile_gs5_coming",
                        phone1Img: "phone_install_galaxyS5.jpg",
                        phone1ImgAlt: "Samsung Galaxy S5",
                        phone2Url: "/shop_and_learn/devices/product_device_detail.jsp?id=prod29160150&navAction=push&navCount=0&id=prod29160150",
                        phone2Img: "phone_install_iphone5s.jpg",
                        phone2ImgAlt: "iPhone 5s",
                        phone3Url: "/shop_and_learn/devices/product_device_detail.jsp?id=prod29160143&navAction=push&navCount=0&id=prod29160143",
                        phone3Img: "phone_install_iphone5c.jpg",
                        phone3ImgAlt: "iPhone 5c",
                        phone4Url: "/shop_and_learn/devices/product_phone_detail.jsp?id=prod29100059&navAction=push&navCount=0&id=prod29100059",
                        phone4Img: "phone_install_galaxys4.jpg",
                        phone5ImgAlt: "Samsung Galaxy S4"
                    }
                };
            }
        }
    ]);
}(window.angular, window.$jQ_1_11_0, window.HashController));
var app = (function($) {
    var $faqs,
        $cntrsTitle,
        $cntrsList,
        $topPage,
        hidden = "hidden",
        duration = 500,
        $modal,
        newCstmr = "new_customer",
        plan65 = "plan65",
        plan80 = "plan80",
        currCstmr = "current_customer",
        $readMore,
        $btnMbl;

    function init() {
        $faqs = $("#faq-list li");
        $cntrsTitle = $(".countries > .title");
        $cntrsList = $("#cntrs-list");
        $backToTop = $(".back-to-top");
        $modal = $("#myModal");
        $readMore = $("#readMore");
        $btnMbl = $(".btn-mbl");
        countriesEvents();
        scrollTopEvent();
        faqsEvents();
        readMoreClickEvent();
        btnMblClickEvent();
        findStoreClickEvent();
    }
    /**
     * Handles events that affect the countries
     */
    function countriesEvents() {
        $cntrsTitle.click(function(e) {
            $cntrsList.toggleClass(hidden, duration);
        });
    }
    /**
     * Scrolls page to the top
     */
    function scrollTopEvent() {
        //back to top function
        var offset = 220;
        var duration = 500;
        $(window).scroll(function() {
            if ($(this).scrollTop() > offset) {
                $backToTop.fadeIn(duration);
            } else {
                $backToTop.fadeOut(duration);
            }
        });
        $backToTop.click(function(event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, duration);
            return false;
        });
        //end back to top
    }
    /**
     * Smooth scroll
     */
    function smoothScroll() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') || location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 500);
                    return false;
                }
            }
        });
    }
    /**
     * FAQs events
     */
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
    /**
     * Click event for read more link
     */
    function readMoreClickEvent() {
        var minus = "/resources/images/promos/new_plan/minus.png",
            plus = "/resources/images/promos/new_plan/plus.png",
            clicked = "clicked",
            $ans, $this,
            $txt,
            readMoreTxt = "Read More.",
            readLessTxt = "Read Less.";
        $readMore.click(function(e) {
            $ans = $("#dsclmrInfo");
            $this = $(this).find("img");
            $txt = $(this).find("span");
            if ($this.hasClass(clicked)) {
                $this.attr({
                    src: plus
                }).removeClass(clicked);
                $txt.text(readMoreTxt);
                $ans.hide();
            } else {
                $this.attr({
                    src: minus
                }).addClass(clicked);
                $txt.text(readLessTxt);
                $ans.show();
            }
        });
    }
    /**
     * Click event for the mobile collapse buttons
     */
    function btnMblClickEvent() {
        var $this,
            $parent,
            classes = {
                sectionBody: ".section-body",
                hiddenXs: "hidden-xs",
                well: "well",
                mrgnBtm40: "margin-btm-40"
            }, $sectionWrapper;
        $btnMbl.click(function(e) {
            $this = $(this);
            $parent = $this.parent();
            $sectionWrapper = $parent.find(classes.sectionBody);
            $parent.toggleClass(classes.mrgnBtm40);
            $sectionWrapper.toggleClass(classes.hiddenXs);
        });
    }

    function findStoreClickEvent() {
        //if mobile redirect all store url to /mobile/coverage_and_store_locator.jsp#Store
        $(".btn").click(function(e) {
            if (isMobileDevice()) {
                var hrefurl = $(this).attr("href");
                if (hrefurl.indexOf('stores') >= 0) {
                    e.preventDefault();
                    window.location = "/mobile/coverage_and_store_locator.jsp#Store";
                } {
                    //continue url
                }
            } else {
                //continue to url
            }
        });
    }

    function isMobileDevice() {
        var ismobile = false;
        //regex from detectmobilebrowsers.com 
        (function(a, b) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) ismobile = true
        })(navigator.userAgent || navigator.vendor || window.opera);
        return ismobile;
    }
    return {
        init: init
    };
}(window.$jQ_1_11_0));
window.$jQ_1_11_0(document).ready(function() {
    app.init();
});