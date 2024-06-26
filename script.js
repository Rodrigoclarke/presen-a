document.addEventListener('DOMContentLoaded', function () {
    // Add interactive functionality
    const profilePic = document.getElementById('profile-pic');

    profilePic.addEventListener('click', function () {
        alert('Profile Picture Clicked!');
    });

    const contactButtons = document.querySelectorAll('.contact-buttons a');
    
    contactButtons.forEach(button => {
        button.addEventListener('mouseover', function () {
            button.style.transform = 'scale(1.1)';
        });

        button.addEventListener('mouseout', function () {
            button.style.transform = 'scale(1)';
        });
    });
});
