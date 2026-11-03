export default function PhoneFrame({ children, className = 'h-[540px] w-[268px]' }) {
  return (
    <div
      className={`relative rounded-[44px] border border-gold/40 bg-gradient-to-b from-[#2a1218] to-bg p-2.5 shadow-[0_40px_90px_rgba(0,0,0,0.75),0_0_60px_rgba(201,168,76,0.12)] ${className}`}
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-[36px] bg-bg">
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
        <div className="flex items-center justify-between px-6 pt-2.5 font-dmsans text-[10px] font-medium text-text-primary/80">
          <span>9:41</span>
          <span className="h-1.5 w-4 rounded-sm bg-text-primary/70" />
        </div>
        <div className="flex flex-1 flex-col gap-3 overflow-hidden px-4 pb-4 pt-5">{children}</div>
      </div>
    </div>
  )
}
