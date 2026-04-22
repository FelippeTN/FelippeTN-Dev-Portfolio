import type { ReactNode } from 'react';
import Navbar from '@/components/Navbar';

type PageLayoutProps = {
  children: ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="page-shell min-h-screen bg-background">
      <Navbar />
      {children}
    </div>
  );
};

export default PageLayout;
