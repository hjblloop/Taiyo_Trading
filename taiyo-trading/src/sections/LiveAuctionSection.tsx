import {type CardProps} from '../types';
import LiveAuctionCard from '../components/LiveAuctionCard';

const SAMPLE_CARDS: CardProps[] = [
  { id: "1", name: 'Mowhawk Man', distributor: 'PokeHunter67', timeOnBid: "2026-09-06T10:30:00Z", group: "One Piece", price: '$45.00', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStOwjfLTaDxX2IRpy0ziS5KUk3GuroiwV-MWcTw2lLYA&s=10' },
  { id: "2", name: 'Blackizard', distributor: 'OnePieceKing420',  timeOnBid: "2026-09-15T20:27:00Z", group: "Pokemon", price: '$28.50', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsDG7dEhZX2QYlJCVQE1BYN6O6WSgE17lRdZuvOiqDmA&s=10' },
  { id: "3", name: 'Monkey Man', distributor: 'RobinFeetPics',  timeOnBid: "2026-09-06T20:30:00Z", group: "One Piece", price: '$60.00', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ582VHTwfuQIg6zcV205ZhYlcyucPTw4cCPS9UpTdUNA&s=10' },
  { id: "4", name: 'Mewtwo', distributor: 'PokeHunter67', timeOnBid: "2026-09-05T12:47:00Z", group: "Pokemon", price: '$35.00', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThIRijD7IvZzDi7mcdwQPiRziWz91zJZATc-ew8ZsEkw&s' },
  { id: "5", name: 'Robin', distributor: 'PokeHunter67', timeOnBid: "2026-09-06T10:30:00Z", group: "One Piece", price: '$45.00', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGQ4QaQIQgEcJmVQlMKgVutxx5TWZWUT9BZzYM3vDiFw&s=10' },
  { id: "6", name: 'Shiny Pikachu', distributor: 'OnePieceKing420',  timeOnBid: "2026-09-15T20:27:00Z", group: "Pokemon", price: '$28.50', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQThYolr1yGDtXe1aqNFFNkjNixWNHm5ZxcQXaEQh5ipw&s=10' },
  { id: "7", name: 'Nami Limited Edition', distributor: 'RobinFeetPics',  timeOnBid: "2026-09-06T20:30:00Z", group: "One Piece", price: '$60.00', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwI_V8MyBwOlLCKGNgoQvS7l9T9zHD1J9ArO-dn-592Q&s=10' },
  { id: "8", name: 'Fat Fuck', distributor: 'PokeHunter67', timeOnBid: "2026-09-05T12:47:00Z", group: "Pokemon", price: '$35.00', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5j8zQzVtdbppH_iHEFKiQu1xrWcv6AzTnLh4hkrr4zQ&s=10' },
  { id: "9", name: 'Inferno Dragon', distributor: 'PokeHunter67', timeOnBid: "2026-09-06T10:30:00Z", group: "One Piece", price: '$45.00', imageUrl: 'https://via.placeholder.com/300x200/991b1b/ffffff?text=Inferno+Dragon' },
  { id: "10", name: 'Frost Warden', distributor: 'OnePieceKing420',  timeOnBid: "2026-09-15T20:27:00Z", group: "Pokemon", price: '$28.50', imageUrl: 'https://via.placeholder.com/300x200/1e40af/ffffff?text=Frost+Warden' },
  { id: "11", name: 'Shadow Stalker', distributor: 'RobinFeetPics',  timeOnBid: "2026-09-06T20:30:00Z", group: "One Piece", price: '$60.00', imageUrl: 'https://via.placeholder.com/300x200/3b0764/ffffff?text=Shadow+Stalker' },
  { id: "12", name: 'Solar Paladin', distributor: 'PokeHunter67', timeOnBid: "2026-09-05T12:47:00Z", group: "Pokemon", price: '$35.00', imageUrl: 'https://via.placeholder.com/300x200/854d0e/ffffff?text=Solar+Paladin' },
  { id: "13", name: 'Inferno Dragon', distributor: 'PokeHunter67', timeOnBid: "2026-09-06T10:30:00Z", group: "One Piece", price: '$45.00', imageUrl: 'https://via.placeholder.com/300x200/991b1b/ffffff?text=Inferno+Dragon' },
  { id: "14", name: 'Frost Warden', distributor: 'OnePieceKing420',  timeOnBid: "2026-09-15T20:27:00Z", group: "Pokemon", price: '$28.50', imageUrl: 'https://via.placeholder.com/300x200/1e40af/ffffff?text=Frost+Warden' },
  { id: "15", name: 'Shadow Stalker', distributor: 'RobinFeetPics',  timeOnBid: "2026-09-06T20:30:00Z", group: "One Piece", price: '$60.00', imageUrl: 'https://via.placeholder.com/300x200/3b0764/ffffff?text=Shadow+Stalker' },
  { id: "16", name: 'Solar Paladin', distributor: 'PokeHunter67', timeOnBid: "2026-09-05T12:47:00Z", group: "Pokemon", price: '$35.00', imageUrl: 'https://via.placeholder.com/300x200/854d0e/ffffff?text=Solar+Paladin' },
];

const LiveAuctionSection = () => {
    return(
        <div className="p-6 bg-warm-gold">
            <h1 className="text-4xl font-bold text-black mb-6 font-playfair">Live Auction & Best Offers</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {SAMPLE_CARDS.map((card) => (
                    <LiveAuctionCard key={card.id} {...card} />
                ))}
            </div>
        </div>
    );
};

export default LiveAuctionSection;