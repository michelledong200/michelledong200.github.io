export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border-accent-soft bg-surface-alt text-accent-deep inline-block rounded-full border px-3 py-1 text-[13px] leading-snug font-medium">
      {children}
    </span>
  );
}
