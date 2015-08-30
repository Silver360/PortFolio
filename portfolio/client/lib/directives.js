

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

        $('.experience').click(function(){
            element.stop().animate({
                scrollTop: $("#experience").offset().top - 71
            }, 1000);
        })

    }


    return{
        restrict: 'A',
        link: link


    };

});

angular.module('portfolio').directive('resizeFoto', function (){

    function link(scope, element, attrs) {

        var highEle = element.height();
        element.find('.img').height(highEle);

    }


    return{
        restrict: 'A',
        link: link


    };

});


//angular.module('portfolio').directive('animationScrolling', function() {
//
//    function link(scope, element, attrs){
//
//        var ani = 0
//        element.bind('mousewheel', function(e){
//            if(e.originalEvent.wheelDelta > 0 ){
//                ani = 0;
//                if(ani == 1)
//                    element.stop()
//                element.animate({
//                    scrollTop: $(this).scrollTop() - 200
//                }, 1000 );
//                console.log('up');
//            }else {
//                ani = 1;
//                if(ani == 0)
//                    element.stop();
//                element.animate({
//                    scrollTop: $(this).scrollTop() + 200
//                }, 1000 );
//                console.log('down');
//            }
//
//        })
//
//    }
//
//    return{
//        restrict: 'A',
//        link: link
//    }
//
//
//})

