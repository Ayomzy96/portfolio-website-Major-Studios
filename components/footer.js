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
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="md:col-span-2">
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
            
            <div>
              <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
              <ul class="space-y-2">
                <li><a href="#" class="footer-link text-gray-400 flex items-center"><i data-feather="chevron-right" class="w-4 h-4 mr-1"></i> Home</a></li>
                <li><a href="#work" class="footer-link text-gray-400 flex items-center"><i data-feather="chevron-right" class="w-4 h-4 mr-1"></i> Portfolio</a></li>
                <li><a href="#services" class="footer-link text-gray-400 flex items-center"><i data-feather="chevron-right" class="w-4 h-4 mr-1"></i> Services</a></li>
                <li><a href="#about" class="footer-link text-gray-400 flex items-center"><i data-feather="chevron-right" class="w-4 h-4 mr-1"></i> About</a></li>
              </ul>
            </div>
            
            <div>
              <h4 class="text-lg font-semibold mb-4">Contact</h4>
              <ul class="space-y-2">
                <li class="flex items-center text-gray-400">
                  <i data-feather="mail" class="w-4 h-4 mr-2"></i>
                  <a href="mailto:adebayojohn689@gmail.com" class="footer-link text-gray-400 hover:text-white">adebayojohn689@gmail.com</a>
                </li>
                <li class="flex items-center text-gray-400">
                  <i data-feather="phone" class="w-4 h-4 mr-2"></i>
                  <!-- Phone placeholder: replace with actual phone in international format -->
                  <a href="tel:+2348154874408" class="footer-link text-gray-400 hover:text-white">+234 810 123 4567</a>
                </li>
                <li class="flex items-center text-gray-400">
                  <i data-feather="message-square" class="w-4 h-4 mr-2"></i>
                  <!-- WhatsApp chat link placeholder: replace 2348085150895 with full international number (no + or spaces) -->
                  <a href="https://wa.me/2348085150895" target="_blank" rel="noopener noreferrer" class="footer-link text-gray-400 hover:text-white">Chat on WhatsApp</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>© ${new Date().getFullYear()} Major Studios. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);