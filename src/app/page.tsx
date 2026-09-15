export default function Home() {
  return (
    <div className="relative flex min-h-svh flex-col overflow-hidden bg-[#0f1713] text-[#f1eee6]">
      <div className="halo" aria-hidden="true" />
      <div className="pattern-grid absolute inset-0" aria-hidden="true" />

      <header className="relative z-10 px-6 pt-8 sm:px-10 lg:px-14 lg:pt-10">
        <span className="reveal block text-[13px] font-semibold uppercase tracking-[0.42em] text-[#f1eee6]/85 sm:text-sm">
          Enfinitive
        </span>
      </header>

      <main className="relative z-10 flex flex-1 items-center px-6 py-14 sm:px-10 lg:px-14">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <h1 className="reveal reveal-delay-1 font-serif text-[clamp(3.4rem,10vw,10rem)] leading-[0.82] tracking-[-0.05em]">
            <span className="block">To Perfect</span>
            <span className="block italic text-[#d9843f]">Conscious</span>
            <span className="block">Being</span>
          </h1>

          <div
            className="reveal reveal-delay-2 relative mx-auto aspect-square w-[min(80vw,28rem)]"
            aria-hidden="true"
          >
            <div className="field-ring inset-0" />
            <div className="field-ring inset-[9%]" />
            <div className="field-ring inset-[18%]" />
            <div className="field-ring inset-[27%]" />
            <div className="field-ring inset-[36%]" />
            <div className="field-core absolute inset-[45%] rounded-full bg-[#d9843f]" />
            <div className="orbit absolute inset-0">
              <span className="absolute left-1/2 top-0 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f1eee6]" />
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-10 px-6 pb-9 sm:px-10 lg:px-14 lg:pb-12">
        <div className="reveal reveal-delay-3 h-px w-full bg-[#f1eee6]/20" />
      </footer>
    </div>
  );
}
