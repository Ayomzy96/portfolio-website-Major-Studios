class CustomNavbar extends HTMLElement {
  connectedCallback() {
    // Render markup into the light DOM so Tailwind (global CSS) applies
    this.innerHTML = `
      <style>
        .navbar { transition: all 0.3s ease; }
        .navbar-scrolled { background-color: rgba(15, 23, 42, 0.95); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
        .nav-link { position: relative; }
        .nav-link:after { content: ''; position: absolute; width: 0; height: 2px; bottom: -2px; left: 0; background-color: #3B82F6; transition: width 0.3s ease; }
        .nav-link:hover:after { width: 100%; }
      </style>
      <nav class="navbar fixed w-full z-50 bg-transparent py-4 px-6">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" class="flex items-center">
            <span class="text-2xl font-bold text-white">Major Studios</span>
          </a>
          
          <div class="hidden md:flex items-center space-x-8">
            <a href="#work" class="nav-link text-white hover:text-primary-300">Work</a>
            <a href="#services" class="nav-link text-white hover:text-primary-300">Services</a>
            <a href="#about" class="nav-link text-white hover:text-primary-300">About</a>
            <a href="#contact" class="nav-link text-white hover:text-primary-300">Contact</a>
            <a href="#" class="bg-primary hover:bg-primary-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
              Get a Quote
            </a>
          </div>
          
          <button class="md:hidden text-white focus:outline-none" aria-label="Toggle menu">
            <i data-feather="menu"></i>
          </button>
        </div>
      </nav>
    `;

    // Attach scroll behavior to toggle a background when scrolled
    const navbarEl = this.querySelector('.navbar');
    const handleScroll = () => {
      if (!navbarEl) return;
      if (window.scrollY > 50) navbarEl.classList.add('navbar-scrolled'); else navbarEl.classList.remove('navbar-scrolled');
    };
    window.addEventListener('scroll', handleScroll);
    // run once to set initial state
    handleScroll();
  }
}
customElements.define('custom-navbar', CustomNavbar);