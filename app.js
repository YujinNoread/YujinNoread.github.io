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

let incrementButtons = document.querySelectorAll(".increment-button");
let decrementButtons = document.querySelectorAll(".decrement-button");
let productsQuantity = document.querySelectorAll(".quantity-input");
function Counter(incrementButton,decrementButton,productsQuantity,minCount=1,maxCount=5){
	this.domRef = {
		incrementButton,
		decrementButton,
		productsQuantity,
	}
	this.toggleButtonsState = function(){
		let count = +this.domRef.productsQuantity.value;
		this.domRef.incrementButton.disabled = count >= maxCount;
		this.domRef.decrementButton.disabled = count <= minCount;
	}	

	this.toggleButtonsState();
	
	this.increment = function(){
		let currentCount = +this.domRef.productsQuantity.value;
		let nextCount = currentCount + 1;
		this.domRef.productsQuantity.value = nextCount;
		this.toggleButtonsState();
	}
	this.decrement = function(){
		let currentCount = +this.domRef.productsQuantity.value;
		let nextCount = currentCount - 1;
		this.domRef.productsQuantity.value = nextCount;
		this.toggleButtonsState();
	}
	this.domRef.incrementButton.addEventListener("click",this.increment.bind(this))
	this.domRef.decrementButton.addEventListener("click",this.decrement.bind(this))

}
let products = [];
productsQuantity.forEach((productsItem,i) => {
	products[i] = new Counter(incrementButtons[i],decrementButtons[i],productsItem);
})
// let products = {};
// for(let i=0;i<productsQuantity.length;i++){
// 	let stock = new Counter(incrementButtons[i],decrementButtons[i],productsQuantity[i]);
// 	stock.toggleButtonsState();
// 	incrementButtons[i].addEventListener("click",function(){
// 		products[i]= new Counter(incrementButtons[i],decrementButtons[i],productsQuantity[i])
// 		products[i].increment();
// 	})
// 	decrementButtons[i].addEventListener("click",function(){
// 		products[i]= new Counter(incrementButtons[i],decrementButtons[i],productsQuantity[i])
// 		products[i].decrement();
// 	})
// }
// let minCount = 1;
// let maxCount = 5;
// for(let i=0;i < productsQuantity.length;i++){
// 	let currentCount = +productsQuantity[i].value;
// 	toggleButtonState(currentCount,decrementButtons[i],incrementButtons[i]);
// }
// function toggleButtonState(count,decrementButton,incrementButton){
// 	decrementButton.disabled = count <= minCount;
// 	incrementButton.disabled = count >= maxCount;
// }
// for(let i=0;i<incrementButtons.length;i++){
// 	incrementButtons[i].addEventListener("click",function(){
// 		let currentCount = +productsQuantity[i].value;
// 		let nextCount = currentCount + 1;
// 		productsQuantity[i].value= nextCount;
// 		toggleButtonState(nextCount,decrementButtons[i],incrementButtons[i]);
// 	})
//  }
//  for(let i=0;i<decrementButtons.length;i++){
// 	decrementButtons[i].addEventListener("click",function(){
// 		let currentCount = +productsQuantity[i].value;
// 		let nextCount = currentCount - 1;
// 		productsQuantity[i].value= nextCount;
// 		toggleButtonState(nextCount,decrementButtons[i],incrementButtons[i]);
// 	})
//  }
/* addToCart */
let productsCount = document.getElementById("product-count");
let addToCartButtons = document.querySelectorAll(".body__add");
for(let i=0;i<addToCartButtons.length;i++){
	addToCartButtons[i].addEventListener("click",function(){
		productsCount.textContent = +productsCount.textContent + +productsQuantity[i].value
	});
}

AOS.init();


// Функции констукторы

// function Car(model,color,year){
// 	this.model = model;
// 	this.color = color;
// 	this.year = year;
// }

// let audi = new Car("A5","silver",2011);
// let mercedes = new Car("190","black",1992);

// console.log(audi);
// console.log(mercedes);

//

// function Calculator(a,b){
// 	this.a = a;
// 	this.b = b;

// 	this.sum = function(){
// 		return this.a + this.b;
// 	}
// 	this.mul = function(){
// 		return this.a * this.b;
// 	}
// }

// let calc1 = new Calculator(2,15)

// console.log(calc1.sum())
// console.log(calc1.mul())

// 

// function hi(surname){
// 	console.log(this)
// 	console.log(this.name+surname)
// }
// let user = {
// 	name: "Ivan",
// }

// hi.call(user,"test");
// hi.apply(user,["test111"]);

// let test = hi.bind(user,"Bush")
// test()

// Прототипы

// animals = {
// 	eats: true,
// }
// rabbit = {
// 	jumps: true,
// }
// rabbit.__proto__=animals;
// console.log(rabbit.jumps)
// console.log(rabbit.eats)

