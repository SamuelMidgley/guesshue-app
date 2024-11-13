export function Logo() {
  return (
    <svg
      width="554"
      height="554"
      viewBox="0 0 554 554"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1_3)">
        <path
          d="M20 44C20 28.536 32.536 16 48 16H506C521.464 16 534 28.536 534 44V502C534 517.464 521.464 530 506 530H48C32.536 530 20 517.464 20 502V44Z"
          fill="url(#paint0_linear_1_3)"
        />
        <path
          d="M506 8H48C28.1177 8 12 24.1178 12 44V502C12 521.882 28.1178 538 48 538H506C525.882 538 542 521.882 542 502V44C542 24.1177 525.882 8 506 8Z"
          stroke="#09090B"
          strokeWidth="16"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_3"
          x="0"
          y="0"
          width="554"
          height="554"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_3"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_3"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_3"
          x1="534"
          y1="530"
          x2="20"
          y2="16"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.1" stopColor="#A04BFF" />
          <stop offset="0.2" stopColor="#4BA5EB" />
          <stop offset="0.3" stopColor="#4BFFD7" />
          <stop offset="0.4" stopColor="#B4FF4B" />
          <stop offset="0.5" stopColor="#FFFF4B" />
          <stop offset="0.6" stopColor="#FFD54B" />
          <stop offset="0.7" stopColor="#FFB74B" />
          <stop offset="0.8" stopColor="#FF6E4B" />
          <stop offset="0.9" stopColor="#FF4B4B" />
        </linearGradient>
      </defs>
    </svg>
  );
}
