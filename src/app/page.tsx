'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import {
  Building2,
  Shield,
  Clock,
  TrendingUp,
  Globe,
  Users,
  Landmark,
  Briefcase,
  Sun,
  FileText,
  ClipboardList,
  Check,
  Wallet,
  UserCheck,
  Calculator,
  Receipt,
  CreditCard,
  FileCheck,
  IdCard,
  Home as HomeIcon,
  RefreshCw,
  ArrowRight,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Star,
  Award,
  Zap,
  Moon
} from 'lucide-react';
import {
  servicesData,
  packagesData,
  visaServicesData,
  whyBaliData,
  trustData,
  navigationLinks,
  type Service,
  type Package,
  type VisaService
} from '@/lib/mock-data';
import CTASection from '@/components/cta-section';
import AdditionalServices from '@/components/additional-services';
import PopularVisaSection from '@/components/popular-visa-section';
import Footer from '@/components/footer';
import LanguageDropdown from '@/components/language-dropdown';
import BaliFormationBanner from '@/components/bali-formation-banner';
import VisaServicesSection from '@/components/visa-services-section';
import FAQSection from '@/components/faq-section';
import CompanyFormationForm from '@/components/company-formation-form';
import CompanyFormationModal from '@/components/company-formation-modal';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [selectedVisa, setSelectedVisa] = useState<VisaService | null>(null);
  const [activeSection, setActiveSection] = useState('hero');
  const [isFormationModalOpen, setIsFormationModalOpen] = useState(false);
  
  // Mobile header animation and hold detection
  const [showMobileHeader, setShowMobileHeader] = useState(false);
  const [holdTimer, setHoldTimer] = useState<NodeJS.Timeout | null>(null);
  const [isHolding, setIsHolding] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['hero', 'why-bali', 'services', 'packages', 'cta-light', 'additional-services', 'cta-dark', 'popular-visa', 'visa-services', 'other-services', 'trust', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dark mode toggle
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  
  // Show mobile header after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMobileHeader(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  
  // Handle hold detection for mobile language change
  const handleMouseDown = () => {
    setIsHolding(true);
    const timer = setTimeout(() => {
      setShowLanguageMenu(!showLanguageMenu);
      setIsHolding(false);
    }, 3000);
    setHoldTimer(timer);
  };
  
  const handleMouseUp = () => {
    setIsHolding(false);
    if (holdTimer) {
      clearTimeout(hholdTimer);
      setHoldTimer(null);
    }
  };
  
  // Handle click for theme toggle (short press)
  const handleClick = () => {
    if (!isHolding) {
      setIsDarkMode(!isDarkMode);
    }
  };

  const getIconComponent = (iconName: string) => {
    const icons: Record<string, any> = {
      building: Building2,
      landmark: Landmark,
      'credit-card': CreditCard,
      'file-text': FileText,
      'clipboard-list': ClipboardList,
      'file-check': FileCheck,
      calculator: Calculator,
      receipt: Receipt,
      wallet: Wallet,
      'user-check': UserCheck,
      passport: IdCard,
      home: HomeIcon,
      'refresh-cw': RefreshCw,
      'trending-up': TrendingUp,
      globe: Globe,
      users: Users,
      briefcase: Briefcase,
      sun: Sun
    };
    const Icon = icons[iconName] || Building2;
    return <Icon className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm shadow-md'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <nav
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a
              href="#"
              className="flex items-center gap-2"
              aria-label="BaliHelp Home"
            >
              {/* Desktop: Text Logo Only */}
              <span className="hidden lg:block text-xl font-bold bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent">
                Bali Help
              </span>
              {/* Mobile: Logo Image Only */}
              <div className="lg:hidden w-10 h-10 flex items-center justify-center">
                <img 
                  src="/logo.png"
                  alt="Bali Help Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-purple-700 dark:text-purple-400'
                      : 'text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {/* Mobile: Hold for language (3s), Click for theme toggle */}
              <div className="lg:hidden">
                <button
                  className="flex items-center justify-center gap-2 p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  onTouchStart={handleMouseDown}
                  onTouchEnd={handleMouseUp}
                  onClick={handleClick}
                  aria-label="Hold for language, click for theme toggle"
                >
                  <Globe className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    {isDarkMode ? 'Light' : 'Dark'}
                  </span>
                </button>
                {/* Language Menu - Shows after holding */}
                {showLanguageMenu && (
                  <div className="absolute right-0 top-full mt-2 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 p-2 min-w-[200px]">
                    <LanguageDropdown 
                      currentLanguage={currentLanguage} 
                      onLanguageChange={(lang) => {
                        setCurrentLanguage(lang);
                        setShowLanguageMenu(false);
                      }}
                    />
                  </div>
                )}
              </div>
              {/* Desktop: Globe Button with Theme Toggle and Language Dropdown */}
              <div className="hidden lg:block relative group">
                <button
                  className="flex items-center justify-center gap-2 p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  aria-label="Toggle theme"
                  title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  <Globe className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    {isDarkMode ? 'Light' : 'Dark'}
                  </span>
                </button>
                {/* Language Dropdown - Shows on Hover */}
                <div className="absolute right-0 top-full mt-2 hidden group-hover:block">
                  <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 p-2 min-w-[200px]">
                    <LanguageDropdown 
                      currentLanguage={currentLanguage} 
                      onLanguageChange={setCurrentLanguage} 
                    />
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/6285727041992"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-9 px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white shadow-lg shadow-orange-500/25 transition-all hover:shadow-xl hover:shadow-orange-500/30"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 space-y-2 border-t border-slate-200 dark:border-slate-700">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="block px-4 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Mobile CTA Bar - Slides down after 3 seconds */}
      <div
        className={`lg:hidden fixed top-16 left-0 right-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 shadow-lg transition-all duration-500 ease-out ${
          showMobileHeader
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0'
        }`}
        role="complementary"
        aria-label="Quick actions"
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              onClick={() => setIsFormationModalOpen(true)}
              className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white text-sm font-semibold rounded-lg shadow-lg shadow-orange-500/25 transition-all"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Start your company today
            </span>
          </div>
          <a
            href="https://wa.me/6285727041992"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            aria-label="Contact us on WhatsApp"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Chat</span>
          </a>
        </div>
      </div>

      <main id="main-content">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-white via-purple-50 to-orange-50/30 dark:from-slate-950 dark:via-purple-950/20 dark:to-slate-950"
          aria-labelledby="hero-heading"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-300/20 dark:bg-orange-600/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/5 to-orange-500/5 rounded-full blur-3xl" />
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
                Start Your Business in Bali
                <span className="block mt-2 bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 bg-clip-text text-transparent">
                  With Confidence
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                Professional company formation, business licensing, and compliance services.
                We assist foreign investors and local entrepreneurs establish their presence in Indonesia.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white rounded-xl shadow-lg shadow-orange-500/25 transition-all hover:shadow-xl hover:shadow-orange-500/30"
                  onClick={() => setIsFormationModalOpen(true)}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-lg font-semibold rounded-xl border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800"
                  onClick={() => {
                    const servicesSection = document.getElementById('services');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  View Services
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {[
                  {
                    icon: Building2,
                    title: 'PT PMA & Local Company',
                    subtitle: 'Full registration'
                  },
                  {
                    icon: Shield,
                    title: 'Licensed & Compliant',
                    subtitle: 'Official processes'
                  },
                  {
                    icon: Clock,
                    title: 'Efficient Process',
                    subtitle: 'Streamlined setup'
                  }
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="flex flex-col items-center p-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:shadow-md hover:scale-105 transition-all cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-white text-sm text-center">
                      {item.title}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                      {item.subtitle}
                    </span>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Bali Section */}
        <section
          id="why-bali"
          className="py-20 lg:py-28 bg-white dark:bg-slate-900"
          aria-labelledby="why-bali-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2
                id="why-bali-heading"
                className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4"
              >
                Why Company Formation in Bali?
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Indonesia's digital economy is booming, and Bali offers the perfect blend of business opportunity and lifestyle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {whyBaliData.map((item, index) => (
                <Card
                  key={item.id}
                  className="group p-6 lg:p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 transition-all hover:shadow-lg hover:shadow-purple-200/50 dark:hover:shadow-purple-900/50 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-700 to-purple-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {getIconComponent(item.icon)}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950"
          aria-labelledby="services-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-4 border-purple-200 dark:border-purple-700">
                Our Core Services
              </Badge>
              <h2
                id="services-heading"
                className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4"
              >
                Company Formation Services
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Comprehensive business setup and compliance solutions for establishing your company in Indonesia.
              </p>
            </div>

            <div className="space-y-12">
              {['Company Formation', 'Business Licensing', 'Tax & Compliance', 'Additional Support'].map((category) => (
                <div key={category}>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-1 bg-gradient-to-r from-purple-700 to-purple-900 rounded-full" />
                    {category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {servicesData
                      .filter((service) => service.category === category)
                      .map((service) => (
                        <Dialog key={service.id}>
                          <DialogTrigger asChild>
                            <Card className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-700 transition-all hover:shadow-md cursor-pointer">
                              <CardContent className="p-0">
                                <div className="flex items-start gap-4">
                                  <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 text-purple-600 dark:text-purple-400">
                                    {getIconComponent(service.icon)}
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                                      {service.title}
                                    </h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                      {service.description}
                                    </p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                                {service.title}
                              </DialogTitle>
                              <DialogDescription className="text-base text-slate-600 dark:text-slate-300">
                                {service.fullDescription}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-6 mt-4">
                              <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
                                  Key Features
                                </h4>
                                <ul className="space-y-2">
                                  {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                                      <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                  <Award className="w-5 h-5 text-purple-600" />
                                  Requirements
                                </h4>
                                <ul className="space-y-2">
                                  {service.requirements.map((req, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                                      <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                                      {req}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="flex items-center gap-4 p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                                <Clock className="w-8 h-8 text-purple-600" />
                                <div>
                                  <p className="text-sm text-slate-600 dark:text-slate-400">Processing Time</p>
                                  <p className="font-semibold text-slate-900 dark:text-white">{service.timeline}</p>
                                </div>
                              </div>

                              {service.pricing && (
                                <div className="flex items-center gap-4 p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg">
                                  <Calculator className="w-8 h-8 text-orange-600" />
                                  <div>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Starting Price</p>
                                    <p className="font-semibold text-slate-900 dark:text-white">{service.pricing}</p>
                                  </div>
                                </div>
                              )}

                              <Button
                                className="w-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white"
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                              >
                                Get Started with {service.title}
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-12 max-w-2xl mx-auto">
              All services are provided in accordance with Indonesian regulations. Outcomes depend on individual circumstances and regulatory requirements.
            </p>
          </div>
        </section>

        {/* Packages Section */}
        <section
          id="packages"
          className="py-20 lg:py-28 bg-white dark:bg-slate-900"
          aria-labelledby="packages-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-4 border-purple-200 dark:border-purple-700">
                Pricing
              </Badge>
              <h2
                id="packages-heading"
                className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4"
              >
                Choose Your Package
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Transparent pricing with comprehensive service bundles tailored to your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {packagesData.map((pkg) => (
                <Dialog key={pkg.id}>
                  <DialogTrigger asChild>
                    <Card
                      className={`relative p-8 rounded-2xl border-2 transition-all hover:shadow-xl cursor-pointer ${
                        pkg.popular
                          ? 'border-purple-500 bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/20 dark:to-slate-800 shadow-lg shadow-purple-500/10'
                          : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800'
                      }`}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white text-sm font-medium flex items-center gap-1 shadow-lg">
                          <Star className="w-3.5 h-3.5" />
                          Most Popular
                        </div>
                      )}

                      <CardContent className="p-0">
                        <div className="text-center mb-6">
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                            {pkg.name}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                            {pkg.description}
                          </p>
                          <div className="text-3xl font-bold text-slate-900 dark:text-white">
                            {pkg.price}
                          </div>
                        </div>

                        <ul className="space-y-3 mb-8" role="list">
                          {pkg.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                              <span className="text-slate-700 dark:text-slate-300 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <Button
                          className={`w-full h-12 ${
                            pkg.popular
                              ? 'bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white shadow-lg shadow-orange-500/25'
                              : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100'
                          } font-semibold transition-all`}
                        >
                          Get Started
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                        {pkg.name} Package
                      </DialogTitle>
                      <DialogDescription className="text-base text-slate-600 dark:text-slate-300">
                        {pkg.fullDescription}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6 mt-4">
                      <div className="p-6 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/20 rounded-xl">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Package Price</p>
                            <p className="text-4xl font-bold text-slate-900 dark:text-white">{pkg.price}</p>
                          </div>
                          {pkg.popular && (
                            <Badge className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white border-0">
                              <Star className="w-3.5 h-3.5 mr-1" />
                              Most Popular
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600" />
                          What's Included
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {pkg.includes.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-2 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg"
                            >
                              <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button
                        className="w-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white h-12 text-lg font-semibold"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Get Started with {pkg.name} Package
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>

                      <p className="text-center text-sm text-slate-500 dark:text-slate-400">
                        Prices may vary based on specific requirements. Contact us for a detailed quote.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>

        {/* Bali Formation Banner */}
        <BaliFormationBanner />

        {/* Additional Services Section */}
        <AdditionalServices />

        {/* CTA Section - Dark Mode */}
        <CTASection mode="dark" />

        {/* Visa Services Section */}
        <VisaServicesSection />

        {/* Other Services Section */}
        <section
          id="other-services"
          className="py-20 lg:py-28 bg-white dark:bg-slate-900"
          aria-labelledby="other-services-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2
                id="other-services-heading"
                className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4"
              >
                Additional Business Services
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Comprehensive support beyond company formation to help your business thrive in Indonesia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Landmark,
                  title: 'Accounting & Tax',
                  description: 'Monthly bookkeeping, tax planning, and financial reporting services'
                },
                {
                  icon: Users,
                  title: 'HR & Payroll',
                  description: 'Employee management, payroll processing, and compliance support'
                },
                {
                  icon: Briefcase,
                  title: 'Legal Advisory',
                  description: 'Contract review, corporate governance, and legal consultation'
                },
                {
                  icon: Globe,
                  title: 'Market Research',
                  description: 'Industry analysis, competitor insights, and market entry strategy'
                }
              ].map((service, index) => (
                <Card
                  key={index}
                  className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-700 transition-all hover:shadow-md cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Visa Section */}
        <PopularVisaSection />

        {/* Trust Section */}
        <section
          id="trust"
          className="py-20 lg:py-28 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white"
          aria-labelledby="trust-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2
                id="trust-heading"
                className="text-3xl sm:text-4xl font-bold mb-4"
              >
                Trusted by Businesses Worldwide
              </h2>
              <p className="text-lg text-purple-200">
                Our track record speaks for itself. Join hundreds of successful businesses we've helped establish in Indonesia.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {trustData.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                    {item.value}
                  </div>
                  <div className="text-sm text-purple-200">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: Shield,
                  title: 'Licensed & Certified',
                  description: 'Fully licensed and compliant with Indonesian regulations'
                },
                {
                  icon: Award,
                  title: 'Industry Experts',
                  description: 'Experienced team with deep local knowledge'
                },
                {
                  icon: Zap,
                  title: 'Fast Processing',
                  description: 'Efficient workflows for quick turnaround times'
                }
              ].map((item, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <item.icon className="w-10 h-10 mx-auto mb-4 text-yellow-400" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-purple-200">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 lg:py-28 bg-gradient-to-br from-purple-50 via-orange-50/30 to-amber-50/20 dark:from-slate-900 dark:to-slate-950"
          aria-labelledby="contact-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-4 border-purple-200 dark:border-purple-700">
                Contact Us
              </Badge>
              <h2
                id="contact-heading"
                className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4"
              >
                Start Your Business Journey
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Ready to establish your business in Bali? Get in touch with our team for a free consultation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-6">
                <Card className="p-6 border-slate-200 dark:border-slate-700">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Email Us</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">info@balihelp.id</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">support@balihelp.id</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-slate-200 dark:border-slate-700">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Call Us</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">+62 361 123 4567</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">WhatsApp: +62 812 3456 7890</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-slate-200 dark:border-slate-700">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Visit Us</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Jl. Raya Ubud No. 123<br />
                        Gianyar, Bali 80571<br />
                        Indonesia
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-6 lg:p-8 border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                  Send Us a Message
                </h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="John" className="bg-white dark:bg-slate-800" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" className="bg-white dark:bg-slate-800" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-white dark:bg-slate-800" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" placeholder="+62 812 3456 7890" className="bg-white dark:bg-slate-800" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      className="w-full h-10 px-3 py-2 text-sm rounded-md border border-input bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-white dark:bg-slate-800"
                    >
                      <option value="">Select a service</option>
                      <option value="pt-pma">PT PMA Registration</option>
                      <option value="pt-local">PT Local Company</option>
                      <option value="licensing">Business Licensing</option>
                      <option value="tax">Tax & Compliance</option>
                      <option value="visa">Visa Services</option>
                      <option value="other">Other Services</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your business needs..."
                      rows={4}
                      className="bg-white dark:bg-slate-800"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white h-12 font-semibold"
                  >
                    Send Message
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Company Formation Modal */}
      <CompanyFormationModal
        open={isFormationModalOpen}
        onOpenChange={setIsFormationModalOpen}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
