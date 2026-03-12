import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Send } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact = () => {
  const { t } = useTranslation();
  const ref = useScrollReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    const mailtoSubject = encodeURIComponent(`KurdCut Inquiry: ${subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:zhiwaradil2004@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 fade-up" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{t('contact_title') || "Get in Touch"}</h1>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            {t('contact_subtitle') || "Have questions about Kurd Cut? We're here to help elevate your experience."}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left Column (Info Cards) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-8 flex gap-6 items-start hover:border-gold-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-dark-800 border border-dark-600 flex items-center justify-center flex-shrink-0">
                <Mail className="text-gold-500" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{t('contact_email_title') || "Email"}</h3>
                <p className="text-dark-400 mb-4 hover:text-white transition-colors">
                  <a href="mailto:zhiwaradil2004@gmail.com">zhiwaradil2004@gmail.com</a>
                </p>
                <a href="mailto:zhiwaradil2004@gmail.com" className="text-gold-500 hover:text-gold-400 font-medium">
                  zhiwaradil2004@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 flex gap-6 items-start hover:border-gold-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-dark-800 border border-dark-600 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{t('contact_hq_title') || "Headquarters"}</h3>
                <p className="text-dark-300">
                  {t('contact_hq_desc') || "Kurdistan Region, Iraq"}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-bold text-white mb-8">{t('contact_form_title') || "Send a Message"}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-dark-400 uppercase tracking-widest">{t('contact_label_name') || "Full Name"}</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="John Doe" 
                      required 
                      className="w-full bg-dark-900/50 border border-dark-600 rounded-xl px-4 py-3 text-white placeholder:text-dark-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-dark-400 uppercase tracking-widest">{t('contact_label_email') || "Email Address"}</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="john@example.com" 
                      required 
                      className="w-full bg-dark-900/50 border border-dark-600 rounded-xl px-4 py-3 text-white placeholder:text-dark-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold text-dark-400 uppercase tracking-widest">{t('contact_label_subject') || "Subject"}</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    placeholder="How can we help you?" 
                    required 
                    className="w-full bg-dark-900/50 border border-dark-600 rounded-xl px-4 py-3 text-white placeholder:text-dark-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-dark-400 uppercase tracking-widest">{t('contact_label_message') || "Message"}</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    placeholder="Tell us more about your inquiry..." 
                    required 
                    className="w-full bg-dark-900/50 border border-dark-600 rounded-xl px-4 py-3 text-white placeholder:text-dark-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button type="submit" className="accent-gradient text-dark-950 font-bold px-8 py-4 rounded-xl hover:shadow-xl hover:shadow-gold-500/20 transition-all flex items-center gap-2">
                    {t('contact_btn') || "Send Message"} <Send size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
