type LogoProps = {
  className?: string;
  color?: string;
};

export function Logo({
  className = "",
  color = "currentColor",
}: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="300 300 580 260"
      className={className}
      style={{ color }}
      aria-label="GP NOVA"
      role="img"
    >
      <g>
        <path
          d="M 310.24 473.33 L 310.50 388.65 L 330.50 375.86 C356.85 359.01 ... 451.25 387.70 C450.26 388.11 450.00 378.61 450.00 342.17 Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}