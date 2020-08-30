/* liked */

let likeButtons = document.querySelectorAll(".image__like");
for(let j=0;j<likeButtons.length;j++){
	likeButtons[j].addEventListener("click",function(){
		this.classList.toggle('liked')
	});
}

/* slider*/

$('.slider-block').slick({
	dots:true,
});

/* More details */

let moreDetailsButtons = document.querySelectorAll(".body__details");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close-btn");

function openModal(){
	modal.classList.add("show");
	modal.classList.remove("hide");
}

function closeModal(){
	modal.classList.remove("show");
	modal.classList.add("hide");
}

moreDetailsButtons.forEach(function(btn){
	btn.addEventListener("click", openModal)
});

closeBtn.addEventListener("click",closeModal);

modal.addEventListener("click", function(event){
	if(event.target === modal){
		closeModal();
	}
})

// Modal > 50%

function showModalByScroll (){
	if(window.pageYOffset > (document.documentElement.scrollHeight/2)){
		openModal();
		removeEventListener('scroll', showModalByScroll);
	}
}
window.addEventListener('scroll', showModalByScroll);

// Quantity

let btnIncrement = document.querySelectorAll(".increment-button");
let btnDecrement = document.querySelectorAll(".decrement-button");
let productsQuantity = document.querySelectorAll(".quantity-input");
function toggleDecrementState(count,number){
	if(count<=1){
	btnDecrement[number].disabled=true;
	}else{
	btnDecrement[number].disabled=false;
	}
}
function toggleIncrementState(count,number){
	if(count>=5){
	btnIncrement[number].disabled=true;
	}else{
	btnIncrement[number].disabled=false;
	}
}
for(let i=0;i<btnDecrement.length;i++){
	let currentCount = productsQuantity[i].value;
	toggleDecrementState(currentCount,i);
	toggleIncrementState(currentCount,i);
}
for(let i=0;i<btnIncrement.length;i++){
	btnIncrement[i].addEventListener("click",function(){
		let currentCount = +productsQuantity[i].value;
		let nextCount = currentCount + 1;
		productsQuantity[i].value= nextCount;
		toggleDecrementState(nextCount,i);
		toggleIncrementState(nextCount,i);
	})
 }
 for(let i=0;i<btnDecrement.length;i++){
	btnDecrement[i].addEventListener("click",function(){
		let currentCount = +productsQuantity[i].value;
		let nextCount = currentCount - 1;
		productsQuantity[i].value= nextCount;
		toggleIncrementState(nextCount,i);
		toggleDecrementState(nextCount,i);
	})
 }
/* addToCart */
let productsCount = document.getElementById("product-count");
let addToCartButtons = document.querySelectorAll(".body__add");
for(let i=0;i<addToCartButtons.length;i++){
	addToCartButtons[i].addEventListener("click",function(){
		productsCount.textContent = +productsCount.textContent + +productsQuantity[i].value
	});
}

AOS.init();
