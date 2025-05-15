// Toggle Cart Drawer
function toggleCart() {
    const drawer = document.getElementById('cartDrawer');
    drawer.classList.toggle('open');
  }
  
  document.getElementById('cartIcon').addEventListener('click', toggleCart);
  