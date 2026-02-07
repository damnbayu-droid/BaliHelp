'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { X, ArrowRight, Plus, Minus, FileText, Phone, Mail, Globe } from 'lucide-react';

interface Shareholder {
  id: number;
  type: 'director' | 'commissioner' | 'shareholder';
  name?: string;
  passport?: string;
  idCard?: string;
  percentage: string;
  phone: string;
  email: string;
  address: string;
}

export default function CompanyFormationForm() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [shareholders, setShareholders] = useState<Shareholder[]>([
    {
      id: 1,
      type: 'shareholder',
      name: '',
      passport: '',
      idCard: '',
      percentage: '',
      phone: '',
      email: '',
      address: ''
    }
  ]);
  const [formData, setFormData] = useState({
    companyName: '',
    kbli: '',
    companyPhone: '',
    companyEmail: '',
    totalCapital: '',
    director: {
      name: '',
      phone: '',
      email: ''
    },
    contactInfo: {
      email: '',
      phone: ''
    }
  });

  const addShareholder = () => {
    const newShareholder: Shareholder = {
      id: shareholders.length + 1,
      type: 'shareholder',
      percentage: ''
    };
    setShareholders([...shareholders, newShareholder]);
  };

  const removeShareholder = (id: number) => {
    if (shareholders.length > 1) {
      setShareholders(shareholders.filter(s => s.id !== id));
    }
  };

  const updateShareholder = (id: number, field: string, value: string) => {
    setShareholders(shareholders.map(s => 
      s.id === id ? { ...s, [field]: value } : s
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare form data
    const formDataToSend = {
      companyName: formData.companyName,
      kbli: formData.kbli,
      companyPhone: formData.companyPhone,
      companyEmail: formData.companyEmail,
      totalCapital: formData.totalCapital,
      director: formData.director,
      contactInfo: formData.contactInfo,
      shareholders: shareholders
    };

    // Create form submission URL
    const formUrl = 'https://forms.gle/6T9XMVF3H13WZsX39';

    // Open form in new tab with pre-filled data
    const formDataEncoded = encodeURIComponent(JSON.stringify(formDataToSend));
    window.open(`${formUrl}?data=${formDataEncoded}`, '_blank');

    setIsDialogOpen(false);
  };

  return (
    <>
      <Button
        className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white rounded-xl shadow-lg shadow-orange-500/25 transition-all hover:shadow-xl hover:shadow-orange-500/30"
        onClick={() => setIsDialogOpen(true)}
      >
        Get Started
        <ArrowRight className="ml-2 w-5 h-5" />
      </Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-slate-900 dark:text-white">
              Company Formation Order Form
            </DialogTitle>
            <DialogDescription className="text-base text-slate-600 dark:text-slate-300">
              Fill in the details below to start your company formation journey in Bali. Our team will contact you within 24 hours.
            </DialogDescription>
            <button
              onClick={() => setIsDialogOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            {/* Company Information */}
            <div className="space-y-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-purple-600" />
                Company Information
              </h3>

              <div className="grid grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="companyName"
                    placeholder="Enter your company name"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    required
                    className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                  />
                </div>
                <div>
                  <label htmlFor="kbli" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    KBLI (Business Scope) <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="kbli"
                    placeholder="e.g., 62013 Information Technology"
                    value={formData.kbli}
                    onChange={(e) => setFormData({ ...formData, kbli: e.target.value })}
                    required
                    className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                  />
                </div>
                <div>
                  <label htmlFor="companyPhone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Company Phone Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="companyPhone"
                    placeholder="+62 XXX XXXX XXXX"
                    value={formData.companyPhone}
                    onChange={(e) => setFormData({ ...formData, companyPhone: e.target.value })}
                    required
                    className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                  />
                </div>
                <div>
                  <label htmlFor="companyEmail" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Company Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="companyEmail"
                    type="email"
                    placeholder="company@example.com"
                    value={formData.companyEmail}
                    onChange={(e) => setFormData({ ...formData, companyEmail: e.target.value })}
                    required
                    className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                  />
                </div>
                <div>
                  <label htmlFor="totalCapital" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Total Capital (IDR) <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="totalCapital"
                    placeholder="e.g., 2,500,000,000"
                    value={formData.totalCapital}
                    onChange={(e) => setFormData({ ...formData, totalCapital: e.target.value })}
                    required
                    className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                  />
                </div>
              </div>
            </div>

            {/* Director Information */}
            <div className="space-y-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-600" />
                Director Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="directorName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Director Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="directorName"
                    placeholder="Full legal name"
                    value={formData.director.name}
                    onChange={(e) => setFormData({ ...formData, director: { ...formData.director, name: e.target.value } })}
                    required
                    className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                  />
                </div>
                <div>
                  <label htmlFor="directorPhone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Director Phone <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="directorPhone"
                    placeholder="+62 XXXX XXXX"
                    value={formData.director.phone}
                    onChange={(e) => setFormData({ ...formData, director: { ...formData.director, phone: e.target.value } })}
                    required
                    className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                  />
                </div>
                <div>
                  <label htmlFor="directorEmail" className="block text-sm font medium text-slate-700 dark:text-slate-300 mb-2">
                    Director Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="directorEmail"
                    type="email"
                    placeholder="director@company.com"
                    value={formData.director.email}
                    onChange={(e) => setFormData({ ...formData, director: { ...formData.director, email: e.target.value } })}
                    required
                    className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
              <h3 className="text text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-purple-600" />
                Information Contact & Email
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Contact Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="contactEmail"
                    type="email"
                    placeholder="contact@balihelp.id"
                    value={formData.contactInfo.email}
                    onChange={(e) => setFormData({ ...formData, contactInfo: { ...formData.contactInfo, email: e.target.value } })}
                    required
                    className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                  />
                </div>
                <div>
                  <label htmlFor="contactPhone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Contact Phone <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="contactPhone"
                    placeholder="+62 XXXX XXXX XXXX"
                    value={formData.contactInfo.phone}
                    onChange={(e) => setFormData({ ...formData, contactInfo: { ...formData.contactInfo, phone: e.target.value } })}
                    required
                    className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                  />
                </div>
              </div>
            </div>

            {/* Shareholders Section */}
            <div className="space-y-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  Shareholders
                </h3>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addShareholder}
                  className="border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                >
                  <Plus className="w-4 h-4" />
                  Add Shareholder
                </Button>
              </div>

              {shareholders.map((shareholder, index) => (
                <div
                  key={shareholder.id}
                  className="space-y-3 p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"
                >
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Shareholder {index + 1}
                    </span>
                    {shareholders.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeShareholder(shareholder.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50 p-1"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                        Passport / ID Card
                      </label>
                      <Input
                        placeholder="Passport or ID card"
                        value={shareholder.passport || shareholder.idCard}
                        onChange={(e) => updateShareholder(shareholder.id, 'passport', e.target.value)}
                        className="h-9 text-sm bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                        Shareholder Percentage
                      </label>
                      <Input
                        placeholder="e.g., 25%"
                        value={shareholder.percentage}
                        onChange={(e) => updateShareholder(shareholder.id, 'percentage', e.target.value)}
                        className="h-9 text-sm bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                        Phone Number
                      </label>
                      <Input
                        placeholder="+62 XXXX XXXX XXXX"
                        value={shareholder.phone}
                        onChange={(e) => updateShareholder(shareholder.id, 'phone', e.target.value)}
                        className="h-9 text-sm bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="shareholder@example.com"
                        value={shareholder.email}
                        onChange={(e) => updateShareholder(shareholder.id, 'email', e.target.value)}
                        className="h-9 text-sm bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                      />
                    </div>
                    <div className="md:col-span-2 lg:col-span-3">
                      <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                        Full Address
                      </label>
                      <Input
                        placeholder="Complete address with city and postal code"
                        value={shareholder.address}
                        onChange={(e) updateShareholder(shareholder.id, 'address', e.target.value)}
                        className="h-9 text-sm bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
              <Button
                type="submit"
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white rounded-xl shadow-lg shadow-orange-500/25 transition-all hover:shadow-xl hover:shadow-orange-500/30"
              >
                Submit Application
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 text-center">
              By submitting, you agree to our <a href="#" className="text-purple-600 dark:text-purple-400 hover:underline">Terms of Service</a> and <a href="#" className="text-purple-600 dark:text-purple-400 hover:underline">Privacy Policy</a>.
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
