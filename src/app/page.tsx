import {
  ArrowDown,
  ArrowUpRight,
  Asterisk,
  Circle,
  MoveRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const practices = [
  {
    number: "I",
    title: "Attend",
    text: "Meet experience before naming it. Notice what is present, within and around you.",
  },
  {
    number: "II",
    title: "Integrate",
    text: "Bring mind, body, feeling, and action into a more honest and coherent relationship.",
  },
  {
    number: "III",
    title: "Embody",
    text: "Let awareness become how you listen, choose, create, lead, and participate in life.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f1eee6] text-[#17251d]">
      <header className="relative z-20 border-b border-[#17251d]/15">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12"
        >
          <a
            href="#top"
            className="group flex items-center gap-3"
            aria-label="Enfinitive home"
          >
            <span className="grid size-8 place-items-center rounded-full border border-[#17251d] transition-transform duration-500 group-hover:rotate-45">
              <Asterisk className="size-4" strokeWidth={1.5} />
            </span>
            <span className="text-[15px] font-semibold uppercase tracking-[0.22em]">
              Enfinitive
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm md:flex">
            <a className="nav-link" href="#purpose">
              Purpose
            </a>
            <a className="nav-link" href="#practice">
              Practice
            </a>
            <a className="nav-link" href="#inquiry">
              Inquiry
            </a>
          </div>

          <Button
            render={<a href="#connect" />}
            className="h-10 rounded-full bg-[#17251d] px-5 text-[#f1eee6] hover:bg-[#294033]"
          >
            Enter the field
            <ArrowUpRight />
          </Button>
        </nav>
      </header>

      <main id="top">
        <section className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-[1440px] lg:grid-cols-[1.03fr_0.97fr]">
          <div className="relative z-10 flex flex-col justify-between px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
            <div className="reveal flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#17251d]/60">
              <span className="h-px w-9 bg-[#17251d]/45" />
              An organization for consciousness
            </div>

            <div className="py-14 lg:py-20">
              <h1 className="max-w-[820px] font-serif text-[clamp(4rem,8.3vw,8.9rem)] leading-[0.79] tracking-[-0.055em]">
                Become
                <br />
                <span className="ml-[0.44em] italic text-[#c85535]">more</span>
                <br />
                <span className="relative">conscious.</span>
              </h1>
              <div className="mt-12 flex max-w-xl flex-col gap-8 border-t border-[#17251d]/25 pt-6 sm:flex-row sm:items-start sm:justify-between">
                <p className="max-w-sm text-base leading-7 text-[#17251d]/70">
                  We exist to perfect conscious being—cultivating the clarity,
                  courage, and care to meet life as it is.
                </p>
                <a
                  href="#purpose"
                  className="group flex shrink-0 items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]"
                >
                  Our purpose
                  <span className="grid size-10 place-items-center rounded-full border border-[#17251d]/50 transition-colors group-hover:bg-[#d8ff71]">
                    <ArrowDown className="size-4" />
                  </span>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#17251d]/50">
              <Circle className="size-2 fill-[#c85535] text-[#c85535]" />
              Presence is the beginning
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden border-t border-[#17251d]/15 bg-[#d8ff71] lg:min-h-0 lg:border-l lg:border-t-0">
            <div className="pattern-grid absolute inset-0 opacity-40" />
            <div className="absolute left-7 top-7 z-10 font-mono text-[10px] uppercase tracking-[0.2em]">
              Field 001 / Conscious being
            </div>
            <div className="absolute bottom-7 right-7 z-10 font-mono text-[10px] uppercase tracking-[0.2em]">
              01° 17′ N / 103° 51′ E
            </div>

            <div className="conscious-field absolute left-1/2 top-1/2 aspect-square w-[min(78vw,620px)] -translate-x-1/2 -translate-y-1/2">
              <div className="field-ring inset-0" />
              <div className="field-ring inset-[10%]" />
              <div className="field-ring inset-[20%]" />
              <div className="field-ring inset-[30%]" />
              <div className="field-ring inset-[40%]" />
              <div className="absolute inset-[47%] rounded-full bg-[#17251d]" />
              <span className="absolute left-1/2 top-[12%] -translate-x-1/2 font-serif text-xl italic">
                attention
              </span>
              <span className="absolute bottom-[19%] left-[14%] font-mono text-[9px] uppercase tracking-[0.18em]">
                awareness
              </span>
              <span className="absolute right-[8%] top-1/2 font-mono text-[9px] uppercase tracking-[0.18em]">
                being
              </span>
              <span className="orbit-dot absolute left-[12%] top-[47%] size-4 rounded-full border border-[#17251d] bg-[#c85535]" />
            </div>

            <div className="absolute bottom-7 left-7 flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#17251d]" />
              <span className="size-2 rounded-full border border-[#17251d]" />
              <span className="size-2 rounded-full border border-[#17251d]" />
            </div>
          </div>
        </section>

        <section
          id="purpose"
          className="border-y border-[#17251d]/15 bg-[#f7f4ec] px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
        >
          <div className="mx-auto max-w-[1344px]">
            <div className="grid gap-12 lg:grid-cols-[0.32fr_1fr]">
              <p className="section-kicker">01 — Our purpose</p>
              <div>
                <p className="max-w-5xl font-serif text-[clamp(2.9rem,6.2vw,6.8rem)] leading-[0.94] tracking-[-0.04em]">
                  To perfect conscious being is not to become flawless.
                  <span className="text-[#c85535]">
                    {" "}
                    It is to become fully alive.
                  </span>
                </p>
                <div className="mt-14 grid gap-8 border-t border-[#17251d]/20 pt-8 sm:grid-cols-2">
                  <p className="max-w-md text-xl leading-8">
                    Consciousness is both our ground and our horizon—the
                    capacity to see clearly, choose freely, and act with care.
                  </p>
                  <p className="max-w-md text-base leading-7 text-[#17251d]/65">
                    Enfinitive creates spaces, practices, and encounters that
                    deepen awareness. We bring inner development into honest
                    relationship with the world around us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="practice"
          className="bg-[#17251d] px-5 py-24 text-[#f1eee6] sm:px-8 lg:px-12 lg:py-32"
        >
          <div className="mx-auto max-w-[1344px]">
            <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="section-kicker text-[#d8ff71]">
                  02 — The practice
                </p>
                <h2 className="mt-7 max-w-3xl font-serif text-[clamp(3.2rem,6vw,6rem)] leading-[0.93] tracking-[-0.04em]">
                  A way of being,
                  <br />
                  lived daily.
                </h2>
              </div>
              <p className="max-w-sm text-base leading-7 text-[#f1eee6]/60">
                Consciousness grows through attention, relationship, and
                repeated practice—not abstraction alone.
              </p>
            </div>

            <div className="border-t border-[#f1eee6]/25">
              {practices.map((item) => (
                <article
                  key={item.number}
                  className="group grid gap-6 border-b border-[#f1eee6]/25 py-9 md:grid-cols-[0.18fr_0.48fr_1fr_auto] md:items-center"
                >
                  <span className="font-mono text-xs text-[#d8ff71]">
                    {item.number}
                  </span>
                  <Asterisk
                    className="hidden size-5 text-[#d8ff71] transition-transform duration-500 group-hover:rotate-90 md:block"
                    strokeWidth={1.5}
                  />
                  <div>
                    <h3 className="font-serif text-5xl tracking-[-0.03em] md:text-6xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-[#f1eee6]/55 md:hidden">
                      {item.text}
                    </p>
                  </div>
                  <div className="hidden items-center gap-10 md:flex">
                    <p className="max-w-sm text-sm leading-6 text-[#f1eee6]/55">
                      {item.text}
                    </p>
                    <MoveRight className="size-6 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="inquiry"
          className="relative bg-[#c85535] px-5 py-24 text-[#f7f4ec] sm:px-8 lg:px-12 lg:py-36"
        >
          <div className="absolute right-[7%] top-20 hidden size-32 rounded-full border border-[#f7f4ec]/40 lg:block">
            <Asterisk
              className="animate-spin-slow absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2"
              strokeWidth={1}
            />
          </div>
          <div className="mx-auto max-w-[1344px]">
            <p className="section-kicker text-[#f7f4ec]/70">
              03 — An open inquiry
            </p>
            <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_0.44fr] lg:items-end">
              <h2 className="max-w-4xl font-serif text-[clamp(3.5rem,8vw,8.4rem)] leading-[0.83] tracking-[-0.055em]">
                What becomes possible when we are truly awake?
              </h2>
              <div className="border-t border-[#f7f4ec]/35 pt-7">
                <p className="text-lg leading-8 text-[#f7f4ec]/80">
                  We hold this question together—not to arrive at one answer,
                  but to live into better ones.
                </p>
                <a
                  href="#connect"
                  className="group mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]"
                >
                  Join the inquiry
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="connect"
          className="bg-[#f1eee6] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
        >
          <div className="mx-auto max-w-[1344px]">
            <div className="grid gap-16 lg:grid-cols-[0.36fr_1fr]">
              <p className="section-kicker">04 — Come closer</p>
              <div>
                <h2 className="max-w-4xl font-serif text-[clamp(3.4rem,7vw,7.5rem)] leading-[0.88] tracking-[-0.05em]">
                  Begin where
                  <br />
                  <span className="italic text-[#c85535]">you are.</span>
                </h2>
                <div className="mt-12 flex flex-col gap-8 border-t border-[#17251d]/20 pt-8 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-lg text-lg leading-8 text-[#17251d]/65">
                    Receive field notes, practices, and invitations from
                    Enfinitive.
                  </p>
                  <Button
                    render={<a href="mailto:hello@enfinitive.org" />}
                    className="h-14 rounded-full bg-[#17251d] px-7 text-sm text-[#f1eee6] hover:bg-[#294033]"
                  >
                    hello@enfinitive.org
                    <ArrowUpRight className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#17251d]/15 bg-[#f1eee6] px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1344px] flex-col gap-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#17251d]/55 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-[#17251d]">
            <Asterisk className="size-4" />
            Enfinitive
          </div>
          <p>To perfect conscious being</p>
          <p>© {new Date().getFullYear()} / All life, considered</p>
        </div>
      </footer>
    </div>
  );
}
