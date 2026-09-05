import LiveAuctionSection from '../sections/LiveAuctionSection';
import LandingSection from '../sections/LandingSection';

export const HomeScreen = () => {
  return (
    <main className="flex-1 w-full mx-auto">
      <LandingSection />
      <LiveAuctionSection />
    </main>
  );
};
