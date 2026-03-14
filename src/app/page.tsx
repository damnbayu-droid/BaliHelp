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

          {/* Why Bali Section */}
          <section id="why-bali" className="py-20 lg:py-28 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why Choose Bali Help</h2>
                <p className="text-lg text-slate-600 dark:text-slate-300">Indonesia&apos;s digital economy is booming, and Bali offers the perfect blend of business opportunity and lifestyle.</p>
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
              <div className="space-y-12">
                {['Company Formation', 'Business Licensing', 'Tax & Compliance', 'Additional Support'].map((category) => (
                  <div key={category}>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                      <span className="w-8 h-1 bg-gradient-to-r from-purple-700 to-purple-900 rounded-full" />
                      {category}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                      {servicesData.filter((s) => s.category === category).map((service) => (
                        <Dialog key={service.id}>
                          <DialogTrigger asChild>
                            <Card className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-purple-300 transition-all cursor-pointer">
                              <CardContent className="p-0">
                                <div className="flex items-start gap-4">
                                  <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 text-purple-600">
                                    {getIconComponent(service.icon)}
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">{service.title}</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">{service.description}</p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-2xl font-bold">{service.title}</DialogTitle>
                              <DialogDescription className="text-base">{service.fullDescription}</DialogDescription>
                            </DialogHeader>
                            <div className="space-y-6 mt-4">
                              <div>
                                <h4 className="font-semibold mb-3 flex items-center gap-2 tracking-tight">Key Features</h4>
                                <ul className="space-y-2">
                                  {service.features.map((f, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                                      <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                                      {f}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="flex items-center gap-4 p-4 bg-purple-50 dark:bg-purple-900/10 rounded-lg">
                                <Clock className="w-6 h-6 text-purple-600" />
                                <div>
                                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Processing Time</p>
                                  <p className="font-semibold">{service.timeline}</p>
                                </div>
                              </div>
                              <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white" data-action="open-formation-modal">Get Started with {service.title}</Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Packages Section */}
          <section id="packages" className="py-20 lg:py-28 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <Badge className="bg-purple-100 text-purple-700 font-bold mb-4">Pricing</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">PT PMA Registration</h2>
                <p className="text-lg text-slate-600">Transparent pricing with comprehensive service bundles.</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {packagesData.map((pkg) => (
                  <Card key={pkg.id} className={`p-8 rounded-2xl border-2 hover:shadow-xl transition-all ${pkg.popular ? 'border-purple-600 bg-purple-50/20 shadow-lg' : 'border-slate-200'}`}>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                      <div className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{pkg.price}</div>
                      <p className="text-slate-600 text-sm">{pkg.description}</p>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <Check className="w-5 h-5 text-purple-600 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full h-12 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl" data-action="open-formation-modal">Select {pkg.name}</Button>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <BaliFormationBanner />
          <AdditionalServices />
          <CTASection mode="dark" />
          <VisaServicesSection />

          {/* Other Services */}
          <section id="other-services" className="py-20 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: Landmark, title: 'Accounting & Tax', desc: 'Monthly bookkeeping and reporting' },
                  { icon: Users, title: 'HR & Payroll', desc: 'Employee management and BPJS' },
                  { icon: Briefcase, title: 'Legal Advisory', desc: 'Contract review and governance' },
                  { icon: Globe, title: 'Market Research', desc: 'Market entry strategy analysis' }
                ].map((s, i) => (
                  <Card key={i} className="p-6 bg-slate-50 dark:bg-slate-800/20 border-0 hover:shadow-md transition-all">
                    <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center mb-4"><s.icon className="w-6 h-6 text-white" /></div>
                    <h3 className="font-bold mb-2">{s.title}</h3>
                    <p className="text-sm text-slate-500">{s.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <PopularVisaSection />

          {/* Trust Section */}
          <section id="trust" className="py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-12">Trusted by 500+ Businesses</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto">
                {trustData.map((t, i) => (
                  <div key={i}>
                    <div className="text-5xl font-bold text-yellow-500 mb-2">{t.value}</div>
                    <div className="text-purple-200 text-sm uppercase font-bold tracking-widest">{t.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: Shield, title: 'Licensed & Certified', desc: 'Fully compliant with BKPM and OSS' },
                  { icon: Award, title: 'Industry Experts', desc: 'Deep regulatory knowledge' },
                  { icon: Zap, title: 'Fast Processing', desc: 'Optimized local workflows' }
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <item.icon className="w-10 h-10 mx-auto mb-4 text-yellow-500" />
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <GoogleReviews />

          {/* Contact Section */}
          <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center shrink-0"><Mail className="w-6 h-6 text-white" /></div>
                      <div>
                        <h4 className="font-bold">Email Us</h4>
                        <p className="text-slate-500">info@balihelp.id</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center shrink-0"><Phone className="w-6 h-6 text-white" /></div>
                      <div>
                        <h4 className="font-bold">WhatsApp</h4>
                        <p className="text-slate-500">+62 857 2704 1992</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center shrink-0"><MapPin className="w-6 h-6 text-white" /></div>
                      <div>
                        <h4 className="font-bold">Visit Office</h4>
                        <p className="text-slate-500">Jl. Tibungsari No. 11C, Denpasar, Bali</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Card className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Send Message</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="First Name" />
                      <Input placeholder="Last Name" />
                    </div>
                    <Input placeholder="Email Address" type="email" />
                    <Input placeholder="Phone Number" type="tel" />
                    <Textarea placeholder="How can we help?" rows={4} />
                    <Button className="w-full h-12 bg-gradient-to-r from-purple-700 to-orange-600 text-white font-bold rounded-xl shadow-lg">Submit Request</Button>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        </main>
      </FormationClientWrapper>
      <Footer />
    </div>
  );
}
