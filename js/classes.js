    const normal = document.getElementById("normal-cb");
    const superman = document.getElementById('superman-cb');
    const hulk = document.getElementById('hulk-cb');
    const timeTables = document.querySelectorAll('.class-timetable')
    
    function removeAll(){
    timeTables.forEach((e)=>{
        e.classList.remove('show-timetable');
    });
}


normal.addEventListener('change', () => {
    removeAll()
    timeTables[0].classList.add('show-timetable')
});
superman.addEventListener('change', () => {
    removeAll()
    timeTables[1].classList.toggle('show-timetable')
});
hulk.addEventListener('change', () => {
    removeAll()
    timeTables[2].classList.toggle('show-timetable')
});

//======== Search/additional classes
const additionalClasses= document.querySelectorAll('.additional-classes .class')
const searchBar = document.querySelector('.search-bar')
const searchBtn = document.querySelector('.search-btn')
const notFoundText = document.querySelector('.not-found')

function removeNotFound(){
    notFoundText.classList.remove("show-not-found")
}
// this send the input to the localstorage
function searchTextToLocalStorage(){
    window.localStorage.setItem("search-sport",searchBar.value)
}
// get the inputted value from localstorage and search with it
function getSearchFromLocalStorage(){
    searchBar.value = window.localStorage.getItem("search-sport")
    searchBtn.click()
}


// Search with keyboard
searchBar.addEventListener('keyup',(e)=>{
    // If the user deliberately deleted the input
    if(e.target.value == ''){
        // If not found was displayed remove it
        removeNotFound()
        additionalClasses.forEach(e=>{
            e.style.display = 'block';
        })
    }
    
    // If Enter btn is pressed -> search
    if(e.key == 'Enter'){
        searchBtn.click();
    }
    searchTextToLocalStorage();
})

// Search with "search button"
searchBtn.addEventListener('click',()=>{
    // If not found was displayed remove it
    removeNotFound()
    
    // == logic == 
	let inputtedSport = searchBar.value.toLowerCase().trim();
    // if [x btn] is pressed then [searchBtn]
	if(inputtedSport === ''){
        additionalClasses.forEach(e=>{
            e.style.display = 'block';
        })
        return;
    }
    
    // Search 
    let found = 0;
	additionalClasses.forEach((targetClass) =>{
        if(targetClass.classList[1].includes(inputtedSport)){
            targetClass.style.display = 'block';
		    found = 1;
		}else{
            targetClass.style.display = 'none';
		}
	});
    
    if(!found){
        notFoundText.classList.add("show-not-found")
    }
    
})

getSearchFromLocalStorage()
