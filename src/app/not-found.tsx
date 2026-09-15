import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-svh items-center justify-center overflow-hidden bg-[#0f1713] px-6 text-[#f1eee6]">
      <div className="pattern-grid absolute inset-0" aria-hidden="true" />
      <Link
        href="/"
        className="reveal relative z-10 text-base font-medium tracking-[0.34em] text-[#f1eee6]/85 sm:text-lg"
      >
        Enfinitive
      </Link>
    </div>
  );
}
