import React, { useState } from 'react';
import { MessageSquare, Lightbulb, ChevronDown, ChevronUp, Copy, Check, Sparkles } from 'lucide-react';
import { CONVERSATION_PROMPTS } from './lessonData';

interface TabConversarProps {
  answers: Record<number, string>;
  onAnswerChange: (id: number, text: string) => void;
  onClearAnswers: () => void;
}

export const TabConversar: React.FC<TabConversarProps> = ({
  answers,
  onAnswerChange,
}) => {
  const [openedHints, setOpenedHints] = useState<Record<number, boolean>>({});
  const [filterCategory, setFilterCategory] = useState<'all' | 'interview' | 'personal'>('all');
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  const toggleHint = (id: number) => {
    setOpenedHints((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleUseStarter = (id: number, starterEs: string) => {
    const current = answers[id] || '';
    if (!current.trim()) {
      onAnswerChange(id, starterEs + ' ');
    }
  };

  const filteredPrompts = CONVERSATION_PROMPTS.filter((p) => {
    if (filterCategory === 'all') return true;
    return p.category === filterCategory;
  });

  const filledCount = Object.values(answers).filter((txt) => txt && txt.trim().length > 0).length;

  const handleCopyAll = () => {
    const textToCopy = CONVERSATION_PROMPTS.map((p, idx) => {
      const ans = answers[p.id] || '(Sin respuesta / Դեռևս առանց պատասխանի)';
      return `${idx + 1}. ${p.questionEs}\n${p.questionHy}\nMi respuesta / Իմ պատասխանը:\n${ans}\n`;
    }).join('\n----------------------------------------\n\n');

    navigator.clipboard.writeText(textToCopy);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Intro and Controls Card */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 border-3 border-[#6b1118]/20 shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-black text-[#44070d] flex items-center gap-2.5">
              <MessageSquare className="w-6 h-6 text-[#c8102e]" />
              <span>Práctica de conversación / Խոսակցական պրակտիկա</span>
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed font-armenian">
              Տասը բաց հարց՝ նախ հարցազրույցի բովանդակության, ապա ձեր անձնական փորձառության վերաբերյալ։ Ձեր կարծիքը չի գնահատվում որպես ճիշտ կամ սխալ։
            </p>
          </div>

          <div className="flex items-center gap-2.5 self-start sm:self-auto shrink-0">
            <span className="px-3.5 py-1.5 bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-300 text-amber-950 rounded-xl text-xs sm:text-sm font-black font-mono">
              {filledCount} / {CONVERSATION_PROMPTS.length} պատասխան
            </span>

            {filledCount > 0 && (
              <button
                onClick={handleCopyAll}
                className="px-3.5 py-1.5 bg-[#fbf5f0] hover:bg-[#6b1118] hover:text-white text-[#6b1118] rounded-xl text-xs sm:text-sm font-bold inline-flex items-center gap-1.5 transition-all border border-[#80131d]/30 cursor-pointer shadow-xs"
                title="Copiar todas mis respuestas / Պատճենել բոլոր պատասխանները"
              >
                {copiedSuccess ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copiedSuccess ? '¡Copiado! / Պատճենվա՛ծ է' : 'Copiar / Պատճենել'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2 pt-3 border-t-2 border-stone-100 flex-wrap">
          <span className="text-xs sm:text-sm font-black text-amber-950 mr-1">Filtrar / Ֆիլտրել:</span>
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
              filterCategory === 'all'
                ? 'bg-gradient-to-r from-[#6b1118] to-[#9c1827] text-white shadow-xs'
                : 'text-stone-700 bg-stone-100 hover:bg-stone-200'
            }`}
          >
            Todos (10) / Բոլորը
          </button>
          <button
            onClick={() => setFilterCategory('interview')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
              filterCategory === 'interview'
                ? 'bg-gradient-to-r from-[#6b1118] to-[#9c1827] text-white shadow-xs'
                : 'text-stone-700 bg-stone-100 hover:bg-stone-200'
            }`}
          >
            Entrevista (1–5) / Հարցազրույց
          </button>
          <button
            onClick={() => setFilterCategory('personal')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
              filterCategory === 'personal'
                ? 'bg-gradient-to-r from-[#6b1118] to-[#9c1827] text-white shadow-xs'
                : 'text-stone-700 bg-stone-100 hover:bg-stone-200'
            }`}
          >
            Experiencia propia (6–10) / Անձնական
          </button>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredPrompts.map((prompt) => {
          const isHintOpen = !!openedHints[prompt.id];
          const textValue = answers[prompt.id] || '';
          const hasAnswer = textValue.trim().length > 0;

          return (
            <div
              key={prompt.id}
              className={`bg-white rounded-3xl p-5 sm:p-6 border-2 transition-all space-y-4 ${
                hasAnswer ? 'border-[#6b1118]/60 bg-[#fffdfc] shadow-md' : 'border-stone-200'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#6b1118] to-[#c8102e] text-white font-mono text-xs font-black flex items-center justify-center shadow-xs">
                      {prompt.id}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                      {prompt.categoryLabelEs} <span className="opacity-75 font-armenian font-semibold">({prompt.categoryLabelHy})</span>
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-stone-950 leading-snug">
                    {prompt.questionEs}
                  </h3>
                  <h4 className="text-sm sm:text-base font-bold text-[#5c0d16] font-armenian leading-snug">
                    {prompt.questionHy}
                  </h4>
                </div>

                {/* Hint Button */}
                <button
                  onClick={() => toggleHint(prompt.id)}
                  className={`shrink-0 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors border cursor-pointer ${
                    isHintOpen
                      ? 'bg-amber-100 text-amber-950 border-amber-300'
                      : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                  }`}
                >
                  <Lightbulb className="w-4 h-4 text-orange-600" />
                  <span className="hidden sm:inline">
                    {isHintOpen ? 'Ocultar ayuda / Թաքցնել' : 'Ver una ayuda / Տեսնել հուշումը'}
                  </span>
                  <span className="sm:hidden">{isHintOpen ? 'Թաքցնել' : 'Հուշում'}</span>
                  {isHintOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              {/* Expandable Hint / Starter Box */}
              {isHintOpen && (
                <div className="bg-amber-50/80 border-2 border-amber-300/80 rounded-2xl p-4 space-y-3 animate-in fade-in duration-150">
                  <div className="text-xs sm:text-sm text-stone-800 space-y-1.5">
                    <p className="font-black text-amber-950">
                      💡 Sugerencia / Առաջարկ:
                    </p>
                    <p>{prompt.helperEs}</p>
                    <p className="font-armenian text-amber-900 border-t border-amber-200 pt-1 font-medium">
                      {prompt.helperHy}
                    </p>
                  </div>

                  {/* Starter phrase */}
                  <div className="bg-white p-3 rounded-xl border border-amber-300 space-y-1.5 shadow-xs">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="text-xs font-black text-amber-900 uppercase tracking-wider">
                        Comienzo sugerido / Պատասխանի հնարավոր սկիզբ:
                      </span>
                      <button
                        onClick={() => handleUseStarter(prompt.id, prompt.starterEs)}
                        className="text-xs text-[#6b1118] hover:text-[#44070d] font-black underline cursor-pointer"
                      >
                        Insertar en mi respuesta / Տեղադրել իմ պատասխանում
                      </button>
                    </div>
                    <p className="text-sm font-bold text-stone-900">«{prompt.starterEs}»</p>
                    <p className="text-xs sm:text-sm font-armenian font-semibold text-[#5c0d16]">«{prompt.starterHy}»</p>
                  </div>
                </div>
              )}

              {/* Student's textarea answer */}
              <div className="space-y-1.5">
                <textarea
                  value={textValue}
                  onChange={(e) => onAnswerChange(prompt.id, e.target.value)}
                  placeholder="Escribe tu respuesta en español o tus notas en armenio... / Գրեք ձեր պատասխանն իսպաներենով կամ ձեր նշումները հայերենով..."
                  rows={3}
                  className="w-full p-3.5 bg-[#faf5f0] border-2 border-stone-200 rounded-2xl text-sm sm:text-base text-stone-900 focus:outline-none focus:ring-3 focus:ring-amber-500 focus:border-[#6b1118] focus:bg-white transition-all resize-y shadow-xs"
                />
                <div className="flex items-center justify-between text-xs text-stone-500 px-1">
                  <span>Guardado automático localmente / Ավտոմատ պահպանվում է</span>
                  <span>{textValue.trim().length} նիշ</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
