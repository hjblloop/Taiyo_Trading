export const LoginScreen = () => {
  return (
    <main className="flex-1 max-w-md w-full mx-auto p-6 flex flex-col justify-center">
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl text-slate-100">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-400">Sign In</h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white focus:outline-none focus:border-green-400" placeholder="user@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input type="password" className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white focus:outline-none focus:border-green-400" placeholder="••••••••" />
          </div>
          <button className="w-full bg-green-500 hover:bg-green-600 text-slate-950 font-bold py-2 rounded transition-colors mt-2">
            Log In
          </button>
        </form>
      </div>
    </main>
  );
};
