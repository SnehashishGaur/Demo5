// JavaScript to handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('responseMessage').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('responseMessage').classList.add('hidden');
    }, 3000);
});
