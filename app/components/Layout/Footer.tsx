import testIds from '@app/utils/test-ids';

const Footer = () => (
  <footer
    className="relative overflow-hidden bg-white"
    data-testid={testIds.LAYOUT.FOOTER}
  >
    {/* Accent top bar */}
    <div
      aria-hidden="true"
      className="h-1 w-full bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-600"
    />

    {/* Decorative glow */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-1 h-40 bg-gradient-to-b from-indigo-600/10 to-transparent"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-indigo-600/5"
    />

    <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        <div className="space-y-4">
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
              Contact Us
            </h2>
            <div
              aria-hidden="true"
              className="h-1 w-12 rounded-full bg-indigo-600"
            />
          </div>
          <p className="text-sm sm:text-base text-slate-600 leading-6">
            Please reach out to us with any questions or concerns. We are happy
            to hear from you.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-6">
            <span className="inline-flex items-center gap-2.5 rounded-lg border border-slate-200/80 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-900 shadow-sm">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-indigo-600"
              />
              Email: placeholder@placeholder.com
            </span>
          </p>
        </div>

        <div className="mt-8 border-t border-slate-200/70 pt-6">
          <p className="text-center text-sm text-slate-500">
            © 2026 Community to Council. Powered and secured by Wix
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
