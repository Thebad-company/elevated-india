import { useScrollReveal } from '../hooks/useScrollReveal';

const testimonials = [
  {
    quote:
      "We have travelled extensively, and I have never experienced a journey assembled with such intelligence and care. Every detail carried meaning. India, through Elevated India\u2019s lens, became a country I felt I had finally understood.",
    attribution: 'A family from Geneva, revisiting after fifteen years',
    delay: '',
  },
  {
    quote:
      'The access they arranged — to places, to people, to conversations — was completely unlike anything I had experienced elsewhere. There is no other word for it: remarkable.',
    attribution: 'A solo traveller from New York',
    delay: 'scroll-reveal-delay-2',
  },
  {
    quote:
      'What I valued most was the restraint. Nothing was over-explained. Nothing was commodified. They trusted us to experience India in our own way, and then quietly ensured everything was exactly right.',
    attribution: 'A couple from London, anniversary journey',
    delay: 'scroll-reveal-delay-4',
  },
];

export default function Testimonials() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      ref={sectionRef}
      className="py-28 lg:py-40 bg-ivory-200"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="scroll-reveal mb-16 lg:mb-20 text-center">
          <span className="font-sans text-[10px] tracking-ultra uppercase text-gold block mb-5">
            From Those Who Have Travelled
          </span>
          <h2
            className="font-serif text-charcoal font-light leading-[1.1]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            In Their Own Words
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-charcoal/10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`scroll-reveal ${t.delay} px-0 lg:px-12 py-10 lg:py-0 first:pl-0 last:pr-0`}
            >
              <span className="font-serif text-gold text-5xl leading-none block mb-6 font-light">"</span>
              <p
                className="font-serif text-charcoal/75 font-light leading-[1.7] mb-8 italic"
                style={{ fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)' }}
              >
                {t.quote}
              </p>
              <span className="gold-line mb-4 block" />
              <p className="font-sans text-[10px] tracking-widest uppercase text-charcoal/40 font-light">
                {t.attribution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
