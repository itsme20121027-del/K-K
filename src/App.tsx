/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Page, Product } from './types';
import { PRODUCTS } from './constants';
import { Navbar, Footer, ContactForm } from './components/Layout';
import { Hero, TrustBar, ProductCategories, WhyChooseUs, BuyingProcess, FinalCTA } from './components/Sections';
import { ProductCatalog, ProductDetail } from './components/ProductPages';
import { AboutPage, IndustriesPage, FAQPage } from './components/OtherPages';
import { MessageSquare, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  // Handle navigation
  const handleNavigate = (page: Page) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  // Render the active page
  const renderPage = () => {
    // Check if it's a specific product page
    const product = PRODUCTS.find(p => p.id === activePage);
    if (product) {
      return <ProductDetail product={product} onBack={() => handleNavigate('products')} />;
    }

    switch (activePage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <TrustBar />
            <ProductCategories onNavigate={handleNavigate} />
            <WhyChooseUs />
            <BuyingProcess />
            <FinalCTA onNavigate={handleNavigate} />
          </>
        );
      case 'products':
        return <ProductCatalog onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'industries':
        return <IndustriesPage />;
      case 'faq':
        return <FAQPage />;
      case 'contact':
      case 'custom':
        return (
          <div className="pt-32 pb-24 bg-warm-bg min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold text-earth mb-8">
                    {activePage === 'custom' ? 'Discuss Your Custom Order' : 'Get Your Free Bulk Quote'}
                  </h1>
                  <p className="text-gray-600 text-lg leading-relaxed mb-10">
                    {activePage === 'custom' 
                      ? 'From custom mold creation to private labeling, our engineering team is ready to build your specialized packaging solution. Tell us your requirements below.'
                      : 'We aim to respond to all B2B inquiries within 2 hours during business days. Tell us your volume and specifications to receive competitive bulk pricing, including our new sustainable PLA options.'}
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-sage/10 p-3 rounded-lg text-sage">
                        <Phone size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-earth">Direct Sales Line</h4>
                        <p className="text-gray-500">+60 12-345 6789</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-sage/10 p-3 rounded-lg text-sage">
                        <MessageSquare size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-earth">WhatsApp Quick Chat</h4>
                        <p className="text-gray-500">Available 9AM - 6PM (Mon-Fri)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <ContactForm product={activePage === 'custom' ? 'custom' : undefined} />
              </div>
            </div>
          </div>
        );
      default:
        return <div className="pt-32 pb-24 text-center">Page under construction</div>;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activePage={activePage} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* WhatsApp Floating Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isWhatsAppOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl p-6 mb-4 w-72 border border-gray-100"
            >
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-earth">Chat with Sales</h4>
                <button onClick={() => setIsWhatsAppOpen(false)} className="text-gray-400 hover:text-earth">
                  <X size={18} />
                </button>
              </div>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Hi! 👋 Need a quick quote or have questions about our bulk pricing? Our team is online and ready to help.
              </p>
              <a 
                href="https://wa.me/60123456789" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-sage w-full flex items-center justify-center py-3"
              >
                <MessageSquare className="mr-2" size={18} />
                Start WhatsApp Chat
              </a>
            </motion.div>
          )}
        </AnimatePresence>
        
        <button
          onClick={() => setIsWhatsAppOpen(!isWhatsAppOpen)}
          className="w-16 h-16 bg-sage text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group relative"
        >
          <MessageSquare size={28} />
          {!isWhatsAppOpen && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-bounce"></span>
          )}
        </button>
      </div>
    </div>
  );
}

