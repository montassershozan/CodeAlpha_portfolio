const LoadingScr = document.querySelector('.Loading-Scr');
const homeSec = document.querySelector('.home-sec');
const AboutSec = document.querySelector('.About-sec');
const ExperienceSec = document.querySelector('.Experience-sec');

window.addEventListener('load', function() {
    function aaa() {
        LoadingScr.style.display = 'block'
        homeSec.style.display = 'none'
        AboutSec.style.display = 'none'
        ExperienceSec.style.display = 'none'

      }
      setTimeout(aaa, 1000);

      function sss() {
        LoadingScr.style.display = 'none'
        homeSec.style.display = 'block'
        AboutSec.style.display = 'block'
        ExperienceSec.style.display = 'block'
      }
    setInterval(sss, 3800);

});

