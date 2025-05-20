// Example: Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = '🌙 Dark Mode';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.bottom = '20px';
darkModeToggle.style.right = '20px';
darkModeToggle.style.padding = '0.5rem';
darkModeToggle.style.borderRadius = '5px';
darkModeToggle.style.border = 'none';
darkModeToggle.style.cursor = 'pointer';

document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') 
        ? '☀️ Light Mode' 
        : '🌙 Dark Mode';
});