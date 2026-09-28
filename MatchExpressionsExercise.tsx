import React, { useState, useEffect } from 'react';
import { CheckCircle2, RotateCcw, Sparkles, Trophy, Check } from 'lucide-react';
import { EXPRESSION_PAIRS, ExpressionPair } from './lessonData';

interface MatchExpressionsExerciseProps {
  onCompletedChange?: (isCompleted: boolean) => void;
}

export const MatchExpressionsExercise: React.FC<MatchExpressionsExerciseProps> = ({
  onCompletedChange,
}) => {
  const [selectedEsId, setSelectedEsId] = useState<number | null>(null);
  const [selectedHyId, setSelectedHyId] = useState<number | null>(null);
  const [matchedIds, setMatchedIds] = useState<number[]>([]);
  const [mismatchedPair, setMismatchedPair] = useState<{ es: number; hy: number } | null>(null);
  const [shuffledHyList, setShuffledHyList] = useState<ExpressionPair[]>([]);

  // Shuffle Armenian items on mount
  useEffect(() => {
    shuffleItems();
  }, []);

  const shuffleItems = () => {
    const shuffled = [...EXPRESSION_PAIRS].sort(() => Math.random() - 0.5);
    setShuffledHyList(shuffled);
    setMatchedIds([]);
    setSelectedEsId(null);
    setSelectedHyId(null);
    setMismatchedPair(null);
    if (onCompletedChange) onCompletedChange(false);
  };

  const handleSelectEs = (id: number) => {
    if (matchedIds.includes(id)) return;
    setMismatchedPair(null);
    setSelectedEsId(id);

    // If an Armenian card is already chosen, test match
    if (selectedHyId !== null) {
      checkMatch(id, selectedHyId);
    }
  };

  const handleSelectHy = (id: number) => {
    if (matchedIds.includes(id)) return;
    setMismatchedPair(null);
    setSelectedHyId(id);

    // If a Spanish card is already chosen, test match
    if (selectedEsId !== null) {
      checkMatch(selectedEsId, id);
    }
  };

  const checkMatch = (esId: number, hyId: number) => {
    if (esId === hyId) {
      // Correct match!
      const newMatched = [...matchedIds, esId];
      setMatchedIds(newMatched);
      setSelectedEsId(null);
      setSelectedHyId(null);
      setMismatchedPair(null);
      if (newMatched.length === EXPRESSION_PAIRS.length && onCompletedChange) {
        onCompletedChange(true);
      }
    } else {
      // Mismatch
      setMismatchedPair({ es: esId, hy: hyId });
      setTimeout(() => {
        setMismatchedPair(null);
        setSelectedEsId(null);
        setSelectedHyId(null);
      }, 900);
    }
  };

  const isAllMatched = matchedIds.length === EXPRESSION_PAIRS.length;

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-8 border-3 border-[#6b1118]/20 shadow-md space-y-6">
      {/* Exercise Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-stone-100 pb-4">
        <div className="space-y-1">
          <h3 className="text-xl sm:text-2xl font-black text-[#44070d] flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-orange-600" />
            <span>Une las expresiones / Միացրո՛ւ արտահայտությունները</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-600">
            Toca una tarjeta en español y luego su significado en armenio. / Սեղմեք իսպաներեն արտահայտության, ապա նրա հայերեն իմաստի վրա։
          </p>
        </div>

        <div className="flex items-center gap-2.5 self-start sm:self-auto">
          <span className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#6b1118] to-[#c8102e] text-amber-300 text-sm font-black font-mono shadow-xs">
            {matchedIds.length} / {EXPRESSION_PAIRS.length}
          </span>
          <button
            onClick={shuffleItems}
            className="p-2 rounded-xl bg-stone-100 hover:bg-[#6b1118] hover:text-white text-stone-700 transition-all cursor-pointer border border-stone-200"
            title="Reiniciar parejas / Կրկին խառնել"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Completion Banner */}
      {isAllMatched && (
        <div className="bg-emerald-50 border-3 border-emerald-500 rounded-3xl p-6 sm:p-7 text-center space-y-4 animate-in fade-in zoom-in duration-200 shadow-lg">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-md">
            <Trophy className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-xl sm:text-2xl font-black text-emerald-950">
              ¡Todas las expresiones conectadas con éxito!
            </h4>
            <p className="text-base font-armenian font-bold text-emerald-800 mt-1">
              Բոլոր 8 արտահայտությունները ճիշտ միացվեցին։
            </p>
          </div>
          <button
            onClick={shuffleItems}
            className="px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-base font-black inline-flex items-center gap-2 transition-all shadow-md cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Jugar de nuevo / Կրկին խաղալ</span>
          </button>
        </div>
      )}

      {/* Cards Grid: Left = Spanish, Right = Armenian */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Spanish Column */}
        <div className="space-y-3">
          <span className="text-sm font-black uppercase tracking-wider text-[#6b1118] block pl-1">
            Español / Իսպաներեն
          </span>
          <div className="space-y-2.5">
            {EXPRESSION_PAIRS.map((pair) => {
              const isMatched = matchedIds.includes(pair.id);
              const isSelected = selectedEsId === pair.id;
              const isError = mismatchedPair?.es === pair.id;

              return (
                <button
                  key={pair.id}
                  onClick={() => handleSelectEs(pair.id)}
                  disabled={isMatched}
                  className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between gap-3 focus:outline-none focus:ring-4 focus:ring-amber-400 cursor-pointer ${
                    isMatched
                      ? 'bg-emerald-50/80 border-emerald-400 text-emerald-950 opacity-90 cursor-default shadow-xs'
                      : isError
                      ? 'bg-red-100 border-red-500 text-red-950 ring-3 ring-red-400 animate-pulse'
                      : isSelected
                      ? 'bg-[#fbf2f3] border-[#6b1118] text-[#4a080e] ring-3 ring-[#6b1118]/40 shadow-md font-bold'
                      : 'bg-white hover:border-[#6b1118]/60 border-stone-200 text-stone-950 hover:bg-[#fffcfb]'
                  }`}
                >
                  <div className="space-y-1">
                    <span className="text-base sm:text-lg font-black block">{pair.expressionEs}</span>
                    <span className="text-xs text-stone-500 italic block">
                      {pair.contextEs}
                    </span>
                  </div>

                  {isMatched && (
                    <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Check className="w-4 h-4" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Armenian Column */}
        <div className="space-y-3">
          <span className="text-sm font-black uppercase tracking-wider text-amber-900 block pl-1 font-armenian">
            Իմաստը հայերենով / Significado
          </span>
          <div className="space-y-2.5">
            {shuffledHyList.map((pair) => {
              const isMatched = matchedIds.includes(pair.id);
              const isSelected = selectedHyId === pair.id;
              const isError = mismatchedPair?.hy === pair.id;

              return (
                <button
                  key={pair.id}
                  onClick={() => handleSelectHy(pair.id)}
                  disabled={isMatched}
                  className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between gap-3 focus:outline-none focus:ring-4 focus:ring-amber-400 cursor-pointer ${
                    isMatched
                      ? 'bg-emerald-50/80 border-emerald-400 text-emerald-950 opacity-90 cursor-default shadow-xs'
                      : isError
                      ? 'bg-red-100 border-red-500 text-red-950 ring-3 ring-red-400 animate-pulse'
                      : isSelected
                      ? 'bg-amber-100 border-amber-800 text-amber-950 ring-3 ring-amber-600/40 shadow-md font-bold'
                      : 'bg-white hover:border-amber-500 border-stone-200 text-stone-950 hover:bg-amber-50/20'
                  }`}
                >
                  <div className="space-y-1 font-armenian">
                    <span className="text-base sm:text-lg font-bold block">{pair.translationHy}</span>
                    <span className="text-xs text-stone-500 block">
                      {pair.contextHy}
                    </span>
                  </div>

                  {isMatched && (
                    <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Check className="w-4 h-4" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
