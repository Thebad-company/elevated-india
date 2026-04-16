import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function BrandPromise() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 lg:py-44 bg-ivory-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <div className="scroll-reveal">
              <span className="font-sans text-[10px] tracking-ultra uppercase text-gold mb-6 block">
                Our Philosophy
              </span>
              <h2
                className="font-serif text-charcoal font-light leading-[1.1]"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                We do not sell
                <br />
                <em className="text-gold-dark italic">travel.</em>
                <br />
                We craft{' '}
                <em className="italic">belonging.</em>
              </h2>
            </div>

            <div className="scroll-reveal scroll-reveal-delay-1 mt-10">
              <span className="gold-line" />
            </div>

            <div className="scroll-reveal scroll-reveal-delay-2 mt-10">
              <p className="font-sans text-charcoal/60 font-light leading-[1.8] text-base">
                Elevated India is not a tour operator. We are a private house of travel—
                a small, discerning team that designs bespoke journeys for those who
                seek more than the extraordinary.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-20">
            <div className="scroll-reveal scroll-reveal-delay-1">
              <p
                className="font-serif text-charcoal/80 font-light leading-[1.65] mb-10"
                style={{ fontSize: 'clamp(1.25rem, 2vw, 1.55rem)' }}
              >
                "Every detail — the room that overlooks the right courtyard, the artisan
                who opens his workshop for one afternoon, the silence of a Himalayan
                dawn reserved only for you — is chosen with intention."
              </p>
            </div>

            <div className="scroll-reveal scroll-reveal-delay-2">
              <p className="font-sans text-charcoal/55 font-light leading-[1.9] text-sm lg:text-base mb-8">
                We work with a select number of clients each year, ensuring that our
                attention never becomes diluted. Each journey begins with a private
                conversation — an exploration of what India means to you, and what
                you wish to carry home.
              </p>
            </div>

            <div className="scroll-reveal scroll-reveal-delay-3">
              <p className="font-sans text-charcoal/55 font-light leading-[1.9] text-sm lg:text-base">
                From ancestral havelis in Rajasthan to uncharted river valleys in the
                northeast, from a private audience with a Kathakali master to dawn on
                the Ganga — we open the India that others only glimpse.
              </p>
            </div>

            <div className="scroll-reveal scroll-reveal-delay-4 mt-12">
              <a
                href="#contact"
                className="font-sans text-xs tracking-widest uppercase text-gold hover:text-gold-dark transition-colors duration-300 inline-flex items-center gap-3 group"
              >
                Begin a private conversation
                <span className="block w-8 h-px bg-gold group-hover:w-12 transition-all duration-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
