import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowLeft, Thermometer, Box, ShieldCheck, Layers, Info } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Page, Product } from '../types';
import { ContactForm } from './Layout';
import { 
  FoodSafeLogo, 
  RecyclableLogo, 
  BiodegradableLogo, 
  QualityAssuredLogo, 
  BpaFreeLogo, 
  EcoFriendlyLogo 
} from './CertificationIcons';

export const ProductDetail: React.FC<{ product: Product; onBack: () => void }> = ({ product, onBack }) => {
  return (
    <div className="pt-28 pb-24 bg-warm-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center text-earth font-bold text-sm mb-12 hover:text-sage transition-colors group"
        >
          <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={18} />
          Back to Catalog
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Gallery Area */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-100"
            >
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { w: 400, h: 400, seed: 'lifestyle' },
                { w: 400, h: 500, seed: 'side-by-side' },
                { w: 500, h: 400, seed: 'context' }
              ].map((size, i) => (
                <div key={i} className="rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-white aspect-square relative group">
                  <img 
                    src={`https://picsum.photos/seed/warm-${product.id}-${size.seed}/${size.w}/${size.h}`} 
                    alt={`${product.title} detail ${i}`} 
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-[8px] font-bold text-earth shadow-sm border border-gray-100">
                    {product.specs.volumes ? product.specs.volumes[i] || 'Custom Size' : 'Industrial Grade'}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Trust Icons */}
            <div className="flex flex-wrap justify-center items-center gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <FoodSafeLogo size={20} />
              <QualityAssuredLogo size={20} />
              {product.id === 'biodegradable' && <BiodegradableLogo size={20} />}
              {product.id === 'biodegradable' && <EcoFriendlyLogo size={20} />}
              {(product.id === 'pet' || product.id === 'pp') && <RecyclableLogo size={20} />}
              {(product.id === 'pet' || product.id === 'pp') && <BpaFreeLogo size={20} />}
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center text-sage">
                  <Box size={20} />
                </div>
                <span className="text-[8px] font-bold uppercase tracking-wider text-gray-500">Leak Proof</span>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="space-y-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-earth mb-6">{product.title}</h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {product.description}
              </p>
              
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-earth flex items-center">
                  <CheckCircle className="text-sage mr-2" size={20} />
                  Key Benefits
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-sage rounded-full mt-1.5 mr-3 shrink-0"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-earth mb-6">Size Comparison</h3>
              <div className="relative rounded-xl overflow-hidden mb-6 bg-gray-50 border border-gray-100">
                <img 
                  src={`https://picsum.photos/seed/warm-${product.id}-comparison/800/400`} 
                  alt={`${product.title} size comparison`} 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth/40 to-transparent flex items-end p-4">
                  <p className="text-white text-xs font-medium">Standard range: {product.specs.volumes?.join(' | ')}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-50">
                  <span className="text-gray-500 text-sm font-medium">Material</span>
                  <span className="text-earth text-sm font-bold">{product.specs.material}</span>
                </div>
                {product.specs.volumes && (
                  <div className="flex justify-between py-3 border-b border-gray-50">
                    <span className="text-gray-500 text-sm font-medium">Available Sizes</span>
                    <span className="text-earth text-sm font-bold">{product.specs.volumes.join(', ')}</span>
                  </div>
                )}
                {product.specs.temperature && (
                  <div className="flex justify-between py-3 border-b border-gray-50">
                    <span className="text-gray-500 text-sm font-medium">Temp Tolerance</span>
                    <span className="text-earth text-sm font-bold">{product.specs.temperature}</span>
                  </div>
                )}
                {product.specs.thickness && (
                  <div className="flex justify-between py-3 border-b border-gray-50">
                    <span className="text-gray-500 text-sm font-medium">Material Thickness</span>
                    <span className="text-earth text-sm font-bold">{product.specs.thickness}</span>
                  </div>
                )}
                <div className="flex justify-between py-3">
                  <span className="text-gray-500 text-sm font-medium">Packaging Format</span>
                  <span className="text-earth text-sm font-bold">{product.specs.packaging}</span>
                </div>
              </div>
            </div>

            <div className="bg-sage/5 p-8 rounded-2xl border border-sage/10">
              <h3 className="text-lg font-bold text-earth mb-4">Request Bulk Pricing</h3>
              <p className="text-gray-600 text-sm mb-6">
                Tell us your volume requirements and we'll provide a custom quote within 2 hours.
              </p>
              <ContactForm product={product.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductCatalog: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-24 bg-warm-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-earth mb-6">Full Product Catalog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our range of food-safe containers and industrial liners designed for high-volume commercial use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
            >
              <div className="h-64 overflow-hidden relative group">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-earth/20 group-hover:bg-earth/0 transition-colors"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-earth mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                  {product.shortDesc}
                </p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {product.benefits.slice(0, 3).map((b, i) => (
                      <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-500 px-2 py-1 rounded">
                        {b.split(' ').slice(0, 2).join(' ')}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => onNavigate(product.id as Page)}
                    className="w-full btn-warm py-3 text-sm font-bold"
                  >
                    View Details & Specs
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Order Section */}
        <div className="mt-24 bg-earth rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://picsum.photos/seed/warm-custom-container/1200/400" 
              alt="Custom packaging container background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Custom or OEM Solutions?</h2>
              <p className="text-sand text-lg mb-8 opacity-90">
                We provide custom mold creation, private labeling, and specialized sizing for high-ticket B2B orders. Discuss your unique requirements with our engineering team.
              </p>
              <button 
                onClick={() => onNavigate('custom')}
                className="btn-sage text-lg px-8 py-4"
              >
                Discuss Custom Order
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <h4 className="text-sage font-bold mb-2">Private Labeling</h4>
                <p className="text-sand/80 text-xs">Custom branding and logos embossed on containers.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <h4 className="text-sage font-bold mb-2">Custom Molds</h4>
                <p className="text-sand/80 text-xs">Bespoke sizing and shapes for unique product lines.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <h4 className="text-sage font-bold mb-2">Bulk Sourcing</h4>
                <p className="text-sand/80 text-xs">Global supply chain network for rare material requests.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <h4 className="text-sage font-bold mb-2">Fast Prototyping</h4>
                <p className="text-sand/80 text-xs">Rapid 3D modeling and sample creation for new designs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
