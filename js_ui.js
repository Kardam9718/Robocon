// small UI helpers: modal, toast
const ui = (function(){
  function openModal(id){
    document.getElementById(id).style.display='flex';
    document.body.style.overflow='hidden';
  }
  function closeModal(id){
    document.getElementById(id).style.display='none';
    document.body.style.overflow='';
  }
  function bindModal(id){
    const m = document.getElementById(id);
    if(!m) return;
    m.addEventListener('click', (e)=>{ if(e.target===m) closeModal(id); });
  }
  function toast(msg, timeout=1800){
    const t = document.createElement('div');
    t.className = 'ui-toast';
    t.textContent = msg;
    Object.assign(t.style, {position:'fixed',right:'24px',bottom:'24px',background:'#081025',padding:'12px 16px',borderRadius:'10px',boxShadow:'0 12px 40px rgba(0,0,0,0.6)',zIndex:9999});
    document.body.appendChild(t);
    setTimeout(()=>t.style.opacity='0.02', timeout-300);
    setTimeout(()=>t.remove(), timeout);
  }

  return { openModal, closeModal, bindModal, toast };
})();