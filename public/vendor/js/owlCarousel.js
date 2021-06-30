/*meet our team slider script*/
// var team_carousel_args = {
//     loop:true,
//     nav:true,
//     pagination:false,
//     autoplay:true,
//     autoplayTimeout:2000,
//     autoplayHoverPause: true,
//     dots:false,
//     lazyLoad:true,
//     navText: ["<i className='fa fa-chevron-left'></i>","<i className='fa fa-chevron-right'></i>"],
//     responsive:{
//       0:{
//         items:1
//       },
//       420:{
//         items:2
//       },
//       600:{
//         items:4
//       },
//       1000:{
//         items:4
//       },
//       1400:{
//         items:5
//       }
//     }
// },
// team_carousel = $('.team-carousel').owlCarousel( team_carousel_args );

// var clients_carousel_dots ={
//   owlDots: false
// }
// clients_carousel = $('.owl-dots').owlCarousel(clients_carousel_dots);

jQuery(document).ready(function($) {
  $('.owl-carousel').owlCarousel({
   nav: true,
   items: 1,
   loop: true,
   center: true,
   margin: 0,
   lazyLoad:true,
   dots: false
 });
})
