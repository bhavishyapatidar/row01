// Simple console log to verify the script is linked correctly
console.log('JavaScript is connected and running.');

// Example: Scroll to sections smoothly when clicking on nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Toggle dark mode
const toggleDarkModeBtn = document.createElement('button');
toggleDarkModeBtn.textContent = 'Toggle Dark Mode';
toggleDarkModeBtn.style.position = 'fixed';
toggleDarkModeBtn.style.bottom = '20px';
toggleDarkModeBtn.style.right = '20px';
toggleDarkModeBtn.style.padding = '10px 20px';
toggleDarkModeBtn.style.background = '#0073e6';
toggleDarkModeBtn.style.color = '#fff';
toggleDarkModeBtn.style.border = 'none';
toggleDarkModeBtn.style.borderRadius = '5px';
toggleDarkModeBtn.style.cursor = 'pointer';
document.body.appendChild(toggleDarkModeBtn);

toggleDarkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

const addDarkModeStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        body.dark-mode {
            background-color: #333;
            color: #f4f4f4;
        }
        body.dark-mode header, 
        body.dark-mode footer, 
        body.dark-mode nav a {
            background-color: #1a1a1a;
            color: #f4f4f4;
        }
        body.dark-mode .card {
            background-color: #444;
            border-color: #666;
        }
    `;
    document.head.appendChild(style);
};
addDarkModeStyles();

// Example: Load more content
const loadMoreBtn = document.createElement('button');
loadMoreBtn.textContent = 'Load More Services';
loadMoreBtn.style.display = 'block';
loadMoreBtn.style.margin = '20px auto';
loadMoreBtn.style.padding = '10px 20px';
loadMoreBtn.style.background = '#0073e6';
loadMoreBtn.style.color = '#fff';
loadMoreBtn.style.border = 'none';
loadMoreBtn.style.borderRadius = '5px';
loadMoreBtn.style.cursor = 'pointer';
document.querySelector('.content').appendChild(loadMoreBtn);

loadMoreBtn.addEventListener('click', () => {
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.innerHTML = `
        <img src="cloud-service5.jpg" alt="Cloud Service 5">
        <h3>Service 5</h3>
        <p>Description of the cloud service 5 and its features.</p>
    `;
    document.querySelector('.content').appendChild(newCard);
});