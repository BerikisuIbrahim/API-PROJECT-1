const setupElement = document.getElementById('setup');
const deliveryElement = document.getElementById('delivery');
const newJokeBtn = document.getElementById('new-joke-btn');
const categoryElement = document.getElementById('category')

async function fetchJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode');
        const data = await response.json();
        
        if (data.type === 'single') {
            setupElement.textContent = data.joke;
            deliveryElement.textContent = '';
            categoryElement.textContent = '';
        } else {
            setupElement.textContent = data.setup;
            deliveryElement.textContent = data.delivery;
            categoryElement.textContent = data.category;
        }
    } catch (error) {
        console.error('Error fetching joke:', error);
        setupElement.textContent = 'Oops! Failed to fetch a joke. Please try again.';
        deliveryElement.textContent = '';
        categoryElement.textContent = '';
    }
}

newJokeBtn.addEventListener('click', fetchJoke);

// Fetch a joke when the page loads
// fetchJoke();