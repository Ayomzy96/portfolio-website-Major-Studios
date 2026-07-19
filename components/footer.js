class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .footer-link {
          transition: all 0.2s ease;
        }
        .footer-link:hover {
          color: #3B82F6;
          transform: translateX(4px);
        }
      </style>
      <footer class="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="flex items-center justify-center">
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white transition duration-300">
                <i data-feather="instagram"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition duration-300">
                <i data-feather="youtube"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition duration-300">
                <i data-feather="vimeo"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition duration-300">
                <i data-feather="linkedin"></i>
              </a>
            </div>
          </div>
          
          <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>© ${new Date().getFullYear()} OLALEYE ADEBAYO JOHN. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);