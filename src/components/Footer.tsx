export default function Footer() {
  const footerCategories = [
    "Apps", "Business", "Entertainment", "Fashion", "Featured", 
    "Food", "Gadget", "Gaming", "Health", "Lifestyle", "Mobile", 
    "Movie", "Music", "News", "Politics", "Science", 
    "Sports", "Startup", "Tech", "Travel", "World"
  ];

  const quickLinks = [
    { name: "About Us", href: "#" },
    { name: "Advertise", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ];

  return (
    <footer className="bg-white border-t">
      <div className="content-container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-5">
              <span className="text-2xl font-bold text-red-600">JNews</span>
              <span className="text-gray-500 ml-2">Default</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              We bring you the best Premium WordPress Themes that perfect for news, magazine, and personal blog. Check our landing page for details.
            </p>
            <div className="flex space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <a key={i} href="#" className="w-9 h-9 bg-gray-100 hover:bg-red-600 text-gray-600 hover:text-white flex items-center justify-center rounded-sm transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5L14.17.5C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-5 pb-2 border-b-2 border-red-600">Categories</h4>
            <ul className="grid grid-cols-2 gap-2">
              {footerCategories.map((cat) => (
                <li key={cat}>
                  <a href="#" className="text-sm text-gray-600 hover:text-red-600 transition-colors">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-5 pb-2 border-b-2 border-red-600">Newsletter</h4>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Subscribe to our mailing list to receive daily updates direct to your inbox!
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 border border-gray-300 text-sm focus:outline-none focus:border-red-500 rounded-sm"
              />
              <button 
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2.5 text-sm font-semibold transition-colors rounded-sm"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-5 pb-2 border-b-2 border-red-600">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-600 hover:text-red-600 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 border-t py-6">
        <div className="content-container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>&copy; 2026 JNews - Premium WordPress news & magazine theme</p>
            <p className="mt-2 md:mt-0">by <a href="#" className="text-red-600 hover:underline font-medium">Jegtheme</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
