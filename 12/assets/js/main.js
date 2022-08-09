jQuery( document ).ready(function() {
  initBurgerMenu();
});


function initBurgerMenu() {
  jQuery('.click').on('click', function(e){
      e.preventDefault()
      jQuery(this).toggleClass('open');
      jQuery('body').toggleClass('sub-menu');
  });
}

// document.addEventListener(
//     "DOMContentLoaded", () => {
//         const menu = new Mmenu( "#menu", {
//             slidingSubmenus: false
//         }, {
//             classNames: {
//                 selected: "active"
//             },
//             offCanvas: {
//                 page: {
//                     selector: "#page"
//                 }
//             }
//         });
//     }
// );

