export type Page = 'home' | 'products' | 'pet' | 'pp' | 'trash-bags' | 'industries' | 'about' | 'custom' | 'faq' | 'contact';

export interface Product {
  id: string;
  title: string;
  description: string;
  shortDesc: string;
  image: string;
  benefits: string[];
  specs: {
    volumes?: string[];
    material: string;
    thickness?: string;
    temperature?: string;
    packaging: string;
  };
  useCases: string[];
}
