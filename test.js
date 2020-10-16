const divBox = document.querySelector('.box');
const btns = document.querySelectorAll('.btn');



for (const btn of btns) {
    console.log("je suis dans le for of");
    btn.addEventListener('click', (e) => {   
		const textBtn = e.target.textContent;
		if (textBtn === "Change color green") {
			divBox.style.backgroundColor = "#39FF00";
		}
		else if (textBtn === "Change color red") {
			divBox.style.backgroundColor = "#ff0000";
		}
});
}

/*    divBox.classList.toggle('color');*/