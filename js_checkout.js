// Checkout logic & Razorpay static checkout (client-side)
const Checkout = (function(){
  // Replace with your Razorpay test key when ready:
  const RAZORPAY_KEY = 'rzp_test_REPLACE_ME';

  function init(){
    renderSummary();
    document.getElementById('pay-btn').addEventListener('click', payNow);
  }

  function renderSummary(){
    const area = document.getElementById('order-summary');
    const items = Cart.itemsDetailed();
    if(items.length===0){
      area.innerHTML = '<div class="empty">Cart empty — <a href="products.html">browse helmets</a></div>';
      return;
    }
    const lines = items.map(it => `<div style="display:flex;justify-content:space-between;margin-bottom:8px"><div>${it.product.title} × ${it.qty}</div><div>₹ ${(it.total).toLocaleString()}</div></div>`).join('');
    const total = Cart.total();
    area.innerHTML = `<div><h3>Order Summary</h3>${lines}<hr style="border:none;border-top:1px solid rgba(255,255,255,0.03);margin:12px 0"><div style="display:flex;justify-content:space-between;font-weight:700">Total <div>₹ ${total.toLocaleString()}</div></div></div>`;
  }

  function payNow(){
    const items = Cart.itemsDetailed();
    if(items.length===0){ alert('Cart is empty'); return; }
    const name = document.getElementById('name').value || 'Buyer';
    const email = document.getElementById('email').value || 'buyer@example.com';
    const phone = document.getElementById('phone').value || '';

    const options = {
      key: RAZORPAY_KEY,
      amount: Math.round(Cart.total()) * 100, // paise
      currency: "INR",
      name: "ROBOCON HELMETS",
      description: "Order payment",
      image: "", // could be dataURI
      handler: function (response){
        // This is where you'd normally verify payment on backend.
        // For this static demo, we simply show success and clear cart.
        alert('Payment complete (demo). Razorpay payment id: ' + (response.razorpay_payment_id||'demo'));
        Cart.clear();
        location.href = 'index.html';
      },
      prefill: { name, email, contact: phone },
      notes: { integration: "razorpay_client_demo" },
      theme: { color: "#0b1220" }
    };

    if(!RAZORPAY_KEY || RAZORPAY_KEY.includes('REPLACE_ME')){
      // Demo flow: show confirmation modal simulating payment
      if(confirm('Razorpay key not set. Simulate successful payment?')){
        Cart.clear();
        alert('Payment simulated — thank you!');
        location.href = 'index.html';
      }
      return;
    }

    const rzp = new Razorpay(options);
    rzp.open();
  }

  return { init, renderSummary };
})();