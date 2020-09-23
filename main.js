const cartBtn = document.querlySelector("#cart-btn");
const modal = document.querlySelector(".modal");
const close = document.querlySelector(".close");

cartBtn.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);


function toggleModal() {
	modal.classList.toggle("is-open");
}