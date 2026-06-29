document.querySelectorAll('.card,.steps div,.gallery img,.image-card,.hero-photo,.price-box,.contact-card').forEach(el=>el.classList.add('reveal'));
const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));