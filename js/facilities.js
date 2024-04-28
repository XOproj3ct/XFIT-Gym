document.addEventListener('DOMContentLoaded', function() {
    var mediaQuery = window.matchMedia("(max-width: 768px)");

    if (mediaQuery.matches) {
        return;
    }

    ScrollReveal().reveal('.main-title', {
        reset: true,
        distance: '60px',
        duration: 2500,
        delay: 300,
        origin: 'left'
    });

    ScrollReveal().reveal('.second-section .image', {
        reset: true,
        distance: '60px',
        duration: 2500,
        delay: 500,
        origin: 'bottom'
    });

    ScrollReveal().reveal('.second-section .text-box', {
        reset: true,
        distance: '60px',
        duration: 2500,
        delay: 500,
        origin: 'right'
    });
});

function searchFunction() {
    var input = document.getElementById('search-input');
    var filter = input.value.toLowerCase();
    var nodes = document.querySelectorAll('[data-search-tag]');
    var resultsContainer = document.getElementById('search-results');

    resultsContainer.innerHTML = ''; // Clear previous results

    if (filter.length < 3) {
        resultsContainer.innerHTML = '<p>Please enter more characters to search. e.g., Pool, Cardio, Weight, Locker... </p>';
        return; // Require at least 3 characters to search
    }

    var results = [];
    nodes.forEach(function(node) {
        if (node.textContent.toLowerCase().includes(filter)) {
            results.push(node);
        }
    });

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    } else {
        var ul = document.createElement('ul');
        results.forEach(function(result) {
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.textContent = result.textContent;
            a.href = '#';
            a.addEventListener('click', function(e) {
                e.preventDefault();
                result.scrollIntoView({ behavior: 'smooth' });
            });
            li.appendChild(a);
            ul.appendChild(li);
        });
        resultsContainer.appendChild(ul);
    }
}
