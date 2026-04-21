// Mocking components to ensure build succeeds and to keep it barebones as requested.
// The user can replace these with their actual components if needed.
const WixMediaImage = ({ media, objectFit }: { media: string; objectFit: any }) => (
  <img src={media} alt="" className="w-full h-full" style={{ objectFit }} />
);

const CarouselClient = () => (
  <div className="py-10 text-center border-t border-gray-200">
    <p className="text-gray-400">Related Resources Carousel</p>
  </div>
);

const testIds = {
  HOME_PAGE: {
    HIGHLIGHTS: 'highlights',
    OUR_INITIATIVES_CTA: 'initiatives-cta',
  },
};

export default function Home() {
  return (
    <div className="mx-auto relative sm:px-10 lg:px-20 py-5 font-sans">
      {/* Header */}
      <header className="flex items-center justify-between mb-8 px-4">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xs shadow-md">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 18.2L4 16.1V7.9l8-4 8 4v8.2l-8 4.1zM12 7l-5 2.5v5L12 17l5-2.5v-5L12 7z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-800">Community <span className="text-blue-600">to Council</span></span>
        </div>
        <nav className="hidden sm:flex gap-6 text-sm font-medium">
          <a href="#search" className="hover:text-blue-600 transition">Search</a>
          <a href="#mission" className="hover:text-blue-600 transition">Mission</a>
          <a href="#info" className="hover:text-blue-600 transition">General Info</a>
          <a href="#about" className="hover:text-blue-600 transition">About Us</a>
        </nav>
      </header>

      {/* Hero Section with Zip Search */}
      <div className="text-center w-full relative" id="search">
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-40 z-10"></div>
        <div className="relative h-[400px] overflow-hidden">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source
              src="https://video.wixstatic.com/video/0b340f_b4aaabafff194cf6ac9ee5511f58099d/720p/mp4/file.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="absolute top-2/4 left-2/4 text-white -translate-y-1/2 -translate-x-1/2 z-20 w-full px-4">
          <h2 className="text-xl sm:text-2xl mb-2 font-light">LOCAL GOV CONTACT INFO</h2>
          <h1 className="text-4xl sm:text-6xl font-bold mb-8 uppercase tracking-wider">
            Community to Council
          </h1>
          
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input 
              type="text" 
              placeholder="Enter Zip Code" 
              className="flex-1 px-6 py-4 text-black rounded-sm focus:outline-none text-lg"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-bold transition-colors">
              SEARCH
            </button>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-20 text-center max-w-3xl mx-auto px-4" id="mission">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Placeholder
        </p>
      </div>

      {/* Highlights Section */}
      <div
        className="flex mt-12 sm:mt-20 gap-8 sm:gap-12 flex-col sm:flex-row"
        data-testid={testIds.HOME_PAGE.HIGHLIGHTS}
      >
        <div className="basis-1/2">
          <div className="h-[300px] relative">
            <WixMediaImage
              media="https://static.wixstatic.com/media/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_434,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg"
              objectFit="cover"
            />
          </div>
          <div className="border-t-4 border-blue-600 p-8 bg-white shadow-sm mt-4">
            <h3 className="text-2xl font-bold mb-4">Your Basic Rights</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Placeholder
            </p>
            <a href="#" className="text-blue-600 font-bold hover:underline">Learn More</a>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="h-[300px] relative">
            <WixMediaImage
              media="https://static.wixstatic.com/media/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg/v1/fill/w_615,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg"
              objectFit="cover"
            />
          </div>
          <div className="border-t-4 border-blue-600 p-8 bg-white shadow-sm mt-4">
            <h3 className="text-2xl font-bold mb-4">Election Information</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Placeholder
            </p>
            <a href="#" className="text-blue-600 font-bold hover:underline">Check Dates</a>
          </div>
        </div>
      </div>

      {/* General Info Section (Email Template & Call Script) */}
      <div className="py-20 bg-gray-50 mt-20 -mx-4 sm:-mx-10 lg:-mx-20 px-4 sm:px-10 lg:px-20" id="info">
        <h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-tight">How to Take Action</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">1</span>
              Email Template
            </h3>
            <div className="bg-gray-100 p-4 rounded text-sm text-gray-700 italic border-l-4 border-blue-600">
              <p className="mb-2 font-bold italic not-italic">Subject: [Urgent/Inquiry] Regarding [Topic Name]</p>
              <p className="mb-2">Dear Council Member [Last Name],</p>
              <p className="mb-2">Placeholder</p>
              <p>Sincerely, [Your Name]</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">2</span>
              Call Script
            </h3>
            <div className="bg-gray-100 p-4 rounded text-sm text-gray-700 italic border-l-4 border-blue-600 h-full">
              <p className="mb-2">Placeholder</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-20 max-w-4xl mx-auto px-4 text-center" id="about">
        <h2 className="text-3xl font-bold mb-8">About Us</h2>
        <p className="text-gray-600 leading-loose">
          Placeholder
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-20 py-10 border-t border-gray-100 px-4">
        {/* Placeholder */}
        <div className="flex justify-between items-center text-gray-400 text-xs uppercase tracking-widest">
          <span>Community to Council</span>
          <span>© 2026</span>
          <span>Powered and secured by Wix</span>
        </div>
      </footer>

      <CarouselClient />
    </div>
  );
}
