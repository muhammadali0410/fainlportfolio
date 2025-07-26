 
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

 
function checkScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

 
window.addEventListener('load', checkScroll);
window.addEventListener('scroll', checkScroll);

 
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
 
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active');
        });
        
         
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        const projects = document.querySelectorAll('.project-item');
        
        projects.forEach(project => {
            if (filter === 'all') {
                project.classList.remove('hide');
            } else {
                if (project.getAttribute('data-category').includes(filter)) {
                    project.classList.remove('hide');
                } else {
                    project.classList.add('hide');
                }
            }
        });
    });
});

 
document.querySelectorAll('[href^="https://wa.me"]').forEach(btn => {
    btn.addEventListener('click', function(e) {
        console.log('WhatsApp clicked');
      
    });
});