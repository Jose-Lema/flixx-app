const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })
const api_key = process.env.API_KEY;

console.log(api_key);

// const global = {
//     currentPage: window.location.pathname,
// };

// function highlightActiveLink(){
//     const links = document.querySelectorAll('.nav-link');
//     links.forEach((link) => {
//         if(link.getAttribute('href') === global.currentPage){
//             link.classList.add('active');
//         }
//     });
// }


// //Make sure your VS Code is opened to the innermost folder with everything in it
// function init() {
//     switch(global.currentPage) {
//         case '/':
//         case '/index.html':
//             console.log('Home');
//             break;
        
//         case '/shows.html':
//             console.log('TV Shows');
//             break;
        
//         case '/movie-details.html':
//             console.log('Movie Details');
//             break;
        
//         case '/tv-details.html':
//             console.log('Show Details');
//             break;
        
//         case '/search.html':
//             console.log('Search');
//             break;        
//     }

//     highlightActiveLink();
// }

// document.addEventListener('DOMContentLoaded', init);