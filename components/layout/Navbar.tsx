import Image from "next/image"
import { Button } from "../ui/button"

const Navbar = () => {
  return (
    <header className="w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="max-w-screen mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center justify-center gap-4">
          <Image src="/images/king.png" width={36} height={36} alt="King Logo" />
          <span className="font-semibold">Orifuke Games</span>
          <Button className="bg-purple-200 text-black hover:bg-purple-400 uppercase" size="sm" aria-label="Sign In">Store</Button>
        </div>
        <div>
          <Button className="bg-purple-200 text-black hover:bg-purple-400" size="sm" aria-label="Sign In">Sign In</Button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar