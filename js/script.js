// --------------------  DECLARE THE VARIABLES -----------------------------
const cartSvg = document.querySelector(".cart-svg");
const cartWrapper = document.querySelector(".cart-wrapper");
const productImagesWrapper = document.querySelector(".product__images-wrapper");
const overlay = document.querySelector(".overlay");
const iconClose = document.querySelector(".icon-close");
const plusIcon = document.querySelector(".quantity-button__plus");
const minusIcon = document.querySelector(".quantity-button__minus");
const quantityInput = document.querySelector("#quantity");
const addToCartButton = document.querySelector(".addtocart-button");
const cartItemQuantity = document.querySelector(".cart-item__quantity");
const officialPrice = document.querySelector(".cart-item__official-price span");
const totalPrice = document.querySelector(".cart-item__total-price span");
const iconDelete = document.querySelector(".icon-delete");
const cartItem = document.querySelector('.cart-item');
const emptyCart = document.querySelector('.empty-cart');
const cartContent = document.querySelector('.cart-conntent');
const hamburgerOverlay = document.querySelector('.hamburger-overlay');
const header = document.querySelector('header');
const hamburgerIcon = document.querySelector('.menu');

// --------------------  EVENT FOR CART BUTTON -----------------------------
cartSvg.addEventListener("click", () => {
  cartWrapper.classList.toggle('active');
});

// --------------------  EVENT FOR OPEN OVERLAY SLIDER -----------------------------
productImagesWrapper.addEventListener("click", (e) => {
  overlay.classList.toggle('active');
});

// --------------------  EVENT FOR CLOSE OVERLAY SLIDER -----------------------------
overlay.addEventListener("click", (e) => {
  if(e.target.classList.contains("overlay") || e.target.classList.contains("icon-close")) {
    overlay.classList.toggle('active');
  }
});

let quantityCounter = 1;

// --------------------  EVENT FOR INCREASE THE QUANTITY OF PRODUCT -----------------------------
plusIcon.addEventListener('click' , (e) => {
  quantityCounter++;
  quantityInput.value = quantityCounter;
});

// --------------------  EVENT FOR DECREASE THE QUANTITY OF PRODUCT -----------------------------
minusIcon.addEventListener('click' , (e) => {
  if(quantityCounter === 1 || quantityCounter < 1) {
    return;
  } else {
    quantityCounter--;
    quantityInput.value = quantityCounter;
  }
});

// --------------------  EVENT FOR ADD THE PRODUCT TO CART -----------------------------
addToCartButton.addEventListener('click' , (e) => {
  emptyCart.style.display = 'none';
  cartItem.style.display = 'flex';
  cartItemQuantity.innerText = quantityInput.value;
  let price = Number(officialPrice.innerText) * Number(cartItemQuantity.innerText);
  console.log(officialPrice.innerText)
  console.log(Number(cartItemQuantity.innerText))
  totalPrice.innerText = price;
});

// --------------------  EVENT FOR REMOVE THE PRODUCT FROM CART -----------------------------
iconDelete.addEventListener('click' , () => {
  cartItem.remove();
  if(emptyCart.hasAttribute('style')) {
    emptyCart.style.display = 'block';
  }
})

// --------------------  EVENT FOR OPEN AND CLOSE MOBILE MENU -----------------------------
hamburgerIcon.addEventListener('click' , () => {
  header.classList.toggle('mobile-header');
  document.body.classList.toggle('overflow-handler');
  hamburgerOverlay.classList.toggle('overlay-active');
})

// --------------------  EVENT FOR CLOSE MOBILE MENU -----------------------------
hamburgerOverlay.addEventListener('click', () => {
  header.classList.remove('mobile-header');
  hamburgerIcon.classList.remove('opened');
  document.body.classList.remove('overflow-handler');
})