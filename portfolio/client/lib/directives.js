

angular.module('portfolio').directive('scrollSpy', function (){

    function link(scope, element, attrs){

        $('.top').click(function(){
            element.stop().animate({
                scrollTop: $("#top").offset().top
            }, 1000);
        })

        $('.about').click(function(){
            element.stop().animate({
                scrollTop: $("#about").offset().top - 71
            }, 1000);
        })

    }


    return{
        restrict: 'A',
        link: link


    };

});