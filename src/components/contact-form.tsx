'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Message Sent!</h3>
        <p className="text-slate-600 dark:text-slate-400">
          Thank you for reaching out. Our team will contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Send Message</h3>
      <div className="grid grid-cols-2 gap-4">
        <Input placeholder="First Name" required name="firstName" />
        <Input placeholder="Last Name" required name="lastName" />
      </div>
      <Input placeholder="Email Address" type="email" required name="email" />
      <Input placeholder="Phone Number" type="tel" required name="phone" />
      <Textarea placeholder="How can we help?" rows={4} required name="message" />
      <Button 
        type="submit" 
        disabled={loading}
        className="w-full h-12 bg-gradient-to-r from-purple-700 to-orange-600 hover:from-purple-800 hover:to-orange-700 text-white font-bold rounded-xl shadow-lg transition-all"
      >
        {loading ? 'Sending...' : 'Submit Request'}
      </Button>
    </form>
  );
}
