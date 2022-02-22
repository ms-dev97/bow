let links = document.querySelector('header .nav-links');
document.querySelector('.menu-bar').onclick = function () {
    links.classList.toggle('active');
}

let toTop = document.querySelector('.to-top');
window.onscroll = function() {
    if(window.pageYOffset >= 500){
        toTop.style.opacity = '1';
        toTop.style.visibility = 'visible';
    } else {
        toTop.style.opacity = '0';
        toTop.style.visibility = '';
    }
}

toTop.onclick = function(){
    if(window.pageYOffset > 500){
        window.scrollTo(0,0)
    }
}

// Counting Numbers

let num = document.querySelectorAll('.numbers > div span:first-child');

function countTo() {
    for (let i = 0; i < num.length; i++) {
        
        let dataCount = num[i].dataset.count;
        console.log(num[i].textContent);
        
        
        if (window.scrollY >= num[i].offsetTop) {
//            num[i].textContent = parseInt(num[i].textContent)++;
            console.log(num[i].textContent)
        }
    }
}

window.addEventListener('scroll', countTo);