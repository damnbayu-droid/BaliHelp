import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Building2,
  Shield,
  Clock,
  Landmark,
  Briefcase,
  Users,
  Globe,
  FileCheck,
  CheckCircle2,
  Check,
  Award,
  Zap,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Calculator,
  Star,
} from 'lucide-react';
import {
  servicesData,
  packagesData,
  whyBaliData,
  trustData,
} from '@/lib/mock-data';
import CTASection from '@/components/cta-section';
import AdditionalServices from '@/components/additional-services';
import PopularVisaSection from '@/components/popular-visa-section';
import Footer from '@/components/footer';
import BaliFormationBanner from '@/components/bali-formation-banner';
import VisaServicesSection from '@/components/visa-services-section';
import FAQSection from '@/components/faq-section';
import GoogleReviews from '@/components/google-reviews';
import InteractiveHeader from '@/components/interactive-header';
import FormationClientWrapper from '@/components/formation-client-wrapper';
import { getIconComponent } from '@/lib/icons';
import ContactForm from '@/components/contact-form';
import LifestyleProducts from '@/components/lifestyle-products';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <InteractiveHeader />
      <FormationClientWrapper>
        <main id="main-content">
          {/* Hero Section */}
          <section
            id="hero"
            className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-white via-purple-50 to-orange-50/30 dark:from-slate-950 dark:via-purple-950/20 dark:to-slate-950"
            aria-labelledby="hero-heading"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-300/20 dark:bg-orange-600/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6 border-purple-200 dark:border-purple-700">
                  <Shield className="w-4 h-4" />
                  Licensed & Compliant Services
                </Badge>

                <Badge variant="outline" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6 ml-0 sm:ml-2">
                  <Clock className="w-4 h-4" />
                  Operating Since 2010
                </Badge>

                <h1
                  id="hero-heading"
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6"
                >
                  Company Formation & <br />
                  <span className="bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 bg-clip-text text-transparent">
                    Business Registration in Bali
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                  Professional company formation, business licensing, and compliance services.
                  We assist foreign investors and local entrepreneurs establish their presence in Indonesia.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button
                    size="lg"
                    className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white rounded-xl shadow-lg shadow-orange-500/25 transition-all hover:shadow-xl"
                    data-action="open-formation-modal"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center h-14 px-8 text-lg font-semibold rounded-xl border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    View Services
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  {[
                    { icon: Building2, title: 'PT PMA & Local Company', subtitle: 'Full registration' },
                    { icon: Shield, title: 'Licensed & Compliant', subtitle: 'Official processes' },
                    { icon: Clock, title: 'Efficient Process', subtitle: 'Streamlined setup' }
                  ].map((item, index) => (
                    <Card key={index} className="flex flex-col items-center p-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:shadow-md transition-all">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-3">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-semibold text-slate-900 dark:text-white text-sm text-center">{item.title}</span>
                      <span className="text-slate-500 dark:text-slate-400 text-xs mt-1">{item.subtitle}</span>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Lifestyle Services Section (v5.0 Addition) */}
          <LifestyleProducts />

          {/* Why Bali Section */}
          <section id="why-bali" className="py-20 lg:py-28 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why Choose Bali Help (Since 2010)</h2>
                <p className="text-lg text-slate-600 dark:text-slate-300">With over 15 years of experience, we provide the perfect blend of local expertise, business opportunity, and lifestyle support.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {whyBaliData.map((item) => (
                  <Card key={item.id} className="group p-6 lg:p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 transition-all hover:shadow-lg">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-700 to-purple-900 flex items-center justify-center mb-4">
                      {getIconComponent(item.icon)}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{item.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <Badge className="inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-4 border-purple-200 dark:border-purple-700">Our Core Services</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Company Formation Services</h2>
                <p className="text-lg text-slate-600 dark:text-slate-300">Comprehensive business setup and compliance solutions for establishing your company in Indonesia.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                {servicesData.map((service) => (
                  <Dialog key={service.id}>
                    <DialogTrigger asChild>
                      <Card className="group p-6 lg:p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all hover:shadow-xl hover:border-purple-500/30 cursor-pointer">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          {getIconComponent(service.icon)}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed line-clamp-3">{service.description}</p>
                        <div className="flex items-center text-purple-700 dark:text-purple-400 font-semibold group-hover:gap-2 transition-all">
                          Learn More <ArrowRight className="ml-1 w-4 h-4" />
                        </div>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-slate-900 dark:text-white">{service.title}</DialogTitle>
                        <DialogDescription className="text-base text-slate-600 dark:text-slate-300 mt-2">{service.description}</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-6 mt-6">
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-purple-600" />
                            Key Features
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {service.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                <Check className="w-4 h-4 text-purple-600 mt-0.5" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {service.requirements && (
                          <div>
                            <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                              <FileCheck className="w-5 h-5 text-purple-600" />
                              Requirements
                            </h4>
                            <ul className="space-y-2">
                              {service.requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 shrink-0" />
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                          <div className="flex-1">
                            <span className="text-xs text-slate-500 uppercase font-semibold">Processing Time</span>
                            <p className="text-slate-900 dark:text-white font-bold">{service.processingTime}</p>
                          </div>
                          {service.price && (
                            <div className="flex-1">
                              <span className="text-xs text-slate-500 uppercase font-semibold">Estimated Cost</span>
                              <p className="text-purple-700 dark:text-purple-400 font-bold">{service.price}</p>
                            </div>
                          )}
                        </div>
                        <Button className="w-full h-12 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold text-lg rounded-xl">
                          Get Started Now
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
          </section>

          {/* Packages Section */}
          <section id="packages" className="py-20 lg:py-28 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <Badge className="inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-4 border-purple-200 dark:border-purple-700">Simple Packages</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Choose the Right Setup for You</h2>
                <p className="text-lg text-slate-600 dark:text-slate-300">Transparent pricing for every stage of your business journey in Indonesia.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {packagesData.map((pkg) => (
                  <Card key={pkg.id} className={`relative flex flex-col p-8 rounded-2xl transition-all hover:shadow-2xl ${pkg.popular ? 'border-2 border-purple-600 shadow-xl' : 'border border-slate-200 dark:border-slate-700'}`}>
                    {pkg.popular && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-purple-600 text-white text-xs font-bold rounded-full uppercase tracking-widest">
                        Most Popular
                      </div>
                    )}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{pkg.name}</h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-slate-900 dark:text-white">{pkg.price}</span>
                        {pkg.price !== 'Custom' && <span className="text-slate-500">/setup</span>}
                      </div>
                      <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">{pkg.description}</p>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                          <Check className="w-5 h-5 text-purple-600 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className={`w-full h-12 font-bold rounded-xl ${pkg.popular ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'}`}>
                          Explore Package
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold">{pkg.name} Package</DialogTitle>
                          <DialogDescription>{pkg.description}</DialogDescription>
                        </DialogHeader>
                        <div className="py-6">
                          <h4 className="font-bold mb-4 text-slate-900 dark:text-white uppercase text-xs tracking-widest">What&apos;s Included:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {pkg.features.map((feature, i) => (
                              <div key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>
                          <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                            <p className="text-sm text-slate-600 dark:text-slate-400 italic font-medium">
                              Note: Prices are estimates and may vary based on business activities and specific licensing requirements.
                            </p>
                          </div>
                        </div>
                        <Button className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl">
                          Contact Us for this Package
                        </Button>
                      </DialogContent>
                    </Dialog>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <BaliFormationBanner />

          <AdditionalServices />

          <CTASection mode="dark" />

          <VisaServicesSection />

          <PopularVisaSection />

          {/* Other Services (Renamed from Visa Services) */}
          <section id="other-services" className="py-20 lg:py-28 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <Badge className="inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-4 border-purple-200 dark:border-purple-700">Beyond Business</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Complete Operational Support</h2>
                <p className="text-lg text-slate-600 dark:text-slate-300">Scale your business in Bali with our comprehensive legal and administrative support.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: 'Accounting & Tax', icon: Calculator, desc: 'Monthly reporting and annual compliance.' },
                  { title: 'HR & Payroll', icon: Users, desc: 'Local employment contracts and BPJS.' },
                  { title: 'Legal Advisory', icon: Landmark, desc: 'Contract drafting and legal consultation.' },
                  { title: 'Market Research', icon: Globe, desc: 'Local insights and competition analysis.' }
                ].map((item, i) => (
                  <Card key={i} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-none transition-all hover:shadow-lg">
                    <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <FAQSection />

          {/* Trust Section */}
          <section id="trust" className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(126,34,206,0.15),transparent),radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.1),transparent)]" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center">
                {trustData.map((item, i) => (
                  <div key={i}>
                    <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent mb-2">{item.value}</div>
                    <div className="text-sm text-slate-400 font-medium uppercase tracking-widest">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-6 lg:gap-12 opacity-70">
                {[
                  { icon: Shield, label: 'Licensed & Certified' },
                  { icon: Award, label: 'Industry Experts' },
                  { icon: Zap, label: 'Fast Processing' }
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <badge.icon className="w-5 h-5 text-purple-400" />
                    <span className="text-sm font-semibold tracking-wide uppercase">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <GoogleReviews />

          {/* Contact Section */}
          <section id="contact" className="py-20 lg:py-28 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                <div>
                  <Badge className="px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-4">Contact Us</Badge>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">Let&apos;s Build Your Future in Bali</h2>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
                    Have questions about company formation, licensing, or visas? Our team of experts is ready to assist you in every step of the process.
                  </p>

                  <div className="space-y-6">
                    {[
                      { icon: Mail, label: 'Email', value: 'info@balihelp.id', href: 'mailto:info@balihelp.id' },
                      { icon: Phone, label: 'Phone / WhatsApp', value: '+62 857-2704-1992', href: 'https://wa.me/6285727041992' },
                      { icon: MapPin, label: 'Address', value: 'Jl. Tibungsari No.11C, Padangsambian Kaja, Denpasar, Bali', href: 'https://maps.app.goo.gl/DRXp4v8sD1nHUX6x9' }
                    ].map((item, i) => (
                      <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-all group">
                        <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all">
                          <item.icon className="w-5 h-5 text-purple-600 dark:text-purple-400 group-hover:text-white" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</div>
                          <div className="text-slate-900 dark:text-white font-semibold">{item.value}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/50 p-8 lg:p-10 rounded-3xl border border-slate-200 dark:border-slate-800">
                  <ContactForm />
                </div>
              </div>
            </div>
          </section>
        </main>
      </FormationClientWrapper>
      <Footer />
    </div>
  );
}
