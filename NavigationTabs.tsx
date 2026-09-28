import React from 'react';
import { Eye, FileText, CheckSquare, MessageSquare } from 'lucide-react';

export type TabKey = 'ver' | 'texto' | 'practicar' | 'conversar';

interface NavigationTabsProps {
  activeTab: TabKey;
  onSelectTab: (tab: TabKey) => void;
  badgeCounts?: {
    practicar?: number;
    conversar?: number;
  };
}

export const NavigationTabs: React.FC<NavigationTabsProps> = ({
  activeTab,
  onSelectTab,
  badgeCounts,
}) => {
  const tabs = [
    {
      key: 'ver' as TabKey,
      labelEs: 'Ver',
      labelHy: 'Դիտել',
      icon: Eye,
      descriptionEs: 'Video e instrucciones',
      descriptionHy: 'Տեսանյութ և հրահանգներ',
    },
    {
      key: 'texto' as TabKey,
      labelEs: 'Texto',
      labelHy: 'Տեքստ',
      icon: FileText,
      descriptionEs: 'Transcripción y traducción',
      descriptionHy: 'Տառադարձում և թարգմանություն',
    },
    {
      key: 'practicar' as TabKey,
      labelEs: 'Practicar',
      labelHy: 'Վարժվել',
      icon: CheckSquare,
      descriptionEs: 'Cuestionario y juegos',
      descriptionHy: 'Հարցարան և վարժություններ',
      badge: badgeCounts?.practicar,
    },
    {
      key: 'conversar' as TabKey,
      labelEs: 'Conversar',
      labelHy: 'Զրուցել',
      icon: MessageSquare,
      descriptionEs: 'Preguntas de discusión',
      descriptionHy: 'Քննարկման հարցեր',
      badge: badgeCounts?.conversar,
    },
  ];

  return (
    <nav className="flex items-center gap-2 p-2 bg-[#f0e7df] rounded-2xl border-2 border-[#80131d]/20 shadow-inner">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.key;
        return (
          <button
            key={tab.key}
            onClick={() => onSelectTab(tab.key)}
            className={`flex-1 py-3 px-3.5 rounded-xl transition-all duration-200 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2.5 text-center sm:text-left relative focus:outline-none focus:ring-2 focus:ring-amber-500 ${
              isActive
                ? 'bg-gradient-to-r from-[#681119] to-[#881723] text-white shadow-md font-bold'
                : 'bg-white/80 hover:bg-white text-stone-800 hover:text-[#681119] border border-stone-200/80 font-semibold'
            }`}
          >
            <Icon
              className={`w-5 h-5 shrink-0 transition-transform ${
                isActive ? 'text-amber-400 scale-110' : 'text-stone-500'
              }`}
            />
            <div className="flex flex-col leading-tight">
              <span className="text-sm sm:text-base tracking-wide font-extrabold">
                {tab.labelEs} <span className={isActive ? 'text-amber-300' : 'text-stone-400'}>/</span>{' '}
                <span className="font-armenian">{tab.labelHy}</span>
              </span>
            </div>
            {tab.badge !== undefined && tab.badge > 0 && (
              <span
                className={`ml-1 text-xs px-2 py-0.5 rounded-full font-black ${
                  isActive ? 'bg-amber-400 text-stone-950 shadow-xs' : 'bg-[#c8102e] text-white'
                }`}
              >
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );
};
