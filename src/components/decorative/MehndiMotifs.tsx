// Original, hand-designed SVG motifs inspired by Mehndi paisley and mandala
// line-work. Used purely as subtle decoration — kept low-contrast so they
// never compete with readable text.

export function CornerMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 160"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 4C40 6 60 24 62 60C64 96 82 116 118 118"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M4 24C30 26 44 40 46 62"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M24 4C26 30 40 44 62 46"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="62" cy="60" r="4" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="118" cy="118" r="3" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M96 118C96 106 104 100 118 100C130 100 138 108 138 118"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function PaisleyGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 140" className={className} fill="none" aria-hidden="true">
      <path
        d="M50 10C20 10 8 36 18 62C26 82 46 88 50 106C53 120 44 128 30 128"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M50 10C74 12 84 34 76 54C70 70 54 74 50 88"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M34 40C40 34 48 34 52 42"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="44" cy="52" r="2.4" fill="currentColor" />
      <circle cx="56" cy="64" r="1.8" fill="currentColor" />
      <path
        d="M34 78C42 74 50 76 54 84"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function MandalaOutline({ className = "" }: { className?: string }) {
  const petals = Array.from({ length: 12 });
  return (
    <svg viewBox="0 0 400 400" className={className} fill="none" aria-hidden="true">
      <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1" />
      <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1" />
      <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="1" />
      {petals.map((_, i) => {
        const angle = (i / petals.length) * 360;
        return (
          <g key={i} transform={`rotate(${angle} 200 200)`}>
            <path
              d="M200 60C214 90 214 110 200 140C186 110 186 90 200 60Z"
              stroke="currentColor"
              strokeWidth="1"
            />
            <circle cx="200" cy="40" r="3" stroke="currentColor" strokeWidth="1" />
          </g>
        );
      })}
    </svg>
  );
}

export function DividerMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 24"
      className={className}
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <path d="M0 12H120" stroke="currentColor" strokeWidth="1" />
      <path d="M180 12H300" stroke="currentColor" strokeWidth="1" />
      <path
        d="M132 12C132 5 138 2 150 2C162 2 168 5 168 12C168 19 162 22 150 22C138 22 132 19 132 12Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="150" cy="12" r="2.5" fill="currentColor" />
    </svg>
  );
}

// A stylised hero illustration of a mehndi-adorned hand — line-art only,
// designed from scratch as decoration, not a photographic likeness.
export function HennaHandIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 560" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="handFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F1E7D3" />
          <stop offset="100%" stopColor="#E7D8B8" />
        </linearGradient>
      </defs>

      {/* Hand silhouette */}
      <path
        d="M160 520C130 500 120 460 122 420L128 260C129 244 142 232 158 233C173 234 184 247 184 262L182 340
           L188 200C189 182 203 168 221 169C238 170 251 185 251 202L250 320
           L256 176C257 158 271 145 289 146C306 147 318 161 318 178L316 320
           L326 210C328 194 341 182 358 184C374 186 385 200 384 217L372 380
           C398 386 416 408 414 434C412 466 388 500 358 520C320 546 200 548 160 520Z"
        fill="url(#handFill)"
        stroke="#7A4026"
        strokeWidth="2"
      />

      {/* Mehndi line work on the hand */}
      <g stroke="#7A4026" strokeWidth="1.6" fill="none" opacity="0.85">
        <circle cx="240" cy="330" r="30" />
        <circle cx="240" cy="330" r="14" />
        <path d="M240 300C246 310 246 320 240 330C234 320 234 310 240 300Z" />
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={i}
            x1="240"
            y1="330"
            x2={240 + 40 * Math.cos((i / 8) * Math.PI * 2)}
            y2={330 + 40 * Math.sin((i / 8) * Math.PI * 2)}
            opacity="0.5"
          />
        ))}
        <path d="M158 260C168 280 168 300 158 318" />
        <path d="M184 250C196 268 196 292 184 312" />
        <path d="M250 210C262 224 262 244 250 260" />
        <path d="M318 190C330 204 330 222 318 238" />
        <path d="M384 226C392 240 392 256 384 270" />
        <path d="M170 420C200 434 280 434 330 418" />
        <path d="M170 440C200 452 280 452 330 438" />
      </g>

      {/* Dripping henna cone, drawn to the side */}
      <g transform="translate(60 40)">
        <path
          d="M0 0L40 0L30 90C29 96 24 100 20 100C16 100 11 96 10 90Z"
          fill="#4C6B4F"
          stroke="#2C4632"
          strokeWidth="2"
        />
        <path
          d="M18 100C18 112 22 118 20 128"
          stroke="#7A4026"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="20" cy="132" r="3" fill="#7A4026" />
      </g>
    </svg>
  );
}
