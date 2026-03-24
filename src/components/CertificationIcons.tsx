import React from 'react';
import { Leaf, Recycle, ShieldCheck, CheckCircle2, FlaskConical, Globe } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const FoodSafeLogo: React.FC<LogoProps> = ({ className = "", size = 24 }) => (
  <div className={`flex flex-col items-center justify-center text-center ${className}`}>
    <div className="bg-sage/10 p-2 rounded-full mb-1">
      <CheckCircle2 size={size} className="text-sage" />
    </div>
    <span className="text-[10px] font-bold uppercase tracking-tighter text-earth">Food Safe</span>
  </div>
);

export const RecyclableLogo: React.FC<LogoProps> = ({ className = "", size = 24 }) => (
  <div className={`flex flex-col items-center justify-center text-center ${className}`}>
    <div className="bg-sage/10 p-2 rounded-full mb-1">
      <Recycle size={size} className="text-sage" />
    </div>
    <span className="text-[10px] font-bold uppercase tracking-tighter text-earth">Recyclable</span>
  </div>
);

export const BiodegradableLogo: React.FC<LogoProps> = ({ className = "", size = 24 }) => (
  <div className={`flex flex-col items-center justify-center text-center ${className}`}>
    <div className="bg-sage/10 p-2 rounded-full mb-1">
      <Leaf size={size} className="text-sage" />
    </div>
    <span className="text-[10px] font-bold uppercase tracking-tighter text-earth">Biodegradable</span>
  </div>
);

export const QualityAssuredLogo: React.FC<LogoProps> = ({ className = "", size = 24 }) => (
  <div className={`flex flex-col items-center justify-center text-center ${className}`}>
    <div className="bg-sage/10 p-2 rounded-full mb-1">
      <ShieldCheck size={size} className="text-sage" />
    </div>
    <span className="text-[10px] font-bold uppercase tracking-tighter text-earth">Quality Assured</span>
  </div>
);

export const BpaFreeLogo: React.FC<LogoProps> = ({ className = "", size = 24 }) => (
  <div className={`flex flex-col items-center justify-center text-center ${className}`}>
    <div className="bg-sage/10 p-2 rounded-full mb-1">
      <FlaskConical size={size} className="text-sage" />
    </div>
    <span className="text-[10px] font-bold uppercase tracking-tighter text-earth">BPA Free</span>
  </div>
);

export const EcoFriendlyLogo: React.FC<LogoProps> = ({ className = "", size = 24 }) => (
  <div className={`flex flex-col items-center justify-center text-center ${className}`}>
    <div className="bg-sage/10 p-2 rounded-full mb-1">
      <Globe size={size} className="text-sage" />
    </div>
    <span className="text-[10px] font-bold uppercase tracking-tighter text-earth">Eco Friendly</span>
  </div>
);

export const AllLogos: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = "" }) => (
  <div className={`flex flex-wrap items-center justify-center gap-6 ${className}`}>
    <FoodSafeLogo size={size} />
    <RecyclableLogo size={size} />
    <BiodegradableLogo size={size} />
    <QualityAssuredLogo size={size} />
    <BpaFreeLogo size={size} />
    <EcoFriendlyLogo size={size} />
  </div>
);
