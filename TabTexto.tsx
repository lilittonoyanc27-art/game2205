import React, { useState } from 'react';
import { Play, Languages, AlertCircle, Search, ExternalLink, Eye, EyeOff, Sparkles } from 'lucide-react';
import { TRANSCRIPT_DATA, NOTE_003, TranscriptLine } from './lessonData';

interface TabTextoProps {
  onSeek: (seconds: number) => void;
  onOpenVocabulary: () => void;
}

export type TextMode = 'both' | 'es' | 'hy';

export const TabTexto: React.FC<TabTextoProps> = ({ onSeek }) => {
  const [mode, setMode] = useState<TextMode>('both');
  const [searchTerm, setSearchTerm] = useState('');
  const [revealedTranslations, setRevealedTranslations] = useState<Record<number, boolean>>({});

  // Filter lines by search term
  const filteredLines = TRANSCRIPT_DATA.filter((line) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      line.textEs.toLowerCase().includes(term) ||
      line.textHy.toLowerCase().includes(term) ||
      line.speaker.toLowerCase().includes(term) ||
      line.speakerLabelHy.toLowerCase().includes(term)
    );
  });

  const toggleLineTranslation = (id: number) => {
    setRevealedTranslations((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getSpeakerBadge = (speaker: TranscriptLine['speaker']) => {
    switch (speaker) {
      case 'Natalia':
        return {
          bg: 'bg-rose-100 text-[#6b1118] border-rose-300 font-bold',
          dot: 'bg-[#c8102e]',
          avatarText: 'NO',
        };
      case 'Facundo':
        return {
          bg: 'bg-amber-100 text-amber-950 border-amber-300 font-bold',
          dot: 'bg-amber-600',
          avatarText: 'FA',
        };
      case 'Entrevistador':
        return {
          bg: 'bg-orange-100 text-orange-950 border-orange-300 font-bold',
          dot: 'bg-orange-600',
          avatarText: 'TV',
        };
      default:
        return {
          bg: 'bg-stone-100 text-stone-900 border-stone-300 font-bold',
          dot: 'bg-stone-500',
          avatarText: '??',
        };
    }
  };

  return (
    <div className="space-y-6">
      {/* Mode Selector and Controls Header */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 border-3 border-[#6b1118]/20 shadow-md space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-black text-[#44070d] flex items-center gap-2.5">
              <Languages className="w-6 h-6 text-[#c8102e]" />
              <span>Transcripción completa / Ամբողջական տառադարձում</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Haz clic en cualquier código de tiempo para reproducir. / Սեղմեք ցանկացած ժամանակային նշիչի վրա՝ տեսանյութի համապատասխան պահին անցնելու համար։
            </p>
          </div>

          {/* 3 Display Modes */}
          <div className="flex items-center gap-1.5 bg-[#f5ece4] p-1.5 rounded-2xl border-2 border-[#6b1118]/20 self-start sm:self-auto shrink-0 shadow-inner">
            <button
              onClick={() => setMode('both')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                mode === 'both'
                  ? 'bg-gradient-to-r from-[#6b1118] to-[#9c1827] text-white shadow-md'
                  : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/70'
              }`}
            >
              ES + HY / Երկուսն էլ
            </button>
            <button
              onClick={() => setMode('es')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                mode === 'es'
                  ? 'bg-gradient-to-r from-[#6b1118] to-[#9c1827] text-white shadow-md'
                  : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/70'
              }`}
            >
              Solo ES / Իսպաներեն
            </button>
            <button
              onClick={() => setMode('hy')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                mode === 'hy'
                  ? 'bg-gradient-to-r from-[#6b1118] to-[#9c1827] text-white shadow-md'
                  : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/70'
              }`}
            >
              Solo HY / Հայերեն
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-amber-700 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar palabras en el texto (ej. «adrenalina», «novela», «սերիալ»)..."
            className="w-full pl-11 pr-4 py-3 bg-[#faf5f0] border-2 border-stone-200 rounded-2xl text-sm sm:text-base text-stone-900 focus:outline-none focus:ring-3 focus:ring-amber-500 focus:border-[#6b1118] focus:bg-white transition-all shadow-xs"
          />
        </div>
      </div>

      {/* Critical Note for 0:03 «terminar el plan» */}
      <div className="bg-amber-50/95 border-l-4 border-amber-600 rounded-2xl p-4 sm:p-5 shadow-sm space-y-2 text-xs sm:text-sm">
        <div className="flex items-center gap-2 text-amber-950 font-black">
          <AlertCircle className="w-5 h-5 text-orange-600 shrink-0" />
          <span>Aclaración crítica sobre el minuto 0:03 / Կարևոր պարզաբանում 0:03 րոպեի վերաբերյալ</span>
        </div>
        <p className="text-stone-800 leading-relaxed">
          {NOTE_003.es}
        </p>
        <p className="text-amber-950 font-armenian leading-relaxed border-t border-amber-200/70 pt-2 font-medium">
          {NOTE_003.hy}
        </p>
      </div>

      {/* Transcript Items List */}
      <div className="space-y-3.5">
        {filteredLines.map((line) => {
          const badge = getSpeakerBadge(line.speaker);
          const isNoteLine = line.hasNote;
          const isManuallyRevealed = revealedTranslations[line.id];

          return (
            <div
              key={line.id}
              className={`bg-white rounded-2xl p-4 sm:p-5 border-2 transition-all hover:border-[#6b1118]/60 hover:shadow-md ${
                isNoteLine ? 'border-amber-400 bg-amber-50/30' : 'border-stone-200'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                {/* Speaker and Timestamp Info */}
                <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
                  {/* Timestamp Play Button with Orange/Amber styling */}
                  <button
                    onClick={() => onSeek(line.timeSec)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 hover:from-[#6b1118] hover:to-[#c8102e] hover:text-white text-stone-900 border-2 border-amber-300 text-xs sm:text-sm font-mono font-black transition-all group shadow-xs cursor-pointer"
                    title={`Reproducir desde ${line.timeLabel} / Նվագարկել ${line.timeLabel}-ից`}
                  >
                    <Play className="w-3.5 h-3.5 text-orange-600 group-hover:text-white" />
                    <span>{line.timeLabel}</span>
                  </button>

                  {/* Speaker Label */}
                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border-2 ${badge.bg}`}
                  >
                    <span className={`w-2 h-2 rounded-full ${badge.dot}`}></span>
                    <span>{line.speaker}</span>
                    <span className="text-[11px] opacity-80 font-armenian font-semibold">({line.speakerLabelHy})</span>
                  </div>

                  {/* Youtube external direct link for this exact second */}
                  <a
                    href={`https://www.youtube.com/watch?v=NYxFgd0lIt4&t=${line.timeSec}s`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded-lg text-stone-400 hover:text-red-600 hover:bg-stone-100 transition-colors"
                    title="Abrir este segundo exacto en YouTube / Բացել այս վայրկյանը YouTube-ում"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Optional toggle translation button when in 'Solo español' mode */}
                {mode === 'es' && (
                  <button
                    onClick={() => toggleLineTranslation(line.id)}
                    className="self-end sm:self-auto text-xs text-[#6b1118] hover:text-[#44070d] font-bold flex items-center gap-1.5 cursor-pointer bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200"
                  >
                    {isManuallyRevealed ? (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>Ocultar armenio / Թաքցնել</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5 text-amber-700" />
                        <span>Ver traducción / Տեսնել հայերենը</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Text content based on selected mode */}
              <div
                onClick={() => {
                  if (mode === 'es') toggleLineTranslation(line.id);
                }}
                className={`mt-3 space-y-2 ${mode === 'es' ? 'cursor-pointer group' : ''}`}
              >
                {/* Spanish line */}
                {(mode === 'both' || mode === 'es') && (
                  <p className="text-stone-950 font-bold text-base sm:text-lg leading-relaxed group-hover:text-[#6b1118] transition-colors">
                    {line.textEs}
                  </p>
                )}

                {/* Armenian line */}
                {(mode === 'both' || mode === 'hy' || (mode === 'es' && isManuallyRevealed)) && (
                  <p
                    className={`font-armenian text-sm sm:text-base leading-relaxed ${
                      mode === 'hy'
                        ? 'text-stone-900 font-bold'
                        : 'text-[#5e0d16] font-semibold pl-3.5 border-l-3 border-amber-500 pt-0.5'
                    }`}
                  >
                    {line.textHy}
                  </p>
                )}
              </div>

              {/* Notice if this line is 0:03 */}
              {isNoteLine && (
                <div className="mt-2.5 text-xs text-amber-900 bg-amber-100/70 p-2.5 rounded-xl border border-amber-300 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-orange-700 shrink-0" />
                  <span>Verificar expresión por el audio (posible error de transcripción en «terminar el plan»).</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
