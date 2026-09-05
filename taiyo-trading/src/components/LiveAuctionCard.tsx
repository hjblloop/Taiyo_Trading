import formatTimeRemaining from '../functions/formatTimeRemaining';
import {type CardProps} from '../types';

const LiveAuctionCard = ({ 
  name, 
  timeOnBid, 
  group, 
  imageUrl, 
  price,
  distributor 
}: CardProps) => {
  const formattedTime = timeOnBid ? 
    formatTimeRemaining(timeOnBid) :
    "N/A";
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700 hover:scale-105 transition-transform duration-200 flex flex-col">
      <div className="px-2 py-2 bg-slate-950 flex justify-center">
        <img src={imageUrl} alt={name} className="h-64 w-full object-cover rounded-lg" />
      </div>
      <div className="p-2 flex-grow flex flex-col justify-between">
        <h3 className="text-lg text-slate-100 font-playfair">{name}</h3>
        <h3 className="text-xs text-slate-100 font-playfair">@ {distributor}</h3>
        <h3 className="text-xs text-slate-300 font-didone mt-2">{group}</h3>
        <span className="text-xs uppercase tracking-wider text-slate-300 font-medium mt-2">Current Bid</span>
        <div className="flex justify-between items-center pt-2 border-t border-slate-700">
          <span className="text-lg font-bold text-taiyo-gold font-['Times_New_Roman']">{price}</span>
          <span className="text-xs text-slate-400">{formattedTime}</span>
        </div>
        <button className="bg-gradient-to-r from-[#F0D084] to-[#C9913B] hover:brightness-110 text-slate-950 font-bold text-sm px-3 py-1.5 rounded-lg transition-all shadow-md">
          View Details
        </button>
      </div>
    </div>
  );
};

export default LiveAuctionCard;
