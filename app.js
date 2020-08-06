/* addToCart */
let productsCount = document.getElementById("product-count");
let addToCartButtons = document.querySelectorAll(".body__add");
for(let i=0;i<addToCartButtons.length;i++){
	addToCartButtons[i].addEventListener("click",function(){
		productsCount.textContent = +productsCount.textContent + 1
	});
}

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



