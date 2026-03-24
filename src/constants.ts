import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'biodegradable',
    title: 'Eco-Friendly PLA Containers',
    shortDesc: '100% compostable, plant-based packaging for the environmentally conscious business.',
    description: 'Our PLA containers are made from renewable plant resources. They offer the clarity of plastic with the sustainability of being 100% compostable. Perfect for cold foods and businesses looking to reduce their carbon footprint.',
    image: 'https://picsum.photos/seed/warm-pla-containers-lifestyle-context/1200/800',
    benefits: [
      '100% compostable and plant-based',
      'Renewable resource (corn starch)',
      'Crystal clear visibility',
      'Reduced carbon footprint',
      'Perfect for cold salads and snacks'
    ],
    specs: {
      volumes: ['250ml', '500ml', '750ml'],
      material: 'Polylactic Acid (PLA)',
      temperature: '-10°C to 45°C',
      packaging: '500 units per carton'
    },
    useCases: [
      'Eco-conscious cafes',
      'Organic food retailers',
      'Sustainable event catering',
      'Cold food displays'
    ]
  },
  {
    id: 'pet',
    title: 'Premium PET Food Containers',
    shortDesc: 'Crystal clear, food-grade packaging perfect for cold displays and retail.',
    description: 'Our PET containers are engineered for maximum clarity and durability. Ideal for fresh salads, desserts, and cold deli items, they provide a secure seal and professional presentation that enhances your brand.',
    image: 'https://picsum.photos/seed/warm-pet-containers-side-by-side-comparison/1000/1000',
    benefits: [
      'Crystal clear transparency for product visibility',
      '100% food-safe and BPA-free material',
      'Secure, leak-resistant snap-on lids',
      'Recyclable and eco-friendly PET plastic',
      'Stackable design for efficient storage'
    ],
    specs: {
      volumes: ['250ml', '500ml', '750ml', '1000ml'],
      material: 'Polyethylene Terephthalate (PET)',
      temperature: '-20°C to 60°C',
      packaging: '500 units per carton'
    },
    useCases: [
      'Fresh salads and fruit bowls',
      'Cold pasta and deli items',
      'Desserts and confectionery',
      'Retail display packaging'
    ]
  },
  {
    id: 'pp',
    title: 'Microwave-Safe PP Containers',
    shortDesc: 'Heat-resistant durability for hot food takeaway and microwave reheating.',
    description: 'Engineered for the high-demand F&B industry, our PP containers are heat-resistant and microwave-safe. They feature a reinforced seal to prevent leaks during transit, making them the perfect choice for cloud kitchens and restaurants.',
    image: 'https://picsum.photos/seed/warm-pp-takeaway-lifestyle-stack/1200/900',
    benefits: [
      'Microwave-safe and heat-resistant up to 120°C',
      'Reinforced leak-proof seal for delivery',
      'Durable, crack-resistant material',
      'Food-grade certified PP plastic',
      'Dishwasher safe and reusable'
    ],
    specs: {
      volumes: ['500ml', '650ml', '750ml', '1000ml'],
      material: 'Polypropylene (PP)',
      temperature: '-10°C to 120°C',
      packaging: '500 units per carton'
    },
    useCases: [
      'Hot soups and stews',
      'Rice and noodle dishes',
      'Microwaveable meal prep',
      'Restaurant takeaway orders'
    ]
  },
  {
    id: 'trash-bags',
    title: 'Commercial Industrial Trash Bags',
    shortDesc: 'Heavy-duty, tear-resistant liners for industrial and commercial waste management.',
    description: 'Our industrial trash bags are designed for heavy-duty waste management. Featuring superior puncture resistance and high load capacity, they are the reliable choice for facility managers and industrial kitchens.',
    image: 'https://picsum.photos/seed/warm-industrial-liners/900/1200',
    benefits: [
      'Heavy-duty, tear-resistant construction',
      'Superior puncture resistance for sharp waste',
      'High load-bearing capacity',
      'Available in multiple industrial sizes',
      'Leak-proof bottom seal'
    ],
    specs: {
      material: 'High-Density Polyethylene (HDPE) / LDPE',
      thickness: '20 to 50 microns',
      packaging: 'Rolls or flat-packed cartons',
      volumes: ['Small (10L)', 'Medium (30L)', 'Large (60L)', 'Industrial (120L)']
    },
    useCases: [
      'Commercial kitchen waste',
      'Industrial facility management',
      'Hospitality and hotel housekeeping',
      'Retail and warehouse waste'
    ]
  }
];

export const CERTIFICATIONS = [
  { name: 'ISO 9001', logo: 'https://via.placeholder.com/100x40?text=ISO+9001' },
  { name: 'Food Safe', logo: 'https://via.placeholder.com/100x40?text=Food+Safe' },
  { name: 'Recyclable', logo: 'https://via.placeholder.com/100x40?text=Recyclable' },
  { name: 'Quality Assured', logo: 'https://via.placeholder.com/100x40?text=Quality' },
  { name: 'BPA Free', logo: 'https://via.placeholder.com/100x40?text=BPA+Free' }
];

export const TESTIMONIALS = [
  {
    text: "Switching to Kuek & Kueh solved our weekend stockout nightmare. Their PP containers never warp, and their delivery is always exactly on schedule.",
    author: "Operations Manager",
    company: "Regional Cloud Kitchen"
  },
  {
    text: "Reliability is everything in our business. Kuek & Kueh provides the consistency we need to keep our supermarket shelves stocked and our customers happy.",
    author: "Procurement Director",
    company: "National Retail Chain"
  }
];
