import testIds from '@app/utils/test-ids';

const Footer = () => (
  <footer
    className="bg-white border-t border-slate-200/70"
    data-testid={testIds.LAYOUT.FOOTER}
  >
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
            Contact Us
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-6">
            Please reach out to us with any questions or concerns. We're happy
            to hear from you.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-6">
            Email: placeholder@placeholder.com
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200/70">
          <p className="text-center text-sm text-slate-500">
            © 2026 Community to Council. Powered and secured by Wix
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
