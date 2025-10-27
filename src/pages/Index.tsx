import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/home/Header';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import NewsSection from '@/components/home/NewsSection';
import ServicesSection from '@/components/home/ServicesSection';
import QuickActionsSection from '@/components/home/QuickActionsSection';
import ContactsSection from '@/components/home/ContactsSection';
import Footer from '@/components/home/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StatsSection />
      <NewsSection />
      <ServicesSection />
      <QuickActionsSection />
      <ContactsSection />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
