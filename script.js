let stars = document.getElementById('stars');
     
        let text = document.getElementById('text');
        let btn = document.getElementById('btnexplore');
        let base = document.getElementById('base');
        


        window.addEventListener('scroll', function(){
            let value = window.scrollY;
            stars.style.left = value *0.25 + 'px';
            
            base.style.top = value *0 + 'px';
            text.style.marginRight = value *4 + 'px';
            text.style.marginBottom = value *1.5 + 'px';
            btn.style.marginTop = value *1.5 + 'px';
          
            
        })



        let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec =>{

        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if(top => offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*='+id+']').classList.add('active');

            });
        };
    });
}
document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}




let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("slide");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 2000); 
}


function myFunction() {
    document.getElementById("myTopnav").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.fas fa-bars')) {
      var dropdowns = document.getElementsByClassName("navbar");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }