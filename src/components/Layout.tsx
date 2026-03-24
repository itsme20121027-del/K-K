import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Page } from '../types';
import { AllLogos } from './CertificationIcons';

interface NavbarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Products', page: 'products' },
    { label: 'Industries', page: 'industries' },
    { label: 'About', page: 'about' },
    { label: 'FAQ', page: 'faq' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => handleNavClick('home')}
          >
            <div className="text-2xl font-bold tracking-tighter flex items-center">
              <span className="text-earth">KUEK</span>
              <span className="text-sage">&</span>
              <span className="text-earth">KUEH</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-sm font-medium transition-colors hover:text-sage ${
                  activePage === item.page ? 'text-sage' : 'text-earth'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('contact')}
              className="btn-emerald text-sm py-2 px-5"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-earth p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`block w-full text-left px-3 py-3 text-base font-medium ${
                    activePage === item.page ? 'text-sage bg-sage/5' : 'text-earth hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 px-3">
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="w-full btn-emerald text-center"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  return (
    <footer className="bg-earth text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-tighter flex items-center">
              <span>KUEK</span>
              <span className="text-sage">&</span>
              <span>KUEH</span>
            </div>
            <p className="text-warm-bg/80 text-sm leading-relaxed max-w-xs">
              The reliable backbone for high-volume packaging. Providing food-safe, durable plastic containers and commercial trash bags on time, every time.
            </p>
            <div className="flex space-x-4 pt-2">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-sage transition-colors cursor-pointer">
                <MessageSquare size={16} />
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-sage transition-colors cursor-pointer">
                <Phone size={16} />
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-sage transition-colors cursor-pointer">
                <Mail size={16} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><button onClick={() => onNavigate('home')} className="text-warm-bg/70 hover:text-sage text-sm transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('products')} className="text-warm-bg/70 hover:text-sage text-sm transition-colors">Products</button></li>
              <li><button onClick={() => onNavigate('industries')} className="text-warm-bg/70 hover:text-sage text-sm transition-colors">Industries</button></li>
              <li><button onClick={() => onNavigate('about')} className="text-warm-bg/70 hover:text-sage text-sm transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('contact')} className="text-warm-bg/70 hover:text-sage text-sm transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              <li><button onClick={() => onNavigate('pet')} className="text-warm-bg/70 hover:text-sage text-sm transition-colors">PET Containers</button></li>
              <li><button onClick={() => onNavigate('pp')} className="text-warm-bg/70 hover:text-sage text-sm transition-colors">PP Containers</button></li>
              <li><button onClick={() => onNavigate('trash-bags')} className="text-warm-bg/70 hover:text-sage text-sm transition-colors">Commercial Trash Bags</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="text-sage shrink-0 mt-1" size={18} />
                <span className="text-warm-bg/70 text-sm">+60 12-345 6789</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="text-sage shrink-0 mt-1" size={18} />
                <span className="text-warm-bg/70 text-sm">sales@kuekandkueh.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MessageSquare className="text-sage shrink-0 mt-1" size={18} />
                <span className="text-warm-bg/70 text-sm">WhatsApp: +60 12-345 6789</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-warm-bg/40">
          <div className="mb-6 md:mb-0">
            <AllLogos size={16} className="opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
          </div>
          <p>© 2026 Kuek & Kueh Packaging Solutions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="hover:text-sage transition-colors">Privacy Policy</button>
            <button className="hover:text-sage transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const ContactForm: React.FC<{ product?: string }> = ({ product }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 rounded-xl shadow-lg text-center border border-sage/20"
      >
        <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <MessageSquare className="text-sage" size={32} />
        </div>
        <h3 className="text-2xl font-bold text-earth mb-2">Quote Request Received</h3>
        <p className="text-gray-600 mb-6">
          Thank you for your inquiry. Our B2B sales team will respond with competitive bulk pricing within 2 hours during business days.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="btn-primary w-full"
        >
          Send Another Inquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Full Name</label>
            <input 
              required
              type="text" 
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-all"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Company Name</label>
            <input 
              required
              type="text" 
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-all"
              placeholder="Acme F&B Group"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Email Address</label>
            <input 
              required
              type="email" 
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-all"
              placeholder="john@company.com"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Phone / WhatsApp</label>
            <input 
              required
              type="tel" 
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-all"
              placeholder="+60 12-345 6789"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Product of Interest</label>
          <select 
            defaultValue={product || ""}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-all appearance-none"
          >
            <option value="" disabled>Select a product</option>
            <option value="biodegradable">PLA Containers</option>
            <option value="pet">PET Containers</option>
            <option value="pp">PP Containers</option>
            <option value="trash-bags">Commercial Trash Bags</option>
            <option value="custom">Custom / OEM Solutions</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Estimated Monthly Volume</label>
          <select 
            required
            defaultValue=""
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-all appearance-none"
          >
            <option value="" disabled>Select volume range</option>
            <option value="1000-5000">1,000 - 5,000 units</option>
            <option value="5000-20000">5,000 - 20,000 units</option>
            <option value="20000-100000">20,000 - 100,000 units</option>
            <option value="100000+">100,000+ units</option>
          </select>
        </div>

        <div className="pt-2">
          <button 
            type="submit"
            className="w-full btn-emerald py-4 text-lg font-bold shadow-lg hover:shadow-sage/20"
          >
            Get Bulk Pricing
          </button>
          <p className="text-center text-[10px] text-gray-400 mt-3 uppercase tracking-widest">
            Your data is secure. No spam, just pricing.
          </p>
        </div>
      </div>
    </form>
  );
};
