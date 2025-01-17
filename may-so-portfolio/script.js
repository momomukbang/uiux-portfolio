// Initialize Particles.js with larger, slower particles
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,  // Reduced number for better performance with larger particles
            density: {
                enable: true,
                value_area: 1000
            }
        },
        color: {
            value: ["#FFB6C1", "#FFFFFF", "#FFA500"]  // Light pink, White, Orange
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.6,
            random: true,
            anim: {
                enable: true,
                speed: 0.3,  // Slower fade animation
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,  // Doubled particle size
            random: true,
            anim: {
                enable: true,
                speed: 0.8,  // Slower size animation
                size_min: 0.5,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#FFFFFF",
            opacity: 0.2,
            width: 1.5  // Slightly thicker lines
        },
        move: {
            enable: true,
            speed: 0.4,  // Slower movement
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 180,  // Increased interaction distance
                line_linked: {
                    opacity: 0.3
                }
            },
            push: {
                particles_nb: 3
            }
        }
    },
    retina_detect: true
});

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Project card click handlers
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });

    // Close modal when clicking outside
    document.addEventListener('click', (e) => {
        const modal = document.querySelector('.modal');
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});

// Project Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    const modals = document.querySelectorAll('.project-modal');
    const closeButtons = document.querySelectorAll('.modal-close');

    // Open modal when project card is clicked
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.dataset.project;
            const modal = document.getElementById(`modal-${projectId}`);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal when close button is clicked
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.project-modal');
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close modal when clicking outside content
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Close modal with escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
    });
});

// Project Card Expandable Functionality
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            // Close other expanded cards
            projectCards.forEach(otherCard => {
                if (otherCard !== card && otherCard.classList.contains('expanded')) {
                    otherCard.classList.remove('expanded');
                }
            });
            
            // Toggle current card
            card.classList.toggle('expanded');
            
            // Scroll expanded card into view if it's not fully visible
            if (card.classList.contains('expanded')) {
                const cardRect = card.getBoundingClientRect();
                const isFullyVisible = (
                    cardRect.top >= 0 &&
                    cardRect.bottom <= window.innerHeight
                );
                
                if (!isFullyVisible) {
                    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            }
        });
    });
});

function openProjectModal(projectId) {
    // Get project data and populate modal
    const projectData = getProjectData(projectId);
    if (!projectData) return;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-header">
                <h2 class="modal-title">${projectData.title}</h2>
                <p>${projectData.description}</p>
            </div>
            <img src="${projectData.image}" alt="${projectData.title}" class="modal-image">
            <div class="modal-body">
                ${projectData.content}
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Add close button functionality
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', closeModal);

    // Fade in animation
    setTimeout(() => modal.style.opacity = '1', 10);
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = '';
        }, 300);
    }
}

function getProjectData(projectId) {
    // Project data object
    const projects = {
        vosyn: {
            title: 'Vosyn Voice AI',
            description: 'A cutting-edge voice AI platform with advanced video and audio processing capabilities.',
            image: 'images/vosyn-mockup.png',
            content: `
                <h3>Overview</h3>
                <p>Led the design of Vosyn's flagship voice AI platform, creating an intuitive interface for complex audio-visual processing tasks.</p>
                
                <h3>Challenge</h3>
                <p>Create a user-friendly interface for advanced AI-powered voice and video manipulation tools, making them accessible to both professionals and casual users.</p>
                
                <h3>Solution</h3>
                <p>Developed a clean, modern interface with progressive disclosure of advanced features, ensuring users of all skill levels could effectively use the platform.</p>
            `
        },
        'td-student': {
            title: 'TD Student Hub',
            description: 'Redesigned TD Bank's student banking experience with a focus on financial education.',
            image: 'images/td-student-hub.png',
            content: `
                <h3>Overview</h3>
                <p>Led the redesign of TD Bank's student banking platform to make financial services more accessible and educational for students.</p>
                
                <h3>Challenge</h3>
                <p>Create an engaging mobile banking experience that helps students manage their finances while learning about financial literacy.</p>
                
                <h3>Solution</h3>
                <p>Developed an intuitive mobile app with integrated financial education tools, personalized insights, and gamified learning experiences.</p>
            `
        },
        // Add other project data here
    };

    return projects[projectId];
}

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value
            };
            
            // Here you would typically send the form data to your server
            // For now, we'll just log it and show a success message
            console.log('Form submitted:', formData);
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'form-success show';
            successMessage.textContent = 'Thank you for your message! I will get back to you soon.';
            
            // Insert success message before the form
            contactForm.insertBefore(successMessage, contactForm.firstChild);
            
            // Clear form
            contactForm.reset();
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        });
    }
});
