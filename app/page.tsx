export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* HEADER / NAVIGATION */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center gap-3">
            {/* Visual Logo */}
            <div className="flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-xl">
              <span className="text-2xl">🏛️</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
                Community to Council
              </h1>
              <p className="text-xs text-slate-500">Find Your Representatives</p>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION WITH MISSION STATEMENT */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Your Voice Matters
            </h2>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              Connect with your local and state government representatives in seconds. 
              Search by zip code to find contact information and make your voice heard 
              in your community.
            </p>
          </div>
        </div>
      </section>

      {/* ZIP CODE SEARCH SECTION */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
                Find Your Representatives
              </h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                Enter your zip code to discover your local and state government contacts.
              </p>
              <div className="flex gap-3 flex-col sm:flex-row">
                <input
                  type="text"
                  placeholder="Enter ZIP Code"
                  maxLength={5}
                  className="flex-1 px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                />
                <button
                  className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GENERAL INFO SECTION - Bento Grid Layout */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900 mb-8 text-center">
            Resources & Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Email Template Card */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-xl">
                  ✉️
                </div>
                <h4 className="text-xl font-bold tracking-tight text-slate-900">
                  Email Template
                </h4>
              </div>
              <p className="text-slate-500 leading-relaxed mb-4">
                How to structure your message:
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-900 leading-relaxed">
                <p className="mb-2"><strong>Subject:</strong> Placeholder</p>
                <p className="mb-2">Dear [Title] [Last Name],</p>
                <p className="mb-2">Placeholder</p>
                <p><strong>Closing:</strong> Placeholder</p>
              </div>
            </div>

            {/* Phone Call Tips Card */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-xl">
                  📞
                </div>
                <h4 className="text-xl font-bold tracking-tight text-slate-900">
                  Phone Call Tips
                </h4>
              </div>
              <p className="text-slate-500 leading-relaxed mb-4">
                Best practices for calling:
              </p>
              <ul className="space-y-2 text-slate-900 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-indigo-600">•</span>
                  <span>Placeholder</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-600">•</span>
                  <span>Placeholder</span>
                </li>
              </ul>
            </div>

            {/* Basic Rights Card */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-xl">
                  ⚖️
                </div>
                <h4 className="text-xl font-bold tracking-tight text-slate-900">
                  Your Rights
                </h4>
              </div>
              <p className="text-slate-500 leading-relaxed mb-4">
                Know your civic rights:
              </p>
              <ul className="space-y-2 text-slate-900 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-indigo-600">•</span>
                  <span>Placeholder</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-600">•</span>
                  <span>Placeholder</span>
                </li>
              </ul>
            </div>

            {/* Election Dates Card - Spans 2 columns on large screens */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-xl">
                  🗳️
                </div>
                <h4 className="text-xl font-bold tracking-tight text-slate-900">
                  Important Election Dates
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="font-bold text-slate-900 mb-1">Primary Elections</p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Placeholder
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="font-bold text-slate-900 mb-1">General Elections</p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Placeholder
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="font-bold text-slate-900 mb-1">Voter Registration Deadlines</p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Placeholder
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="font-bold text-slate-900 mb-1">Early Voting</p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Placeholder
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Resources Card */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-xl">
                  📚
                </div>
                <h4 className="text-xl font-bold tracking-tight text-slate-900">
                  More Resources
                </h4>
              </div>
              <p className="text-slate-500 leading-relaxed mb-4">
                Additional tools and information:
              </p>
              <ul className="space-y-2 text-slate-900 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-indigo-600">•</span>
                  <span>Placeholder</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-600">•</span>
                  <span>Placeholder</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-600">•</span>
                  <span>Placeholder</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-600">•</span>
                  <span>Placeholder</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
              About Community to Council
            </h3>
            <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-10">
              <p className="text-lg text-slate-500 leading-relaxed mb-6">
                Placeholder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-xl">
                <span className="text-xl">🏛️</span>
              </div>
              <span className="text-slate-900 font-bold tracking-tight">
                Community to Council
              </span>
            </div>
            <p className="text-slate-500 text-sm">
              © 2026 Community to Council. Powered and secured by Wix
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
