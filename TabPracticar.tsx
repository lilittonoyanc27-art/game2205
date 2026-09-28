import React, { useState } from 'react';
import { HelpCircle, CheckCircle, Edit3, Link2, Sparkles } from 'lucide-react';
import { QuizExercise } from './QuizExercise';
import { TrueFalseExercise } from './TrueFalseExercise';
import { SentenceCompletionExercise } from './SentenceCompletionExercise';
import { MatchExpressionsExercise } from './MatchExpressionsExercise';

export type PracticeSubTab = 'quiz' | 'truefalse' | 'completion' | 'match';

interface TabPracticarProps {
  onSeek: (seconds: number) => void;
  savedQuizAnswers?: Record<number, number>;
  onSaveQuizAnswers?: (state: { userAnswers: Record<number, number> }) => void;
  onTfProgressChange?: (answered: number, total: number) => void;
  onFillProgressChange?: (answered: number, total: number) => void;
  onMatchCompletedChange?: (isCompleted: boolean) => void;
}

export const TabPracticar: React.FC<TabPracticarProps> = ({
  onSeek,
  savedQuizAnswers,
  onSaveQuizAnswers,
  onTfProgressChange,
  onFillProgressChange,
  onMatchCompletedChange,
}) => {
  const [subTab, setSubTab] = useState<PracticeSubTab>('quiz');

  const subTabs = [
    {
      id: 'quiz' as PracticeSubTab,
      labelEs: 'Cuestionario',
      labelHy: 'Հարցարան',
      count: '15',
      icon: HelpCircle,
    },
    {
      id: 'truefalse' as PracticeSubTab,
      labelEs: 'Verdadero o falso',
      labelHy: 'Ճի՞շտ է, թե՞ սխալ',
      count: '8',
      icon: CheckCircle,
    },
    {
      id: 'completion' as PracticeSubTab,
      labelEs: 'Completa la frase',
      labelHy: 'Լրացրո՛ւ նախադասությունը',
      count: '8',
      icon: Edit3,
    },
    {
      id: 'match' as PracticeSubTab,
      labelEs: 'Une expresiones',
      labelHy: 'Միացրո՛ւ արտահայտությունները',
      count: '8',
      icon: Link2,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Sub-tabs Selector */}
      <div className="bg-white p-2 sm:p-2.5 rounded-2xl border-2 border-[#80131d]/20 shadow-xs flex flex-wrap sm:flex-nowrap gap-2 overflow-x-auto">
        {subTabs.map((item) => {
          const Icon = item.icon;
          const isActive = subTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setSubTab(item.id)}
              className={`flex-1 min-w-[150px] py-3 px-3.5 rounded-xl transition-all flex items-center justify-between gap-2.5 text-xs sm:text-sm font-bold focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                isActive
                  ? 'bg-gradient-to-r from-[#6b1118] to-[#911624] text-white shadow-md'
                  : 'text-stone-700 hover:bg-[#fbf3f4] hover:text-[#6b1118] bg-stone-50/80 border border-stone-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-amber-300' : 'text-stone-500'}`} />
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-xs sm:text-sm">{item.labelEs}</span>
                  <span className="font-armenian text-[11px] opacity-85 font-medium">{item.labelHy}</span>
                </div>
              </div>
              <span
                className={`ml-1 text-xs px-2 py-0.5 rounded-full font-black ${
                  isActive ? 'bg-amber-400 text-stone-950 shadow-xs' : 'bg-stone-200 text-stone-700'
                }`}
              >
                {item.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Sub-tab Content */}
      <div>
        {subTab === 'quiz' && (
          <QuizExercise
            onSeek={onSeek}
            savedState={savedQuizAnswers ? { userAnswers: savedQuizAnswers } : undefined}
            onSaveState={onSaveQuizAnswers}
          />
        )}

        {subTab === 'truefalse' && (
          <TrueFalseExercise
            onSeek={onSeek}
            onCompletedChange={onTfProgressChange}
          />
        )}

        {subTab === 'completion' && (
          <SentenceCompletionExercise
            onSeek={onSeek}
            onCompletedChange={onFillProgressChange}
          />
        )}

        {subTab === 'match' && (
          <MatchExpressionsExercise
            onCompletedChange={onMatchCompletedChange}
          />
        )}
      </div>
    </div>
  );
};
