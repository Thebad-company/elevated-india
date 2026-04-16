import { useScrollReveal } from '../hooks/useScrollReveal';

const pillars = [
  {
    title: 'Royal Residences',
    subtitle: 'Palaces & Heritage Retreats',
    image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=900&q=85',
    delay: '',
  },
  {
    title: 'Private Safaris',
    subtitle: 'Wilderness & Wild Encounters',
    image: 'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=900&q=85',
    delay: 'scroll-reveal-delay-1',
  },
  {
    title: 'Spiritual Journeys',
    subtitle: 'Sacred Spaces & Inner Paths',
    image: 'https://images.pexels.com/photos/2387871/pexels-photo-2387871.jpeg?auto=compress&cs=tinysrgb&w=900&q=85',
    delay: 'scroll-reveal-delay-2',
  },
  {
    title: 'Cultural Immersion',
    subtitle: 'Living Traditions & Hidden Arts',
    image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=900&q=85',
    delay: 'scroll-reveal-delay-3',
  },
  {
    title: 'Celebrations',
    subtitle: 'Intimate Events & Grand Occasions',
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=900&q=85',
    delay: 'scroll-reveal-delay-4',
  },
  {
    title: 'Family Travel',
    subtitle: 'Generational Bonds & Discovery',
    image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=900&q=85',
    delay: 'scroll-reveal-delay-5',
  },
];

export default function ExperiencePillars() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="experiences"
      ref={sectionRef}
      className="py-24 lg:py-36 bg-ivory-200"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="scroll-reveal mb-16 lg:mb-20">
          <span className="font-sans text-[10px] tracking-ultra uppercase text-gold block mb-5">
            Curated Categories
          </span>
          <h2
            className="font-serif text-charcoal font-light leading-[1.1] max-w-lg"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            How Would You Like
            <br />
            to Experience India?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className={`scroll-reveal ${pillar.delay} group relative overflow-hidden aspect-[4/5] cursor-pointer card-lift`}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="img-zoom-inner w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent transition-opacity duration-500 group-hover:from-charcoal/90" />

              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="overflow-hidden mb-2">
                  <span className="gold-line mb-3 block transition-all duration-500 group-hover:w-14" />
                </div>
                <h3 className="font-serif text-ivory-100 font-light text-2xl leading-tight mb-1.5">
                  {pillar.title}
                </h3>
                <p className="font-sans text-ivory-200/60 text-xs tracking-widest uppercase font-light">
                  {pillar.subtitle}
                </p>
              </div>

              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                <span className="font-sans text-[9px] tracking-ultra uppercase text-gold border border-gold/40 px-2.5 py-1">
                  Explore
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
