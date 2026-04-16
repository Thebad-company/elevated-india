import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Journeys', href: '#journeys' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navBg = scrolled
    ? 'bg-ivory-50/90 nav-blur border-b border-ivory-300/40'
    : 'bg-transparent';

  const textColor = scrolled ? 'text-charcoal' : 'text-ivory-100';
  const logoColor = scrolled ? 'text-charcoal' : 'text-ivory-100';
  const accentColor = scrolled ? 'text-gold' : 'text-gold-light';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <a
            href="#"
            className={`flex flex-col leading-none transition-colors duration-500 ${logoColor}`}
          >
            <span className="font-serif text-xl tracking-widest font-light">
              ELEVATED
            </span>
            <span className={`font-sans text-[10px] tracking-ultra font-light uppercase ${accentColor}`}>
              India
            </span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-sans text-xs tracking-widest uppercase font-light transition-colors duration-300 hover:text-gold ${textColor}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`font-sans text-xs tracking-widest uppercase font-light px-5 py-2.5 transition-all duration-300 ${
                scrolled
                  ? 'btn-outline-gold'
                  : 'btn-outline-ivory'
              }`}
            >
              Design My Journey
            </a>
          </div>

          <button
            className={`md:hidden transition-colors duration-300 ${textColor}`}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[100] bg-charcoal flex flex-col transition-all duration-700 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 h-20 flex items-center justify-between">
          <span className="font-serif text-xl tracking-widest text-ivory-100 font-light">
            ELEVATED <span className="text-gold text-[10px] font-sans tracking-ultra uppercase">India</span>
          </span>
          <button
            className="text-ivory-100 transition-colors hover:text-gold"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center flex-1 gap-10">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-serif text-4xl text-ivory-100 font-light tracking-wide transition-colors duration-300 hover:text-gold`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 btn-gold font-sans text-xs px-8 py-3 uppercase"
          >
            Design My Journey
          </a>
        </div>

        <div className="px-6 pb-10 text-center">
          <p className="font-sans text-xs text-ivory-300/50 tracking-widest uppercase">
            A Private Travel House
          </p>
        </div>
      </div>
    </>
  );
}
