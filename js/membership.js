// Storing data
localStorage.setItem('key', 'value');

// Retrieving data
var value = localStorage.getItem('key');


function darkMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Dark Mode is ON";
}
function lightMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Dark Mode is OFF";
}

// Dark mode Done

// Now the search box

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

const data = [
    { name: 'Younis Tarek', age: 20, city: 'Giza', phoneNumber: '01027631469' },
    { name: 'Ahmed Sayed', age: 19, city: 'Cairo', phoneNumber: '01007785047' },
    { name: 'Ahmed Tharwat', age: 19, city: 'Giza', phoneNumber: '01126346286' },
    { name: 'Ahmed Magdy', age: 19, city: 'Giza', phoneNumber: '01143196324' },
    { name: 'Ahmed', age: 19, city: 'BeniSwif', phoneNumber: '01274392996' },
    { name: 'Adam Fikry', age: 19, city: 'Giza', phoneNumber: '01095002257' },
    { name: 'Ahmed Talaat', age: 19, city: 'Giza', phoneNumber: '01018026445' },
  ];
  
  function filterData(searchTerm) {
    return data.filter(item => {
      return Object.values(item).some(value =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }
  
  function displayResults(results) {
    const tableHeaders = '<tr><th>Name</th><th>Age</th><th>City</th><th>Phone Number</th></tr>';
    let tableRows = '';
  
    results.forEach(item => {
      tableRows += `<tr><td>${item.name}</td><td>${item.age}</td><td>${item.city}</td><td>${item.phoneNumber}</td></tr>`;
    });
  
    searchResults.innerHTML = tableHeaders + tableRows;
  }
  
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.trim();
  const filteredData = filterData(searchTerm);

  displayResults(filteredData);
});

displayResults(data);
