import { 
  Building2, Landmark, CreditCard, FileText, ClipboardList, FileCheck, 
  Calculator, Receipt, Wallet, UserCheck, IdCard, Home as HomeIcon, 
  RefreshCw, TrendingUp, Globe, Users, Briefcase, Sun 
} from 'lucide-react';
import React from 'react';

export const getIconComponent = (iconName: string, className: string = "w-5 h-5") => {
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
  return <Icon className={className} />;
};
