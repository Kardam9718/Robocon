// Products data and rendering utilities
const Products = (function(){
  const data = [
    {
      id:'rb-ff-01',
      title:'Apex Full-Face',
      category:'Full Face',
      material:'Monocoque Carbon',
      price:24999,
      stock:5,
      features:['Carbon Shell','Aero Vents','Anti-Fog Visor'],
      badge:'Limited Drop',
      color:'#0b1220'
    },
    {
      id:'rb-mod-01',
      title:'Stratus Modular',
      category:'Modular',
      material:'Composite Alloy',
      price:19999,
      stock:12,
      features:['Quick-Flip Visor','Integrated Comm Mount'],
      badge:'',
      color:'#0a1016'
    },
    {
      id:'rb-half-01',
      title:'Nura Half',
      category:'Half Face',
      material:'Lightweight Poly',
      price:11999,
      stock:26,
      features:['MicroFit Liner','UV Shield Visor'],
      badge:'',
      color:'#0b0b0b'
    }
  ];

  function list(){ return data.slice(); }
  function getById(id){ return data.find(d=>d.id===id); }

  function renderCard(product){
    const limited = product.stock < 8 ? `<div class="badge-limited">${product.badge || 'Limited'}</div>` : '';
    return `
      <article class="product-card" data-id="${product.id}">
        ${limited}
        <div class="thumb">${cardImage(product)}</div>
        <h4>${product.title}</h4>
        <div class="muted">${product.category}</div>
        <div class="price">₹ ${product.price.toLocaleString()}</div>
        <div class="card-actions" style="margin-top:10px;display:flex;gap:8px;">
          <button class="btn-ghost" onclick="Products.quickView('${product.id}')">Quick View</button>
          <button class="btn-primary" onclick="location.href='product.html?id=${product.id}'">View</button>
        </div>
      </article>
    `;
  }

  function cardImage(p){
    // returns an inline SVG thumbnail to avoid external images
    return `
      <svg width="100%" height="140" viewBox="0 0 300 140" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g${p.id}" x1="0" x2="1"><stop offset="0" stop-color="#0b1220"/><stop offset="1" stop-color="#081018"/></linearGradient></defs>
        <rect width="100%" height="100%" rx="12" fill="url(#g${p.id})" />
        <g transform="translate(20,12)">
          <ellipse cx="120" cy="70" rx="80" ry="44" fill="#0b0d0f" opacity="0.95"/>
          <path d="M30 70 C70 20, 190 20, 240 70" fill="#05060a" stroke="#02030a" stroke-width="2"/>
          <path d="M40 62 C90 30, 190 30, 240 62" stroke="#00e6ff" stroke-opacity="0.14" stroke-width="6" fill="none"/>
        </g>
      </svg>
    `;
  }

  function renderList(container){
    const html = list().map(p => renderCard(p)).join('');
    container.innerHTML = html;
    // bind hover tilt
    document.querySelectorAll('.product-card').forEach(card=>{
      card.addEventListener('mousemove', (e)=>{
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `translateY(-6px) rotateX(${ -y*6 }deg) rotateY(${ x*7 }deg)`;
      });
      card.addEventListener('mouseleave', ()=> card.style.transform = '');
    });
  }

  function quickView(id){
    const p = getById(id);
    const modal = document.getElementById('quick-view');
    const body = document.getElementById('quick-view-body');
    body.innerHTML = `
      <div style="display:flex;gap:18px">
        <div style="width:45%">${cardImage(p)}</div>
        <div style="width:55%">
          <h2>${p.title}</h2>
          <p class="muted">${p.category} • ${p.material}</p>
          <p style="margin-top:8px;font-weight:700">₹ ${p.price.toLocaleString()}</p>
          <div style="margin-top:10px">${p.features.map(f=>`<div class="feat">${f}</div>`).join('')}</div>
          <div style="margin-top:14px;display:flex;gap:8px">
            <button class="btn-primary" onclick="Cart.add('${p.id}',1);ui.toast('Added to cart');">Add to cart</button>
            <button class="btn-ghost" onclick="location.href='product.html?id=${p.id}'">View details</button>
          </div>
        </div>
      </div>
    `;
    ui.openModal('quick-view');
  }

  function renderGalleryMarkup(product){
    // single big 'image' with zoom/rotate illusion using CSS transforms (no real images)
    return `<div class="gallery-surface" data-id="${product.id}" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;transform-style:preserve-3d">
      ${cardImage(product)}
    </div>`;
  }

  function renderThumbs(product){
    return `<img src="data:image/svg+xml;utf8,${encodeURIComponent(thumbSVG(product))}" alt="thumb">`.repeat(3);
  }

  function thumbSVG(p){
    return `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='64'><rect width='100%' height='100%' rx='8' fill='#071017' /><path d='M10 45 C30 20,90 20,110 45' stroke='#00e6ff' stroke-opacity='0.12' stroke-width='6' fill='none' /></svg>`;
  }

  function renderFeatureList(product){
    return product.features.map(f => `<div class="feat">${f}</div>`).join('');
  }

  function bindGalleryInteractions(viewId){
    const view = document.getElementById(viewId);
    if(!view) return;
    let isDown=false, startX=0, startY=0, rotX=0, rotY=0;
    view.addEventListener('mousedown', e=>{ isDown=true; startX=e.clientX; startY=e.clientY; view.style.cursor='grabbing'});
    window.addEventListener('mouseup', ()=>{ isDown=false; view.style.cursor='default'});
    view.addEventListener('mousemove', e=>{
      if(!isDown) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      rotY = dx/8;
      rotX = -dy/8;
      view.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`;
    });
    view.addEventListener('mouseleave', ()=> view.style.transform = '');
  }

  return { list, getById, renderList, quickView, renderGalleryMarkup, renderThumbs, renderFeatureList, bindGalleryInteractions, cardImage };
})();