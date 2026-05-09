'use client';

export const runtime = 'edge';

import React, { useState, use } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { lifestyleServicesDetailed } from '@/lib/services-data';
import InteractiveHeader from '@/components/interactive-header';
import Footer from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Check, 
  ArrowLeft, 
  CreditCard, 
  Send, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  MapPin,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';

export default function ServiceDetailPage({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {
  const params = use(paramsPromise);
  const { slug } = params;
  const router = useRouter();
  
  const service = lifestyleServicesDetailed[slug as keyof typeof lifestyleServicesDetailed];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: '',
    priceTier: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
        <Link href="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    );
  }

  const Icon = service.icon;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate Supabase Submission
    setTimeout(() => {
      alert('Inquiry submitted successfully! Our team will contact you via WhatsApp.');
      setIsSubmitting(false);
    }, 1500);
  };

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.priceTier) {
      alert('Please select a pricing tier before ordering.');
      return;
    }
    const selectedPrice = service.prices.find(p => p.id === formData.priceTier);
    const confirmPayment = confirm(`Order Summary:\nService: ${service.title}\nTier: ${selectedPrice?.label}\nPrice: IDR ${selectedPrice?.idr.toLocaleString()} / USD $${selectedPrice?.usd}\n\nProceed to secure payment gateway?`);
    
    if (confirmPayment) {
      // In production, this would initialize DOKU or PAYPAL
      alert('Redirecting to secure payment gateway (PayPal/Doku)...');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <InteractiveHeader />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <Link href="/#lifestyle-products" className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700 mb-8 transition-colors">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Information */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <Badge variant="outline" className="mb-2 border-purple-200 text-purple-700 dark:text-purple-400">Premium Concierge</Badge>
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                  {service.title}
                </h1>
              </div>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
              {service.description}
            </p>

            <div className="space-y-10">
              {/* Included Section */}
              {service && 'included' in service && (
                <section>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-purple-600" />
                    What&apos;s Included
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {(service as any).included.map((item: string, i: number) => (
                      <div key={i} className="flex items-start gap-2 p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 shadow-sm">
                        <Check className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Requirements Section */}
              <section>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-purple-600" />
                  Information Needed
                </h3>
                <ul className="space-y-2">
                  {service.requiredInfo.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Areas Section */}
              {'areas' in service && (
                <section>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    Coverage Areas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {(service as any).areas.map((area: string, i: number) => (
                      <Badge key={i} variant="secondary" className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </section>
              )}
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/50">
              <p className="text-sm text-purple-800 dark:text-purple-300 italic">
                <strong>Legal Notice:</strong> This service is operated by <strong>PT Nawa Cita Bersama</strong>, an official lifestyle division of the Bali Help ecosystem. 
                All transactions are secure and compliant with Indonesian regulations.
              </p>
            </div>
          </div>

          {/* Right Column: Form & Pricing */}
          <div className="lg:col-span-5">
            <Card className="sticky top-32 rounded-3xl border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-700 to-purple-900 p-6 text-white">
                <h3 className="text-xl font-bold mb-1 text-white">Order or Inquiry</h3>
                <p className="text-purple-200 text-sm">Fill out the form below to get started.</p>
              </div>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Select Tier</label>
                    <div className="grid grid-cols-1 gap-3">
                      {service.prices.map((price) => (
                        <label 
                          key={price.id} 
                          className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.priceTier === price.id ? 'border-purple-600 bg-purple-50 dark:bg-purple-900/20' : 'border-slate-100 dark:border-slate-800 hover:border-purple-200'}`}
                        >
                          <div className="flex items-center gap-3">
                            <input 
                              type="radio" 
                              name="priceTier" 
                              value={price.id} 
                              className="w-4 h-4 text-purple-600" 
                              onChange={handleInputChange}
                            />
                            <div>
                              <div className="font-bold text-slate-900 dark:text-white">{price.label}</div>
                              <div className="text-xs text-slate-500">{(price as any).period || 'Standard'}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-purple-700 dark:text-purple-400">IDR {price.idr.toLocaleString()}</div>
                            <div className="text-xs text-slate-500">≈ USD ${price.usd}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="grid grid-cols-1 gap-4">
                      <Input 
                        name="name"
                        placeholder="Full Name" 
                        className="h-12 rounded-xl"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                      <Input 
                        name="email"
                        type="email"
                        placeholder="Email Address" 
                        className="h-12 rounded-xl"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                      <Input 
                        name="whatsapp"
                        placeholder="WhatsApp Number (e.g. +62...)" 
                        className="h-12 rounded-xl"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        required
                      />
                      <Textarea 
                        name="message"
                        placeholder="Special requests or arrival details..." 
                        className="min-h-[100px] rounded-xl"
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <Button 
                      variant="outline" 
                      className="h-14 rounded-xl border-2 border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-300"
                      onClick={handleInquiry}
                      disabled={isSubmitting}
                    >
                      <Send className="mr-2 w-4 h-4" />
                      Inquiry
                    </Button>
                    <Button 
                      className="h-14 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold shadow-lg shadow-orange-500/20"
                      onClick={handleOrder}
                    >
                      <CreditCard className="mr-2 w-4 h-4" />
                      Order Now
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-center gap-6 opacity-50 grayscale hover:grayscale-0 transition-all pt-4">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Doku_Logo.png" alt="Doku" className="h-5" onError={(e) => (e.currentTarget.src = 'https://doku.id/images/logo.png')} />
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
