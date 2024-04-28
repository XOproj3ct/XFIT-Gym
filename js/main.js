// =======Text writter==============
const typedSpan = document.getElementById("typed")
const totype = ["Believe", "Achieve", "Succeed"]
const delayTyping_char = 150;
const delayErasing_text = 100;
const delayTyping_text = 1000;
let totypeIndex = 0;
let charIndex = 0;
function typeText() {
	if (charIndex < totype[totypeIndex].length) {
		typedSpan.textContent += totype[totypeIndex].charAt(charIndex);
		charIndex++;
		setTimeout(typeText, delayTyping_char);
	}
	else {
		setTimeout(eraseText, delayTyping_text);
	}
}
function eraseText() {
	if (charIndex > 0) {
		typedSpan.textContent = totype[totypeIndex].substring(0, charIndex-1);
		charIndex = charIndex-1;
		setTimeout(eraseText, delayErasing_text);
	}
	else {
		totypeIndex++;

		if (totypeIndex >= totype.length)
			totypeIndex = 0;
			setTimeout(typeText, delayTyping_text);
	}
}

window.onload = function() {
	if (totype[totypeIndex].length) setTimeout(typeText, delayTyping_text);
}

// ===================== Search bar
const eventTitles = document.querySelectorAll('#events h2')
const eventSearchBar = document.getElementById('event-search')

eventSearchBar.addEventListener('keyup',e=>{
	let input = e.target.value.toLowerCase().trim();
	
	eventTitles.forEach(target => {
		if(target.textContent.toLowerCase().includes(input)){
			// target.parentElement.parentElement.style.display = 'flex';
			target.parentElement.parentElement.style.opacity = '100%';
		}else{
			// target.parentElement.parentElement.style.display = 'none';
			target.parentElement.parentElement.style.opacity = '10%';
		}
		
	});
})
