import React, { useState } from 'react';
import { Plane, BookOpen, RotateCcw, Award, CheckCircle, AlertTriangle, X } from 'lucide-react';

interface HeaderProps {
  quizProgress: { answered: number; total: number; correct: number };
  tfProgress: { answered: number; total: number };
  fillProgress: { answered: number; total: number };
  matchProgress: { completed: boolean };
  conversationCount: number;
  onResetProgress: () => void;
  onOpenVocabulary: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  quizProgress,
  tfProgress,
  fillProgress,
  matchProgress,
  conversationCount,
  onResetProgress,
  onOpenVocabulary,
}) => {
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  const totalInteractivePoints =
    quizProgress.answered +
    tfProgress.answered +
    fillProgress.answered +
    (matchProgress.completed ? 8 : 0) +
    conversationCount;

  return (
    <header className="bg-gradient-to-r from-[#44070d] via-[#5e0d16] to-[#79121d] text-stone-100 border-b-2 border-amber-600/40 sticky top-0 z-30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3.5">
        {/* Title & Brand */}
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#c8102e] to-[#ea580c] border-2 border-amber-400/60 flex items-center justify-center text-amber-200 shadow-md">
            <Plane className="w-6 h-6 -rotate-45 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white drop-shadow-xs">
                Español en el aire
              </h1>
              <span className="text-amber-400 font-light hidden sm:inline text-xl">|</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-amber-400 font-armenian drop-shadow-xs">
                Իսպաներենը՝ եթերում
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-amber-100/90 flex flex-wrap items-center gap-x-2 mt-0.5">
              <span>Lección interactiva de español a través del armenio</span>
              <span className="text-amber-400">•</span>
              <span className="font-armenian">Իսպաներենի ինտերակտիվ դաս հայերենով</span>
            </p>
          </div>
        </div>

        {/* Actions & Progress Summary */}
        <div className="flex items-center flex-wrap gap-2.5 justify-between sm:justify-end">
          {/* Quick Vocab Button */}
          <button
            onClick={onOpenVocabulary}
            className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#78131e]/90 hover:bg-[#961826] text-white rounded-xl text-xs sm:text-sm font-bold border border-amber-400/50 transition-all shadow-sm focus:ring-2 focus:ring-amber-400"
          >
            <BookOpen className="w-4 h-4 text-amber-300" />
            <span>Giro & Vocabulario / Բառարան</span>
          </button>

          {/* Progress Indicator */}
          <div className="flex items-center gap-2 bg-[#330409]/80 px-3.5 py-2 rounded-xl border border-amber-500/40 text-xs sm:text-sm shadow-inner">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-amber-100">
              Progreso: <strong className="text-amber-300 font-extrabold">{totalInteractivePoints}</strong> գործողություն
            </span>
          </div>

          {/* Reset Button */}
          <button
            onClick={() => setShowConfirmReset(true)}
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#48060d]/90 hover:bg-[#c8102e] hover:text-white text-stone-300 rounded-xl text-xs sm:text-sm font-semibold transition-all border border-stone-600/60 focus:ring-2 focus:ring-amber-400"
            title="Reiniciar progreso guardado / Զրոյացնել պահպանված առաջընթացը"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reiniciar / Զրոյացնել</span>
          </button>
        </div>
      </div>

      {/* Confirmation Modal for Reset */}
      {showConfirmReset && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-700 rounded-2xl max-w-md w-full p-5 shadow-2xl space-y-4 animate-in fade-in zoom-in duration-150">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-red-900/50 border border-red-700 text-red-300 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">
                  ¿Reiniciar todo el progreso?
                </h3>
                <h4 className="text-sm font-semibold text-amber-400">
                  Զրոյացնե՞լ ամբողջ առաջընթացը։
                </h4>
              </div>
            </div>

            <div className="text-xs text-stone-300 space-y-2 border-y border-stone-800 py-3">
              <p>
                Se borrarán todas las respuestas del cuestionario, los ejercicios interactivos y los textos que hayas escrito en la sección de conversación.
              </p>
              <p className="text-stone-400">
                Կջնջվեն հարցարանի բոլոր պատասխանները, ինտերակտիվ վարժությունների արդյունքները և զրույցի բաժնում ձեր գրած բոլոր տեքստերը։
              </p>
            </div>

            <div className="flex items-center justify-end gap-2 pt-1">
              <button
                onClick={() => setShowConfirmReset(false)}
                className="px-3.5 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium transition-colors"
              >
                Cancelar / Չեղարկել
              </button>
              <button
                onClick={() => {
                  onResetProgress();
                  setShowConfirmReset(false);
                }}
                className="px-3.5 py-1.5 rounded-lg bg-red-700 hover:bg-red-800 text-white text-xs font-semibold transition-colors focus:ring-2 focus:ring-red-400"
              >
                Sí, reiniciar / Այո, զրոյացնել
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
