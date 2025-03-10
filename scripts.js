document.addEventListener("DOMContentLoaded", function() {
    // Button to show hobbies in an alert
    const button = document.createElement('button');
    button.textContent = 'Show Hobbies';
    document.querySelector('section#home').appendChild(button);

    button.addEventListener('click', function() {
        alert('My hobbies include playing games, watching streamers, learning new stuff, and making things hard for myself!');
    });
});
