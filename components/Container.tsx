export default function Container({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[940px] pr-[max(24px,env(safe-area-inset-right))] pl-[max(24px,env(safe-area-inset-left))] ${className}`}
    >
      {children}
    </div>
  );
}
