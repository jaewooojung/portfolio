export default function Background() {
  return (
    <div className="-z-20 fixed inset-0 text-gray-50 select-none" style={{ backgroundColor: "rgb(255,253,252)" }}>
      <div className="absolute left-0 w-full bottom-0 -translate-x-1/2 animate-slide-right-infinite">
        <span className="text-9xl tracking-widest font-mono font-extrabold">JAEWOO JUNG</span>
      </div>
    </div>
  );
}
