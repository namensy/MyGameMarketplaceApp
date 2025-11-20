import Image from "next/image"

const Navbar = () => {
  return (
    <header className="w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="max-w-screen mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center justify-center gap-4">
          <Image src="/images/king.png" width={36} height={36} alt="King Logo" />
          <span className="font-semibold">Orifuke Games</span>
        </div>
        <div>
          <button type="button">Sign in</button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar