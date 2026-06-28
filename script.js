document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const section = document.querySelectorAll(".section-content");
    const heroSection = document.querySelector(".hero");
    const stickyNotes = document.querySelector(".sticky-notes");
    const aboutBtn = document.querySelector(".hero .quote .about-btn");

    // Fonction pour cacher toutes les sections (sauf hero et sticky-notes)
    function hideAllSection() {
        section.forEach(sec => {
            sec.classList.add("hidden");
        });

        // Afficher hero et sticky-notes
        if (heroSection) heroSection.style.display = "block";
        if (stickyNotes) stickyNotes.style.display = "flex";
    }

    // Fonction pour afficher une section spécifique
    function showSection(SectionId) {
        // Cacher toutes sections
        section.forEach(sec => {
            sec.classList.add("hidden");
        });

        // Cacher hero et sticky-notes
        if (heroSection) heroSection.style.display = "none";
        if (stickyNotes) stickyNotes.style.display = "none";

        // Afficher la section ciblée
        const targetSection = document.getElementById(SectionId);
        if (targetSection) {
            targetSection.classList.remove("hidden");
        }
    }

    // Gestion du bouton About me
    if (aboutBtn) {
        aboutBtn.addEventListener("click", function(e) {
            e.preventDefault();
            showSection("about");
            
            // Fermer le menu burger sur mobile
            const navLinks = document.querySelector(".nav-links");
            if (navLinks && navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
            }
        });
    }

    // Gestion du bouton Contactez-moi du profil
    const profilContactBtn = document.getElementById("profil-contact-btn");
    if (profilContactBtn) {
        profilContactBtn.addEventListener("click", function(e) {
            e.preventDefault();
            showSection("contact");
        });
    }

    // Gestion des clics sur les liens de navigation
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            showSection(targetId);
            
            // Fermer le menu burger sur mobile
            const navLinks = document.querySelector(".nav-links");
            if (navLinks && navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
            }
        });
    });

    // Réinitialiser l'affichage si on clique sur le logo
    const logo = document.querySelector(".logo");
    if (logo) {
        logo.addEventListener("click", () => {
            hideAllSection();
            const navLinks = document.querySelector(".nav-links");
            if (navLinks && navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
            }
        });
    }

    // Gestion du menu burger
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    if (burger && navLinks) {
        burger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // ===== GESTION DU SELECTEUR DE LANGUES =====
    const langBtns = document.querySelectorAll(".lang-btn");
    let currentLang = 'en'; // Langue par défaut

    // Dictionnaire des traductions
    const translations = {
        fr: {
            // Hero
            heroTitle: "La persévérance n'est pas une longue course ; c'est une succession de petites courses, les unes après les autres.",
            heroSubtitle: "Créer et innover avec une technologie de pointe.",
            heroBtn: "À propos de moi",
            
            // Navigation
            navWork: "Projets",
            navSkills: "Compétences",
            navContact: "Contact",
            
            // About
            introduce: "💬 Présentation",
            aboutTitle: "Dites bonjour à <span>Jean Pierre</span>,<br>Développeur Junior",
            aboutDesc: "Vos idées méritent un site moderne et responsive — construisons-le ensemble.",
            downloadCV: "Voir mon CV",
            
            // Profile Card
            name: "Jean Pierre Adolphe",
            role: "Développeur Junior",
            contactBtn: "Contactez-moi",
            footer: "©2026 AdolFlow. Tous droits réservés.",
            
            // Work
            workTitle: "Mes projets",
            projectName: "Chez Momo's",
            projectDesc: "Site de restauration en ligne",
            viewSite: "Voir le site",
            
            // Skills
            skillsTitle: "Compétences",
            
            // Contact
            contactTitle: "Contact",
            namePlaceholder: "Nom",
            emailPlaceholder: "Email",
            messagePlaceholder: "Message",
            sendBtn: "Envoyer",
            
            // Sticky Notes
            noteLeft: "La technologie est meilleure quand elle rapproche les gens.",
            noteRight: "npm install → Installation réussie !"
        },
        en: {
            // Hero
            heroTitle: "Perseverance is not a long race; it is many small races, one after the other.",
            heroSubtitle: "Creating and innovating with cutting-edge technology.",
            heroBtn: "About me",
            
            // Navigation
            navWork: "Work",
            navSkills: "Skills",
            navContact: "Contact",
            
            // About
            introduce: "💬 Introduce",
            aboutTitle: "Say Hi from <span>Jean Pierre</span>,<br>Junior Developer",
            aboutDesc: "Your ideas deserve a modern, responsive site — let's build it together.",
            downloadCV: "View CV",
            
            // Profile Card
            name: "Jean Pierre Adolphe",
            role: "Junior Developer",
            contactBtn: "Contact me",
            footer: "©2026 AdolFlow. All rights reserved.",
            
            // Work
            workTitle: "My projects",
            projectName: "Chez Momo's",
            projectDesc: "Online restaurant website",
            viewSite: "View site",
            
            // Skills
            skillsTitle: "Skills",
            
            // Contact
            contactTitle: "Contact",
            namePlaceholder: "Name",
            emailPlaceholder: "Email",
            messagePlaceholder: "Message",
            sendBtn: "Send",
            
            // Sticky Notes
            noteLeft: "Technology is best when it brings people together.",
            noteRight: "npm install → Installation successful!"
        }
    };

    // Fonction pour changer la langue
    function changeLanguage(lang) {
        currentLang = lang;
        
        // Mettre à jour les boutons
        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Mettre à jour le contenu
        const t = translations[lang];

        // Hero
        const heroTitle = document.querySelector('.hero .quote h1');
        const heroSubtitle = document.querySelector('.hero .quote p');
        const heroBtn = document.querySelector('.hero .quote .about-btn');
        
        if (heroTitle) heroTitle.innerHTML = t.heroTitle;
        if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;
        if (heroBtn) heroBtn.textContent = t.heroBtn;

        // Navigation
        const navLinksItems = document.querySelectorAll('.nav-links li a');
        if (navLinksItems.length >= 3) {
            navLinksItems[0].textContent = t.navWork;
            navLinksItems[1].textContent = t.navSkills;
            navLinksItems[2].textContent = t.navContact;
        }

        // About - Intro text (vérifier que les éléments existent)
        const introSmall = document.querySelector('.intro-text small');
        const introTitle = document.querySelector('.intro-text h1');
        const introDesc = document.querySelector('.intro-text p');
        const cvBtn = document.querySelector('.cv-btn');
        
        if (introSmall) introSmall.textContent = t.introduce;
        if (introTitle) introTitle.innerHTML = t.aboutTitle;
        if (introDesc) introDesc.textContent = t.aboutDesc;
        if (cvBtn) cvBtn.textContent = t.downloadCV;

        // Profile Card
        const profileName = document.querySelector('.profile-card h2');
        const profileRole = document.querySelector('.profile-card .role');
        const contactBtn = document.querySelector('.contact-btn');
        const footer = document.querySelector('.footer');
        
        if (profileName) profileName.textContent = t.name;
        if (profileRole) profileRole.textContent = t.role;
        if (contactBtn) contactBtn.textContent = t.contactBtn;
        if (footer) footer.textContent = t.footer;

        // Work
        const workTitle = document.querySelector('#work h2');
        const projectName = document.querySelector('.projet-content h3');
        const projectDesc = document.querySelector('.projet-content p');
        const btnProjet = document.querySelector('.btn-projet');
        
        if (workTitle) workTitle.textContent = t.workTitle;
        if (projectName) projectName.textContent = t.projectName;
        if (projectDesc) projectDesc.textContent = t.projectDesc;
        if (btnProjet) btnProjet.innerHTML = `${t.viewSite} <span class="arrow">→</span>`;

        // Skills
        const skillsTitle = document.querySelector('#skills h2');
        if (skillsTitle) skillsTitle.textContent = t.skillsTitle;

        // Contact
        const contactTitle = document.querySelector('#contact h2');
        const nameInput = document.querySelector('#contact input[type="text"]');
        const emailInput = document.querySelector('#contact input[type="email"]');
        const messageTextarea = document.querySelector('#contact textarea');
        const sendBtn = document.querySelector('#contact form button');
        
        if (contactTitle) contactTitle.textContent = t.contactTitle;
        if (nameInput) nameInput.placeholder = t.namePlaceholder;
        if (emailInput) emailInput.placeholder = t.emailPlaceholder;
        if (messageTextarea) messageTextarea.placeholder = t.messagePlaceholder;
        if (sendBtn) sendBtn.textContent = t.sendBtn;

        // Sticky Notes
        const noteLeft = document.querySelector('.note-left');
        const noteRight = document.querySelector('.note-right');
        
        if (noteLeft) noteLeft.textContent = t.noteLeft;
        if (noteRight) noteRight.textContent = t.noteRight;
    }

    // Écouteurs d'événements sur les boutons de langue
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            changeLanguage(lang);
        });
    });

    // Cacher les sections par défaut au chargement
    hideAllSection();
});