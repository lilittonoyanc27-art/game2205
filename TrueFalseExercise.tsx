import React, { useState } from 'react';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Play, Check, X, Trophy, Eye, EyeOff } from 'lucide-react';
import { TRUE_FALSE_DATA } from './lessonData';

interface TrueFalseExerciseProps {
  onSeek: (seconds: number) => void;
  onCompletedChange?: (answered: number, total: number) => void;
}

export const TrueFalseExercise: React.FC<TrueFalseExerciseProps> = ({ onSeek, onCompletedChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userChoice, setUserChoice] = useState<boolean | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [answers, setAnswers] = useState<Record<number, { choice: boolean; isCorrect: boolean }>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [showArmenian, setShowArmenian] = useState(false);

  const currentItem = TRUE_FALSE_DATA[currentIndex];

  const handleSelectChoice = (val: boolean) => {
    if (isChecked) return;
    setUserChoice(val);
  };

  const handleCheck = () => {
    if (userChoice === null) return;
    const isCorrect = userChoice === currentItem.isTrue;
    const newAnswers = {
      ...answers,
      [currentItem.id]: {
        choice: userChoice,
        isCorrect,
      },
    };
    setAnswers(newAnswers);
    setIsChecked(true);
    setShowArmenian(true);

    if (onCompletedChange) {
      onCompletedChange(Object.keys(newAnswers).length, TRUE_FALSE_DATA.length);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < TRUE_FALSE_DATA.length) {
      setCurrentIndex((prev) => prev + 1);
      setUserChoice(null);
      setIsChecked(false);
      setShowArmenian(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setUserChoice(null);
    setIsChecked(false);
    setAnswers({});
    setIsFinished(false);
    setShowArmenian(false);
    if (onCompletedChange) {
      onCompletedChange(0, TRUE_FALSE_DATA.length);
    }
  };

  const correctCount = Object.values(answers).filter((a) => a.isCorrect).length;

  if (isFinished) {
    const percentage = Math.round((correctCount / TRUE_FALSE_DATA.length) * 100);

    return (
      <div className="bg-white rounded-3xl p-6 sm:p-10 border-3 border-[#6b1118]/25 shadow-xl text-center space-y-7">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#6b1118] to-[#c8102e] text-amber-300 flex items-center justify-center mx-auto shadow-lg border-4 border-amber-400">
          <Trophy className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-black text-[#44070d]">
            ¡Ejercicio completado!
          </h3>
          <h4 className="text-xl font-bold text-amber-700 font-armenian">
            Վարժությունն ավարտվեց։
          </h4>
          <p className="text-base text-stone-700 font-armenian">
            Դուք պատասխանեցիք բոլոր {TRUE_FALSE_DATA.length} պնդումներին։
          </p>
        </div>

        <div className="bg-[#faf3ee] rounded-2xl p-6 border-2 border-[#80131d]/20 inline-block w-full max-w-md shadow-inner">
          <div className="text-5xl font-black text-[#6b1118]">
            {correctCount} / {TRUE_FALSE_DATA.length}
          </div>
          <div className="text-sm font-black text-amber-950 uppercase tracking-wider mt-2">
            {percentage}% de aciertos / Ճշգրտություն
          </div>
        </div>

        <div>
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-gradient-to-r from-[#6b1118] to-[#c8102e] hover:from-[#540a11] hover:to-[#9c1827] text-white rounded-xl text-base font-black transition-all inline-flex items-center gap-2 shadow-md cursor-pointer"
          >
            <RotateCcw className="w-5 h-5 text-amber-300" />
            <span>Repetir ejercicio / Կրկնել վարժությունը</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-8 border-3 border-[#6b1118]/20 shadow-md space-y-6">
      {/* Top Counter and Seek */}
      <div className="flex items-center justify-between gap-3 border-b-2 border-stone-100 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#6b1118] to-[#c8102e] text-amber-300 text-sm font-black font-mono shadow-xs">
            {currentIndex + 1} / {TRUE_FALSE_DATA.length}
          </span>
          <span className="text-base font-extrabold text-[#44070d]">
            Verdadero o Falso / Ճի՞շտ է, թե՞ սխալ
          </span>
        </div>

        <button
          onClick={() => onSeek(currentItem.timeSec)}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 text-amber-950 border border-amber-300 text-xs sm:text-sm font-mono font-bold transition-all shadow-xs cursor-pointer"
          title="Escuchar en el video / Լսել տեսանյութում"
        >
          <Play className="w-3.5 h-3.5 text-orange-600 fill-orange-600" />
          <span>{currentItem.timecode}</span>
        </button>
      </div>

      {/* Statement Card */}
      <div
        onClick={() => setShowArmenian(!showArmenian)}
        className="group cursor-pointer bg-[#faf5f0] hover:bg-[#f6eee4] p-5 sm:p-6 rounded-2xl border-2 border-[#80131d]/25 transition-all space-y-3 shadow-xs"
        title="Haz clic para ver u ocultar la traducción al armenio / Սեղմի՛ր թարգմանությունը տեսնելու համար"
      >
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-black uppercase tracking-wider text-amber-900 bg-amber-200/70 px-2.5 py-0.5 rounded-md font-mono">
            Afirmación / Պնդում
          </span>
          <span className="p-1 rounded-lg text-stone-500 group-hover:text-[#6b1118]">
            {showArmenian ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4 text-amber-700" />}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-black text-stone-950 leading-snug group-hover:text-[#6b1118] transition-colors">
          «{currentItem.statementEs}»
        </h3>

        {showArmenian ? (
          <h4 className="text-base sm:text-lg font-bold text-[#5c0d16] font-armenian leading-snug pt-2 border-t border-amber-300">
            «{currentItem.statementHy}»
          </h4>
        ) : (
          <div className="text-xs text-amber-900/70 font-armenian italic">
            (Սեղմի՛ր այստեղ՝ հայերեն թարգմանությունը տեսնելու համար)
          </div>
        )}
      </div>

      {/* Choice Buttons: Verdadero vs Falso */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Verdadero */}
        <button
          onClick={() => handleSelectChoice(true)}
          disabled={isChecked}
          className={`p-5 rounded-2xl border-2 transition-all flex items-center justify-between gap-3 focus:outline-none focus:ring-4 focus:ring-amber-400 cursor-pointer ${
            userChoice === true && !isChecked
              ? 'border-[#6b1118] bg-[#fbf2f3] text-[#4a080e] ring-3 ring-[#6b1118]/30 font-black shadow-md'
              : isChecked
              ? currentItem.isTrue
                ? 'border-emerald-600 bg-emerald-50 text-emerald-950 ring-3 ring-emerald-600/30 font-black shadow-md'
                : userChoice === true
                ? 'border-red-600 bg-red-50 text-red-950 ring-3 ring-red-600/30 font-black shadow-md'
                : 'border-stone-200 opacity-40 bg-stone-50'
              : 'border-stone-200 hover:border-emerald-500 hover:bg-emerald-50/40 text-stone-900 bg-white'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-black text-sm">
              <Check className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-base sm:text-lg font-black">Verdadero</div>
              <div className="text-xs sm:text-sm font-armenian font-semibold text-stone-600">Ճիշտ է</div>
            </div>
          </div>

          {isChecked && currentItem.isTrue && (
            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
          )}
          {isChecked && userChoice === true && !currentItem.isTrue && (
            <XCircle className="w-6 h-6 text-red-600" />
          )}
        </button>

        {/* Falso */}
        <button
          onClick={() => handleSelectChoice(false)}
          disabled={isChecked}
          className={`p-5 rounded-2xl border-2 transition-all flex items-center justify-between gap-3 focus:outline-none focus:ring-4 focus:ring-amber-400 cursor-pointer ${
            userChoice === false && !isChecked
              ? 'border-[#6b1118] bg-[#fbf2f3] text-[#4a080e] ring-3 ring-[#6b1118]/30 font-black shadow-md'
              : isChecked
              ? !currentItem.isTrue
                ? 'border-emerald-600 bg-emerald-50 text-emerald-950 ring-3 ring-emerald-600/30 font-black shadow-md'
                : userChoice === false
                ? 'border-red-600 bg-red-50 text-red-950 ring-3 ring-red-600/30 font-black shadow-md'
                : 'border-stone-200 opacity-40 bg-stone-50'
              : 'border-stone-200 hover:border-red-500 hover:bg-red-50/40 text-stone-900 bg-white'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-red-100 text-red-900 flex items-center justify-center font-black text-sm">
              <X className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-base sm:text-lg font-black">Falso</div>
              <div className="text-xs sm:text-sm font-armenian font-semibold text-stone-600">Սխալ է</div>
            </div>
          </div>

          {isChecked && !currentItem.isTrue && (
            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
          )}
          {isChecked && userChoice === false && currentItem.isTrue && (
            <XCircle className="w-6 h-6 text-red-600" />
          )}
        </button>
      </div>

      {/* Explanation after checking */}
      {isChecked && (
        <div
          className={`p-5 sm:p-6 rounded-2xl border-2 space-y-3 animate-in fade-in duration-200 ${
            userChoice === currentItem.isTrue
              ? 'bg-emerald-50/95 border-emerald-400 text-emerald-950 shadow-md'
              : 'bg-red-50/95 border-red-400 text-red-950 shadow-md'
          }`}
        >
          <div className="flex items-center gap-2.5 font-black text-base sm:text-lg">
            {userChoice === currentItem.isTrue ? (
              <>
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                <span>¡Excelente! / Ճի՛շտ է:</span>
              </>
            ) : (
              <>
                <XCircle className="w-6 h-6 text-red-600" />
                <span>Respuesta incorrecta / Սխալ պատասխան:</span>
              </>
            )}
          </div>

          <div className="text-sm sm:text-base space-y-1.5 leading-relaxed">
            <p className="font-semibold">{currentItem.explanationEs}</p>
            <p className="font-armenian font-bold text-amber-950 border-t border-current/15 pt-1.5">
              {currentItem.explanationHy}
            </p>
          </div>

          {/* Quote */}
          <div className="bg-white/90 p-3 rounded-xl border border-current/20 text-xs sm:text-sm flex items-start justify-between gap-3 mt-3">
            <div className="space-y-1">
              <span className="font-black text-xs uppercase tracking-wider block text-amber-900">
                Cita del diálogo / Երկխոսության մեջբերում ({currentItem.timecode}):
              </span>
              <p className="italic font-bold">{currentItem.quoteEs}</p>
              <p className="font-armenian italic font-medium">{currentItem.quoteHy}</p>
            </div>
            <button
              onClick={() => onSeek(currentItem.timeSec)}
              className="p-2 rounded-xl bg-amber-100 hover:bg-[#6b1118] hover:text-white text-stone-800 transition-colors shrink-0 cursor-pointer"
              title="Escuchar en el video / Լսել տեսանյութում"
            >
              <Play className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Footer Check / Next */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t-2 border-stone-100">
        <span className="text-xs sm:text-sm text-stone-500 font-medium">
          {userChoice === null && 'Selecciona Verdadero o Falso / Ընտրեք Ճիշտ կամ Սխալ'}
        </span>

        <div className="w-full sm:w-auto">
          {!isChecked ? (
            <button
              onClick={handleCheck}
              disabled={userChoice === null}
              className={`w-full sm:w-auto px-7 py-3 rounded-xl text-base font-black transition-all shadow-md ${
                userChoice !== null
                  ? 'bg-gradient-to-r from-[#6b1118] to-[#c8102e] hover:shadow-lg text-white cursor-pointer focus:ring-4 focus:ring-amber-400'
                  : 'bg-stone-200 text-stone-400 cursor-not-allowed border border-stone-300'
              }`}
            >
              Comprobar / Ստուգել
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-amber-600 to-[#c8102e] hover:from-amber-700 hover:to-[#9c1827] text-white rounded-xl text-base font-black transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer focus:ring-4 focus:ring-amber-400"
            >
              <span>
                {currentIndex + 1 < TRUE_FALSE_DATA.length
                  ? 'Siguiente / Հաջորդը'
                  : 'Ver resultados / Տեսնել արդյունքները'}
              </span>
              <ArrowRight className="w-5 h-5 text-amber-200" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
