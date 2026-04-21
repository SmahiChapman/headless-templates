import { useState } from 'react';
import { 
  Search, 
  Mail, 
  Phone, 
  Gavel, 
  Calendar, 
  ChevronRight, 
  Info,
  MapPin,
  MessageSquare,
  Copy
} from 'lucide-react';

const Navbar = () => (
  <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 p-2 rounded-xl">
            <Gavel className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold tracking-tight text-slate-900 text-xl">Community to Council</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
          <a href="#search" className="hover:text-indigo-600 transition-colors">Search</a>
          <a href="#resources" className="hover:text-indigo-600 transition-colors">Resources</a>
          <a href="#about" className="hover:text-indigo-600 transition-colors">About Us</a>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl transition-colors">
            Get Involved
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => {
  const [zip, setZip] = useState('');
  const [searching, setSearching] = useState(false);

  const handleSearch = () => {
    if (!zip) return;
    setSearching(true);
    setTimeout(() => setSearching(false), 1500);
  };

  return (
    <section id="search" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            Connect with Your <span className="text-indigo-600">Representatives</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Your voice matters. Find the contact information for your local and state government officials in seconds. Enter your zip code to get started.
          </p>
          
          <div className="relative max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Enter Zip Code" 
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all shadow-sm text-slate-900"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <button 
                onClick={handleSearch}
                disabled={searching}
                className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-md shadow-indigo-100 flex items-center justify-center gap-2"
              >
                {searching ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Search className="w-5 h-5" />
                )}
                {searching ? 'Searching...' : 'Find Council'}
              </button>
            </div>
            <p className="mt-4 text-xs text-slate-400">
              Try a zip code like "10001" or "90210"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Mission = () => (
  <section className="py-16 bg-white border-y border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="bg-slate-50 border border-slate-200 p-8 sm:p-12 rounded-xl text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-slate-600 text-lg leading-relaxed italic">
          Placeholder
        </p>
      </div>
    </div>
  </section>
);

const BentoSection = () => (
  <section id="resources" className="py-16 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Civic Resources</h2>
        <p className="text-slate-500 mt-2">Tools to help you effectively communicate with leadership.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Email Template */}
        <div className="lg:col-span-2 bg-white border border-slate-200 p-8 rounded-xl flex flex-col justify-between hover:border-indigo-200 transition-colors shadow-sm">
          <div>
            <div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Mail className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Email Your Official</h3>
            <p className="text-slate-500 mb-6 leading-relaxed">
              Not sure what to say? Use our professional template to ensure your concerns are heard and documented correctly.
            </p>
            <div className="relative group/template">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl font-mono text-sm text-slate-600 overflow-x-auto">
                <p className="mb-2">Subject: Concern regarding [Issue Name] - District [Number]</p>
                <p className="mb-2">Dear Council Member [Name],</p>
                <p className="mb-2">[Body]</p>
                <p>Sincerely, [Your Name]</p>
              </div>
              <button 
                onClick={() => {
                  const text = `Subject: Concern regarding [Issue Name] - District [Number]\n\nDear Council Member [Name],\n\nI am writing to you as a constituent of District [Number] to express my thoughts on [Issue]. As a member of this community, I believe that [your suggestion or concern]...\n\nSincerely, [Your Name]`;
                  navigator.clipboard.writeText(text);
                }}
                className="absolute top-2 right-2 bg-white border border-slate-200 p-2 rounded-lg shadow-sm opacity-0 group-hover/template:opacity-100 transition-opacity hover:bg-slate-50"
                title="Copy to clipboard"
              >
                <Copy className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>
          <button 
            onClick={(e) => {
              const text = `Subject: Concern regarding [Issue Name] - District [Number]\n\nDear Council Member [Name],\n\nI am writing to you as a constituent of District [Number] to express my thoughts on [Issue]. As a member of this community, I believe that [your suggestion or concern]...\n\nSincerely, [Your Name]`;
              navigator.clipboard.writeText(text);
              const btn = e.currentTarget;
              const originalText = btn.innerHTML;
              btn.innerHTML = 'Copied!';
              setTimeout(() => btn.innerHTML = originalText, 2000);
            }}
            className="mt-8 text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all min-w-[140px]"
          >
            Copy Template <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Call Guide */}
        <div className="bg-white border border-slate-200 p-8 rounded-xl hover:border-indigo-200 transition-colors shadow-sm">
          <div className="bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
            <Phone className="w-6 h-6 text-emerald-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-4">Phone Call Tips</h3>
          <ul className="space-y-4 text-slate-500">
            <li className="flex gap-3">
              <span className="text-emerald-600 font-bold">01.</span>
              Placeholder
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 font-bold">02.</span>
              Placeholder
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 font-bold">03.</span>
              Placeholder
            </li>
          </ul>
        </div>

        {/* Basic Rights */}
        <div className="bg-white border border-slate-200 p-8 rounded-xl hover:border-indigo-200 transition-colors shadow-sm">
          <div className="bg-amber-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
            <Info className="w-6 h-6 text-amber-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-4">Know Your Rights</h3>
          <div className="space-y-4 text-slate-500">
            <div className="pb-4 border-b border-slate-100">
              <p className="font-bold text-slate-700 text-sm">Placeholder</p>
              <p className="text-sm">Placeholder</p>
            </div>
            <div className="pb-4 border-b border-slate-100">
              <p className="font-bold text-slate-700 text-sm">Placeholder</p>
              <p className="text-sm">Placeholder</p>
            </div>
          </div>
        </div>

        {/* Election Dates */}
        <div className="lg:col-span-2 bg-white border border-slate-200 p-8 rounded-xl hover:border-indigo-200 transition-colors shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 h-full">
            <div className="space-y-4">
              <div className="bg-rose-50 w-12 h-12 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Election Schedule</h3>
              <p className="text-slate-500 leading-relaxed max-w-md">
                We track upcoming local, state, and federal election dates. Primary elections are often the most impactful for local council seats.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-xs font-bold text-slate-400 uppercase">Primary Election</p>
                <p className="font-bold text-slate-900">June 14, 2026</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-xs font-bold text-slate-400 uppercase">General Election</p>
                <p className="font-bold text-slate-900">November 3, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 space-y-8">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">Built by the community, <span className="text-indigo-600">for the community.</span></h2>
          <div className="space-y-4 text-slate-500 leading-relaxed text-lg">
            <p>
              Placeholder
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-3xl font-bold text-slate-900">100%</p>
              <p className="text-sm text-slate-500">Free to Use</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">50</p>
              <p className="text-sm text-slate-500">States Covered</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="aspect-video bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden relative group">
             <div className="absolute inset-0 bg-indigo-600/5 group-hover:bg-indigo-600/0 transition-colors z-10"></div>
             <img 
              src="https://images.unsplash.com/photo-1577416414932-7933f09dc5ce?auto=format&fit=crop&q=80&w=1000" 
              alt="Community Meeting" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
             />
             <div className="absolute bottom-6 left-6 z-20">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-200 flex items-center gap-3">
                  <div className="bg-indigo-600 p-2 rounded-lg">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Latest Milestone</p>
                    <p className="text-sm font-bold text-slate-900">Placeholder</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white border-t border-slate-200 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="h-24"></div> {/* Placeholder (footer) */}
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <BentoSection />
        <About />
      </main>
      <Footer />
    </div>
  );
}
