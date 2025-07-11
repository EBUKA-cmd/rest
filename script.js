function goToOrder(item, price, img) {
  const url = `order.html?item=${encodeURIComponent(item)}&price=${price}&img=${encodeURIComponent(img)}`;
  window.location.href = url;
}

const params = new URLSearchParams(window.location.search);
const item = params.get('item');
const price = params.get('price');
const img = params.get('img');

if (item && price && img) {
  const foodName = document.getElementById('foodName');
  const foodPrice = document.getElementById('foodPrice');
  const previewImg = document.getElementById('previewImg');
  const quantity = document.getElementById('quantity');
  const total = document.getElementById('total');

  if (foodName && foodPrice && previewImg && quantity && total) {
    foodName.textContent = item;
    foodPrice.textContent = `₦${price}`;
    previewImg.src = img;
    total.value = `₦${price}`;

    quantity.addEventListener('input', () => {
      const qty = parseInt(quantity.value) || 1;
      total.value = `₦${qty * parseFloat(price)}`;
    });
  }
}

const form = document.getElementById('orderForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('confirmation').textContent =
      '✅ Payment received! Your order is on the way.';
    form.reset();
  });
}

const fadeEls = document.querySelectorAll('.fade-in');
const revealOnScroll = () => {
  fadeEls.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

document.getElementById('confirmation').textContent =
  '✅ Payment received! Your order is on the way.';
document.getElementById('confirmation').classList.add('show');
