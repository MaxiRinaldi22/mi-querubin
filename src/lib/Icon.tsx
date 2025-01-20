export function Icon({ size, path }: { size: number; path: React.ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      {path}
    </svg>
  );
}
