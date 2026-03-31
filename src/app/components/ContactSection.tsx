import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gray-600 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
            Get In Touch
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 tracking-[-2px]" style={{ fontFamily: 'Instrument Serif, serif' }}>
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Instrument Serif, serif' }}>
                Let's Talk
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>Email</p>
                    <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>mitchortegawork@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>Phone</p>
                    <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>+63 938 488 0550</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>Location</p>
                    <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>Davao, Philippines</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Follow Me</p>
                <div className="flex flex-wrap justify-center gap-3 relative z-10">
                  <button
                    onClick={() => window.open('https://github.com', '_blank')}
                    className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-800 hover:scale-[1.02] transition-all shadow-md"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </button>
                  <button
                    onClick={() => window.open('https://linkedin.com', '_blank')}
                    className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-800 hover:scale-[1.02] transition-all shadow-md"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </button>
                  <button
                    onClick={() => window.open('https://twitter.com', '_blank')}
                    className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-800 hover:scale-[1.02] transition-all shadow-md"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <Twitter className="w-4 h-4" />
                    Twitter
                  </button>
                  <button
                    onClick={() => window.location.href = 'mailto:mitchortegawork@gmail.com'}
                    className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-800 hover:scale-[1.02] transition-all shadow-md"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="John Doe"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full text-sm font-bold uppercase tracking-wider hover:bg-gray-800 hover:scale-[1.02] transition-all shadow-lg"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
