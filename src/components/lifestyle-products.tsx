'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Plane, 
  Car, 
  Monitor, 
  Smartphone, 
  Truck, 
  Package, 
  ShoppingBag, 
  Heart, 
  Waves,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const lifestyleServices = [
  {
    id: 'airport-pickup',
    slug: 'airport-pickup',
    title: 'Airport Pickup & Transfer',
    description: 'Professional pickup service to any destination across Bali.',
    icon: Plane,
    price: 'Starting from $15'
  },
  {
    id: 'private-driver',
    slug: 'private-driver',
    title: 'Private Driver & Tour',
    description: 'Explore Bali with your own dedicated private driver.',
    icon: Car,
    price: 'Starting from $45'
  },
  {
    id: 'office-rental',
    slug: 'office-rental',
    title: 'Office Equipment Rental',
    description: 'Ergonomic setups for digital nomads and remote teams.',
    icon: Monitor,
    price: 'Flexible daily rates'
  },
  {
    id: 'esim-assistance',
    slug: 'esim-assistance',
    title: 'eSIM & SIM Card',
    description: 'Direct activation and setup for your mobile data in Bali.',
    icon: Smartphone,
    price: 'Packages from $10'
  },
  {
    id: 'villa-moving',
    slug: 'villa-moving',
    title: 'Villa / Hotel Moving',
    description: 'Stress-free relocation assistance between accommodations.',
    icon: Truck,
    price: 'Based on volume'
  },
  {
    id: 'luggage-storage',
    slug: 'luggage-storage',
    title: 'Luggage & Storage',
    description: 'Secure short-term and long-term storage for your items.',
    icon: Package,
    price: 'From $2/day'
  },
  {
    id: 'procurement',
    slug: 'procurement',
    title: 'Procurement Assistance',
    description: 'Personal shopping and sourcing for all your needs.',
    icon: ShoppingBag,
    price: 'Custom service fee'
  },
  {
    id: 'home-massage',
    slug: 'home-massage',
    title: 'Home Massage & Spa',
    description: 'Professional Balinese massage delivered to your villa.',
    icon: Heart,
    price: 'Starting from $20'
  },
  {
    id: 'jacuzzi-rental',
    slug: 'jacuzzi-rental',
    title: 'Jacuzzi Experience',
    description: 'Portable luxury jacuzzi setup for your private relaxation.',
    icon: Waves,
    price: 'Daily rentals available'
  }
];

export default function LifestyleProducts() {
  return (
    <section id="lifestyle-products" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-4 border-purple-200 dark:border-purple-700">
            Lifestyle & Concierge
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Premium Bali Help Services
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Professional assistance designed for digital nomads, expats, and travelers staying in Bali.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {lifestyleServices.map((service) => (
            <Card 
              key={service.id} 
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <CardHeader className="relative z-10 p-6 pb-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 p-6 pt-0">
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-700/50">
                  <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                    {service.price}
                  </span>
                  <Link href={`/services/${service.slug}`}>
                    <Button variant="ghost" size="sm" className="group/btn text-purple-700 dark:text-purple-300 hover:text-purple-800 dark:hover:text-white hover:bg-purple-50 dark:hover:bg-purple-900/30">
                      Explore
                      <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
              {/* Background Glow */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-purple-500/5 blur-2xl group-hover:bg-purple-500/10 transition-colors" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
