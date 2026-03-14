'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Leaf,
  Globe,
  Users,
  Trash2,
  Waves,
  Trees,
  CloudRain,
  ShieldCheck,
  ArrowRight,
  Droplets,
  Heart,
  Calendar,
  BarChart3,
  Scale,
  Anchor,
  Wind,
  CheckCircle2,
  Menu,
  X,
  Phone
} from 'lucide-react';
import Footer from '@/components/footer';
import LanguageDropdown from '@/components/language-dropdown';
import { navigationLinks } from '@/lib/mock-data';

export default function CSRPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set dark mode based on parent site preference (simulated)
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const stats = [
    { label: 'Beach Cleanups Organized', value: '150+', icon: Trash2, color: 'text-blue-600' },
    { label: 'Coral Fragments Planted', value: '4,500+', icon: Waves, color: 'text-cyan-600' },
    { label: 'Trees Replanted', value: '12,000+', icon: Trees, color: 'text-green-600' },
    { label: 'Volunteer Hours', value: '8,000+', icon: Users, color: 'text-orange-600' },
  ];

  const partners = [
    { name: 'EcoBali', initials: 'EB', color: 'bg-green-600' },
    { name: 'Bali Reef Conservation', initials: 'BR', color: 'bg-blue-600' },
    { name: 'Green Bali', initials: 'GB', color: 'bg-emerald-600' },
    { name: 'One Tree Planted', initials: 'OT', color: 'bg-teal-600' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "PT Indonesian Visas Agency | Bali Help Initiative",
            "url": "https://balihelp.id/csr",
            "logo": "https://balihelp.id/logo.png",
            "description": "Bali Help CSR initiative focused on protecting Bali's nature for future generations.",
            "environmentalProgram": [
              {
                "@type": "EducationalOccupationalProgram",
                "name": "Beach Cleanup Program",
                "description": "Protecting Bali's beaches through community waste collection and recycling."
              },
              {
                "@type": "EducationalOccupationalProgram",
                "name": "Forest Revitalization",
                "description": "Reforestation and biodiversity protection in Bali's upland regions."
              },
              {
                "@type": "EducationalOccupationalProgram",
                "name": "Coral Reef Restoration",
                "description": "Marine conservation and coral fragment planting to protect Bali's oceans."
              }
            ]
          })
        }}
      />

      {/* Header (Simplified from main page) */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
          }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent">
                Bali Help
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="text-slate-600 dark:text-slate-300"
              >
                {isDarkMode ? <Wind className="w-5 h-5" /> : <Globe className="w-5 h-5" />}
              </Button>
              <a
                href="https://wa.me/6285727041992"
                className="hidden sm:inline-flex items-center justify-center h-9 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-medium transition-all"
              >
                Join Mission
              </a>
              <button
                className="lg:hidden p-2 text-slate-600 dark:text-slate-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* 1 — Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/csr-hero.png"
              alt="Bali Coastline Aerial"
              fill
              className="object-cover brightness-75"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white dark:to-slate-950" />
          </div>

          <div className="container relative z-10 px-4 text-center text-white">
            <Badge className="mb-6 px-4 py-1.5 bg-green-500/90 text-white border-0 text-sm animate-fade-in">
              Corporate Social Responsibility
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Protecting Bali's Nature <br />
              <span className="text-green-400">for Future Generations</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-slate-100 font-light">
              A sustainability initiative by Bali Help, supported and funded by PT Indonesian Visas Agency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 rounded-full h-14 text-lg font-semibold">
                Explore Our Programs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <div className="flex items-center gap-3 justify-center">
                <ShieldCheck className="w-8 h-8 text-green-400" />
                <span className="text-sm font-medium">Verified Sustainability Partner</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-8 animate-bounce">
            <Leaf className="w-6 h-6 text-white/70" />
            <Globe className="w-6 h-6 text-white/70" />
            <Droplets className="w-6 h-6 text-white/70" />
          </div>
        </section>

        {/* 2 — CSR Philosophy */}
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="container px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-3">Our Core Philosophy</h2>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                    Balancing Tourism Prosperity with Environmental Integrity
                  </h3>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  We believe that our responsibility toward Bali goes beyond professional services. As a key player in the Indonesian Visas ecosystem, we are committed to ensuring that Bali's natural beauty remains intact for those who call it home and those who visit.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                      <Leaf className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">Sustainable Tourism</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Promoting eco-friendly travel and business practices.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">Community Partnership</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Collaborating directly with Banjar and local environmental NGOs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-orange-100 dark:bg-orange-900/30 p-2 rounded-lg">
                      <Globe className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">Ecosystem Preservation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Directly funding forest and marine restoration projects.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-cyan-100 dark:bg-cyan-900/30 p-2 rounded-lg">
                      <Heart className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">Environmental Duty</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Accepting our responsibility as part of Bali's ecosystem.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/forest-reforestation.png"
                  alt="Bali environmental conservation and greenery"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-green-900/10 mix-blend-multiply" />
              </div>
            </div>
          </div>
        </section>

        {/* 3 — Indonesian Visas Commitment */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">The Indonesian Visas Ecosystem Commitment</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Foreign visitors must help protect the island they enjoy. PT Indonesian Visas Agency and Bali Help work hand-in-hand to bridge international investment with local conservation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center bg-white dark:bg-slate-800 p-10 rounded-4xl shadow-lg border border-slate-100 dark:border-slate-700">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto text-blue-600">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Indonesian Visas</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Funding & Strategic Support</p>
              </div>
              <div className="flex items-center justify-center py-4">
                <div className="w-12 h-0.5 bg-slate-200 dark:bg-slate-700 hidden md:block" />
                <div className="mx-4 text-slate-400">
                  <ArrowRight className="w-6 h-6 rotate-90 md:rotate-0" />
                </div>
                <div className="w-12 h-0.5 bg-slate-200 dark:bg-slate-700 hidden md:block" />
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto text-green-600">
                  <Leaf className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Bali Help Initiative</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">On-the-ground CSR Execution</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4 — Sustainability Impact Overview */}
        <section className="py-20 bg-green-600 text-white">
          <div className="container px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center group">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-10 h-10 text-white/90 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tighter">{stat.value}</div>
                  <div className="text-sm md:text-base font-medium text-green-100 opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BEACH CLEANUP PROGRAM - 5, 6, 7 */}
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="container px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
              <div className="flex-1 space-y-6">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-0">Beach Cleanup Program</Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">Protecting Bali's Beaches</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Plastic pollution is a critical threat to our oceans. Bali Help organizes regular community events to remove waste and restore the beauty of Bali's coastlines.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl text-center">
                    <Trash2 className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <span className="text-xs font-bold text-blue-800 dark:text-blue-300 uppercase">Trash Collection</span>
                  </div>
                  <div className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-2xl text-center">
                    <Waves className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                    <span className="text-xs font-bold text-cyan-800 dark:text-cyan-300 uppercase">Ocean Guard</span>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-2xl text-center">
                    <Users className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
                    <span className="text-xs font-bold text-indigo-800 dark:text-indigo-300 uppercase">Volunteer Force</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative aspect-video rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/beach-cleanup.png"
                  alt="Beach Cleanup"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* 6 — Monthly Beach Cleanup Events */}
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-4xl mb-20">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/3">
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Monthly Cleanup Timeline</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">Join our next community volunteer day. We partner with local businesses and tourists alike.</p>
                  <Button variant="outline" className="rounded-full">View Schedule</Button>
                </div>
                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {['Kuta Beach', 'Canggu Coast', 'Sanur Reef'].map((beach, idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Calendar className="w-12 h-12" />
                      </div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2">{beach}</h4>
                      <p className="text-xs text-slate-500 mb-4 tracking-wider uppercase">Next Event: March {15 + idx}, 2026</p>
                      <ul className="text-sm space-y-2 text-slate-600 dark:text-slate-400">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500" /> Community focus
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500" /> Tourist welcome
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 7 — Waste Collection Impact */}
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="bg-blue-600 text-white p-8 rounded-3xl border-0">
                <BarChart3 className="w-10 h-10 mb-6 opacity-80" />
                <div className="text-5xl font-bold mb-2 tracking-tighter">25+ Tons</div>
                <div className="text-lg font-medium opacity-90">Plastic Removed Yearly</div>
                <Separator className="my-6 bg-white/20" />
                <p className="text-sm opacity-80">Reducing ocean microplastics through rigorous collection and sorting.</p>
              </Card>
              <Card className="bg-slate-900 text-white p-8 rounded-3xl border-0">
                <Wind className="w-10 h-10 mb-6 opacity-80" />
                <div className="text-5xl font-bold mb-2 tracking-tighter">85%</div>
                <div className="text-lg font-medium opacity-90">Recycled Waste</div>
                <Separator className="my-6 bg-white/20" />
                <p className="text-sm opacity-80">Partnering with local recycling plants to ensure zero-waste landfills.</p>
              </Card>
              <Card className="bg-cyan-600 text-white p-8 rounded-3xl border-0">
                <Users className="w-10 h-10 mb-6 opacity-80" />
                <div className="text-5xl font-bold mb-2 tracking-tighter">1,200+</div>
                <div className="text-lg font-medium opacity-90">Active Volunteers</div>
                <Separator className="my-6 bg-white/20" />
                <p className="text-sm opacity-80">A growing global community dedicated to Bali's environment.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* FOREST REVITALIZATION - 8, 9, 10 */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="relative aspect-square rounded-4xl overflow-hidden shadow-2xl order-last lg:order-first">
                <Image
                  src="/forest-reforestation.png"
                  alt="Forest Reforestation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-8">
                <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-0">Forest Revitalization</Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">Regenerating Bali's Lungs</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  Our forest revitalization projects focus on reforestation of upland zones, protecting biodiversity, and preventing soil erosion in critical watersheds.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl h-fit">
                      <Trees className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">Endemic Sapling Planting</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Restoring native flora to support local wildlife habitats.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                    <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-xl h-fit">
                      <CloudRain className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">Watershed Protection</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Deep-root systems to maintain Bali's natural water table.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 10 — Carbon Impact */}
            <div className="grid md:grid-cols-2 gap-12 text-white">
              <div className="bg-green-800 p-10 rounded-4xl flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">Carbon Absorption Impact</h3>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-6xl font-black">500</span>
                  <span className="text-xl mb-2 font-bold">Metric Tons CO₂ / Year</span>
                </div>
                <p className="text-green-100 opacity-80">Our planted forests are active carbon sinks, mitigating the environmental footprint of travel and development.</p>
              </div>
              <div className="bg-emerald-700 p-10 rounded-4xl flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">Biodiversity Recovery</h3>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-6xl font-black">42</span>
                  <span className="text-xl mb-2 font-bold">Native Species Protected</span>
                </div>
                <p className="text-emerald-50 opacity-80">From tropical birds to endemic insects, our forests provide sanctuary for Bali's unique wildlife.</p>
              </div>
            </div>
          </div>
        </section>

        {/* MARINE CONSERVATION - 11, 12, 13 */}
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <Badge className="bg-cyan-100 text-cyan-700 hover:bg-cyan-200 border-0 mb-4">Marine Conservation</Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Restoring Bali's Blue Heart</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Healthy coral reefs are the backbone of marine biodiversity. Our restoration projects use scientifically-backed methods to rebuild reefs damaged by climate change and human impact.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center mb-20">
              <div className="order-2 lg:order-1 space-y-8">
                <div className="flex items-center gap-6 p-6 rounded-3xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Anchor className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">Underwater Nurseries</h4>
                    <p className="text-slate-600 dark:text-slate-400">Nurturing coral fragments until they are strong enough for transplantation.</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-6 rounded-3xl bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-100 dark:border-cyan-800">
                  <div className="w-16 h-16 bg-cyan-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Waves className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">Fragment Transplantation</h4>
                    <p className="text-slate-600 dark:text-slate-400">Carefully anchoring fragments to artificial reef structures to jumpstart growth.</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative aspect-video rounded-4xl overflow-hidden shadow-2xl">
                <Image
                  src="/coral-restoration.png"
                  alt="Coral Restoration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* 13 — Marine biodiversity Protection */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Sea Turtles', icon: Waves, desc: 'Nesting site protection' },
                { name: 'Reef Fish', icon: Droplets, desc: 'Population monitoring' },
                { name: 'Sustainable Diving', icon: Anchor, desc: 'Best practices training' },
                { name: 'Water Quality', icon: Wind, desc: 'Salinity & Temp tracking' },
              ].map((item, idx) => (
                <div key={idx} className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl text-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group">
                  <item.icon className="w-10 h-10 text-cyan-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">{item.name}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 14 — Community & Volunteer Participation */}
        <section className="py-24 bg-green-50 dark:bg-green-950/20">
          <div className="container px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white">Join the Global Impact</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12">
              Whether you're a digital nomad, a tourist, or a resident, your hands make a difference. Join our weekly volunteer sessions and be part of Bali's green future.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white rounded-full px-10">
                Join Volunteer WhatsApp Group
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 border-slate-300">
                View Event Calendar
              </Button>
            </div>
          </div>
        </section>

        {/* 15 — Partnership with Local Organizations */}
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="container px-4">
            <h2 className="text-center text-2xl font-bold mb-16 text-slate-400 uppercase tracking-widest">Our Strategic Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-60 hover:opacity-100 transition-opacity">
              {partners.map((partner, idx) => (
                <div key={idx} className="flex flex-col items-center gap-4">
                  <div className={`w-24 h-24 rounded-full ${partner.color} flex items-center justify-center text-white text-2xl font-bold`}>
                    {partner.initials}
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 16 — Long-Term Sustainability Vision */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-green-500/5 blur-3xl -z-0" />
          <div className="container relative z-10 px-4">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold mb-8">Our 2030 Vision</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="text-green-500 font-bold text-4xl">01</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Expanding Restoration Areas</h4>
                    <p className="text-slate-400">Aiming to triple our reforestation reach to over 50 hectares by 2030.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-green-500 font-bold text-4xl">02</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Island-Wide Cleanups</h4>
                    <p className="text-slate-400">Establishing permanent waste collection stations at 20 major beaches across Bali.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-green-500 font-bold text-4xl">03</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Educational Hubs</h4>
                    <p className="text-slate-400">Building local eco-education centers for schools to teach sustainable tourism.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 17 — How Visitors Can Support */}
        <section className="py-24 bg-green-600">
          <div className="container px-4 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Support the Mission</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">Your choice to use Bali Help directly funds these initiatives. Every visa, every company setup, contributes to a greener Bali.</p>
            <Button size="lg" className="bg-white text-green-700 hover:bg-slate-100 rounded-full px-12 h-16 text-xl font-bold">
              Join Environmental Mission
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </section>

        {/* 18 — CSR Transparency & Reporting */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-4">
                <Scale className="w-12 h-12 text-slate-400" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">CSR Transparency</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Annual auditing and impact monitoring.</p>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="text-center">
                  <BarChart3 className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Impact Stats</span>
                </div>
                <div className="text-center">
                  <ShieldCheck className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Verified</span>
                </div>
                <div className="text-center">
                  <Users className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Community</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="rounded-full">Download 2025 Report</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
