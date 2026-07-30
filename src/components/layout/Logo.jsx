export default function Logo({ variant = "light", showTagline = true, className = "" }) {
  const color = variant === "light" ? "#FFFFFF" : "#0B0D12";

  return (
    <svg
      viewBox="0 0 240 118"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Forever Code Studio"
    >
      {/* Infinity mark */}
      <path
        d="M72 26C57.088 26 45 38.088 45 53C45 67.912 57.088 80 72 80C82.5 80 89.5 73 96 63L102 53L108 43C114.5 33 121.5 26 132 26C146.912 26 159 38.088 159 53C159 67.912 146.912 80 132 80C121.5 80 114.5 73 108 63L102 53L96 43C89.5 33 82.5 26 72 26Z"
        fill="none"
        stroke={color}
        strokeWidth="9"
        strokeLinecap="round"
      />

      {/* FOREVER wordmark */}
      <text
        x="120"
        y="98"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="600"
        fontSize="19"
        letterSpacing="7"
        fill={color}
      >
        FOREVER
      </text>

      {/* CODE STUDIO tagline with dividers */}
      {showTagline && (
        <g>
          <line x1="42" y1="110" x2="70" y2="110" stroke={color} strokeOpacity="0.5" strokeWidth="1" />
          <text
            x="120"
            y="114"
            textAnchor="middle"
            fontFamily="'Space Grotesk', sans-serif"
            fontWeight="500"
            fontSize="9"
            letterSpacing="4"
            fill={color}
            fillOpacity="0.75"
          >
            CODE STUDIO
          </text>
          <line x1="170" y1="110" x2="198" y2="110" stroke={color} strokeOpacity="0.5" strokeWidth="1" />
        </g>
      )}
    </svg>
  );
}
