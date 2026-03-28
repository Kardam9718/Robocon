// Simple cart using localStorage
const Cart = (function(){
  const KEY = 'robocon_cart_v1';

  function load(){
    try{ return JSON.parse(localStorage.getItem(KEY) || '[]'); }catch(e){return []}
  }
  function save(items){ localStorage.setItem(KEY, JSON.stringify(items)); updateCountInUI(); }

  function items(){ return load(); }
  function findItem(id){ return items().find(i=>i.id===id); }

  function add(id, qty=1){
    const all = items();
    const existing = all.find(i=>i.id===id);
    if(existing) existing.qty += qty;
    else all.push({id, qty});
    save(all);
  }
  function remove(id){
    const r = items().filter(i=>i.id!==id);
    save(r);
  }
  function increment(id){ const it = findItem(id); if(it){ it.qty++; save(items()); } }
  function decrement(id){ const it = findItem(id); if(it){ it.qty = Math.max(0, it.qty-1); if(it.qty===0) remove(id); else save(items()); } }
  function setQty(id, qty){ const it = findItem(id); if(it){ it.qty = Math.max(0, parseInt(qty)||1); save(items()); } }
  function count(){ return items().reduce((s,i)=>s+i.qty,0); }
  function clear(){ save([]); }
  function set(arr){ // arr = [{id,qty}]
    save(arr.map(a=>({id:a.id,qty:a.qty})));
  }

  // enriched view with product data
  function itemsDetailed(){
    const all = items();
    return all.map(i=>{
      const product = Products.getById(i.id);
      const total = (product?.price||0) * i.qty;
      return { id:i.id, qty:i.qty, product, total };
    });
  }
  function total(){
    return itemsDetailed().reduce((s,it)=>s + it.total, 0);
  }

  function updateCountInUI(){
    document.querySelectorAll('.cart-count').forEach(n => n.textContent = count());
  }

  // init
  updateCountInUI();
  window.addEventListener('storage', updateCountInUI);

  return { add, remove, increment, decrement, setQty, count, clear, set, itemsDetailed, total, items };
})();