import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Play,
  Trophy,
  Languages,
  Eye,
  EyeOff,
  Film,
  Sparkles,
  HelpCircle,
  Volume2,
} from 'lucide-react';
import { QUIZ_QUESTIONS } from './lessonData';

interface QuizExerciseProps {
  onSeek: (seconds: number) => void;
  savedState?: {
    userAnswers: Record<number, number>;
  };
  onSaveState?: (state: { userAnswers: Record<number, number> }) => void;
}

export const QuizExercise: React.FC<QuizExerciseProps> = ({ onSeek, onSaveState }) => {
  const [activeQuestionIds, setActiveQuestionIds] = useState<number[]>(QUIZ_QUESTIONS.map((q) => q.id));
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [answers, setAnswers] = useState<Record<number, { selectedIndex: number; isCorrect: boolean }>>({});
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [shuffledMap, setShuffledMap] = useState<Record<number, number[]>>({});

  // Translation visibility states:
  // When user clicks on Spanish text, it reveals the Armenian translation
  const [showQuestionHy, setShowQuestionHy] = useState<boolean>(false);
  const [revealedOptions, setRevealedOptions] = useState<Record<number, boolean>>({});
  const [showAllTranslations, setShowAllTranslations] = useState<boolean>(false);

  // Initialize options map [0, 1, 2, 3]
  const initShuffle = (ids: number[]) => {
    const map: Record<number, number[]> = {};
    ids.forEach((id) => {
      map[id] = [0, 1, 2, 3];
    });
    setShuffledMap(map);
  };

  useEffect(() => {
    initShuffle(QUIZ_QUESTIONS.map((q) => q.id));
  }, []);

  const currentQuestionId = activeQuestionIds[currentIndex];
  const currentQuestion = QUIZ_QUESTIONS.find((q) => q.id === currentQuestionId) || QUIZ_QUESTIONS[0];
  const currentShuffledOrder = shuffledMap[currentQuestionId] || [0, 1, 2, 3];

  // When changing questions, reset per-question revealed translations unless showAllTranslations is enabled
  useEffect(() => {
    if (!showAllTranslations) {
      setShowQuestionHy(false);
      setRevealedOptions({});
    }
  }, [currentIndex, showAllTranslations]);

  // Click on option: selects option AND automatically opens Armenian translation for that option
  const handleSelectOption = (displayIndex: number) => {
    if (isChecked) return;
    setSelectedOption(displayIndex);
    // Reveal Armenian translation for this option on click
    setRevealedOptions((prev) => ({
      ...prev,
      [displayIndex]: true,
    }));
  };

  // Explicit click to toggle option translation (without necessarily selecting it)
  const handleToggleOptionHy = (e: React.MouseEvent, displayIdx: number) => {
    e.stopPropagation();
    setRevealedOptions((prev) => ({
      ...prev,
      [displayIdx]: !prev[displayIdx],
    }));
  };

  // Toggle all options translations for current question
  const handleToggleAllOptionsHy = () => {
    const allCurrentlyOpen = [0, 1, 2, 3].every((i) => revealedOptions[i]);
    const nextState = !allCurrentlyOpen;
    setRevealedOptions({
      0: nextState,
      1: nextState,
      2: nextState,
      3: nextState,
    });
  };

  // Toggle everything on current question (question + options)
  const handleToggleAllTranslations = () => {
    const nextVal = !showAllTranslations;
    setShowAllTranslations(nextVal);
    setShowQuestionHy(nextVal);
    const map: Record<number, boolean> = {};
    [0, 1, 2, 3].forEach((i) => {
      map[i] = nextVal;
    });
    setRevealedOptions(map);
  };

  const handleCheck = () => {
    if (selectedOption === null) return;
    const originalSelected = currentShuffledOrder[selectedOption];
    const isCorrect = originalSelected === currentQuestion.correctIndex;

    const newAnswers = {
      ...answers,
      [currentQuestion.id]: {
        selectedIndex: originalSelected,
        isCorrect,
      },
    };
    setAnswers(newAnswers);
    setIsChecked(true);

    // After checking, automatically reveal all Armenian translations for review
    setShowQuestionHy(true);
    setRevealedOptions({ 0: true, 1: true, 2: true, 3: true });

    if (onSaveState) {
      const rawUserAnswers: Record<number, number> = {};
      Object.entries(newAnswers).forEach(([k, v]) => {
        rawUserAnswers[Number(k)] = v.selectedIndex;
      });
      onSaveState({ userAnswers: rawUserAnswers });
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < activeQuestionIds.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsChecked(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRetryAll = () => {
    setActiveQuestionIds(QUIZ_QUESTIONS.map((q) => q.id));
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsChecked(false);
    setAnswers({});
    setIsFinished(false);
    setShowAllTranslations(false);
    initShuffle(QUIZ_QUESTIONS.map((q) => q.id));
  };

  const handleRetryErrorsOnly = () => {
    const errorIds = activeQuestionIds.filter((id) => answers[id] && !answers[id].isCorrect);
    if (errorIds.length === 0) return;
    setActiveQuestionIds(errorIds);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsChecked(false);
    setIsFinished(false);
    setShowAllTranslations(false);
    initShuffle(errorIds);
  };

  // Score statistics
  const answeredTotal = Object.keys(answers).length;
  const correctCount = Object.values(answers).filter((a) => a.isCorrect).length;
  const errorCount = answeredTotal - correctCount;

  if (isFinished) {
    const percentage = Math.round((correctCount / activeQuestionIds.length) * 100);

    return (
      <div className="bg-white rounded-3xl p-6 sm:p-10 border-3 border-[#6b1118]/25 shadow-2xl text-center space-y-8">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#540a11] via-[#851320] to-[#c8102e] text-amber-300 flex items-center justify-center mx-auto shadow-xl border-4 border-amber-400">
          <Trophy className="w-12 h-12" />
        </div>

        <div className="space-y-2.5">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#4a080e]">
            ¡Cuestionario completado!
          </h3>
          <h4 className="text-xl sm:text-2xl font-black text-amber-700 font-armenian">
            Հարցարանն ավարտվեց։
          </h4>
          <p className="text-base sm:text-lg text-stone-700 font-armenian">
            Դուք պատասխանեցիք բոլոր {activeQuestionIds.length} հարցերին։
          </p>
        </div>

        <div className="bg-[#faf3ee] rounded-2xl p-6 sm:p-8 border-2 border-[#80131d]/25 inline-block w-full max-w-lg shadow-inner">
          <div className="text-5xl sm:text-6xl font-black text-[#6b1118]">
            {correctCount} / {activeQuestionIds.length}
          </div>
          <div className="text-base font-bold text-amber-950 uppercase tracking-wider mt-3">
            {percentage}% de aciertos / Ճշգրտություն
          </div>

          <div className="w-full bg-stone-200 h-4 rounded-full overflow-hidden mt-5 shadow-inner">
            <div
              className={`h-full transition-all duration-700 ${
                percentage >= 80 ? 'bg-emerald-600' : percentage >= 50 ? 'bg-amber-600' : 'bg-red-600'
              }`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          {errorCount > 0 && (
            <button
              onClick={handleRetryErrorsOnly}
              className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#6b1118] to-[#9c1827] hover:from-[#540a11] hover:to-[#851320] text-white rounded-xl text-base font-extrabold transition-all flex items-center justify-center gap-2.5 shadow-lg hover:shadow-xl focus:ring-4 focus:ring-amber-400"
            >
              <RotateCcw className="w-5 h-5 text-amber-300" />
              <span>Revisar errores ({errorCount}) / Կրկնել սխալները</span>
            </button>
          )}

          <button
            onClick={handleRetryAll}
            className="w-full sm:w-auto px-7 py-3.5 bg-stone-100 hover:bg-stone-200 text-stone-900 rounded-xl text-base font-extrabold transition-all flex items-center justify-center gap-2.5 border-2 border-stone-300 shadow-sm"
          >
            <RotateCcw className="w-5 h-5 text-stone-600" />
            <span>Repetir todo (15) / Կրկնել ամբողջը</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-8 md:p-9 border-3 border-[#6b1118]/25 shadow-xl space-y-6">
      {/* Title Banner with Rich Burgundy, Spanish Red, Dark Yellow and Orange Highlights */}
      <div className="bg-gradient-to-r from-[#49070e] via-[#6d101b] to-[#9e1828] text-white rounded-2xl p-5 sm:p-6 shadow-md border-2 border-amber-500/40 space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/50 flex items-center justify-center shrink-0 shadow-inner">
              <Film className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-white flex flex-wrap items-center gap-2">
                <span>🎬 Entrevista: Natalia y Facundo</span>
                <span className="text-amber-300 font-armenian font-extrabold text-base sm:text-lg">
                  — Հարցազրույց․ Նատալիա և Ֆակունդո
                </span>
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500/30 to-orange-500/30 text-amber-200 border border-amber-400/50 text-xs sm:text-sm font-black self-start sm:self-auto font-mono">
            15 Preguntas / 15 Հարց
          </span>
        </div>

        <p className="text-sm sm:text-base text-amber-100/95 font-armenian font-medium pt-1 border-t border-white/10">
          Mira el vídeo y elige una respuesta correcta. / Դիտի՛ր տեսանյութը և ընտրի՛ր մեկ ճիշտ պատասխան։
        </p>
      </div>

      {/* Progress and Question Counter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-amber-900/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#6b1118] to-[#c8102e] text-amber-300 text-base font-black font-mono shadow-md border border-amber-400/40">
            {currentIndex + 1} / {activeQuestionIds.length}
          </span>
          <span className="text-base sm:text-lg font-extrabold text-[#4a080e]">
            Pregunta {currentIndex + 1} de {activeQuestionIds.length}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          {/* Quick Listen Button with Orange/Amber Accent */}
          <button
            onClick={() => onSeek(currentQuestion.timeSec)}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 text-amber-950 border-2 border-amber-400 text-sm font-mono font-black transition-all shadow-xs hover:shadow-md cursor-pointer"
            title="Escuchar este momento / Լսել տեսանյութում"
          >
            <Play className="w-4 h-4 text-orange-600 fill-orange-600" />
            <span>{currentQuestion.timecode}</span>
          </button>

          {/* Toggle All Translations */}
          <button
            onClick={handleToggleAllTranslations}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-extrabold transition-all border-2 shadow-xs cursor-pointer ${
              showAllTranslations
                ? 'bg-gradient-to-r from-[#6b1118] to-[#9c1827] text-white border-[#6b1118]'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-900 border-stone-300'
            }`}
            title="Mostrar u ocultar traducción al armenio / Ցուցադրել կամ թաքցնել հայերեն թարգմանությունը"
          >
            <Languages className="w-4 h-4 text-amber-500" />
            <span className="hidden sm:inline">
              {showAllTranslations ? 'Ocultar todo / Թաքցնել' : 'Ver todo en armenio / Բացել հայերենը'}
            </span>
            <span className="sm:hidden">{showAllTranslations ? 'Թաքցնել' : 'Հայերեն'}</span>
          </button>
        </div>
      </div>

      {/* Helpful Hint on How to Click for Translation */}
      <div className="bg-gradient-to-r from-amber-50 via-orange-50/60 to-amber-50 border-2 border-amber-300 rounded-2xl px-4 py-3 text-sm text-amber-950 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-amber-200 text-amber-800 flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4 text-amber-700" />
          </div>
          <span className="font-armenian font-medium text-xs sm:text-sm">
            <strong className="text-[#6b1118] font-bold">Հուշում․</strong> Սեղմեք իսպաներեն հարցի կամ տարբերակների վրա՝ հայերեն թարգմանությունը բացելու/թաքցնելու համար։
          </span>
        </div>
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <span className="text-[11px] font-black text-amber-900 bg-amber-200/80 px-2.5 py-1 rounded-lg uppercase tracking-wider border border-amber-300 font-mono">
            Click to reveal
          </span>
        </div>
      </div>

      {/* Question Box: Clicking on Spanish toggles Armenian translation */}
      <div
        onClick={() => setShowQuestionHy(!showQuestionHy)}
        className="group cursor-pointer p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#fdfbf9] to-[#f8f1ec] hover:from-[#fcf7f4] hover:to-[#f3e8e1] border-2 border-[#80131d]/30 hover:border-[#80131d]/70 transition-all space-y-3 relative shadow-sm"
        title="Haz clic para ver/ocultar la traducción al armenio / Սեղմի՛ր հայերեն թարգմանությունը տեսնելու համար"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-[#6b1118] text-amber-300 text-xs font-black font-mono shadow-xs">
                ES
              </span>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wide">
                Pregunta en español
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-stone-950 leading-snug group-hover:text-[#6b1118] transition-colors">
              {currentQuestion.questionEs}
            </h3>
          </div>

          <button
            type="button"
            className="p-2 sm:p-2.5 rounded-xl bg-white border-2 border-stone-200 text-stone-600 group-hover:text-[#6b1118] group-hover:border-amber-500 shrink-0 transition-all shadow-xs flex items-center gap-1.5"
          >
            {showQuestionHy ? (
              <>
                <EyeOff className="w-5 h-5 text-[#6b1118]" />
                <span className="hidden md:inline text-xs font-bold text-[#6b1118]">Թաքցնել</span>
              </>
            ) : (
              <>
                <Eye className="w-5 h-5 text-amber-700" />
                <span className="hidden md:inline text-xs font-bold text-amber-800">Թարգմանել</span>
              </>
            )}
          </button>
        </div>

        {/* Armenian Question text - unfolded on click or toggle */}
        {showQuestionHy ? (
          <div className="pt-3 border-t-2 border-[#80131d]/20 animate-in fade-in duration-150 space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-amber-600 text-white text-xs font-black font-mono shadow-xs">
                ARM
              </span>
              <span className="text-xs font-bold text-amber-800 font-armenian">
                Հարցի հայերեն թարգմանությունը
              </span>
            </div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-black text-[#5e0d16] font-armenian leading-relaxed">
              {currentQuestion.questionHy}
            </h4>
          </div>
        ) : (
          <div className="text-xs sm:text-sm text-amber-900/80 font-armenian font-semibold flex items-center gap-1.5 pt-1">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span>(Սեղմի՛ր այստեղ կամ աչքի վրա՝ հարցի հայերեն թարգմանությունը տեսնելու համար)</span>
          </div>
        )}
      </div>

      {/* Answer Options Header with quick action to open all options translations */}
      <div className="space-y-3.5">
        <div className="flex items-center justify-between text-xs sm:text-sm font-black text-stone-700 px-1">
          <span className="text-base font-extrabold text-[#4a080e]">
            Opciones de respuesta / Պատասխանի տարբերակներ:
          </span>
          <button
            type="button"
            onClick={handleToggleAllOptionsHy}
            className="text-xs sm:text-sm text-[#80131d] hover:text-[#5e0d16] font-bold underline cursor-pointer decoration-amber-500"
          >
            {[0, 1, 2, 3].every((i) => revealedOptions[i])
              ? 'Թաքցնել բոլոր տարբերակների հայերենը'
              : 'Բացել բոլոր տարբերակների հայերենը'}
          </button>
        </div>

        {currentShuffledOrder.map((originalIndex, displayIdx) => {
          const optEs = currentQuestion.optionsEs[originalIndex];
          const optHy = currentQuestion.optionsHy[originalIndex];
          const isSelected = selectedOption === displayIdx;
          const isOptHyRevealed = showAllTranslations || revealedOptions[displayIdx] || isChecked;
          const letter = String.fromCharCode(65 + displayIdx); // A, B, C, D

          let optionStyle =
            'border-stone-200 hover:border-[#80131d]/60 hover:bg-[#fffbfb] bg-white text-stone-900';

          if (isSelected && !isChecked) {
            optionStyle =
              'border-[#6b1118] bg-[#fbf2f3] text-[#4a080e] ring-3 ring-[#6b1118]/40 shadow-lg';
          } else if (isChecked) {
            if (originalIndex === currentQuestion.correctIndex) {
              optionStyle =
                'border-emerald-600 bg-emerald-50 text-emerald-950 ring-3 ring-emerald-600/40 shadow-lg';
            } else if (isSelected && originalIndex !== currentQuestion.correctIndex) {
              optionStyle =
                'border-red-600 bg-red-50 text-red-950 ring-3 ring-red-600/40 shadow-lg';
            } else {
              optionStyle = 'border-stone-200 opacity-60 bg-stone-50';
            }
          }

          return (
            <div
              key={displayIdx}
              onClick={() => handleSelectOption(displayIdx)}
              className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-start gap-4 cursor-pointer focus:outline-none focus:ring-4 focus:ring-amber-400 ${optionStyle}`}
            >
              {/* Option Letter Badge (A, B, C, D) */}
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-base sm:text-lg font-black shrink-0 transition-colors shadow-md ${
                  isSelected && !isChecked
                    ? 'bg-gradient-to-tr from-[#6b1118] to-[#c8102e] text-white'
                    : isChecked && originalIndex === currentQuestion.correctIndex
                    ? 'bg-emerald-600 text-white'
                    : isChecked && isSelected
                    ? 'bg-red-600 text-white'
                    : 'bg-stone-100 text-stone-800 border-2 border-stone-300'
                }`}
              >
                {letter}
              </div>

              {/* Text content - Spanish on top, Armenian toggleable on click */}
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black font-mono text-stone-400 uppercase">ES</span>
                    <span className="text-lg sm:text-xl font-black leading-snug">
                      {optEs}
                    </span>
                  </div>

                  {/* Toggle eye button for Armenian translation */}
                  <button
                    type="button"
                    onClick={(e) => handleToggleOptionHy(e, displayIdx)}
                    className="p-1.5 sm:p-2 rounded-xl hover:bg-stone-200/70 text-stone-500 hover:text-[#6b1118] transition-colors shrink-0"
                    title={
                      isOptHyRevealed
                        ? 'Ocultar traducción / Թաքցնել թարգմանությունը'
                        : 'Ver traducción / Տեսնել հայերեն թարգմանությունը'
                    }
                  >
                    {isOptHyRevealed ? (
                      <EyeOff className="w-5 h-5 text-stone-400" />
                    ) : (
                      <Eye className="w-5 h-5 text-amber-700" />
                    )}
                  </button>
                </div>

                {/* Armenian translation */}
                {isOptHyRevealed ? (
                  <div className="text-base sm:text-lg font-armenian font-bold text-[#5c0d16] pl-3.5 border-l-3 border-amber-500 pt-1 animate-in fade-in duration-150">
                    <span className="text-xs font-black font-mono text-amber-700 uppercase mr-2">ARM</span>
                    {optHy}
                  </div>
                ) : (
                  <div className="text-xs sm:text-sm text-stone-400 font-armenian italic">
                    (Սեղմի՛ր տեքստի կամ աչքի վրա՝ հայերեն թարգմանությունը բացելու համար)
                  </div>
                )}
              </div>

              {/* Status Icons */}
              {isChecked && originalIndex === currentQuestion.correctIndex && (
                <div className="shrink-0 ml-auto pt-1">
                  <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                </div>
              )}
              {isChecked && isSelected && originalIndex !== currentQuestion.correctIndex && (
                <div className="shrink-0 ml-auto pt-1">
                  <XCircle className="w-7 h-7 text-red-600" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Feedback Section after checking */}
      {isChecked && (
        <div
          className={`p-5 sm:p-6 rounded-2xl border-2 space-y-3.5 animate-in fade-in duration-200 ${
            currentShuffledOrder[selectedOption!] === currentQuestion.correctIndex
              ? 'bg-emerald-50/95 border-emerald-400 text-emerald-950 shadow-md'
              : 'bg-red-50/95 border-red-400 text-red-950 shadow-md'
          }`}
        >
          <div className="flex items-center gap-3 font-black text-lg sm:text-xl">
            {currentShuffledOrder[selectedOption!] === currentQuestion.correctIndex ? (
              <>
                <CheckCircle2 className="w-7 h-7 text-emerald-600 shrink-0" />
                <span>¡Respuesta correcta! / Ճի՛շտ պատասխան:</span>
              </>
            ) : (
              <>
                <XCircle className="w-7 h-7 text-red-600 shrink-0" />
                <span>Respuesta incorrecta / Սխալ պատասխան:</span>
              </>
            )}
          </div>

          <div className="space-y-2 text-sm sm:text-base leading-relaxed pl-1 sm:pl-2">
            <p className="font-semibold text-stone-900">
              {currentQuestion.explanationEs}
            </p>
            <p className="font-bold text-amber-950 font-armenian">
              {currentQuestion.explanationHy}
            </p>
          </div>

          {currentQuestion.quoteEs && (
            <div className="mt-3 p-3.5 rounded-xl bg-white/80 border border-stone-300 space-y-1">
              <div className="text-xs font-mono font-bold text-amber-800 flex items-center gap-1.5">
                <Play className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
                <span>Cita del vídeo ({currentQuestion.timecode}):</span>
              </div>
              <p className="text-sm font-serif italic text-stone-900">
                {currentQuestion.quoteEs}
              </p>
              {currentQuestion.quoteHy && (
                <p className="text-xs sm:text-sm font-armenian text-stone-700 italic">
                  {currentQuestion.quoteHy}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Footer Navigation: Comprobar / Siguiente */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t-2 border-stone-100">
        <div className="text-xs sm:text-sm text-stone-500 font-medium order-2 sm:order-1">
          {isChecked ? (
            <span>Pasar a la siguiente pregunta / Անցնել հաջորդ հարցին</span>
          ) : (
            <span>Selecciona una opción y pulsa comprobar / Ընտրեք տարբերակը և ստուգեք</span>
          )}
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto order-1 sm:order-2">
          {!isChecked ? (
            <button
              onClick={handleCheck}
              disabled={selectedOption === null}
              className={`w-full sm:w-auto px-7 py-3.5 rounded-xl text-base font-black transition-all flex items-center justify-center gap-2 shadow-md ${
                selectedOption !== null
                  ? 'bg-gradient-to-r from-[#6b1118] via-[#8f1523] to-[#c8102e] text-white hover:shadow-lg focus:ring-4 focus:ring-amber-400 cursor-pointer'
                  : 'bg-stone-200 text-stone-400 cursor-not-allowed border border-stone-300'
              }`}
            >
              <span>Comprobar / Ստուգել</span>
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-base font-black bg-gradient-to-r from-amber-600 via-orange-600 to-[#c8102e] text-white hover:from-amber-700 hover:to-[#9c1827] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 focus:ring-4 focus:ring-amber-400 cursor-pointer"
            >
              <span>
                {currentIndex + 1 < activeQuestionIds.length
                  ? 'Siguiente / Հաջորդը'
                  : 'Finalizar / Ավարտել'}
              </span>
              <ArrowRight className="w-5 h-5 text-amber-200" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
