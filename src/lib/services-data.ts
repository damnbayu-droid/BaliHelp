import { 
  Plane, 
  Car, 
  Monitor, 
  Smartphone, 
  Truck, 
  Package, 
  ShoppingBag, 
  Heart, 
  Waves 
} from 'lucide-react';

export const lifestyleServicesDetailed = {
  'airport-pickup': {
    title: 'Airport Pickup & Transfer Service',
    icon: Plane,
    description: 'Professional airport pickup service from the airport to hotels, villas, apartments, coworking spaces, or any destination across Bali.',
    included: [
      'Driver standby based on arrival schedule',
      'Luggage assistance',
      'Flight delay monitoring',
      'Private and comfortable vehicle',
      'Vehicle type request available'
    ],
    requiredInfo: [
      'Full name',
      'Active WhatsApp number',
      'Arrival date',
      'Estimated arrival time',
      'Flight number',
      'Number of passengers',
      'Number of luggage/bags',
      'Destination address',
      'Special requests (child seat, extra stop, etc.)'
    ],
    areas: ['Denpasar', 'Canggu', 'Seminyak', 'Ubud', 'Sanur', 'Uluwatu', 'Jimbaran', 'Kuta', 'Nusa Dua', 'Amed', 'Lovina', 'All Bali areas'],
    pricingNotes: 'Pricing depends on distance, destination area, vehicle type, and daytime/midnight service.',
    prices: [
      { id: 'ap-base', label: 'Base Transfer', idr: 350000, usd: 25 },
      { id: 'ap-premium', label: 'Premium/Large Van', idr: 750000, usd: 50 }
    ]
  },
  'private-driver': {
    title: 'Private Driver & Tour Transportation',
    icon: Car,
    description: 'Private transportation service for tourists, business meetings, beach clubs, or other activities around Bali.',
    included: [
      'Private vehicle with driver',
      'Fuel and parking fees',
      'Flexible itinerary',
      'City tours and beach hopping'
    ],
    requiredInfo: [
      'Service date',
      'Number of passengers',
      'Pickup location',
      'Destinations to visit',
      'Estimated duration',
      'Preferred vehicle type',
      'Travel itinerary'
    ],
    suitableFor: ['City tours', 'Beach hopping', 'Business trips', 'Content creators', 'Digital nomads', 'Family trips'],
    options: ['One-way transfer', 'Half-day driver', 'Full-day driver', 'Multi-day transportation'],
    prices: [
      { id: 'pd-half', label: 'Half-Day (6 Hours)', idr: 500000, usd: 35 },
      { id: 'pd-full', label: 'Full-Day (10 Hours)', idr: 800000, usd: 55 }
    ]
  },
  'office-rental': {
    title: 'Office Equipment Rental & Work Setup',
    icon: Monitor,
    description: 'Office equipment rental service for digital nomads, remote workers, and startup teams staying in Bali.',
    availableEquipment: [
      'Ergonomic desk & chair',
      'External monitor',
      'Keyboard & mouse',
      'Laptop stand',
      'White board',
      'Power strip & adaptors',
      'Lighting setup',
      'Internet support equipment'
    ],
    included: [
      'Delivery & pickup',
      'Setup assistance',
      'Equipment quality check',
      'Replacement support'
    ],
    requiredInfo: [
      'Rental start date',
      'Rental duration',
      'Delivery address',
      'Equipment list',
      'Quantity needed',
      'Setup/installation request'
    ],
    prices: [
      { id: 'or-basic', label: 'Basic Setup (Desk+Chair)', idr: 250000, usd: 18, period: 'per day' },
      { id: 'or-pro', label: 'Pro Setup (Monitor+Ergo)', idr: 450000, usd: 32, period: 'per day' }
    ]
  },
  'esim-assistance': {
    title: 'eSIM & SIM Card Assistance',
    icon: Smartphone,
    description: 'Assistance service for purchasing and activating Indonesian eSIMs and SIM cards for foreign tourists.',
    services: ['Indonesian eSIM', 'Physical SIM card', 'Internet packages', 'Data top-up', 'SIM registration & activation'],
    included: ['Direct activation', 'APN/internet setup', 'Delivery to hotel/villa', 'Usage assistance'],
    requiredInfo: ['Full name', 'Passport photo', 'Device type', 'Arrival date', 'Internet/data needs'],
    prices: [
      { id: 'sim-esim', label: 'eSIM Activation + 30GB', idr: 350000, usd: 25 },
      { id: 'sim-physical', label: 'Physical SIM + 50GB', idr: 450000, usd: 32 }
    ]
  },
  'villa-moving': {
    title: 'Villa / Hotel Moving Assistance',
    icon: Truck,
    description: 'Moving assistance service for tourists relocating between hotels, villas, apartments in Bali.',
    included: ['Item transportation', 'Loading & unloading assistance', 'Vehicle adjustment based on needs'],
    requiredInfo: ['Pickup location', 'New destination address', 'Moving date', 'Estimated time', 'Number of items', 'Fragile/large items'],
    prices: [
      { id: 'move-van', label: 'Small Van (1 Helper)', idr: 600000, usd: 42 },
      { id: 'move-truck', label: 'Large Truck (2 Helpers)', idr: 1200000, usd: 85 }
    ]
  },
  'luggage-storage': {
    title: 'Luggage & Storage Service',
    icon: Package,
    description: 'Short-term and long-term luggage storage service for regular and valuable items.',
    itemsAccepted: ['Luggage', 'Bags', 'Documents', 'Gadgets', 'Work equipment', 'Electronic devices'],
    securityFeatures: ['Secure storage area', 'Item monitoring', 'Label & tracking system', 'Private handling'],
    requiredInfo: ['Full name', 'Item type', 'Quantity', 'Estimated storage duration'],
    prices: [
      { id: 'store-day', label: 'Daily Storage (per item)', idr: 50000, usd: 4 },
      { id: 'store-week', label: 'Weekly Storage (per item)', idr: 250000, usd: 18 }
    ]
  },
  'procurement': {
    title: 'Procurement & Shopping Assistance',
    icon: ShoppingBag,
    description: 'Personal shopping and procurement assistance service for tourists staying in Bali.',
    availableAssistance: ['Household items', 'Electronics', 'Small furniture', 'Office equipment', 'Lifestyle products', 'Daily necessities'],
    included: ['Product sourcing', 'Purchasing assistance', 'Delivery service', 'Quality checking'],
    requiredInfo: ['Item name', 'Quantity', 'Estimated budget', 'Delivery address', 'Deadline'],
    prices: [
      { id: 'proc-standard', label: 'Sourcing Fee (Standard)', idr: 200000, usd: 15 },
      { id: 'proc-complex', label: 'Sourcing Fee (Complex)', idr: 500000, usd: 35 }
    ]
  },
  'home-massage': {
    title: 'Home Massage & Relaxation Service',
    icon: Heart,
    description: 'Professional home massage service directly to villas, hotels, or private residences.',
    treatments: ['Balinese massage', 'Relaxing massage', 'Deep tissue', 'Couple massage', 'Foot massage', 'Aromatherapy'],
    included: ['Therapist visit', 'Massage equipment', 'Oils & aromatherapy'],
    requiredInfo: ['Treatment location', 'Booking date', 'Booking time', 'Massage type', 'Duration'],
    prices: [
      { id: 'mass-60', label: '60 Mins Balinese', idr: 250000, usd: 18 },
      { id: 'mass-90', label: '90 Mins Balinese', idr: 350000, usd: 25 }
    ]
  },
  'jacuzzi-rental': {
    title: 'Jacuzzi Experience & Rental Service',
    icon: Waves,
    description: 'Portable jacuzzi rental service for private relaxation, romantic setups, and special occasions.',
    included: ['Delivery', 'Setup & installation', 'Water filling assistance', 'Technical support', 'Pickup'],
    available: ['Portable jacuzzi', 'Bubble spa setup', 'Ice bath combo', 'Lighting setup', 'Atmosphere arrangement'],
    requiredInfo: ['Setup location', 'Rental date', 'Rental duration', 'Number of users', 'Indoor/Outdoor'],
    prices: [
      { id: 'jac-24', label: '24 Hours Rental', idr: 1500000, usd: 105 },
      { id: 'jac-48', label: '48 Hours Rental', idr: 2500000, usd: 175 }
    ]
  }
};
