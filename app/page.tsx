import { CarouselClient } from '@app/components/Carousel/Carousel';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';
import testIds from '@app/utils/test-ids';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200/80">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">C2C</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
                Community to Council
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* ZIP Code Search */}
      <section className="bg-white border-b border-slate-200/70">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              Connect with Your Representatives
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-6">
              Find your local, state, and federal government representatives and
              make your voice heard.
            </p>

            {/* ZIP Code Search */}
            <div className="mt-8">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Enter your ZIP code"
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500/30 transition-colors duration-150"
                  maxLength={5}
                />
                <button className="rounded-lg bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500/30 transition-colors duration-150 whitespace-nowrap">
                  Find Representatives
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 mb-4">
              Our Mission
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-6">
              Our mission is to empower college students and first-time voters
              to engage meaningfully with local government by making civic
              action simple, accessible, and effective.
              <br />
              <br />
              We bridge the gap between curiosity and action by connecting young
              adults with their elected representatives, equipping them with
              ready-to-use advocacy templates tailored to the issues they care
              about most, and educating them on the state and federal rights
              they already hold.
              <br />
              <br />
              This project aims to show people that their voices matter and that
              stronger connections within a community make the community itself
              stronger.
            </p>
          </div>
        </div>
      </section>

      {/* Know Your Rights */}
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 mb-6">
            Know Your Rights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-sm">
              <h3 className="text-sm font-medium text-slate-700 mb-2">
                Right to Petition
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-6">
                Placeholder
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-sm">
              <h3 className="text-sm font-medium text-slate-700 mb-2">
                Freedom of Speech
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-6">
                Placeholder
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-sm">
              <h3 className="text-sm font-medium text-slate-700 mb-2">
                Right to Assembly
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-6">
                Placeholder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Templates and Tips */}
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 mb-6">
            Communication Templates & Tips
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Phone Call Tips */}
            <div className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-sm space-y-4">
              <div>
                <h3 className="text-sm font-medium text-slate-700 mb-2">
                  Phone Call Templates
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-6">
                  Placeholder
                </p>
              </div>
              <div className="border-t border-slate-200/70 pt-4">
                <h4 className="text-sm font-medium text-slate-700 mb-2">
                  Tips for Effective Calls
                </h4>
                <p className="text-sm sm:text-base text-slate-600 leading-6">
                  Placeholder
                </p>
              </div>
            </div>

            {/* Email Tips */}
            <div className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-sm space-y-4">
              <div>
                <h3 className="text-sm font-medium text-slate-700 mb-2">
                  Email Templates
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-6">
                  Placeholder
                </p>
              </div>
              <div className="border-t border-slate-200/70 pt-4">
                <h4 className="text-sm font-medium text-slate-700 mb-2">
                  Tips for Effective Emails
                </h4>
                <p className="text-sm sm:text-base text-slate-600 leading-6">
                  Placeholder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-8 pb-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 mb-4">
              About Us
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-6">
              Placeholder
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
