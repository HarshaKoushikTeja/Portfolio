/* =============================================
   HARSHA KOUSHIK TEJA — Portfolio JavaScript
   ============================================= */

'use strict';

// ===== PAGE LOADER =====
(function () {
    document.body.classList.add('loading');
    const loader = document.getElementById('page-loader');
    const progress = document.getElementById('loader-progress');
    const loaderText = document.getElementById('loader-text');

    const messages = [
        'Initializing...',
        'Loading modules...',
        'Compiling assets...',
        'Running pipelines...',
        'Calibrating 3D...',
        'Ready!'
    ];

    let pct = 0;
    let msgIdx = 0;
    const interval = setInterval(() => {
        pct += Math.random() * 15 + 5;
        if (pct > 100) pct = 100;
        progress.style.width = pct + '%';
        const newIdx = Math.floor((pct / 100) * messages.length);
        if (newIdx !== msgIdx && newIdx < messages.length) {
            msgIdx = newIdx;
            loaderText.textContent = messages[msgIdx];
        }
        if (pct >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                loader.classList.add('hidden');
                document.body.classList.remove('loading');
                initAll();
            }, 400);
        }
    }, 80);
})();

function initAll() {
    initCustomCursor();
    initNavbar();
    initThemeToggle();
    initHamburger();
    initTypedText();
    initParticles();
    initLaptop3D();
    initScrollAnimations();
    initCounters();
    initSkillBars();
    initProjectFilter();
    initKeyboard();
    initContactForm();
    initSmoothLinks();
}

// ===== CUSTOM CURSOR =====
function initCustomCursor() {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    if (!cursor || !follower) return;

    let mx = 0, my = 0;
    let fx = 0, fy = 0;

    document.addEventListener('mousemove', e => {
        mx = e.clientX;
        my = e.clientY;
        cursor.style.left = mx + 'px';
        cursor.style.top = my + 'px';
    });

    const interactives = document.querySelectorAll('a, button, .project-card, .skill-tag, .filter-btn');
    interactives.forEach(el => {
        el.addEventListener('mouseenter', () => follower.classList.add('hovering'));
        el.addEventListener('mouseleave', () => follower.classList.remove('hovering'));
    });

    function animateFollower() {
        fx += (mx - fx) * 0.12;
        fy += (my - fy) * 0.12;
        follower.style.left = fx + 'px';
        follower.style.top = fy + 'px';
        requestAnimationFrame(animateFollower);
    }
    animateFollower();
}

// ===== NAVBAR =====
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
        updateActiveNav();
    });

    updateActiveNav();
}

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-link');
    let current = '';

    sections.forEach(sec => {
        const top = sec.offsetTop - 120;
        if (window.scrollY >= top) current = sec.getAttribute('id');
    });

    links.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === current) link.classList.add('active');
    });
}

// ===== THEME TOGGLE =====
function initThemeToggle() {
    const btn = document.getElementById('theme-toggle');
    const html = document.documentElement;
    if (!btn) return;

    const saved = localStorage.getItem('portfolio-theme') || 'dark';
    html.setAttribute('data-theme', saved);

    btn.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('portfolio-theme', next);
    });
}

// ===== HAMBURGER =====
function initHamburger() {
    const ham = document.getElementById('hamburger');
    const links = document.getElementById('nav-links');
    if (!ham || !links) return;

    ham.addEventListener('click', () => {
        ham.classList.toggle('open');
        links.classList.toggle('open');
    });

    links.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            ham.classList.remove('open');
            links.classList.remove('open');
        });
    });
}

// ===== TYPED TEXT =====
function initTypedText() {
    const el = document.getElementById('typed-text');
    if (!el) return;

    const phrases = [
        'ML Engineer & Data Scientist',
        'Full-Stack Developer',
        'React & Python Developer',
        'Computer Vision Enthusiast',
        'ASU MS Computing Student'
    ];

    let phraseIdx = 0, charIdx = 0, deleting = false;

    function type() {
        const currentPhrase = phrases[phraseIdx];
        if (deleting) {
            el.textContent = currentPhrase.substring(0, charIdx - 1);
            charIdx--;
        } else {
            el.textContent = currentPhrase.substring(0, charIdx + 1);
            charIdx++;
        }

        let delay = deleting ? 60 : 100;

        if (!deleting && charIdx === currentPhrase.length) {
            delay = 2000;
            deleting = true;
        } else if (deleting && charIdx === 0) {
            deleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length;
            delay = 400;
        }

        setTimeout(type, delay);
    }

    type();
}

