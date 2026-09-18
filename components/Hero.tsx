import Image from "next/image";
import { HERO, formatSpeed, getLeadPlan } from "@/lib/content";
import PriceLockup from "./PriceLockup";
import ZipChecker from "./ZipChecker";
import { CheckIcon } from "./Icons";
import RevealWords from "./RevealWords";
import Spotlight from "./Spotlight";

export default function Hero() {
  const lead = getLeadPlan();
  const speed = formatSpeed(lead);
  const bg = HERO.backgroundImage;
  const badge = HERO.badge;

  // Spec chips beside the price, derived from the plan rather than hand-written.
  const specs = [speed, lead.dataPolicy, lead.contractTerm].filter(
    (v): v is string => Boolean(v),
  );

  return (
    <section id="top" className="relative isolate overflow-hidden bg-navy-90">
      {/* --------------------------------------------------------------- */}
      {/* Photograph. Slow Ken Burns drift — the only motion in the frame. */}
      {/* --------------------------------------------------------------- */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 overflow-hidden"
      >
        <Image
          src={bg.src}
          alt={bg.alt}
          fill
          priority
          sizes="100vw"
          quality={84}
          style={{ objectPosition: bg.position }}
          className="animate-ken-burns object-cover will-change-transform"
        />
      </div>

      {/*
        Scrim. Anchored hard to the left edge and gone by 86% of the width, so
        the copy sits on near-solid navy while the house keeps its own colour.
        No blue cast over the photograph — that was what drained it out.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-navy-90/80 lg:hidden"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 hidden lg:block lg:bg-gradient-to-r lg:from-navy-90 lg:from-6% lg:via-navy-90/90 lg:via-52% lg:to-transparent lg:to-86%"
      />
      {/*
        Drifting colour behind the copy. Deliberately pinned to the left half:
        the scrim is near-solid there, so this reads as motion behind the text
        and never spills onto the house.
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 -z-20 w-full overflow-hidden lg:w-[62%]"
      >
        <div className="animate-aurora-a absolute -left-[18%] -top-[34%] h-[22rem] w-[22rem] rounded-full bg-brand-60/28 blur-[55px] will-change-transform sm:h-[38rem] sm:w-[38rem] sm:blur-[120px]" />
        <div className="animate-aurora-c absolute -bottom-[38%] left-[6%] hidden h-[30rem] w-[30rem] rounded-full bg-aqua/12 blur-[130px] will-change-transform sm:block" />
        <div className="animate-aurora-b absolute -bottom-[30%] -left-[10%] h-[16rem] w-[16rem] rounded-full bg-accent-60/14 blur-[55px] will-change-transform sm:h-[26rem] sm:w-[26rem] sm:blur-[120px]" />
      </div>

      {/* Light that tracks the pointer. Fine pointers only. */}
      <Spotlight />

      {/* Grounds the bottom edge so the trust marquee reads cleanly. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-20 h-56 bg-gradient-to-t from-navy-90 via-navy-90/85 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-0 pt-14 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
        <div className="max-w-3xl">
          <p className="animate-fade-rise inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-accent-60"
            />
            {HERO.eyebrow}
          </p>

          {/* Soft brand glow sits behind the headline, lifting it off the
              photograph. Decorative, and it pulses very slowly. */}
          <div className="relative mt-6">
            <div
              aria-hidden="true"
              className="animate-glow-pulse pointer-events-none absolute -inset-x-16 -inset-y-14 -z-10 rounded-[50%] bg-[radial-gradient(58%_62%_at_32%_50%,rgba(50,83,255,0.9)_0%,rgba(50,83,255,0.42)_42%,rgba(91,137,255,0.16)_66%,transparent_80%)] blur-2xl will-change-transform sm:blur-3xl"
            />

            {/*
              Word by word, each resolving out of a blur as it rises. Line two
              is gradient-filled with the light running through it; every stop
              is brand-30 or lighter, because the previous brand-40 accent
              measured 2.45:1 against the lit windows behind it — below even the
              3:1 large-text floor, which is why the line read as washed out.
            */}
            <h1 className="text-[clamp(2.3rem,6.4vw,4rem)] font-extrabold leading-[1.03] tracking-[-0.04em] text-white [filter:drop-shadow(0_2px_18px_rgba(4,6,30,0.75))_drop-shadow(0_0_34px_rgba(50,83,255,0.45))]">
              <span className="block">
                <RevealWords text={HERO.headline} startDelay={120} />
              </span>
              <span className="block">
                <RevealWords
                  text={HERO.headlineAccent}
                  startDelay={120 + HERO.headline.split(" ").length * 70}
                  gradient
                />
              </span>
            </h1>

            {/* Marker rule under the headline. Wipes out from the left, then
                holds the same travelling light as the accent words. */}
            <span
              aria-hidden="true"
              className="animate-rule-sweep mt-5 block h-[3px] w-[min(20rem,58%)] origin-left rounded-full bg-[linear-gradient(90deg,#3253ff_0%,#5b89ff_35%,#ff8c6c_70%,transparent_100%)] bg-[length:200%_auto]"
              style={{ animationDelay: "620ms" }}
            />
          </div>

          <p
            className="animate-fade-rise mt-6 max-w-[54ch] text-[1.02rem] leading-relaxed text-navy-10 sm:text-[1.1rem]"
            style={{ animationDelay: "460ms" }}
          >
            {HERO.subline}
          </p>
        </div>

        {/* --------------------------------------------------------------- */}
        {/* Price rail                                                      */}
        {/* --------------------------------------------------------------- */}
        <div
          className="animate-fade-rise mt-10 flex flex-col gap-5 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:gap-8"
          style={{ animationDelay: "580ms" }}
        >
          <div className="relative flex items-center gap-4 overflow-hidden">
            {/* Bloom behind the figure. Ting blue is far darker than anything
                in the photograph, so this deepens the backdrop rather than
                lifting it — the white numerals gain contrast, not lose it. */}
            <span
              aria-hidden="true"
              className="animate-glow-pulse pointer-events-none absolute -inset-y-6 left-[6rem] -z-10 w-[17rem] rounded-[50%] bg-[radial-gradient(closest-side,rgba(50,83,255,0.85),rgba(50,83,255,0.3)_55%,transparent_78%)] blur-2xl will-change-transform"
            />
            <span className="max-w-[7.5rem] text-[0.8rem] font-semibold uppercase leading-[1.3] tracking-[0.1em] text-navy-20">
              {HERO.priceLabel}
            </span>
            <PriceLockup plan={lead} size="lg" tone="dark" animateValue />
            {/* One pass of light across the price, then a long rest. */}
            <span
              aria-hidden="true"
              className="animate-sheen pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/18 to-transparent"
            />
          </div>

          <ul className="flex flex-wrap gap-x-2 gap-y-2 sm:border-l sm:border-white/15 sm:pl-8">
            {specs.map((spec, i) => (
              <li
                key={spec}
                className="animate-chip-in rounded-full border border-white/15 bg-navy-90/65 px-3 py-1.5 text-[0.8rem] font-semibold text-white backdrop-blur-sm sm:backdrop-blur-md"
                style={{ animationDelay: `${900 + i * 90}ms` }}
              >
                {spec}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="animate-fade-rise mt-9"
          style={{ animationDelay: "700ms" }}
        >
          <ZipChecker />
        </div>

        {/* --------------------------------------------------------------- */}
        {/* Trust marquee — slow, pauses on hover, static under reduced      */}
        {/* motion. Mirrors the scrolling trust bar on the reference sites.  */}
        {/* --------------------------------------------------------------- */}
        <div className="relative mt-12 overflow-hidden border-t border-white/15 py-5 sm:mt-14">
          <ul className="animate-marquee flex w-max items-center gap-x-10 hover:[animation-play-state:paused]">
            {HERO.trustChips.map((chip) => (
              <li key={chip} className="flex shrink-0 items-center gap-2">
                <CheckIcon className="h-4 w-4 shrink-0 text-brand-40" />
                <span className="whitespace-nowrap text-[0.88rem] font-semibold text-white">
                  {chip}
                </span>
              </li>
            ))}
            {/* Duplicate set makes the loop seamless; hidden from assistive tech. */}
            {HERO.trustChips.map((chip) => (
              <li
                key={`dup-${chip}`}
                aria-hidden="true"
                className="flex shrink-0 items-center gap-2"
              >
                <CheckIcon className="h-4 w-4 shrink-0 text-brand-40" />
                <span className="whitespace-nowrap text-[0.88rem] font-semibold text-white">
                  {chip}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* --------------------------------------------------------------- */}
      {/* Circular marker over the photograph. Large screens only — there  */}
      {/* is no clear space for it once the copy goes full width.          */}
      {/* --------------------------------------------------------------- */}
      {/* Outer element owns the centring transform; the inner one owns the
          animation, because fade-rise settles on `transform: none` and would
          otherwise cancel the -translate-y-1/2. */}
      <div className="pointer-events-none absolute right-[6%] top-1/2 hidden -translate-y-1/2 xl:block">
        <div className="animate-float-soft relative will-change-transform">
          {/* Halo breathing outward from the disc. */}
          <span
            aria-hidden="true"
            className="animate-halo absolute -inset-5 -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(50,83,255,0.8),rgba(255,140,108,0.24)_62%,transparent_80%)] blur-xl will-change-transform"
          />
          <div
            className="animate-fade-rise relative h-44 w-44 overflow-hidden rounded-full p-[2px] shadow-[0_24px_60px_-20px_rgba(4,6,30,0.75)]"
            style={{ animationDelay: "900ms" }}
          >
            {/* Light running around the rim, same device as the ZIP pill. */}
            <span
              aria-hidden="true"
              className="animate-beam absolute left-1/2 top-1/2 h-[220%] w-[220%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_235deg,#3253ff_295deg,#84aeff_332deg,#ffffff_349deg,transparent_360deg)] will-change-transform"
            />
            <div className="relative grid h-full w-full place-items-center rounded-full bg-white text-center">
              <div className="px-5">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-ink-70">
                  {badge.kicker}
                </p>
                <p className="animate-gradient-pan mt-1 bg-[linear-gradient(100deg,#243edb_0%,#3253ff_42%,#0f1e93_82%)] bg-[length:210%_auto] bg-clip-text text-[1.7rem] font-extrabold leading-none tracking-[-0.02em] text-transparent">
                  {badge.value}
                </p>
                <p className="mt-1.5 text-[0.72rem] font-medium leading-snug text-ink-80">
                  {badge.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
