import React from 'react';
import { Sparkles, BookOpen, Compass, Headphones, MessageCircle, Film, ArrowRight } from 'lucide-react';

interface TabVerProps {
  onGoToTranscript: () => void;
  onGoToPractice: () => void;
  onGoToConversation: () => void;
  onOpenVocabulary: () => void;
}

export const TabVer: React.FC<TabVerProps> = ({
  onGoToTranscript,
  onGoToPractice,
  onGoToConversation,
  onOpenVocabulary,
}) => {
  return (
    <div className="space-y-6">
      {/* Introduction Card with Burgundy & Spanish Red border */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-3 border-[#6b1118]/20 shadow-md space-y-5">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black bg-gradient-to-r from-amber-100 to-orange-100 text-amber-950 border border-amber-300 shadow-xs">
              <Sparkles className="w-4 h-4 text-orange-600" />
              Contexto cultural / Մշակութային համատեքստ
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#44070d]">
              Natalia Oreiro y Facundo Arana en «Sos mi vida»
            </h2>
            <h3 className="text-lg sm:text-xl font-black text-amber-700 font-armenian">
              Նատալիա Օրեյրոն և Ֆակունդո Արանան՝ «Դու իմ կյանքն ես» սերիալի նկարահանումներում
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm sm:text-base text-stone-800 leading-relaxed border-t-2 border-[#6b1118]/10 pt-5">
          <div className="space-y-2.5">
            <h4 className="font-black text-[#5e0d16] flex items-center gap-2 text-base sm:text-lg">
              <Film className="w-5 h-5 text-red-600" />
              <span>Sobre la escena (Español)</span>
            </h4>
            <p>
              Esta breve pero vibrante entrevista tiene lugar inmediatamente después de que los actores realizaran maniobras y acrobacias reales en una avioneta para la exitosa telenovela argentina <em>«Sos mi vida»</em> (2006).
            </p>
            <p>
              Ambos actores acababan de bajar del avión con las emociones a flor de piel: comentan la adrenalina sentida, bromean sobre la posibilidad de que la novela terminara si no aterrizaban, y reflexionan con gran humildad y madurez sobre el liderazgo en los ratings de la televisión argentina.
            </p>
          </div>

          <div className="space-y-2.5 font-armenian bg-[#fcf5ef] p-4 sm:p-5 rounded-2xl border-2 border-amber-300/70">
            <h4 className="font-black text-amber-950 flex items-center gap-2 text-base sm:text-lg">
              <Film className="w-5 h-5 text-amber-600" />
              <span>Տեսարանի մասին (Հայերեն)</span>
            </h4>
            <p>
              Այս կարճ, բայց բովանդակալից հարցազրույցը տեղի է ունենում այն բանից անմիջապես հետո, երբ դերասաններն իրական օդային հնարքներ են կատարում թեթև ինքնաթիռով արգենտինական հայտնի <em>«Sos mi vida»</em> («Դու իմ կյանքն ես») հեռուստանովելի համար։
            </p>
            <p>
              Երկուսն էլ նոր էին իջել ինքնաթիռից՝ դեռևս թարմ տպավորություններով. նրանք կիսվում են ապրած ադրենալինով, կատակում են, որ սերիալը կավարտվեր, եթե վայրէջք չկատարեին, և խորին համեստությամբ խորհրդածում են հեռուստառեյտինգի առաջին տեղում լինելու և աշխատանքի մասին։
            </p>
          </div>
        </div>
      </div>

      {/* Step by step guide */}
      <div className="bg-[#fcf8f4] rounded-3xl p-6 sm:p-8 border-2 border-[#6b1118]/15 shadow-sm space-y-5">
        <div className="flex items-center gap-2.5">
          <Compass className="w-6 h-6 text-[#6b1118]" />
          <h3 className="text-xl sm:text-2xl font-black text-[#44070d]">
            Guía de estudio paso a paso / Քայլ առ քայլ ուսումնական ուղեցույց
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Step 1 */}
          <div className="bg-white p-5 rounded-2xl border-2 border-stone-200 shadow-xs flex flex-col justify-between space-y-4">
            <div>
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#6b1118] to-[#c8102e] text-white font-black text-sm flex items-center justify-center mb-3 shadow-sm">
                1
              </div>
              <h4 className="font-black text-stone-900 text-base">
                1. Mirar y escuchar / Դիտել և լսել
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed">
                Mira el video al menos una vez sin leer el texto para captar la entonación, los gestos y la velocidad rioplatense.
              </p>
              <p className="text-xs sm:text-sm text-stone-500 mt-2 font-armenian leading-relaxed">
                Դիտեք տեսանյութը գոնե մեկ անգամ՝ առանց տեքստն ընթերցելու, որպեսզի որսաք առոգանությունը, շարժուձևը և տեմպը։
              </p>
            </div>
            <div className="pt-3 border-t border-stone-100 text-xs text-amber-900 font-bold flex items-center gap-1.5">
              <Headphones className="w-4 h-4 text-orange-600" />
              <span>Escucha activa / Ակտիվ լսում</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-5 rounded-2xl border-2 border-stone-200 shadow-xs flex flex-col justify-between space-y-4">
            <div>
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#6b1118] to-[#c8102e] text-white font-black text-sm flex items-center justify-center mb-3 shadow-sm">
                2
              </div>
              <h4 className="font-black text-stone-900 text-base">
                2. Explorar el texto / Ուսումնասիրել տեքստը
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed">
                Abre la pestaña «Texto» para comparar la transcripción línea por línea con su traducción natural al armenio.
              </p>
              <p className="text-xs sm:text-sm text-stone-500 mt-2 font-armenian leading-relaxed">
                Բացեք «Տեքստ» բաժինը՝ տառադարձումը տող առ տող հայերեն բնական թարգմանության հետ համեմատելու համար։
              </p>
            </div>
            <button
              onClick={onGoToTranscript}
              className="mt-1 w-full text-center py-2 bg-stone-100 hover:bg-[#6b1118] hover:text-white text-stone-900 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer"
            >
              Ir a Texto / Գնալ Տեքստ
            </button>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-5 rounded-2xl border-2 border-[#80131d]/30 shadow-xs flex flex-col justify-between space-y-4 ring-2 ring-[#80131d]/20">
            <div>
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#6b1118] to-[#c8102e] text-white font-black text-sm flex items-center justify-center mb-3 shadow-sm">
                3
              </div>
              <h4 className="font-black text-stone-900 text-base">
                3. Cuestionario y ejercicios / Վարժություններ
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed">
                Resuelve el cuestionario de 15 preguntas con traducción al armenio con un solo clic, verdadero o falso y unir expresiones.
              </p>
              <p className="text-xs sm:text-sm text-stone-500 mt-2 font-armenian leading-relaxed">
                Անցեք 15 հարցանի հարցարանը՝ մեկ հպումով հայերեն թարգմանությամբ, ճիշտ/սխալ վարժությունը և այլ առաջադրանքները։
              </p>
            </div>
            <button
              onClick={onGoToPractice}
              className="mt-1 w-full text-center py-2 bg-gradient-to-r from-[#6b1118] to-[#c8102e] text-white rounded-xl text-xs sm:text-sm font-black transition-all shadow-md cursor-pointer"
            >
              Ir a Practicar / Գնալ Վարժվել
            </button>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-5 rounded-2xl border-2 border-stone-200 shadow-xs flex flex-col justify-between space-y-4">
            <div>
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#6b1118] to-[#c8102e] text-white font-black text-sm flex items-center justify-center mb-3 shadow-sm">
                4
              </div>
              <h4 className="font-black text-stone-900 text-base">
                4. Expresión oral / Զրույց
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed">
                Formula respuestas abiertas con ayuda de los modelos iniciales sobre el éxito, el riesgo y el disfrute.
              </p>
              <p className="text-xs sm:text-sm text-stone-500 mt-2 font-armenian leading-relaxed">
                Ձևակերպեք սեփական պատասխանները հուշումների օգնությամբ՝ հաջողության, ռիսկի և պահը վայելելու մասին։
              </p>
            </div>
            <button
              onClick={onGoToConversation}
              className="mt-1 w-full text-center py-2 bg-stone-100 hover:bg-[#6b1118] hover:text-white text-stone-900 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer"
            >
              Ir a Conversar / Գնալ Զրուցել
            </button>
          </div>
        </div>
      </div>

      {/* Linguistic Argentine Spanish Highlight */}
      <div className="bg-gradient-to-r from-[#44070d] via-[#630d17] to-[#80131d] text-amber-50 rounded-3xl p-6 sm:p-7 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border-2 border-amber-500/40">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-amber-300 text-xs sm:text-sm font-black uppercase tracking-wider">
            <BookOpen className="w-5 h-5 text-amber-400" />
            <span>Peculiaridades del español rioplatense / Ռիոպլատական իսպաներենի առանձնահատկություններ</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            «Vos», «re contenta», «che», «¿entendés?», «30 puntos»
          </h3>
          <p className="text-sm sm:text-base text-amber-200 leading-relaxed font-armenian">
            Այս հարցազրույցում դուք կհանդիպեք արգենտինական խոսակցական լեզվի իրական նմուշների՝ «vos» ձևին, «re-» նախածանցով ուժեղացմանը, հեռուստառեյտինգի եզրույթներին և «en el aire» երկիմաստությանը։
          </p>
        </div>

        <button
          onClick={onOpenVocabulary}
          className="shrink-0 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black rounded-2xl text-sm sm:text-base shadow-lg transition-all flex items-center gap-2 focus:ring-4 focus:ring-amber-300 cursor-pointer"
        >
          <BookOpen className="w-5 h-5" />
          <span>Ver explicaciones / Տեսնել բառարանը</span>
        </button>
      </div>
    </div>
  );
};
