'use client';

import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription,
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MessageCircle, 
  Mail, 
  Send, 
  LogIn, 
  UserPlus, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import Link from 'next/link';

export default function UniversalContactModal({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        alert('Thank you! Your inquiry has been received. Our team will contact you shortly.');
        setFormData({ name: '', whatsapp: '', email: '', notes: '' });
        setIsOpen(false);
      } else {
        // If email was sent but DB failed or vice versa, we still show success to user
        if (result.success) {
          alert('Thank you! Your inquiry has been received.');
          setIsOpen(false);
        } else {
          alert('Submission error. Please contact us directly via WhatsApp.');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px] p-0 overflow-hidden rounded-3xl border-none shadow-2xl">
        {/* Top Section: Auth & Header */}
        <div className="bg-gradient-to-r from-purple-700 to-purple-900 p-8 text-white">
          <DialogHeader className="flex flex-row justify-between items-center mb-6 space-y-0 text-left">
            <div className="flex flex-col">
              <DialogTitle className="text-2xl font-bold text-white">BaliHelp Connect</DialogTitle>
              <DialogDescription className="text-purple-200 text-xs">One-stop access for inquiries and authentication.</DialogDescription>
            </div>
            <ShieldCheck className="w-6 h-6 text-purple-200 opacity-50" />
          </DialogHeader>
          
          <div className="grid grid-cols-2 gap-4">
            <Link href="/admin/login" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full bg-white/10 border-white/20 hover:bg-white/20 text-white gap-2 h-11">
                <LogIn className="w-4 h-4" />
                Sign In
              </Button>
            </Link>
            <Link href="/admin/login?mode=signup" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full bg-white/10 border-white/20 hover:bg-white/20 text-white gap-2 h-11">
                <UserPlus className="w-4 h-4" />
                Sign Up
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom Section: Inquiry Form */}
        <div className="p-8 bg-white dark:bg-slate-900">
          <div className="mb-6">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Quick Inquiry</h3>
            <p className="text-xs text-slate-400">Response within 2 hours during Bali business hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input 
              name="name"
              placeholder="Your Name" 
              className="h-12 rounded-xl"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <Input 
              name="whatsapp"
              placeholder="WhatsApp Number" 
              className="h-12 rounded-xl"
              value={formData.whatsapp}
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
            <Textarea 
              name="notes"
              placeholder="How can we help you?" 
              className="min-h-[100px] rounded-xl"
              value={formData.notes}
              onChange={handleInputChange}
            />

            <Button 
              type="submit" 
              className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl mt-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
              <Send className="ml-2 w-4 h-4" />
            </Button>
          </form>

          {/* Quick Contact Buttons */}
          <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
            <a href="https://wa.me/6285727041992" target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="outline" className="w-full h-11 rounded-xl gap-2 border-green-500/30 text-green-600 hover:bg-green-50 dark:hover:bg-green-950/20">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </a>
            <a href="mailto:info@balihelp.id" className="flex-1">
              <Button variant="outline" className="w-full h-11 rounded-xl gap-2 border-blue-500/30 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20">
                <Mail className="w-4 h-4" />
                Email
              </Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
