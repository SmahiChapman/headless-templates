import testIds from '@app/utils/test-ids';

const CONTACT_EMAILS: { id: string; address: string }[] = [
  { id: 'tulabing', address: 'tulabing@chapman.edu' },
  { id: 'smahi', address: 'smahi@chapman.edu' },
  { id: 'jray', address: 'jray@chapman.edu' },
  { id: 'yanwang', address: 'yanwang@chapman.edu' },
];

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
            <h3 className="text-base font-semibold text-slate-900">
              Contact Us
            </h3>
            <div
              aria-hidden="true"
              className="h-1 w-12 rounded-full bg-indigo-600"
            />
          </div>
          <p className="text-sm sm:text-base text-slate-600 leading-6">
            Please reach out to us with any questions or concerns. We are happy
            to hear from you.
          </p>

          {/* Contact emails */}
          <ul className="divide-y divide-slate-200/70 rounded-xl border border-slate-200/80 bg-white p-2 shadow-sm">
            {CONTACT_EMAILS.map(({ id, address }) => (
              <li key={id}>
                <a
                  href={`mailto:${address}`}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-indigo-500/30"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600"
                  />
                  <span className="text-sm font-medium text-slate-900">
                    {address}
                  </span>
                </a>
              </li>
            ))}
          </ul>
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
