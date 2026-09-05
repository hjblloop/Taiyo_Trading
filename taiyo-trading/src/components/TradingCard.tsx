export interface CardProps {
  name: string;
  type: string;
  hp: number;
  imageUrl: string;
  price: string;
}

export const TradingCard = ({ name, type, hp, imageUrl, price }: CardProps) => {
  return (
    <div className="bg-slate-800 text-white rounded-xl overflow-hidden shadow-lg border border-slate-700 hover:scale-105 transition-transform duration-200 flex flex-col">
      <div className="p-4 flex justify-between items-center bg-slate-800/50">
        <h3 className="font-bold text-lg text-slate-100">{name}</h3>
        <span className="text-xs font-semibold px-2 py-1 bg-red-900/60 text-red-300 border border-red-700 rounded-full">
          HP {hp}
        </span>
      </div>
      <div className="px-4 py-2 bg-slate-950 flex justify-center">
        <img src={imageUrl} alt={name} className="h-48 w-full object-cover rounded-lg" />
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between space-y-4">
        <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">{type}</span>
        <div className="flex justify-between items-center pt-2 border-t border-slate-700">
          <span className="text-lg font-bold text-emerald-400">{price}</span>
          <button className="bg-green-500 hover:bg-green-600 text-slate-950 font-bold text-sm px-3 py-1.5 rounded-lg transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
