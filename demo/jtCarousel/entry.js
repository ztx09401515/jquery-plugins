import JtCarousel from '../../src/jtCarousel/jtCarousel.ts'
$(document).ready(function () {
    $('#root').jtCarousel({style:{height:300,width:700},contents:[
            {
                src:'./resources/shan1.jpg',
                url:'',
            },
            {
                src:'./resources/shan2.jpg',
                url:'',
            },
            {
                src:'./resources/shan3.jpg',
                url:'',
            },
        ]});
})
