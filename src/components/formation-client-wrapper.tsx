'use client';

import { useState } from 'react';
import CompanyFormationModal from './company-formation-modal';
import MobileCTA from './mobile-cta';

export default function FormationClientWrapper({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MobileCTA showModal={() => setIsOpen(true)} />
      <div onClick={(e) => {
        const target = e.target as HTMLElement;
        if (target.getAttribute('data-action') === 'open-formation-modal') {
           e.preventDefault();
           setIsOpen(true);
        }
      }}>
        {children}
      </div>
      <CompanyFormationModal 
        open={isOpen} 
        onOpenChange={setIsOpen} 
      />
    </>
  );
}
