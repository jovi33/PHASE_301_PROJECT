/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
const arrow = document.querySelectorAll('.arrow');
const movieLists = document.querySelectorAll('.movie-list');

arrow.forEach((arrow, i)=>{
  arrow.addEventListener('click', ()=>{
    movieLists[i].style.transform = 'translateX(-100px)';
  });
});

