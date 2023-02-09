export default function Tag({ tech }: { tech: string }) {
  return (
    <div className="px-[7px] py-[1px] rounded-xl bg-zinc-500">
      <span className="text-xs text-zinc-200">{tech}</span>
    </div>
  );
}
