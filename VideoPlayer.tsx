import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Play, ExternalLink, Upload, RotateCcw, AlertCircle, Film, Volume2, Info } from 'lucide-react';

export interface VideoPlayerRef {
  seekTo: (seconds: number) => void;
}

interface VideoPlayerProps {
  currentTimestampSec?: number;
}

export const VideoPlayer = forwardRef<VideoPlayerRef, VideoPlayerProps>(({ currentTimestampSec }, ref) => {
  const [sourceMode, setSourceMode] = useState<'youtube' | 'local'>('youtube');
  const [localVideoUrl, setLocalVideoUrl] = useState<string | null>(null);
  const [localFileName, setLocalFileName] = useState<string>('');
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [ytErrorNotice, setYtErrorNotice] = useState<boolean>(false);

  const localVideoRef = useRef<HTMLVideoElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Seek handler for both players
  const handleSeek = (seconds: number) => {
    if (sourceMode === 'local' && localVideoRef.current) {
      localVideoRef.current.currentTime = seconds;
      localVideoRef.current.play().catch(() => {});
    } else if (iframeRef.current && iframeRef.current.contentWindow) {
      // YouTube iframe API postMessage seek command
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({
          event: 'command',
          func: 'seekTo',
          args: [seconds, true],
        }),
        '*'
      );
    }
  };

  useImperativeHandle(ref, () => ({
    seekTo: (seconds: number) => {
      handleSeek(seconds);
    },
  }));

  useEffect(() => {
    if (currentTimestampSec !== undefined && currentTimestampSec >= 0) {
      handleSeek(currentTimestampSec);
    }
  }, [currentTimestampSec]);

  // Handle local video selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (localVideoUrl) {
        URL.revokeObjectURL(localVideoUrl);
      }
      const url = URL.createObjectURL(file);
      setLocalVideoUrl(url);
      setLocalFileName(file.name);
      setSourceMode('local');
    }
  };

  // Speed change for local player
  const changeSpeed = (rate: number) => {
    setPlaybackRate(rate);
    if (localVideoRef.current) {
      localVideoRef.current.playbackRate = rate;
    }
  };

  return (
    <div className="bg-[#1f0508] text-stone-100 rounded-3xl shadow-2xl border-2 border-[#80131d]/40 overflow-hidden flex flex-col">
      {/* Top Bar with Burgundy gradient & golden accents */}
      <div className="bg-gradient-to-r from-[#44070d] via-[#5c0d16] to-[#79121d] px-4 py-3 border-b-2 border-amber-600/30 flex items-center justify-between gap-2.5 text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full bg-emerald-400 animate-pulse border border-white/40"></span>
          <span className="font-extrabold text-amber-200 truncate max-w-[170px] sm:max-w-none">
            {sourceMode === 'youtube' ? 'YouTube Shorts (NYxFgd0lIt4)' : `Տեղային: ${localFileName}`}
          </span>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={() => setSourceMode('youtube')}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer ${
              sourceMode === 'youtube'
                ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-stone-950 font-black shadow-md'
                : 'bg-[#300509] text-stone-300 hover:text-white border border-[#80131d]/40'
            }`}
          >
            YouTube
          </button>
          <button
            onClick={() => {
              if (!localVideoUrl) {
                fileInputRef.current?.click();
              } else {
                setSourceMode('local');
              }
            }}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1 cursor-pointer ${
              sourceMode === 'local'
                ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-stone-950 font-black shadow-md'
                : 'bg-[#300509] text-stone-300 hover:text-white border border-[#80131d]/40'
            }`}
            title="Elegir archivo de video MP4 local / Ընտրել տեղային MP4 տեսանյութ"
          >
            <Upload className="w-3.5 h-3.5 text-amber-400" />
            <span>MP4 local</span>
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="video/mp4,video/webm,video/*"
            className="hidden"
          />
        </div>
      </div>

      {/* Main Video Viewport - Vertical aspect with max height for desktop comfort */}
      <div className="relative w-full bg-black flex items-center justify-center overflow-hidden min-h-[380px] max-h-[500px]">
        {sourceMode === 'youtube' ? (
          <div className="relative w-full h-[480px] max-w-[320px] mx-auto bg-black flex items-center justify-center">
            <iframe
              ref={iframeRef}
              src="https://www.youtube.com/embed/NYxFgd0lIt4?enablejsapi=1&rel=0&playsinline=1&modestbranding=1"
              title="Entrevista Natalia Oreiro y Facundo Arana"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0 shadow-2xl"
              onError={() => setYtErrorNotice(true)}
            />
          </div>
        ) : (
          <div className="relative w-full h-[480px] max-w-[320px] mx-auto bg-black flex flex-col items-center justify-center">
            {localVideoUrl ? (
              <video
                ref={localVideoRef}
                src={localVideoUrl}
                controls
                playsInline
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="p-6 text-center text-stone-300 flex flex-col items-center gap-3">
                <Film className="w-14 h-14 text-amber-400/80" />
                <p className="text-sm">
                  Ningún archivo de video seleccionado todavía.
                  <br />
                  <span className="text-xs text-amber-300/80 font-armenian">
                    Դեռևս տեսանյութ չի ընտրվել։
                  </span>
                </p>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="mt-2 px-5 py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <Upload className="w-4 h-4" />
                  Elegir video MP4 / Ընտրել MP4 տեսանյութ
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Fallback & External Link Bar with Spanish Red and Dark Yellow */}
      <div className="bg-[#240609] p-3.5 border-t border-[#80131d]/40 flex flex-col gap-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          {/* External YouTube link in Spanish Red */}
          <a
            href="https://www.youtube.com/shorts/NYxFgd0lIt4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#c8102e] hover:bg-[#e01435] text-white rounded-xl text-xs sm:text-sm font-extrabold transition-all shadow-md focus:ring-4 focus:ring-amber-400 border border-amber-400/30"
          >
            <ExternalLink className="w-4 h-4 text-amber-200" />
            <span>Ver en YouTube / Դիտել YouTube-ում</span>
          </a>

          {/* Audio Note */}
          <div className="flex items-center gap-1.5 text-xs text-amber-200/90 font-medium">
            <Volume2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Sin reproducción automática / Առանց ավտոմատ ձայնի</span>
          </div>
        </div>

        {/* Speed Controls for Local Player */}
        {sourceMode === 'local' && localVideoUrl && (
          <div className="flex items-center justify-between text-xs sm:text-sm pt-1.5 border-t border-[#80131d]/30 text-amber-200">
            <span>Velocidad / Արագություն:</span>
            <div className="flex items-center gap-1.5">
              {[0.75, 1, 1.25].map((rate) => (
                <button
                  key={rate}
                  onClick={() => changeSpeed(rate)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-colors cursor-pointer ${
                    playbackRate === rate
                      ? 'bg-amber-500 text-stone-950 shadow-sm'
                      : 'bg-[#40080d] text-stone-300 hover:bg-[#5e0d16]'
                  }`}
                >
                  {rate}x
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Fallback notification box */}
        <div className="mt-1 bg-[#33080c] rounded-xl p-3 border border-amber-600/30 text-xs text-amber-100 flex items-start gap-2.5 shadow-inner">
          <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1 leading-relaxed">
            <p>
              <strong className="text-amber-300">¿Problemas con el video?</strong> Si YouTube muestra restricciones en tu navegador, pulsa el botón rojo para abrirlo directamente o selecciona un archivo MP4 local arriba.
            </p>
            <p className="text-amber-200/80 font-armenian">
              <strong className="text-amber-300">Խնդի՞ր տեսանյութի հետ։</strong> Եթե YouTube-ի ներդրված նվագարկիչն արգելափակվում է, սեղմեք կարմիր կոճակը՝ YouTube-ում դիտելու համար, կամ ընտրեք տեղային MP4 ֆայլը։
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

VideoPlayer.displayName = 'VideoPlayer';
