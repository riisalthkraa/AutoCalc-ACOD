/**
 * AutoCalc OptiDevis - Site Web Moderne
 * JavaScript Principal
 */

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Fermer le menu quand on clique sur un lien
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });

        // Fermer le menu si on clique en dehors
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
    }
});

// Navigation scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Smooth scroll pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation des éléments au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer les éléments avec animation
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.feature-card, .glass-card, .price-card, .template-card, .changelog-section');
    elementsToAnimate.forEach(el => observer.observe(el));
});

// Mobile menu toggle (si nécessaire pour versions mobiles)
const createMobileMenu = () => {
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.createElement('button');
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '<span></span><span></span><span></span>';
    navToggle.setAttribute('aria-label', 'Toggle navigation');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    return navToggle;
};

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    // Stats counter animation (pour les chiffres qui s'incrémentent)
    const animateCounter = (element, target, duration = 2000) => {
        const start = 0;
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const current = Math.floor(progress * target);
            element.textContent = current;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };

        requestAnimationFrame(updateCounter);
    };

    // Observer pour les stats
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                if (!isNaN(target)) {
                    animateCounter(entry.target, target);
                    entry.target.classList.add('counted');
                }
            }
        });
    }, { threshold: 0.5 });

    // Appliquer l'animation aux éléments avec data-target
    document.querySelectorAll('[data-target]').forEach(el => {
        statsObserver.observe(el);
    });

    // Message de console (Easter egg)
    console.log('%cAutoCalc OptiDevis', 'font-size: 20px; font-weight: bold; color: #667eea;');
    console.log('%cDéveloppé par David VIEY', 'font-size: 12px; color: #64748b;');
    console.log('%c🚀 v3.2.0 - Octobre 2025', 'font-size: 12px; color: #10b981;');
});

// Gestion des formulaires (si présents)
const handleFormSubmit = (formId, callback) => {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            callback(formData);
        });
    }
};

// Fonction pour créer une notification toast
const showToast = (message, type = 'info') => {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
};

// Animations CSS dynamiques
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }

    .nav-toggle {
        display: none;
        flex-direction: column;
        gap: 4px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
    }

    .nav-toggle span {
        width: 24px;
        height: 2px;
        background: var(--dark);
        transition: var(--transition-fast);
    }

    .nav-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translateY(6px);
    }

    .nav-toggle.active span:nth-child(2) {
        opacity: 0;
    }

    .nav-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translateY(-6px);
    }

    @media (max-width: 992px) {
        .nav-toggle {
            display: flex;
        }

        .nav-menu {
            position: fixed;
            top: 80px;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 2rem;
            box-shadow: var(--shadow-xl);
            transform: translateY(-100%);
            opacity: 0;
            transition: var(--transition-normal);
            pointer-events: none;
        }

        .nav-menu.active {
            transform: translateY(0);
            opacity: 1;
            pointer-events: all;
        }
    }
`;
document.head.appendChild(style);

// Gestion du copier-coller de code
document.querySelectorAll('code').forEach(codeBlock => {
    codeBlock.addEventListener('click', () => {
        navigator.clipboard.writeText(codeBlock.textContent);
        showToast('Code copié !', 'success');
    });
});

// Export des fonctions utiles
window.AutoCalc = {
    showToast,
    handleFormSubmit
};
