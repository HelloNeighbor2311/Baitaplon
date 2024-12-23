// script.js
let payOverlay = document.getElementById('pay__overlay');
let isShow = false;
console.log(payOverlay.style.display);
function showOverlay()
{
  if (!isShow)
  {
  payOverlay.style.display  = 'flex';
  isShow = true;
  } 
  else
  {
  payOverlay.style.display  = 'none';
  isShow = false;
  }
}

// Tạo một hàm để xử lý logic tăng giảm cho từng quantity selector
function createQuantitySelector(containerId) {
  // Tìm các phần tử theo class trong container cụ thể
  const container = document.getElementById(containerId);
  const decreaseButton = container.querySelector('.decrease');
  const increaseButton = container.querySelector('.increase');
  const quantityInput = container.querySelector('.quantity-input');

  // Tăng số lượng
  increaseButton.addEventListener('click', function() {
    let currentQuantity = parseInt(quantityInput.value); // Lấy giá trị hiện tại
    quantityInput.value = currentQuantity + 1; // Tăng giá trị lên 1
  });

  // Giảm số lượng
  decreaseButton.addEventListener('click', function() {
    let currentQuantity = parseInt(quantityInput.value); // Lấy giá trị hiện tại
    if (currentQuantity > 1) {
      quantityInput.value = currentQuantity - 1; // Giảm giá trị xuống 1 nếu giá trị lớn hơn 1
    }
  });
}

// Khởi tạo các quantity selector cho mỗi phần tử
createQuantitySelector('quantity-selector-1');
createQuantitySelector('quantity-selector-2');
createQuantitySelector('quantity-selector-3');

