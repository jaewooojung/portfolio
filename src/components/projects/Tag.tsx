export default function Tag({ tech }: { tech: string }) {
  return (
    <div className="px-[7px] py-[1px] rounded-xl bg-zinc-600">
      <span className="text-xs">{tech}</span>
    </div>
  );
}
