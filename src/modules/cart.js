function modalCart  () {
  const cardBtn = document.getElementById('cart');
const cartModal = document.querySelector('.cart');
const cartCloseBtn = cartModal.querySelector('.cart-close')

function openCartMdal() {
  cartModal.style.display = 'flex';
}

function closeCartModal() {
  cartModal.style.display = '';
}

cardBtn.addEventListener('click', openCartMdal);

cartCloseBtn.addEventListener('click', closeCartModal);
}

export default modalCart

