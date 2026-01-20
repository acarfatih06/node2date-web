'use client';

import { useTranslation } from 'react-i18next';

function TurkeyFlagIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 640 480"
      role="img"
      aria-label="Turkey flag"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="640" height="480" fill="#E30A17" />
      <circle cx="267" cy="240" r="120" fill="#fff" />
      <circle cx="302" cy="240" r="96" fill="#E30A17" />
      <polygon
        fill="#fff"
        points="410,240 365,254 392,218 392,262 365,226"
        transform="translate(0 0) scale(1.25) translate(-60 -60)"
      />
    </svg>
  );
}

function USFlagIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 7410 3900"
      role="img"
      aria-label="United States flag"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="7410" height="3900" fill="#B22234" />
      {Array.from({ length: 6 }).map((_, i) => (
        <rect
          key={`w${i}`}
          y={(i * 2 + 1) * 300}
          width="7410"
          height="300"
          fill="#fff"
        />
      ))}
      <rect width="2964" height="2100" fill="#3C3B6E" />
      {Array.from({ length: 9 }).map((_, row) => {
        const isOdd = row % 2 === 1;
        const starsInRow = isOdd ? 5 : 6;
        const xOffset = isOdd ? 247 : 123.5;
        return Array.from({ length: starsInRow }).map((__, col) => (
          <circle
            key={`s${row}-${col}`}
            cx={xOffset + col * 494}
            cy={175 + row * 233}
            r="55"
            fill="#fff"
          />
        ));
      })}
    </svg>
  );
}

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.language?.startsWith('tr') ? 'tr' : 'en';

  const toggleLang = () => {
    const next = current === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(next);
  };

  const isTR = current === 'tr';
  const label = isTR ? 'TR' : 'EN';
  const FlagIcon = isTR ? TurkeyFlagIcon : USFlagIcon;

  return (
    <button
      type="button"
      onClick={toggleLang}
      className="flex items-center gap-1 text-xs sm:text-sm font-medium text-gray-600 rounded-full border border-violet-200/60 bg-white/70 px-3 py-1 shadow-sm hover:border-violet-500 hover:text-violet-700 transition-colors"
      aria-label={`Change language to ${isTR ? 'English' : 'Turkish'}`}
    >
      <span className="inline-flex h-4 w-6 overflow-hidden rounded-sm border border-black/10">
        <FlagIcon className="h-full w-full" />
      </span>
      <span>{label}</span>
    </button>
  );
}

