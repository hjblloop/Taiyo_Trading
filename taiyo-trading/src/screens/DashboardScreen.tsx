export const DashboardScreen = () => {
  return (
    <main className="flex-1 max-w-7xl w-full mx-auto p-6 text-black">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Trading Hub</h1>
        <button className="bg-green-500 hover:bg-green-600 text-slate-950 font-bold px-4 py-2 rounded-lg transition-colors">
          + List New Card
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
          <h2 className="text-lg font-bold text-green-400 mb-3">My Listed Cards</h2>
          <p className="text-slate-400 text-sm">You haven't listed any cards for trade yet.</p>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
          <h2 className="text-lg font-bold text-green-400 mb-3">Interested Cards</h2>
          <p className="text-slate-400 text-sm">Cards you mark as interested will show up here.</p>
        </div>
      </div>
    </main>
  );
};
