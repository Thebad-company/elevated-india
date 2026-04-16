import { Eye, Layers, BookOpen, Shield } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const pillars = [
  {
    icon: Eye,
    title: 'Privileged Access',
    body: 'Relationships cultivated over decades open doors that remain permanently closed to the general visitor — private estates, restricted temples, living heritage that tourism has not reached.',
    delay: '',
  },
  {
    icon: Layers,
    title: 'Seamless Execution',
    body: 'Every transfer, every room allocation, every table has been considered in advance. You move through India without friction, as though the country itself had anticipated your arrival.',
    delay: 'scroll-reveal-delay-1',
  },
  {
    icon: BookOpen,
    title: 'Cultural Intelligence',
    body: 'Our team includes historians, anthropologists, and artists. Context transforms encounter into understanding. You leave India not simply having seen it, but having begun to know it.',
    delay: 'scroll-reveal-delay-2',
  },
  {
    icon: Shield,
    title: 'Complete Discretion',
    body: 'Privacy is not a policy — it is a disposition. We manage a small portfolio of journeys each year so that our attention remains undivided and your experience remains entirely your own.',
    delay: 'scroll-reveal-delay-3',
  },
];

export default function WhyElevated() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      ref={sectionRef}
      className="py-28 lg:py-40 bg-charcoal"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="scroll-reveal mb-16 lg:mb-20">
          <span className="font-sans text-[10px] tracking-ultra uppercase text-gold block mb-5">
            Why Elevated India
          </span>
          <h2
            className="font-serif text-ivory-100 font-light leading-[1.1] max-w-lg"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            The Difference
            <br />
            Is <em className="italic text-gold-light">Invisible</em> Until
            <br />
            It Is Not
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ivory-300/10">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`scroll-reveal ${pillar.delay} bg-charcoal p-10 lg:p-14 group hover:bg-charcoal-50 transition-colors duration-500`}
              >
                <div className="mb-7">
                  <Icon
                    size={20}
                    strokeWidth={1}
                    className="text-gold transition-colors duration-300"
                  />
                </div>
                <h3 className="font-serif text-ivory-100 font-light text-2xl mb-5 leading-tight">
                  {pillar.title}
                </h3>
                <span className="gold-line mb-6 block transition-all duration-500 group-hover:w-14" />
                <p className="font-sans text-ivory-200/50 font-light leading-[1.9] text-sm">
                  {pillar.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