// ===== PARTICLES =====
function initParticles() {
    const container = document.getElementById('hero-particles');
    if (!container) return;

    const count = 30;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 3 + 1;
        p.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${Math.random() * 100}%;
            bottom: -10px;
            animation-duration: ${Math.random() * 10 + 8}s;
            animation-delay: ${Math.random() * 8}s;
            opacity: ${Math.random() * 0.5 + 0.1};
        `;
        container.appendChild(p);
    }
}

// ===== 3D LAPTOP =====
function initLaptop3D() {
    const scene = document.getElementById('laptop-scene');
    const container = document.getElementById('hero-3d');
    if (!scene || !container) return;

    let targetRotX = 0, targetRotY = 0;
    let currentRotX = 0, currentRotY = 0;

    // Mouse tracking
    document.addEventListener('mousemove', e => {
        const rect = container.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / (window.innerWidth / 2);
        const dy = (e.clientY - cy) / (window.innerHeight / 2);
        targetRotY = dx * 20;
        targetRotX = -dy * 15;
    });

    // Scroll-based rotation
    let scrollRotation = 0;
    window.addEventListener('scroll', () => {
        const heroHeight = document.getElementById('home').offsetHeight;
        const scrollPct = Math.min(window.scrollY / heroHeight, 1);
        scrollRotation = scrollPct * 360;
    });

    function animateLaptop() {
        currentRotX += (targetRotX - currentRotX) * 0.08;
        currentRotY += (targetRotY - currentRotY) * 0.08;
        scene.style.transform = `
            rotateX(${currentRotX}deg)
            rotateY(${currentRotY}deg)
        `;
        const laptop = scene.querySelector('.laptop-outer');
        if (laptop) {
            laptop.style.transform = `rotateY(${scrollRotation * 0.1}deg)`;
        }
        requestAnimationFrame(animateLaptop);
    }

    animateLaptop();
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.classList.contains('skill-category')) {
                    const delay = parseInt(entry.target.dataset.delay || 0);
                    entry.target.style.transitionDelay = delay + 'ms';
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.skill-category, .project-card, .timeline-card, .about-card, .about-education').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    // Skill bars observer
    const barObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.sb-fill').forEach(bar => {
                    const w = bar.dataset.width;
                    setTimeout(() => {
                        bar.style.width = w + '%';
                    }, 200);
                });
                barObserver.disconnect();
            }
        });
    }, { threshold: 0.3 });

    const barsContainer = document.querySelector('.skill-bars-container');
    if (barsContainer) barObserver.observe(barsContainer);
}

// ===== COUNTER ANIMATIONS =====
function initCounters() {
    const counters = document.querySelectorAll('.stat-num');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                let current = 0;
                const step = target / 40;
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    el.textContent = Math.floor(current) + (target > 10 ? '+' : '');
                }, 40);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
}

// ===== SKILL BARS =====
function initSkillBars() {
    // Bars are triggered by scroll observer already
}

// ===== PROJECT FILTER =====
function initProjectFilter() {
    const btns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');
    if (!btns.length) return;

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            cards.forEach(card => {
                const cat = card.dataset.category;
                if (filter === 'all' || cat === filter) {
                    card.style.display = '';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 400);
                }
            });
        });
    });
}

// ===== KEYBOARD GENERATION =====
function initKeyboard() {
    const rows = [
        { id: 'kb-row-1', keys: 12, wides: [0, 11] },
        { id: 'kb-row-2', keys: 11, wides: [0] },
        { id: 'kb-row-3', keys: 10, wides: [0, 9] },
        { id: 'kb-row-4', keys: 8, wides: [3] }
    ];

    rows.forEach((row, ri) => {
        const container = document.getElementById(row.id);
        if (!container) return;
        for (let i = 0; i < row.keys; i++) {
            const key = document.createElement('div');
            key.className = 'key';
            if (row.id === 'kb-row-4' && i === 3) key.classList.add('spacebar');
            else if (row.wides.includes(i)) key.classList.add('wide');
            key.style.animationDelay = (ri * 0.2 + i * 0.05) + 's';
            container.appendChild(key);
        }
    });
}

// ===== CONTACT FORM (Web3Forms) =====
function initContactForm() {
    const form = document.getElementById('contact-form');
    const result = document.getElementById('form-result');
    const btn = document.getElementById('submit-btn');
    const btnText = btn?.querySelector('.btn-text');
    const btnLoading = btn?.querySelector('.btn-loading');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (btn) btn.disabled = true;
        if (btnText) btnText.style.display = 'none';
        if (btnLoading) btnLoading.style.display = 'inline';

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(data)
            });
            const json = await response.json();

            if (json.success) {
                showFormResult('success', '🎉 Message sent! I\'ll get back to you soon.');
                form.reset();
            } else {
                showFormResult('error', '⚠️ Failed to send. Please try emailing me directly.');
            }
        } catch (err) {
            showFormResult('error', '⚠️ Network error. Please email me at haila1@asu.edu');
        } finally {
            if (btn) btn.disabled = false;
            if (btnText) btnText.style.display = 'inline';
            if (btnLoading) btnLoading.style.display = 'none';
        }
    });

    function showFormResult(type, message) {
        if (!result) return;
        result.className = 'form-result ' + type;
        result.textContent = message;
        result.style.display = 'block';
        setTimeout(() => {
            result.style.display = 'none';
        }, 6000);
    }
}

// ===== SMOOTH SCROLL =====
function initSmoothLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const target = document.querySelector(a.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ===== Liquid Glass Tilt Effect on Project Cards =====
document.addEventListener('DOMContentLoaded', () => {
    // Tilt effect
    document.querySelectorAll('.project-card, .skill-category').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const cx = rect.width / 2;
            const cy = rect.height / 2;
            const rotX = -(y - cy) / cy * 8;
            const rotY = (x - cx) / cx * 8;
            card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
});
