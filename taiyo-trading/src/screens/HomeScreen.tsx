import { TradingCard, type CardProps } from '../components/TradingCard';

const SAMPLE_CARDS: CardProps[] = [
  { name: 'Inferno Dragon', type: 'Fire / Dragon', hp: 120, price: '$45.00', imageUrl: 'https://via.placeholder.com/300x200/991b1b/ffffff?text=Inferno+Dragon' },
  { name: 'Frost Warden', type: 'Ice / Elemental', hp: 90, price: '$28.50', imageUrl: 'https://via.placeholder.com/300x200/1e40af/ffffff?text=Frost+Warden' },
  { name: 'Shadow Stalker', type: 'Dark / Rogue', hp: 75, price: '$60.00', imageUrl: 'https://via.placeholder.com/300x200/3b0764/ffffff?text=Shadow+Stalker' },
  { name: 'Solar Paladin', type: 'Light / Warrior', hp: 110, price: '$35.00', imageUrl: 'https://via.placeholder.com/300x200/854d0e/ffffff?text=Solar+Paladin' },
];

export const HomeScreen = () => {
  return (
    <main className="flex-1 max-w-7xl w-full mx-auto p-6">
      <h1 className="text-2xl font-bold text-black mb-6">Available Cards for Trade</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {SAMPLE_CARDS.map((card, index) => (
          <TradingCard key={index} {...card} />
        ))}
      </div>
    </main>
  );
};
