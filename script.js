document.querySelectorAll('.service-grid article,.tech-grid div,.compare-grid div,.gallery img,.premium-photo,.hero-visual,.calculator,.review-grid div,.final-box,.contact-card,.map-card').forEach(el=>el.classList.add('reveal'));
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('show')})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

function calculate(){
  const length = Number(document.getElementById('length').value || 0);
  const diameter = Number(document.getElementById('diameter').value || 0);
  const complexity = Number(document.getElementById('complexity').value || 0);
  const base = Math.max(length * 3500, 45000);
  const total = Math.round((base + diameter + complexity) / 1000) * 1000;
  document.getElementById('result').textContent = 'от ' + total.toLocaleString('ru-RU') + ' ₽';
}
calculate();
