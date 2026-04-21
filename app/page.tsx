import { CarouselClient } from '@app/components/Carousel/Carousel';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';
import testIds from '@app/utils/test-ids';

export default function Home() {
  return (
    <div className="mx-auto relative sm:px-20 py-5">
      {/* Header Area */}
      <div className="text-center w-full relative">
        <div className="absolute top-0 left-0 h-[200px] sm:h-[calc(100%-55px)] w-full bg-black opacity-50"></div>
        <video autoPlay muted loop className="w-full h-[200px] sm:h-fit">
          <source
            src="https://video.wixstatic.com/video/0b340f_b4aaabafff194cf6ac9ee5511f58099d/720p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute top-[40px] right-[30px] sm:top-2/4 sm:left-2/4 text-white sm:translate-y-[-50%] sm:translate-x-[-50%] font-site">
          <h2 className="sm:text-4xl mb-4">COMMUNITY TO COUNCIL</h2>
          <h1 className="sm:text-[90px] sm:leading-[90px]">
            FIND YOUR REPS
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row relative items-center bg-white mt-[-10px] sm:mt-[-55px] mx-auto max-w-xs sm:max-w-4xl border-t-4 border-blue-site font-site">
          <h3 className="flex-1 sm:text-3xl py-4 px-8 text-center sm:text-left">
            Enter your Zip Code to find officials
          </h3>
          <a
            href="/search"
            className="btn-main sm:text-2xl sm:p-8 hover:bg-purple-site w-fit"
          >
            SEARCH
          </a>
        </div>
      </div>

      <div
        className="flex mt-12 sm:mt-32 sm:gap-12 flex-col sm:flex-row"
        data-testid={testIds.HOME_PAGE.HIGHLIGHTS}
      >
        <div className="basis-1/3">
          <div className="h-[370px] relative">
            <WixMediaImage
              media="https://static.wixstatic.com/media/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_434,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg"
              objectFit="cover"
              sizes="50vw"
              disableZoom={true}
            />
          </div>
          {/* General Info: Email/Call Guidelines */}
          <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:mt-[-300px]">
            <h3 className="text-2xl font-site">Contact Guide</h3>
            <p className="my-6 text-sm">
              Learn how to properly phrase emails and calls to your government officials. Be polite, state your zip code, and make your request clear and concise. 
            </p>
            <a
              href="/templates"
              className="text-purple-site py-6 font-site"
              data-testid={testIds.HOME_PAGE.OUR_INITIATIVES_CTA}
            >
              Email Templates
            </a>
          </div>
        </div>
        <div className="basis-2/3">
          <div className="h-[370px] relative">
            <WixMediaImage
              media="https://static.wixstatic.com/media/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg/v1/fill/w_615,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg"
              objectFit="cover"
              sizes="100vw"
              disableZoom={true}
            />
          </div>
          {/* Mission Statement */}
          <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:ml-32 sm:mt-[-430px]">
            <h3 className="text-2xl font-site">Our Mission</h3>
            <p className="my-6 text-sm">
              Placeholder
            </p>
            <a href="/about" className="text-purple-site py-6 font-site">
              Read More
            </a>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row sm:mt-32 mb-12 sm:gap-12">
        <div className="basis-2/3">
          <div className="h-[370px] sm:h-[470px] relative">
            <WixMediaImage
              media="https://static.wixstatic.com/media/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_682,h_568,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg"
              objectFit="cover"
              sizes="100vw"
              disableZoom={true}
            />
          </div>
          {/* General Info: Basic Rights */}
          <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:ml-44 sm:mt-[-230px]">
            <h3 className="text-2xl font-site">Know Your Rights</h3>
            <p className="my-6 text-sm">
              Placeholder
            </p>
            <a href="/rights" className="text-purple-site py-6 font-site">
              Read More
            </a>
          </div>
        </div>
        <div className="basis-1/3">
          <div className="h-[370px] sm:h-[470px] relative">
            <WixMediaImage
              media="https://static.wixstatic.com/media/0b340f_a075ec7cf76b4b479b4b482e44a88c43~mv2_d_3840_5760_s_4_2.jpg/v1/fill/w_486,h_568,al_tr,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_a075ec7cf76b4b479b4b482e44a88c43~mv2_d_3840_5760_s_4_2.jpg"
              objectFit="cover"
              sizes="50vw"
              disableZoom={true}
            />
          </div>
          {/* General Info: Election Dates */}
          <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:ml-32 sm:mt-[-530px]">
            <h3 className="text-2xl font-site">Election Dates</h3>
            <p className="my-6 text-sm">
              Placeholder
            </p>
            <a href="/elections" className="text-purple-site py-6 font-site">
              View Calendar
            </a>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <h2 className="text-3xl sm:text-5xl text-center mb-10 sm:mb-20 font-site">
        About Us
      </h2>
      <div className="flex flex-col sm:flex-row gap-8 sm:justify-center items-center font-site max-w-4xl mx-auto px-4">
        <p className="text-center sm:text-xl leading-relaxed mb-10">
          Placeholder
        </p>
      </div>

      <CarouselClient />

      {/* Footer */}
      <footer className="mt-10 pb-10">
        {/* Blank for now */}
      </footer>
    </div>
  );
}
