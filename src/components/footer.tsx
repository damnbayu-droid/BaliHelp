import React from 'react';
import { Mail, MapPin, CircleCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-slate-950 text-slate-400 py-16"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white mb-2">Bali Help</h3>
              <p className="text-sm text-slate-400 flex items-center gap-1">
                Operated by PT Indonesian Visas Agency
                <CircleCheck className="w-3 h-3" aria-label="Registered" />
              </p>
            </div>
            <p className="text-sm leading-relaxed">
              Professional company formation and business services in Bali, Indonesia.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">PT PMA Registration</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Business Licensing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Tax & Compliance</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Packages</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href="https://maps.app.goo.gl/DRXp4v8sD1nHUX6x9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Bali, Indonesia
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:info@bali.enterprises" className="hover:text-white transition-colors">info@bali.enterprises</a>
                  <a href="mailto:contact@indonesianvisas.agency" className="hover:text-white transition-colors">contact@indonesianvisas.agency</a>
                  <a href="mailto:indonesian@visas.agency" className="hover:text-white transition-colors">indonesian@visas.agency</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="text-xs space-y-4">
            <p>
              <strong className="text-slate-300">Disclaimer:</strong> BaliHelp specializes in company formation and local business services in Bali.
              Visa services referenced on this site are provided via external partners.
              We do not guarantee specific outcomes as results depend on individual circumstances and Indonesian regulatory requirements.
            </p>
            <p>
              All services are subject to applicable laws and regulations. Processing times and requirements may change based on government policies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 pt-8 border-t border-slate-800">
            <div className="flex gap-4 text-sm">
              <a href="https://bali.enterprises" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">bali.enterprises</a>
              <span className="text-slate-600">|</span>
              <a href="https://indonesianvisas.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">indonesianvisas.com</a>
              <span className="text-slate-600">|</span>
              <a href="https://indodesign.web" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">indodesign.web</a>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="https://indonesianvisas.com/en/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="https://indonesianvisas.com/en/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
