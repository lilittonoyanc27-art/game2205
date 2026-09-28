import React, { useState, useEffect, useRef } from 'react';
import { Header } from './Header';
import { NavigationTabs, TabKey } from './NavigationTabs';
import { VideoPlayer, VideoPlayerRef } from './VideoPlayer';
import { TabVer } from './TabVer';
import { TabTexto } from './TabTexto';
import { TabPracticar } from './TabPracticar';
import { TabConversar } from './TabConversar';
import { VocabularyModal } from './VocabularyModal';
import {
  QUIZ_QUESTIONS,
  TRUE_FALSE_DATA,
  SENTENCE_COMPLETION_DATA,
  CONVERSATION_PROMPTS,
} from './lessonData';
import { Play, Sparkles, BookOpen, Clock, Heart } from 'lucide-react';

const STORAGE_KEY = 'espanol_en_el_aire_v1';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('ver');
  const [isVocabModalOpen, setIsVocabModalOpen] = useState<boolean>(false);

  // User persistent progress state
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [tfProgress, setTfProgress] = useState<{ answered: number; total: number }>({
    answered: 0,
    total: TRUE_FALSE_DATA.length,
  });
  const [fillProgress, setFillProgress] = useState<{ answered: number; total: number }>({
    answered: 0,
    total: SENTENCE_COMPLETION_DATA.length,
  });
  const [matchCompleted, setMatchCompleted] = useState<boolean>(false);
  const [conversationAnswers, setConversationAnswers] = useState<Record<number, string>>({});

  const videoPlayerRef = useRef<VideoPlayerRef | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.quizAnswers) setQuizAnswers(parsed.quizAnswers);
        if (parsed.tfProgress) setTfProgress(parsed.tfProgress);
        if (parsed.fillProgress) setFillProgress(parsed.fillProgress);
        if (parsed.matchCompleted !== undefined) setMatchCompleted(parsed.matchCompleted);
        if (parsed.conversationAnswers) setConversationAnswers(parsed.conversationAnswers);
      }
    } catch (e) {
      console.error('Error loading progress from localStorage:', e);
    }
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    try {
      const dataToSave = {
        quizAnswers,
        tfProgress,
        fillProgress,
        matchCompleted,
        conversationAnswers,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
    } catch (e) {
      console.error('Error saving progress to localStorage:', e);
    }
  }, [quizAnswers, tfProgress, fillProgress, matchCompleted, conversationAnswers]);

  // Seek handler forwarded to persistent VideoPlayer
  const handleSeek = (seconds: number) => {
    if (videoPlayerRef.current) {
      videoPlayerRef.current.seekTo(seconds);
    }
  };

  // Reset all progress
  const handleResetProgress = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
    setQuizAnswers({});
    setTfProgress({ answered: 0, total: TRUE_FALSE_DATA.length });
    setFillProgress({ answered: 0, total: SENTENCE_COMPLETION_DATA.length });
    setMatchCompleted(false);
    setConversationAnswers({});
  };

  const handleConversationChange = (id: number, text: string) => {
    setConversationAnswers((prev) => ({
      ...prev,
      [id]: text,
    }));
  };

  // Key scene jump markers for quick navigation
  const keyScenes = [
    { sec: 1, label: '0:01 Corazón valiente', hy: 'Անվեհեր սիրտ' },
    { sec: 8, label: '0:08 Re contenta', hy: 'Շատ գոհ' },
    { sec: 12, label: '0:12 Adrenalina', hy: 'Ադրենալին' },
    { sec: 19, label: '0:19 Se terminaba acá', hy: 'Սերիալն ավարտվեց' },
    { sec: 35, label: '0:35 Muy profesional', hy: 'Պրոֆեսիոնալ' },
    { sec: 51, label: '0:51 Responsabilidad', hy: 'Պատասխանատվություն' },
    { sec: 70, label: '1:10 Todo pasa', hy: 'Ամեն ինչ անցողիկ է' },
    { sec: 75, label: '1:15 Disfrutar el momento', hy: 'Վայելել պահը' },
  ];

  return (
    <div className="min-h-screen bg-[#faf5f0] text-stone-900 flex flex-col font-sans">
      {/* Global Application Header */}
      <Header
        quizProgress={{
          answered: Object.keys(quizAnswers).length,
          total: QUIZ_QUESTIONS.length,
          correct: 0,
        }}
        tfProgress={tfProgress}
        fillProgress={fillProgress}
        matchProgress={{ completed: matchCompleted }}
        conversationCount={
          Object.values(conversationAnswers).filter((t) => t && t.trim().length > 0).length
        }
        onResetProgress={handleResetProgress}
        onOpenVocabulary={() => setIsVocabModalOpen(true)}
      />

      {/* Main Container - Split View on Desktop, Stacking on Mobile */}
      <main className="max-w-7xl mx-auto w-full px-3 sm:px-6 py-6 sm:py-8 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT COLUMN: Persistent Video Player & Quick Navigation (Desktop: 5 cols, sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
            {/* The Video Player is ALWAYS mounted here and never gets destroyed on tab change! */}
            <VideoPlayer ref={videoPlayerRef} />

            {/* Quick Scene Jumps */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-[#80131d]/20 shadow-xs space-y-3">
              <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-[#681119]">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-700" />
                  <span>Saltos rápidos al audio / Արագ անցումներ</span>
                </span>
                <span className="text-xs font-semibold text-stone-500 bg-amber-100/70 px-2 py-0.5 rounded-md">8 դրվագ</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {keyScenes.map((scene) => (
                  <button
                    key={scene.sec}
                    onClick={() => handleSeek(scene.sec)}
                    className="p-2.5 rounded-xl bg-[#faf5f1] hover:bg-[#f6e6e8] hover:text-[#681119] border border-stone-200 text-left transition-all text-xs sm:text-sm flex flex-col group focus:ring-2 focus:ring-amber-500 shadow-2xs"
                  >
                    <span className="font-bold text-stone-900 group-hover:text-[#681119]">
                      {scene.label}
                    </span>
                    <span className="text-[11px] text-stone-600 font-armenian mt-0.5">
                      {scene.hy}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Access to Argentine Idioms */}
            <div className="bg-gradient-to-br from-[#540c14] via-[#6d101a] to-[#881522] text-amber-100 rounded-2xl p-4 sm:p-5 shadow-sm space-y-2.5 border-2 border-amber-500/40">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-300">
                  <Sparkles className="w-4 h-4" />
                  <span>Español rioplatense / Արգենտինական խոսվածք</span>
                </div>
                <button
                  onClick={() => setIsVocabModalOpen(true)}
                  className="text-xs font-bold text-amber-200 underline hover:text-white transition-colors"
                >
                  Ver todo / Բոլորը
                </button>
              </div>
              <p className="text-xs sm:text-sm text-amber-100 leading-relaxed font-armenian">
                «vos», «re contenta», «che», «¿entendés?», «novela», «30 puntos», «en el aire».
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: 4 Main Tabs & Active Content (Desktop: 7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            {/* Top 4 Navigation Tabs */}
            <NavigationTabs
              activeTab={activeTab}
              onSelectTab={setActiveTab}
              badgeCounts={{
                practicar:
                  Object.keys(quizAnswers).length +
                  tfProgress.answered +
                  fillProgress.answered +
                  (matchCompleted ? 8 : 0),
                conversar: Object.values(conversationAnswers).filter((t) => t && t.trim().length > 0)
                  .length,
              }}
            />

            {/* TAB CONTENT */}
            <div className="transition-all duration-150">
              {activeTab === 'ver' && (
                <TabVer
                  onGoToTranscript={() => setActiveTab('texto')}
                  onGoToPractice={() => setActiveTab('practicar')}
                  onGoToConversation={() => setActiveTab('conversar')}
                  onOpenVocabulary={() => setIsVocabModalOpen(true)}
                />
              )}

              {activeTab === 'texto' && (
                <TabTexto
                  onSeek={handleSeek}
                  onOpenVocabulary={() => setIsVocabModalOpen(true)}
                />
              )}

              {activeTab === 'practicar' && (
                <TabPracticar
                  onSeek={handleSeek}
                  savedQuizAnswers={quizAnswers}
                  onSaveQuizAnswers={({ userAnswers }) => setQuizAnswers(userAnswers)}
                  onTfProgressChange={(answered, total) => setTfProgress({ answered, total })}
                  onFillProgressChange={(answered, total) => setFillProgress({ answered, total })}
                  onMatchCompletedChange={(isCompleted) => setMatchCompleted(isCompleted)}
                />
              )}

              {activeTab === 'conversar' && (
                <TabConversar
                  answers={conversationAnswers}
                  onAnswerChange={handleConversationChange}
                  onClearAnswers={() => setConversationAnswers({})}
                />
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Vocabulary and Argentine Features Modal */}
      <VocabularyModal
        isOpen={isVocabModalOpen}
        onClose={() => setIsVocabModalOpen(false)}
      />

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 border-t border-stone-800 py-6 px-4 text-center text-xs space-y-2 mt-auto">
        <p className="text-stone-300 font-medium">
          Español en el aire | Իսպաներենը՝ եթերում — Lección interactiva para hispanohablantes a través del armenio
        </p>
        <p className="text-stone-500 font-armenian">
          Բովանդակությունը հիմնված է Նատալիա Օրեյրոյի և Ֆակունդո Արանայի «Sos mi vida» (2006) հարցազրույցի վրա։
        </p>
      </footer>
    </div>
  );
}
