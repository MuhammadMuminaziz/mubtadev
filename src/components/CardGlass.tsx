export default function CardGlass({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="isolate rounded-xl bg-white/10 shadow-lg ring-1 ring-black/5 p-5">
        {children}
      </div>
    </div>
  );
}
