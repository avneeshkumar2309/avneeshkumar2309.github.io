// Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Theme Toggle Logic
        const themeToggle = document.getElementById('themeToggle');
        const htmlElement = document.documentElement;
        const toggleIcon = themeToggle.querySelector('i');

        themeToggle.addEventListener('click', () => {
            if (htmlElement.getAttribute('data-theme') === 'light') {
                htmlElement.setAttribute('data-theme', 'dark');
                htmlElement.classList.add('dark');
                toggleIcon.classList.remove('fa-moon');
                toggleIcon.classList.add('fa-sun');
            } else {
                htmlElement.setAttribute('data-theme', 'light');
                htmlElement.classList.remove('dark');
                toggleIcon.classList.remove('fa-sun');
                toggleIcon.classList.add('fa-moon');
            }
        });

        // Scroll Reveal Animations via Intersection Observer
        const revealElements = document.querySelectorAll('.reveal:not(.active)');

        const revealOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealOnScroll = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, revealOptions);

        revealElements.forEach(el => {
            revealOnScroll.observe(el);
        });

        // Rotating role text in hero header
        const roles = ["software engineer", "UI/UX designer", "AIML enthusiast"];
        const roleText = document.getElementById("roleText");

        if (roleText) {
            let roleIndex = 0;
            const updateRole = () => {
                roleText.style.opacity = '0';
                setTimeout(() => {
                    roleText.textContent = roles[roleIndex];
                    roleIndex = (roleIndex + 1) % roles.length;
                    roleText.style.opacity = '1';
                }, 350);
            };

            updateRole();
            setInterval(updateRole, 3300);
        }