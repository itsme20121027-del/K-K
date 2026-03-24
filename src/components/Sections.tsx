import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ShieldCheck, Truck, TrendingUp, ArrowRight, Star } from 'lucide-react';
import { PRODUCTS, TESTIMONIALS } from '../constants';
import { Page, Product } from '../types';
import { ContactForm } from './Layout';
import { AllLogos } from './CertificationIcons';

export const Hero: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-earth">
      {/* Background Overlay */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://picsum.photos/seed/warm-containers-stack/1920/1080?sepia=1" 
          alt="Warm Containers background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-earth via-earth/90 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-sage/10 border border-sage/20 px-3 py-1 rounded-full mb-6">
              <span className="w-2 h-2 bg-sage rounded-full animate-pulse"></span>
              <span className="text-sage text-xs font-bold uppercase tracking-widest">Eco-Conscious B2B Packaging</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
              Sustainable Packaging for <span className="text-sand">High-Volume</span> Businesses
            </h1>
            <p className="text-warm-bg/90 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              From plant-based PLA to durable PP containers, we provide food-safe packaging that respects the planet and your bottom line.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => onNavigate('contact')}
                className="btn-warm text-lg px-8 py-4 flex items-center justify-center group"
              >
                Request a Custom Quote
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button 
                onClick={() => onNavigate('products')}
                className="btn-secondary bg-transparent text-white border-white/30 hover:bg-white/10 text-lg px-8 py-4"
              >
                Browse Product Catalog
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://picsum.photos/seed/warm-packaging-lifestyle/800/800" 
                alt="Eco-Friendly Packaging Lifestyle" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="bg-sage/10 p-3 rounded-lg">
                  <TrendingUp className="text-sage" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-earth">100%</p>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Food Safe Certified</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const TrustBar: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] md:max-w-[200px]">
            Trusted by 500+ Eco-Conscious F&B Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            <AllLogos size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductCategories: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-earth mb-4">Our Product Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Specialized packaging solutions engineered for performance, safety, and environmental responsibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden relative group">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-earth/20 group-hover:bg-earth/0 transition-colors"></div>
                {product.id === 'biodegradable' && (
                  <div className="absolute top-4 right-4 bg-sage text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                    Eco Choice
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-earth mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4 text-xs leading-relaxed flex-grow">
                  {product.shortDesc}
                </p>
                <button 
                  onClick={() => onNavigate(product.id as Page)}
                  className="flex items-center text-sage font-bold text-xs group"
                >
                  View Details
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const WhyChooseUs: React.FC = () => {
  const differentiators = [
    {
      icon: <ShieldCheck className="text-sage" size={32} />,
      title: "Unmatched Reliability",
      desc: "Consistent stock levels and high-capacity fulfillment to keep your business running without interruption."
    },
    {
      icon: <CheckCircle className="text-sage" size={32} />,
      title: "Food-Safe Certified",
      desc: "Rigorously tested, 100% food-grade materials for ultimate consumer safety and compliance."
    },
    {
      icon: <TrendingUp className="text-sage" size={32} />,
      title: "Scalable Bulk Pricing",
      desc: "Maximize your profit margins through our competitive, tiered bulk pricing structures tailored for high volume."
    },
    {
      icon: <Truck className="text-sage" size={32} />,
      title: "Rapid Fulfillment",
      desc: "Streamlined logistics and dispatch within 48 hours for standard stock to ensure on-time delivery."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-earth mb-6">Why Partner With Kuek & Kueh?</h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              In B2B industrial packaging, reliability is the only metric that matters. We've built our reputation on being the consistent backbone for high-volume businesses.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {differentiators.map((item, index) => (
                <div key={index} className="space-y-3">
                  <div className="bg-sage/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-earth">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/warm-container-quality/800/1000" 
                alt="Container Quality Control" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Testimonial */}
            <div className="absolute -bottom-10 -right-10 bg-earth p-8 rounded-2xl shadow-2xl max-w-sm hidden md:block border border-white/10">
              <div className="flex text-sand mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-white text-sm italic mb-4 leading-relaxed">
                "{TESTIMONIALS[0].text}"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center text-earth font-bold">
                  {TESTIMONIALS[0].author[0]}
                </div>
                <div>
                  <p className="text-white text-xs font-bold">{TESTIMONIALS[0].author}</p>
                  <p className="text-sand text-[10px] uppercase tracking-wider">{TESTIMONIALS[0].company}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const BuyingProcess: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Request a Quote",
      desc: "Tell us your volume, specifications, and industry requirements via our fast-response form."
    },
    {
      number: "02",
      title: "Receive Samples",
      desc: "Test our quality risk-free. We ship samples to your facility for rigorous performance testing."
    },
    {
      number: "03",
      title: "Confirm & Receive",
      desc: "Finalize your bulk order and receive fast, reliable delivery through our logistics network."
    }
  ];

  return (
    <section className="py-24 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-earth mb-4">Our Streamlined Buying Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We've removed the friction from B2B procurement so you can focus on your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-gray-200 -z-10"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-6">
              <div className="w-16 h-16 bg-white rounded-full border-4 border-warm-bg shadow-lg flex items-center justify-center mx-auto relative z-10">
                <span className="text-sage font-black text-xl">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-earth">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FinalCTA: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-earth relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-sage rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-terracotta rounded-full blur-[120px]"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to upgrade your packaging supply chain?</h2>
        <p className="text-warm-bg/90 text-xl mb-10">
          Get competitive bulk pricing and response within 24 hours. Join 500+ businesses who trust Kuek & Kueh.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button 
            onClick={() => onNavigate('contact')}
            className="btn-warm text-xl px-10 py-5 font-bold"
          >
            Get Your Free Quote Now
          </button>
          <button 
            onClick={() => onNavigate('about')}
            className="btn-secondary bg-transparent text-white border-white/30 hover:bg-white/10 text-xl px-10 py-5"
          >
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
};

