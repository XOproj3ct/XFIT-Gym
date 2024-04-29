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
