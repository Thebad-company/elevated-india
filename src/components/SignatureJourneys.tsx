import { useScrollReveal } from '../hooks/useScrollReveal';

const journeys = [
  {
    id: 1,
    region: 'Rajasthan · 12 to 16 Nights',
    title: "The Maharaja's India",
    narrative: `Begin in a restored Jodhpur haveli where the blue city unfolds below you like a living painting. Move through Rajasthan not as a tourist, but as a guest — welcomed into the private quarters of families who have called these palaces home for centuries. Dine under the stars in a desert that only your guide knows how to reach. End in Jaisalmer, where the golden fort turns amber at dusk and the silence is absolute.`,
    detail: 'Jodhpur · Udaipur · Jaisalmer · Private Access',
    image: '/images/rajasthan.png',
    reverse: false,
  },
  {
    id: 2,
    region: 'The Himalayas · 10 to 18 Nights',
    title: 'Above the Cloud Line',
    narrative: `There is a Himalayan India that exists beyond the trail maps — accessible only by trust, relationship, and the kind of quiet preparation that takes years to earn. We arrange accredited treks into valleys where monasteries have stood unchanged for eight hundred years. A local family hosts your arrival. A monk offers a private teaching at dawn. The mountains here are not scenery. They are alive with meaning.`,
    detail: 'Ladakh · Sikkim · Altitude Curated',
    image: '/images/himalayas.png',
    reverse: true,
  },
  {
    id: 3,
    region: 'Kerala · 9 to 14 Nights',
    title: 'The Quiet Interior',
    narrative: `Kerala's interior is a different country from its coastline. Here, in the spice-scented Western Ghats, tea estates give way to cardamom forests and silent rivers. A private houseboat navigates the backwaters as dawn breaks over the paddy fields. An Ayurvedic retreat — not a spa, but a lineage — offers treatments prescribed by a physician who has practised this art his entire life. This is the India that restores.`,
    detail: 'Western Ghats · Backwaters · Wellness & Immersion',
    image: '/images/kerala.png',
    reverse: false,
  },
  {
    id: 4,
    region: 'Tamil Nadu & Karnataka · 12 Nights',
    title: 'Temples of Time',
    narrative: `Through South India's living temples — stone corridors that have held ceremony for a thousand years, accompanied by scholars, priests, and custodians of ancient knowledge.`,
    detail: 'Hampi · Madurai · Tanjore · Cultural Curated',
    image: '/images/temples.png',
    reverse: true,
  },
  {
    id: 5,
    region: 'Kashmir · 8 Nights',
    title: 'The Hidden Valley',
    narrative: `A journey into the world's most quietly magnificent valley — shikaras on emerald lakes, saffron fields in bloom, and Himalayan light that reshapes everything it touches.`,
    detail: 'Srinagar · Gulmarg · Pahalgam · Alpine Serenity',
    image: '/images/kashmir.png',
    reverse: false,
  },
  {
    id: 6,
    region: 'Rajasthan · 10 Nights',
    title: 'The Desert Silence',
    narrative: `A passage through the Thar — from ancient citadels to private desert camps where the only sound is wind across sand. An encounter with a land shaped by warrior poets and centuries of solitude.`,
    detail: 'Jaisalmer · Thar Desert · Nomadic Luxury',
    image: '/images/desert.png',
    reverse: true,
  },
];

export default function SignatureJourneys() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="journeys"
      ref={sectionRef}
      className="py-24 lg:py-36 bg-ivory-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="scroll-reveal mb-20 lg:mb-28">
          <span className="font-sans text-[10px] tracking-ultra uppercase text-gold block mb-5">
            Signature Journeys
          </span>
          <h2
            className="font-serif text-charcoal font-light leading-[1.1] max-w-xl"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            Stories That
            <br />
            <em className="italic text-gold-dark">Only India</em> Can Tell
          </h2>
        </div>

        <div className="space-y-32 lg:space-y-44">
          {journeys.map((journey) => (
            <div
              key={journey.id}
              className={`scroll-reveal grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                journey.reverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div
                className={`lg:col-span-7 ${
                  journey.reverse ? 'lg:order-2' : 'lg:order-1'
                } group relative overflow-hidden`}
                style={{ aspectRatio: '16/10' }}
              >
                <img
                  src={journey.image}
                  alt={journey.title}
                  className="img-zoom-inner w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal/15 to-transparent" />
              </div>

              <div
                className={`lg:col-span-5 ${
                  journey.reverse ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <span className="font-sans text-[10px] tracking-ultra uppercase text-gold/70 block mb-5">
                  {journey.region}
                </span>

                <h3
                  className="font-serif text-charcoal font-light leading-[1.1] mb-7"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 2.75rem)' }}
                >
                  {journey.title}
                </h3>

                <span className="gold-line mb-7 block" />

                <p className="font-sans text-charcoal/55 font-light leading-[1.9] text-sm mb-8">
                  {journey.narrative}
                </p>

                <p className="font-sans text-[10px] tracking-widest uppercase text-charcoal/35 mb-8">
                  {journey.detail}
                </p>

                <a
                  href="#contact"
                  className="font-sans text-xs tracking-widest uppercase text-gold hover:text-gold-dark transition-colors duration-300 inline-flex items-center gap-3 group/link"
                >
                  Enquire about this journey
                  <span className="block w-8 h-px bg-gold group-hover/link:w-12 transition-all duration-400" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
