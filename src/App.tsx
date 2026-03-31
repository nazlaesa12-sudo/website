import { motion } from "motion/react";
import { Anchor, Ship, Globe, Shield, Phone, Mail, MapPin, ChevronRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Anchor className={`w-8 h-8 ${isScrolled ? "text-gold" : "text-white"}`} />
          <span className={`text-xl font-serif font-bold tracking-widest ${isScrolled ? "text-ocean-dark" : "text-white"}`}>
            SEA LAND <span className="text-gold">INDONESIA</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {["Home", "About", "Services", "Fleet", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm uppercase tracking-widest font-medium hover:text-gold transition-colors ${isScrolled ? "text-ocean-dark" : "text-white"}`}
            >
              {item}
            </a>
          ))}
          <button className="bg-gold text-white px-6 py-2 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-gold/80 transition-all">
            Inquiry
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className={isScrolled ? "text-ocean-dark" : "text-white"} /> : <Menu className={isScrolled ? "text-ocean-dark" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center gap-6 md:hidden"
        >
          {["Home", "About", "Services", "Fleet", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-ocean-dark text-sm uppercase tracking-widest font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=1920"
          alt="Ocean Background"
          className="w-full h-full object-cover scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 sea-gradient"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-gold font-serif italic text-xl md:text-2xl mb-4 tracking-wide">Excellence in Maritime Logistics</h2>
          <h1 className="text-white text-5xl md:text-8xl font-serif font-light leading-tight mb-8 tracking-tight">
            Navigating the <span className="italic">Future</span> of Global Trade
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            PT Sea Land Indonesia provides premium shipping services from Semarang to the world, combining tradition with cutting-edge technology.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-gold text-white px-10 py-4 rounded-full text-sm uppercase tracking-[0.2em] font-bold hover:bg-gold/90 transition-all">
              Discover Our Fleet
            </button>
            <button className="border border-white/30 text-white px-10 py-4 rounded-full text-sm uppercase tracking-[0.2em] font-bold hover:bg-white/10 transition-all backdrop-blur-sm">
              Our Services
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"
        />
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1000"
                alt="Semarang Port"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-gold p-10 rounded-2xl hidden md:block">
              <p className="text-white font-serif text-4xl mb-1">25+</p>
              <p className="text-white/80 text-xs uppercase tracking-widest font-bold">Years of Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">Legacy of Trust</h3>
            <h2 className="text-4xl md:text-6xl font-serif text-ocean-dark mb-8 leading-tight">
              A Premier Shipping Partner in <span className="italic">Semarang</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Founded in the heart of Central Java, PT Sea Land Indonesia has grown from a local shipping agency into a global logistics powerhouse. We pride ourselves on our deep understanding of the maritime industry and our commitment to providing bespoke solutions for our distinguished clientele.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="font-serif text-xl text-ocean-dark mb-2">Global Reach</h4>
                <p className="text-gray-500 text-sm">Connecting Indonesia to major ports across five continents.</p>
              </div>
              <div>
                <h4 className="font-serif text-xl text-ocean-dark mb-2">Local Expertise</h4>
                <p className="text-gray-500 text-sm">Strategic location in Semarang, the gateway to Central Java.</p>
              </div>
            </div>
            <button className="flex items-center gap-3 text-ocean-dark font-bold uppercase tracking-widest text-xs group">
              Learn More About Us
              <div className="w-10 h-px bg-gold group-hover:w-16 transition-all" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Ship className="w-8 h-8" />,
      title: "Ocean Freight",
      desc: "Reliable and efficient sea transportation for bulk and containerized cargo."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Logistics",
      desc: "End-to-end supply chain management tailored to your business needs."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Customs Clearance",
      desc: "Expert handling of all regulatory requirements for seamless transit."
    },
    {
      icon: <Anchor className="w-8 h-8" />,
      title: "Port Services",
      desc: "Comprehensive agency services at Semarang and major Indonesian ports."
    }
  ];

  return (
    <section id="services" className="py-24 bg-ocean-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">Our Expertise</h3>
          <h2 className="text-4xl md:text-6xl font-serif text-ocean-dark mb-6">World-Class Solutions</h2>
          <div className="w-24 h-px bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-2xl hover:shadow-2xl transition-all group cursor-pointer border border-transparent hover:border-gold/20"
            >
              <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h4 className="text-2xl font-serif text-ocean-dark mb-4">{service.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <ChevronRight className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Fleet = () => {
  return (
    <section id="fleet" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h3 className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">The Fleet</h3>
            <h2 className="text-4xl md:text-6xl font-serif text-ocean-dark mb-6 leading-tight">
              Modern Vessels for <span className="italic">Modern Trade</span>
            </h2>
          </div>
          <button className="border border-gold text-gold px-8 py-3 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-gold hover:text-white transition-all">
            View All Vessels
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group overflow-hidden rounded-2xl aspect-video">
            <img
              src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1200"
              alt="Container Ship"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
              <div>
                <p className="text-gold text-xs uppercase tracking-widest font-bold mb-2">Container Carrier</p>
                <h4 className="text-white text-3xl font-serif">SLI Ocean Master</h4>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl aspect-video">
            <img
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1200"
              alt="Bulk Carrier"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
              <div>
                <p className="text-gold text-xs uppercase tracking-widest font-bold mb-2">Bulk Carrier</p>
                <h4 className="text-white text-3xl font-serif">SLI Semarang Pride</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-ocean-dark text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <Anchor className="w-full h-full scale-150 rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h3 className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">Contact Us</h3>
            <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-tight">
              Let's Chart a <span className="italic text-gold">Course</span> Together
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2">Headquarters</h4>
                  <p className="text-white/60 leading-relaxed">
                    Jl. Pemuda No. 123, Central Semarang,<br />
                    Semarang, Central Java 50132, Indonesia
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2">Phone</h4>
                  <p className="text-white/60">+62 24 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2">Email</h4>
                  <p className="text-white/60">contact@sealandindonesia.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-2xl">
            <h4 className="text-ocean-dark text-2xl font-serif mb-8">Send an Inquiry</h4>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-gray-50 border-none p-4 rounded-lg text-ocean-dark focus:ring-2 focus:ring-gold outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-gray-50 border-none p-4 rounded-lg text-ocean-dark focus:ring-2 focus:ring-gold outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-gray-50 border-none p-4 rounded-lg text-ocean-dark focus:ring-2 focus:ring-gold outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full bg-gray-50 border-none p-4 rounded-lg text-ocean-dark focus:ring-2 focus:ring-gold outline-none resize-none"
              ></textarea>
              <button className="w-full bg-gold text-white py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-gold/90 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-ocean-dark border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Anchor className="w-6 h-6 text-gold" />
          <span className="text-white font-serif font-bold tracking-widest">
            SEA LAND <span className="text-gold">INDONESIA</span>
          </span>
        </div>
        <p className="text-white/40 text-xs uppercase tracking-widest">
          &copy; 2026 PT Sea Land Indonesia. All Rights Reserved.
        </p>
        <div className="flex gap-6">
          {["LinkedIn", "Instagram", "Twitter"].map((social) => (
            <a key={social} href="#" className="text-white/40 hover:text-gold transition-colors text-xs uppercase tracking-widest">
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Fleet />
      <Contact />
      <Footer />
    </main>
  );
}
