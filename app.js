let productsCount = document.getElementById("product-count");
let addToCartButtons = document.querySelectorAll(".body__add");
for(let i=0;i<addToCartButtons.length;i++){
	addToCartButtons[i].addEventListener("click",function(){
		productsCount.textContent = +productsCount.textContent + 1
	});
}
/* */
let likeButtons = document.querySelectorAll(".image__like");
for(let j=0;j<likeButtons.length;j++){
	likeButtons[j].addEventListener("click",function(){
		if(likeButtons[j].classList.contains('liked')){
			likeButtons[j].classList.remove('liked');
		}else{
			likeButtons[j].classList.add('liked');
		}
	});
}