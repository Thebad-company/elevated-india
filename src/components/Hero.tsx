import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const heroImages = [
  '/images/rajasthan.png',
  '/images/himalayas.png',
  '/images/kerala.png',
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = heroImages[0];
    img.onload = () => {
      setLoaded(true);
      setTimeout(() => setVisible(true), 100);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {heroImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: i === currentImage ? 1 : 0 }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover object-center"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/35 to-charcoal/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/20 via-transparent to-charcoal/20" />

      <div
        className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-[1400ms] ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p
          className="font-sans text-gold text-[10px] tracking-ultra uppercase mb-8"
          style={{ transitionDelay: '200ms' }}
        >
          A Private Travel House
        </p>

        <h1 className="font-serif text-ivory-100 font-light leading-[1.08] mb-8"
          style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}
        >
          India,{' '}
          <span className="italic text-gold-light">Elevated</span>
        </h1>

        <p className="font-sans text-ivory-200/75 font-light leading-relaxed max-w-xl mx-auto mb-12"
          style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.05rem)' }}
        >
          Bespoke journeys crafted with rare access, cultural depth,
          and uncompromising discretion.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="btn-gold font-sans text-xs uppercase px-10 py-4 inline-block"
          >
            Begin Your Journey
          </a>
          <a
            href="#journeys"
            className="btn-outline-ivory font-sans text-xs uppercase px-10 py-4 inline-block"
          >
            Explore Journeys
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-ivory-200/50 hover:text-gold transition-colors duration-300"
          aria-label="Scroll down"
        >
          <span className="font-sans text-[9px] tracking-ultra uppercase">Scroll</span>
          <ChevronDown
            size={16}
            strokeWidth={1}
            className="animate-bounce"
            style={{ animationDuration: '2s' }}
          />
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ivory-100 to-transparent z-10" />
    </section>
  );
}
