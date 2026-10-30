import testIds from '@app/utils/test-ids';

const Header = () => (
  <>
    <header
      className="relative bg-white border-b border-slate-200/80"
      data-testid={testIds.LAYOUT.HEADER}
    >
      {/* Subtle top sheen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-600/40 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 flex items-center justify-center shadow-sm ring-1 ring-indigo-600/20">
              <span className="text-white font-semibold text-lg tracking-tight">
                C2C
              </span>
              {/* Logo corner highlight */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 to-transparent"
              />
            </div>
            <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
              Community to Council
            </h1>
          </div>
        </div>
      </div>

      {/* Accent underline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-indigo-600/0 via-indigo-600/60 to-indigo-600/0"
      />
    </header>
  </>
);

export default Header;
