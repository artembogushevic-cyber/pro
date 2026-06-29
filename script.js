document.querySelectorAll('.cards article,.steps div,.compare div,.hero-card,.logo-box,.calculator,.contact-card,.faq-item').forEach(el=>el.classList.add('reveal'));
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('show')})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

function animateCounters(){
  document.querySelectorAll('[data-count]').forEach(el=>{
    const target=Number(el.dataset.count);
    let current=0;
    const step=Math.max(1, Math.ceil(target/42));
    const timer=setInterval(()=>{
      current+=step;
      if(current>=target){current=target;clearInterval(timer)}
      if(target===24) el.textContent=current+'/7';
      else if(target===300) el.textContent=current+'+';
      else el.textContent=current;
    },32);
  });
}
setTimeout(animateCounters,500);

function calculate(){
  const length = Number(document.getElementById('length').value || 0);
  const diameter = Number(document.getElementById('diameter').value || 0);
  const complexity = Number(document.getElementById('complexity').value || 0);
  const base = Math.max(length * 3500, 45000);
  const total = Math.round((base + diameter + complexity) / 1000) * 1000;
  document.getElementById('result').textContent = 'от ' + total.toLocaleString('ru-RU') + ' ₽';
}
calculate();

document.querySelectorAll('.faq-item button').forEach(btn=>{
  btn.addEventListener('click',()=>btn.parentElement.classList.toggle('open'));
});
