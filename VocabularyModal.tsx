import React, { useState } from 'react';
import { X, BookOpen, Sparkles, MessageCircle, Volume2, Search, Check } from 'lucide-react';
import { VOCABULARY_LIST, ARGENTINE_FEATURES, VocabularyItem, ArgentineFeature } from './lessonData';

interface VocabularyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VocabularyModal: React.FC<VocabularyModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'vocab' | 'features'>('vocab');
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filteredVocab = VOCABULARY_LIST.filter((item) => {
    if (!searchTerm.trim()) return true;
    const q = searchTerm.toLowerCase();
    return (
      item.termEs.toLowerCase().includes(q) ||
      item.meaningHy.toLowerCase().includes(q) ||
      item.exampleEs.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div className="bg-stone-50 border border-stone-300 rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-150">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#44070d] via-[#5c0d16] to-[#79121d] text-stone-100 p-4 sm:p-5 flex items-center justify-between border-b-2 border-amber-600/40">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#c8102e] to-[#ea580c] text-white flex items-center justify-center shadow-md border border-amber-400/50">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                <span>Vocabulario y Giros Rioplatenses</span>
                <span className="text-amber-400 font-light hidden sm:inline">|</span>
                <span className="text-amber-300 text-sm sm:text-base font-armenian font-bold">
                  Բառարան և լեզվական նրբերանգներ
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-amber-200/90">
                15 palabras clave y las peculiaridades del habla argentina / 15 բանալի բառեր և արգենտինյան խոսվածք
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-xl bg-[#300509] hover:bg-[#c8102e] text-stone-300 hover:text-white transition-all cursor-pointer border border-[#80131d]/50"
            title="Cerrar / Փակել"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switchers + search */}
        <div className="bg-white px-4 sm:px-6 py-3 border-b border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setActiveTab('vocab')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'vocab'
                  ? 'bg-amber-900 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              Palabras clave (15) / Բառապաշար
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'features'
                  ? 'bg-amber-900 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Español argentino (7) / Արգենտինական ձևեր</span>
            </button>
          </div>

          {activeTab === 'vocab' && (
            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar palabra / Որոնել..."
                className="w-full pl-8 pr-3 py-1.5 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-700"
              />
            </div>
          )}
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          {/* TAB 1: VOCABULARY LIST */}
          {activeTab === 'vocab' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {filteredVocab.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-2xl border border-stone-200 hover:border-amber-400 transition-all shadow-xs space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-stone-900">{item.termEs}</h4>
                        {item.isKeyMandatory && (
                          <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 text-[10px] font-bold">
                            Clave
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-stone-500 font-mono">
                        {item.partOfSpeechEs} ({item.partOfSpeechHy})
                      </span>
                    </div>
                  </div>

                  <div className="text-xs sm:text-sm font-semibold text-amber-900 font-armenian bg-amber-50/70 p-2 rounded-lg border border-amber-200/60">
                    {item.meaningHy}
                  </div>

                  <div className="pt-1.5 border-t border-stone-100 space-y-0.5 text-xs text-stone-700">
                    <p className="italic font-medium">«{item.exampleEs}»</p>
                    <p className="font-armenian text-stone-500">«{item.exampleHy}»</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: ARGENTINE FEATURES */}
          {activeTab === 'features' && (
            <div className="space-y-4">
              <div className="bg-amber-100/60 border border-amber-300 rounded-2xl p-4 text-xs text-amber-950 font-armenian leading-relaxed">
                <strong>Ռիո դե լա Պլատայի տարածաշրջանի առանձնահատկությունները.</strong> Արգենտինայում և Ուրուգվայում խոսվող իսպաներենն ունի յուրահատուկ հնչյունաբանություն, քերականական ձևեր («voseo») և հարուստ խոսակցական բառապաշար։ Ստորև ներկայացված են այս հարցազրույցում հանդիպող ամենակարևոր արտահայտությունների բացատրությունները։
              </div>

              <div className="space-y-3.5">
                {ARGENTINE_FEATURES.map((feature) => (
                  <div
                    key={feature.id}
                    className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs space-y-3"
                  >
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-amber-900 text-white text-xs font-bold font-mono">
                        {feature.term}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-stone-900 font-armenian">
                        {feature.titleHy}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-700 font-armenian leading-relaxed">
                      {feature.fullExplanationHy}
                    </p>

                    <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 text-xs space-y-1">
                      <span className="font-semibold text-stone-500 text-[11px] uppercase tracking-wider block">
                        Օրինակը հարցազրույցից / Ejemplo en el diálogo:
                      </span>
                      <p className="font-medium text-stone-900 italic">{feature.exampleEs}</p>
                      <p className="font-armenian text-stone-600">{feature.exampleHy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-stone-100 px-4 sm:px-6 py-3 border-t border-stone-200 flex items-center justify-between text-xs text-stone-600">
          <span>Fuente: Entrevista original a Natalia Oreiro y Facundo Arana</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 text-white font-medium rounded-xl hover:bg-stone-800 transition-colors"
          >
            Cerrar / Փակել
          </button>
        </div>
      </div>
    </div>
  );
};
