export default function Footer() {
  const footerCategories = [
    "Music", "Entertainment", "Tech", "Business", "Lifestyle",
    "News", "Sports", "Health", "Fashion", "Food",
    "Travel", "Gaming", "Movies", "Politics", "World",
    "Startup", "Science", "Video", "Podcasts", "Reviews",
  ];

  const quickLinks = [
    { name: "About Us", href: "#" },
    { name: "Advertise", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      path: "M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5L14.17.5C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z",
    },
    {
      label: "Twitter/X",
      path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    },
    {
      label: "Instagram",
      path: "M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z",
    },
    {
      label: "YouTube",
      path: "M23.5,6.19a3.02,3.02,0,0,0-2.12-2.14C19.54,3.5,12,3.5,12,3.5s-7.54,0-9.38.55A3.02,3.02,0,0,0,.5,6.19,31.56,31.56,0,0,0,0,12a31.56,31.56,0,0,0,.5,5.81,3.02,3.02,0,0,0,2.12,2.14c1.84.55,9.38.55,9.38.55s7.54,0,9.38-.55a3.02,3.02,0,0,0,2.12-2.14A31.56,31.56,0,0,0,24,12,31.56,31.56,0,0,0,23.5,6.19ZM9.55,15.57V8.43L15.82,12Z",
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="content-container px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <div className="flex items-center mb-5">
              <span className="text-2xl font-black text-red-600">Vibez</span>
              <span className="text-2xl font-black text-gray-900">Flow</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Your #1 destination for African music, entertainment, tech, and lifestyle news. Stay connected to the culture.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map(({ label, path }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 bg-gray-100 hover:bg-red-600 text-gray-600 hover:text-white flex items-center justify-center rounded-sm transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-gray-800 mb-5 pb-2 border-b-2 border-red-600 text-sm uppercase tracking-wide">Categories</h4>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
              {footerCategories.map((cat) => (
                <li key={cat}>
                  <a href="#" className="text-sm text-gray-500 hover:text-red-600 transition-colors">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-gray-800 mb-5 pb-2 border-b-2 border-red-600 text-sm uppercase tracking-wide">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">
              Subscribe to get daily music and entertainment updates delivered to your inbox!
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 border border-gray-300 text-sm focus:outline-none focus:border-red-500 rounded-sm"
              />
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2.5 text-sm font-semibold transition-colors rounded-sm">
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-800 mb-5 pb-2 border-b-2 border-red-600 text-sm uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-500 hover:text-red-600 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border-t border-gray-200 py-5">
        <div className="content-container px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 gap-2">
            <p>© 2026 VibezFlow — Music, Entertainment & News</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-red-600 transition-colors">About</a>
              <a href="#" className="hover:text-red-600 transition-colors">Advertise</a>
              <a href="#" className="hover:text-red-600 transition-colors">Privacy & Policy</a>
              <a href="#" className="hover:text-red-600 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}