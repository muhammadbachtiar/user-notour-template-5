'use client';

import { useEffect } from 'react';
import { Footer } from '@/components/footer/footer';
import Header from '@/components/header/header';
import { useContent } from '@/hooks/useContent';

export default function LayoutInner({ children }: { children: React.ReactNode }) {
  const { footer } = useContent();

  useEffect(() => {
    // Function to calculate header height and set CSS variable
    const calculateHeaderHeight = () => {
      const header = document.querySelector('.village-header');
      if (header) {
        const height = header.getBoundingClientRect().height;
        document.documentElement.style.setProperty('--header-height', `${height}px`);
      }
    };

    // Calculate on mount
    calculateHeaderHeight();

    // Recalculate on resize
    window.addEventListener('resize', calculateHeaderHeight);

    // Cleanup
    return () => {
      window.removeEventListener('resize', calculateHeaderHeight);
    };
  }, []);

  return (
    <>
       <Header data={footer} />
          <div className="mt-[var(--header-height)]">
            {children}
          </div>
        <Footer data={footer} />
    </>
  );
}


