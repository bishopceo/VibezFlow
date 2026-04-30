export default function Newsletter() {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="content-container px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">Subscribe to our mailing list</h3>
          <p className="text-gray-400 mb-8">Get daily news updates delivered directly to your inbox!</p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="px-5 py-3.5 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 flex-1 rounded-sm"
            />
            <button 
              type="submit"
              className="bg-red-600 hover:bg-red-700 px-8 py-3.5 font-semibold transition-colors rounded-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4">* No spam, we hate it more than you do</p>
        </div>
      </div>
    </section>
  );
}
