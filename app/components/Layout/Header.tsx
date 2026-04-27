import testIds from '@app/utils/test-ids';

const Header = () => (
  <>
    <header
      className="bg-white border-b border-slate-200/80"
      data-testid={testIds.LAYOUT.HEADER}
    >
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
  </>
);

export default Header;
