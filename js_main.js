// Global site animations: loader, parallax, helmet motion, scroll animations
document.addEventListener('DOMContentLoaded', () => {
  // loader
  const loader = document.getElementById('loader');
  setTimeout(()=>loader.style.opacity = '0', 1800);
  setTimeout(()=>loader.style.display = 'none', 2200);

  // update year tokens
  document.querySelectorAll('[id^=year]').forEach(e => e.textContent = new Date().getFullYear());

  // hero subtle tilt on mouse move
  const helmet = document.getElementById('helmet');
  const stage = document.getElementById('helmet-stage');
  if(stage && helmet){
    stage.addEventListener('mousemove', (e)=>{
      const rect = stage.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      helmet.style.transform = `translateZ(20px) rotateX(${y*-8}deg) rotateY(${x*10}deg) scale(1.02)`;
    });
    stage.addEventListener('mouseleave', ()=> helmet.style.transform = '');
  }

  // parallax on elements with [data-parallax]
  const parallaxEls = document.querySelectorAll('[data-parallax]');
  window.addEventListener('scroll', () => {
    const sc = window.scrollY;
    parallaxEls.forEach(el => {
      const factor = parseFloat(el.getAttribute('data-parallax')||0.04);
      el.style.transform = `translateY(${sc*factor}px)`;
    });
  }, { passive: true });

  // reveal on scroll (simple IntersectionObserver)
  const reveals = document.querySelectorAll('.story-panel, .product-card, .reviews-grid article, .brand-story, .products-teaser');
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(en=>{
      if(en.isIntersecting) en.target.style.transform = 'translateY(0)', en.target.style.opacity = 1;
    });
  }, { threshold:0.12 });
  reveals.forEach(r => { r.style.opacity = 0; r.style.transform = 'translateY(18px)'; obs.observe(r); });

  // featured products render (index)
  const fg = document.getElementById('featured-grid');
  if(fg){ Products.renderList(fg); }

  // floating highlights parallax animation
  const floats = document.querySelectorAll('.floating-highlights .float-card');
  let t = 0;
  function floatLoop(){
    t += 0.02;
    floats.forEach((f,i)=>{
      f.style.transform = `translateY(${Math.sin(t + i)*6}px) rotateZ(${Math.sin(t/2 + i)*1}deg)`;
    });
    requestAnimationFrame(floatLoop);
  }
  floatLoop();

  // sticky nav blur effect
  const header = document.querySelector('.nav-wrap');
  window.addEventListener('scroll', () => {
    header.style.backdropFilter = (window.scrollY>8) ? 'blur(10px)' : 'blur(6px)';
  });

  // quick cart count updates
  setInterval(()=> document.querySelectorAll('.cart-count').forEach(n=>n.textContent = Cart.count()), 600);
});