export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-100 border-t border-ivory-100/8 py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="mb-4">
            <span className="font-serif text-2xl tracking-widest text-ivory-200 font-light">
              ELEVATED
            </span>
            <span className="block font-sans text-[9px] tracking-ultra uppercase text-gold mt-0.5">
              India
            </span>
          </div>

          <span className="block w-8 h-px bg-gold/40 my-6" />

          <p className="font-sans text-ivory-200/35 text-xs font-light tracking-widest max-w-xs">
            A Private House of Travel
          </p>
        </div>

        <div className="border-t border-ivory-100/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="font-sans text-[10px] text-ivory-200/20 tracking-widest">
            &copy; {year} Elevated India. All rights reserved.
          </p>

          <div className="flex items-center gap-8">
            {['Privacy Policy', 'Terms', 'Contact'].map((link) => (
              <a
                key={link}
                href="#"
                className="font-sans text-[10px] tracking-widest uppercase text-ivory-200/30 hover:text-gold transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
