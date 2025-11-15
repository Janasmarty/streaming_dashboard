'use client'

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/60 backdrop-blur-md text-white px-6 py-4 z-50 flex justify-between">
      <h1 className="font-bold text-2xl">Moviehood</h1>
      <nav className="flex gap-6">
        <a href="/">Home</a>
      </nav>
    </header>
  );
}
