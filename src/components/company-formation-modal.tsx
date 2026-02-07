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
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Building2, User, Users, Mail, Phone, MapPin, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CompanyFormationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CompanyFormationModal({ open, onOpenChange }: CompanyFormationModalProps) {
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    kbli: '',
    companyPhone: '',
    companyEmail: '',
    totalCapital: '',
    
    // Shareholder 1 (Director)
    sh1Passport: '',
    sh1ContactInfo: '',
    sh1SharePercentage: '',
    sh1Phone: '',
    sh1Email: '',
    sh1Address: '',
    
    // Shareholder 2 (Commissioner)
    sh2IdCard: '',
    sh2ContactInfo: '',
    sh2SharePercentage: '',
    sh2Phone: '',
    sh2Email: '',
    sh2Address: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Redirect to Google Form after 2 seconds
    setTimeout(() => {
      window.open('https://forms.gle/6T9XMVF3H13WZsX39', '_blank');
      handleClose();
    }, 2000);
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset form after closing
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        companyName: '',
        kbli: '',
        companyPhone: '',
        companyEmail: '',
        totalCapital: '',
        sh1Passport: '',
        sh1ContactInfo: '',
        sh1SharePercentage: '',
        sh1Phone: '',
        sh1Email: '',
        sh1Address: '',
        sh2IdCard: '',
        sh2ContactInfo: '',
        sh2SharePercentage: '',
        sh2Phone: '',
        sh2Email: '',
        sh2Address: '',
      });
    }, 300);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-4 border-b bg-gradient-to-r from-purple-50 to-orange-50 dark:from-purple-950/30 dark:to-orange-950/30">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-700 to-purple-900 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                Company Formation Request
              </DialogTitle>
              <DialogDescription className="text-slate-600 dark:text-slate-300">
                Complete the form below to start your company formation process
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="h-[calc(90vh-200px)] p-6">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Submission Successful!
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Your company formation request has been submitted successfully.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Redirecting to Google Form...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Company Information Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="w-5 h-5 text-purple-700 dark:text-purple-400" />
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Company Information
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-slate-700 dark:text-slate-200">
                      Company Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="companyName"
                      placeholder="Enter company name"
                      value={formData.companyName}
                      onChange={(e) => handleChange('companyName', e.target.value)}
                      required
                      className="border-slate-300 dark:border-slate-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="kbli" className="text-slate-700 dark:text-slate-200">
                      KBLI (Business Scope) <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="kbli"
                      placeholder="Enter KBLI code"
                      value={formData.kbli}
                      onChange={(e) => handleChange('kbli', e.target.value)}
                      required
                      className="border-slate-300 dark:border-slate-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="companyPhone" className="text-slate-700 dark:text-slate-200">
                      Company Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input
                        id="companyPhone"
                        type="tel"
                        placeholder="+62..."
                        className="pl-10 border-slate-300 dark:border-slate-600"
                        value={formData.companyPhone}
                        onChange={(e) => handleChange('companyPhone', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="companyEmail" className="text-slate-700 dark:text-slate-200">
                      Company Email <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input
                        id="companyEmail"
                        type="email"
                        placeholder="company@example.com"
                        className="pl-10 border-slate-300 dark:border-slate-600"
                        value={formData.companyEmail}
                        onChange={(e) => handleChange('companyEmail', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="totalCapital" className="text-slate-700 dark:text-slate-200">
                      Total Capital <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input
                        id="totalCapital"
                        placeholder="e.g., IDR 10,000,000,000"
                        className="pl-10 border-slate-300 dark:border-slate-600"
                        value={formData.totalCapital}
                        onChange={(e) => handleChange('totalCapital', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Shareholder 1 - Director Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <User className="w-5 h-5 text-purple-700 dark:text-purple-400" />
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Shareholder 1 (Director)
                  </h3>
                  <span className="px-2 py-0.5 text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">
                    Foreign Investor
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="sh1Passport" className="text-slate-700 dark:text-slate-200">
                      Passport Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="sh1Passport"
                      placeholder="Enter passport number"
                      value={formData.sh1Passport}
                      onChange={(e) => handleChange('sh1Passport', e.target.value)}
                      required
                      className="border-slate-300 dark:border-slate-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sh1SharePercentage" className="text-slate-700 dark:text-slate-200">
                      Share Percentage <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="sh1SharePercentage"
                      type="number"
                      min="0"
                      max="100"
                      placeholder="e.g., 60"
                      value={formData.sh1SharePercentage}
                      onChange={(e) => handleChange('sh1SharePercentage', e.target.value)}
                      required
                      className="border-slate-300 dark:border-slate-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sh1Phone" className="text-slate-700 dark:text-slate-200">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input
                        id="sh1Phone"
                        type="tel"
                        placeholder="+62..."
                        className="pl-10 border-slate-300 dark:border-slate-600"
                        value={formData.sh1Phone}
                        onChange={(e) => handleChange('sh1Phone', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sh1Email" className="text-slate-700 dark:text-slate-200">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input
                        id="sh1Email"
                        type="email"
                        placeholder="email@example.com"
                        className="pl-10 border-slate-300 dark:border-slate-600"
                        value={formData.sh1Email}
                        onChange={(e) => handleChange('sh1Email', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="sh1ContactInfo" className="text-slate-700 dark:text-slate-200">
                      Information Contact & Email
                    </Label>
                    <Textarea
                      id="sh1ContactInfo"
                      placeholder="Additional contact information..."
                      value={formData.sh1ContactInfo}
                      onChange={(e) => handleChange('sh1ContactInfo', e.target.value)}
                      className="border-slate-300 dark:border-slate-600 min-h-[80px]"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="sh1Address" className="text-slate-700 dark:text-slate-200">
                      Address <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <Textarea
                        id="sh1Address"
                        placeholder="Enter full address..."
                        value={formData.sh1Address}
                        onChange={(e) => handleChange('sh1Address', e.target.value)}
                        required
                        className="pl-10 border-slate-300 dark:border-slate-600 min-h-[80px]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Shareholder 2 - Commissioner Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-purple-700 dark:text-purple-400" />
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Shareholder 2 (Commissioner)
                  </h3>
                  <span className="px-2 py-0.5 text-xs font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full">
                    Local Indonesian
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="sh2IdCard" className="text-slate-700 dark:text-slate-200">
                      ID Card / Passport Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="sh2IdCard"
                      placeholder="Enter ID card or passport number"
                      value={formData.sh2IdCard}
                      onChange={(e) => handleChange('sh2IdCard', e.target.value)}
                      required
                      className="border-slate-300 dark:border-slate-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sh2SharePercentage" className="text-slate-700 dark:text-slate-200">
                      Share Percentage <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="sh2SharePercentage"
                      type="number"
                      min="0"
                      max="100"
                      placeholder="e.g., 40"
                      value={formData.sh2SharePercentage}
                      onChange={(e) => handleChange('sh2SharePercentage', e.target.value)}
                      required
                      className="border-slate-300 dark:border-slate-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sh2Phone" className="text-slate-700 dark:text-slate-200">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input
                        id="sh2Phone"
                        type="tel"
                        placeholder="+62..."
                        className="pl-10 border-slate-300 dark:border-slate-600"
                        value={formData.sh2Phone}
                        onChange={(e) => handleChange('sh2Phone', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sh2Email" className="text-slate-700 dark:text-slate-200">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input
                        id="sh2Email"
                        type="email"
                        placeholder="email@example.com"
                        className="pl-10 border-slate-300 dark:border-slate-600"
                        value={formData.sh2Email}
                        onChange={(e) => handleChange('sh2Email', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="sh2ContactInfo" className="text-slate-700 dark:text-slate-200">
                      Information Contact & Email
                    </Label>
                    <Textarea
                      id="sh2ContactInfo"
                      placeholder="Additional contact information..."
                      value={formData.sh2ContactInfo}
                      onChange={(e) => handleChange('sh2ContactInfo', e.target.value)}
                      className="border-slate-300 dark:border-slate-600 min-h-[80px]"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="sh2Address" className="text-slate-700 dark:text-slate-200">
                      Address <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <Textarea
                        id="sh2Address"
                        placeholder="Enter full address..."
                        value={formData.sh2Address}
                        onChange={(e) => handleChange('sh2Address', e.target.value)}
                        required
                        className="pl-10 border-slate-300 dark:border-slate-600 min-h-[80px]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white rounded-xl shadow-lg shadow-orange-500/25 transition-all hover:shadow-xl hover:shadow-orange-500/30"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Formation Request
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
                <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-3">
                  You will be redirected to complete additional details on Google Form
                </p>
              </div>
            </form>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
