import { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const journeyTypes = [
  'Royal Residences',
  'Private Safaris',
  'Spiritual Journeys',
  'Cultural Immersion',
  'Celebrations',
  'Family Travel',
  'Custom Journey',
];

interface FormState {
  name: string;
  email: string;
  journey_type: string;
  message: string;
}

export default function FinalCTA() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    journey_type: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitting(true);
    setError('');
    try {
      // Mocking submission since Supabase was removed
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or write to us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    if (submitted) {
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', email: '', journey_type: '', message: '' });
      }, 400);
    }
  };

  return (
    <>
      <section
        id="contact"
        ref={sectionRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=1920&q=85"
            alt=""
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/75 via-charcoal/65 to-charcoal/80" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto py-32">
          <div className="scroll-reveal">
            <span className="font-sans text-[10px] tracking-ultra uppercase text-gold block mb-8">
              Begin a Private Conversation
            </span>
          </div>

          <div className="scroll-reveal scroll-reveal-delay-1">
            <h2
              className="font-serif text-ivory-100 font-light leading-[1.08] mb-8"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              The Journey Begins
              <br />
              with a <em className="italic text-gold-light">Single Word.</em>
            </h2>
          </div>

          <div className="scroll-reveal scroll-reveal-delay-2">
            <p className="font-sans text-ivory-200/65 font-light leading-relaxed text-sm lg:text-base max-w-lg mx-auto mb-14">
              Tell us where your imagination leads, and we will begin to construct
              an India you have not yet imagined — with meticulous care and
              absolute discretion.
            </p>
          </div>

          <div className="scroll-reveal scroll-reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="btn-gold font-sans text-xs uppercase px-10 py-4 w-full sm:w-auto"
            >
              Design My Journey
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-outline-ivory font-sans text-xs uppercase px-10 py-4 w-full sm:w-auto"
            >
              Speak With a Travel Curator
            </button>
          </div>

          <div className="scroll-reveal scroll-reveal-delay-4 mt-16 pt-16 border-t border-ivory-100/15">
            <p className="font-sans text-ivory-200/35 text-xs tracking-widest uppercase">
              We accept a limited number of journeys each year
            </p>
          </div>
        </div>
      </section>

      <div
        className={`fixed inset-0 z-[200] flex items-end sm:items-center justify-center transition-all duration-500 ${
          modalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-charcoal/70 nav-blur"
          onClick={closeModal}
        />

        <div
          className={`relative bg-ivory-50 w-full sm:max-w-xl max-h-[92vh] overflow-y-auto transition-all duration-500 ${
            modalOpen ? 'translate-y-0 sm:scale-100' : 'translate-y-8 sm:scale-95'
          }`}
        >
          <div className="sticky top-0 bg-ivory-50 z-10 px-8 pt-8 pb-6 flex items-start justify-between border-b border-charcoal/8">
            <div>
              <h3 className="font-serif text-charcoal text-2xl font-light">
                Begin Your Journey
              </h3>
              <p className="font-sans text-charcoal/45 text-xs tracking-widest uppercase mt-1">
                A private conversation
              </p>
            </div>
            <button
              onClick={closeModal}
              className="text-charcoal/40 hover:text-charcoal transition-colors duration-200 mt-1"
              aria-label="Close"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          <div className="px-8 py-8">
            {submitted ? (
              <div className="py-10 text-center">
                <CheckCircle
                  size={40}
                  strokeWidth={1}
                  className="text-gold mx-auto mb-6"
                />
                <h4 className="font-serif text-charcoal text-2xl font-light mb-4">
                  Thank You
                </h4>
                <p className="font-sans text-charcoal/55 text-sm font-light leading-relaxed max-w-xs mx-auto mb-8">
                  Your inquiry has been received. A member of our team will be in
                  touch within 48 hours.
                </p>
                <button
                  onClick={closeModal}
                  className="btn-outline-gold font-sans text-xs uppercase px-8 py-3"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-sans text-[10px] tracking-widest uppercase text-charcoal/45 block mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Full name"
                      className="w-full bg-transparent border-b border-charcoal/20 focus:border-gold pb-2.5 font-sans text-sm text-charcoal placeholder-charcoal/25 outline-none transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="font-sans text-[10px] tracking-widest uppercase text-charcoal/45 block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full bg-transparent border-b border-charcoal/20 focus:border-gold pb-2.5 font-sans text-sm text-charcoal placeholder-charcoal/25 outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-sans text-[10px] tracking-widest uppercase text-charcoal/45 block mb-2">
                    Journey Interest
                  </label>
                  <select
                    name="journey_type"
                    value={form.journey_type}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-charcoal/20 focus:border-gold pb-2.5 font-sans text-sm text-charcoal outline-none transition-colors duration-300 cursor-pointer appearance-none"
                  >
                    <option value="">Select a category</option>
                    {journeyTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-sans text-[10px] tracking-widest uppercase text-charcoal/45 block mb-2">
                    Tell Us About Your Journey
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="When you imagine your ideal India journey, what do you see?"
                    className="w-full bg-transparent border-b border-charcoal/20 focus:border-gold pb-2.5 font-sans text-sm text-charcoal placeholder-charcoal/25 outline-none transition-colors duration-300 resize-none"
                  />
                </div>

                {error && (
                  <p className="font-sans text-xs text-maroon">{error}</p>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-gold font-sans text-xs uppercase px-10 py-4 w-full disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Sending...' : 'Submit Inquiry'}
                  </button>
                </div>

                <p className="font-sans text-[10px] text-charcoal/30 text-center leading-relaxed">
                  Your information is held in complete confidence and will never
                  be shared or used for commercial purposes.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
