// Question 1

const bgButton = document.getElementById("bg");

bgButton.onclick = function () {
	document.body.style.background = "green";
};
/* 
	The solution above makes the code in question five unable
	to change the background color to yellow when adding the 
	'highlight' class to the document body.

	I guess this is because the CSS class 'highlight' is 
	unable to override the style set above?

	Because of this I also implemented a second solution in 
	the commented out code below. It changes the background
	color by appending a style tag with a new class to the
	document head. Would this be a ok way to solve the problem?

	When using the commented out solution the color is changed 
	to yellow when the 'highlight' class is added.

	The problem can also be solved by adding !important in CSS file, 
	but i didn`t want to change the CSS file. 
	Is using !impotant like this considered bad practise?
*/

/*function addCSSClass(className, CSS) {
	let style = document.createElement("style");
	style.innerHTML = "." + className + CSS;
	document.head.appendChild(style);
}

const bgButton = document.getElementById("bg");

bgButton.onclick = function () {
	addCSSClass("green", "{ background: green }");
	document.body.classList.add("green");
};*/

// Question 2

const togglerButton = document.querySelector(".toggler");
const togglee = document.querySelector(".togglee");
togglerButton.onclick = function () {
	togglee.classList.toggle("extra");
};

// Question 3

const dropdown = document.querySelector("select");
const pContainer = document.querySelector(".paragraphs-container");

dropdown.onchange = function () {
	// I assumed that innerHTML should be cleared on each change event.
	pContainer.innerHTML = "";
	const selectedValue = this.value;
	for (let i = 1; i <= selectedValue; i++) {
		pContainer.innerHTML += `<p class="content"></p>`;
	}
};

// Question 4

const input = document.querySelector(".input");
const charCount = document.querySelector(".char-count").querySelector("b");
input.addEventListener("keyup", function () {
	charCount.innerText = input.value.length;
});

// Question 5

window.onscroll = function () {
	if (this.scrollY >= 35) {
		document.body.classList.add("highlight");
	} else {
		document.body.classList.remove("highlight");
	}
};
