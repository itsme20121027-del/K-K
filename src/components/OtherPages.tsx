import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, CheckCircle, ShieldCheck, Truck, TrendingUp, Users, Factory, Globe } from 'lucide-react';
import { Page } from '../types';
import { ContactForm } from './Layout';

export const AboutPage: React.FC = () => {
  const stats = [
    { icon: <Users size={24} />, value: "500+", label: "B2B Partners" },
    { icon: <Factory size={24} />, value: "10+", label: "Years Experience" },
    { icon: <Globe size={24} />, value: "Millions", label: "Units Supplied" },
    { icon: <Truck size={24} />, value: "99%", label: "On-Time Delivery" }
  ];

  return (
    <div className="pt-28 pb-24 bg-warm-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-earth mb-8">The Backbone of Sustainable Packaging</h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Kuek & Kueh was founded with a single mission: to eliminate supply chain friction for businesses that rely on high-quality packaging. We understand that in the F&B and industrial sectors, packaging isn't just a container—it's a critical component of your operations and brand reputation.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Today, we are leading the transition to more sustainable solutions, incorporating biodegradable PLA materials alongside our traditional food-grade plastics. Every aspect of our business is engineered for reliability, safety, and environmental responsibility.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-sage">{stat.icon}</div>
                  <p className="text-3xl font-bold text-earth">{stat.value}</p>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://picsum.photos/seed/about-containers/800/1000" 
              alt="Our Products" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-earth mb-4">Our Core Values</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">The principles that drive every decision we make at Kuek & Kueh.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center text-sage">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-earth">Uncompromising Safety</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We only use 100% food-grade, certified materials. Consumer safety is our absolute priority, and we never cut corners on material quality.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center text-sage">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-earth">Operational Reliability</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We know that a stockout can paralyze your business. Our inventory management and logistics are built to ensure you never run out of critical supplies.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center text-sage">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-bold text-earth">Scalable Partnership</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Whether you're a single cloud kitchen or a national supermarket chain, we provide the same level of dedicated service and scalable pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const IndustriesPage: React.FC = () => {
  const industries = [
    {
      title: "Food & Beverage",
      desc: "From cafes to cloud kitchens, we provide microwave-safe and cold-storage containers that keep food fresh and secure during transit.",
      image: "https://picsum.photos/seed/warm-food-containers-context/800/600",
      features: ["Microwave-safe PP", "Crystal clear PET", "Leak-proof seals", "Bulk pricing tiers"]
    },
    {
      title: "Retail & Supermarkets",
      desc: "High-visibility PET packaging for deli sections and retail displays, combined with reliable supply for high-volume grocery chains.",
      image: "https://picsum.photos/seed/warm-retail-packaging-display/800/600",
      features: ["Retail-ready display", "Stackable design", "Consistent stock", "Custom labeling"]
    },
    {
      title: "Industrial & Facilities",
      desc: "Heavy-duty refuse liners and industrial waste management solutions for large-scale facilities, warehouses, and commercial buildings.",
      image: "https://picsum.photos/seed/warm-industrial-liners-stack/800/600",
      features: ["Tear-resistant liners", "High load capacity", "Multiple sizes", "Bulk roll supply"]
    },
    {
      title: "Catering & Events",
      desc: "Scalable packaging solutions for large-scale event management, ensuring food safety and professional presentation for thousands of guests.",
      image: "https://picsum.photos/seed/warm-catering-containers-set/800/600",
      features: ["Large volume orders", "Fast fulfillment", "Professional look", "Reliable delivery"]
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-warm-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-earth mb-6">Tailored Industry Solutions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We understand the unique operational challenges of different sectors. Explore how our packaging solutions solve your industry-specific pain points.
          </p>
        </div>

        <div className="space-y-24">
          {industries.map((industry, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <h2 className="text-3xl font-bold text-earth mb-6">{industry.title}</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">{industry.desc}</p>
                <div className="grid grid-cols-2 gap-4">
                  {industry.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle className="text-sage shrink-0" size={18} />
                      <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="btn-warm mt-10">Request Industry Quote</button>
              </div>
              <div className={`rounded-3xl overflow-hidden shadow-xl ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img 
                  src={industry.image} 
                  alt={industry.title} 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const FAQPage: React.FC = () => {
  const faqs = [
    {
      q: "What are your Minimum Order Quantities (MOQs)?",
      a: "Our standard MOQs for stock items start at 10 cartons (usually 5,000 units). For custom or OEM orders, MOQs depend on the complexity and size of the product, typically starting at 50,000 units."
    },
    {
      q: "Are your containers 100% food-safe?",
      a: "Yes, all our PET and PP containers are manufactured using 100% virgin, food-grade materials and are BPA-free. We strictly adhere to international food safety standards."
    },
    {
      q: "How fast is your delivery fulfillment?",
      a: "For standard stock items, we aim to dispatch orders within 48 hours. Delivery timelines depend on your location, but most regional F&B partners receive their orders within 3-5 business days."
    },
    {
      q: "Do you offer custom branding or private labeling?",
      a: "Absolutely. We offer custom embossing for logos on containers and custom printing for trash bag liners. Minimum order quantities apply for all custom branding projects."
    },
    {
      q: "Can I request samples before placing a bulk order?",
      a: "Yes, we encourage B2B partners to test our quality. You can request a sample pack of any of our products through our contact form or by speaking with a sales representative."
    },
    {
      q: "What is the difference between PET and PP containers?",
      a: "PET is crystal clear and ideal for cold displays (salads, desserts) but cannot be heated. PP is translucent, heat-resistant, and microwave-safe, making it perfect for hot takeaway food."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-28 pb-24 bg-warm-bg min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-earth mb-6">Frequently Asked Questions</h1>
          <p className="text-gray-600 text-lg">
            Everything you need to know about our products, shipping, and bulk ordering process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-bold text-earth">{faq.q}</span>
                {openIndex === index ? <Minus className="text-sage" size={20} /> : <Plus className="text-sage" size={20} />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-gray-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-sage/5 p-10 rounded-3xl border border-sage/10 text-center">
          <h3 className="text-2xl font-bold text-earth mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-8">Our B2B support team is ready to help you with any specific inquiries.</p>
          <button className="btn-sage px-10">Contact Support Team</button>
        </div>
      </div>
    </div>
  );
};
