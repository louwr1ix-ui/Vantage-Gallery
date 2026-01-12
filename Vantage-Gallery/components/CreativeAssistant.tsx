
import React, { useState } from 'react';
import { getCreativeInsight } from '../services/geminiService.ts';
import { MessageSquare, Send, X, Loader2 } from 'lucide-react';

const CreativeAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    const insight = await getCreativeInsight(query);
    setResponse(insight);
    setIsLoading(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-2xl hover:bg-red-700 transition-all z-[90] group"
      >
        <MessageSquare className="text-white group-hover:scale-110 transition-transform" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          
          <div className="relative bg-zinc-950 border border-zinc-900 w-full max-w-lg rounded-sm shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="p-6 border-b border-zinc-900 flex justify-between items-center">
              <div>
                <h3 className="text-xs font-bold tracking-[0.4em] text-white uppercase">Studio Conscience</h3>
                <p className="text-[9px] text-zinc-600 tracking-widest mt-1 uppercase">Powered by Gemini Intelligence</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-zinc-600 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="p-8 max-h-[450px] overflow-y-auto space-y-6">
              {response ? (
                <div className="space-y-6 animate-in slide-in-from-bottom-2 duration-500">
                  <div className="bg-zinc-900/50 p-6 rounded-sm border border-zinc-900">
                    <p className="text-xs italic text-zinc-500 tracking-wider">"{query}"</p>
                  </div>
                  <div className="text-zinc-300 leading-relaxed font-serif text-xl italic">
                    {response}
                  </div>
                  <button 
                    onClick={() => { setResponse(null); setQuery(''); }}
                    className="text-[9px] uppercase tracking-[0.5em] text-red-600 font-bold hover:text-white transition-colors"
                  >
                    Another Query
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  <p className="text-zinc-500 text-sm font-light leading-relaxed">
                    Welcome. Ask me anything about visual aesthetics, cinematic composition, or the technical evolution of digital art.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <textarea
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="E.g. How do we achieve organic fluid simulation?"
                      className="w-full bg-black border border-zinc-900 rounded-sm p-5 text-white focus:outline-none focus:border-red-600 transition-colors h-28 resize-none placeholder:text-zinc-800 text-sm"
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-white text-black font-bold py-4 uppercase tracking-[0.5em] text-[10px] hover:bg-red-600 hover:text-white transition-all flex items-center justify-center space-x-3"
                    >
                      {isLoading ? <Loader2 className="animate-spin" size={16} /> : <><Send size={14} /> <span>Query System</span></>}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreativeAssistant;
