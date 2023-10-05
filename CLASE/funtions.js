window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var list = this.document.querySelectorAll("li")
    var scrollPosition = window.scrollY;
    
    if (scrollPosition < 1) {
        header.style.backgroundColor = "#4a009e"
        list.forEach(li => {
            li.style.color = "white"
        });
    };
    if (scrollPosition > 1) {
        header.style.backgroundColor = "white"
        list.forEach(li => {
            li.style.color = "black"
        });
    };
    console.log(scrollPosition)

    const parallaxBg = document.querySelector('.parallax.bg');
  
    parallaxBg.style.backgroundPosition = `center ${scrollPosition * 0.02}px`;
});