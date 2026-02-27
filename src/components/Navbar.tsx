import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-neutral-dark bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm px-6 py-4 lg:px-12">
      <div className="flex items-center gap-4 text-slate-900 dark:text-white">
        <div className="size-8 rounded-full bg-primary flex items-center justify-center text-white">
          <span className="material-symbols-outlined text-lg">person</span>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
          <Link href="/">John Doe</Link>
        </h2>
      </div>
      <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
        <nav className="flex items-center gap-8">
          <Link 
            className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors"
            href="/archive"
          >
            Writing
          </Link>
          <Link 
            className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors"
            href="#"
          >
            Projects
          </Link>
          <Link 
            className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors"
            href="#"
          >
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4 pl-4 border-l border-slate-200 dark:border-neutral-dark">
          <button aria-label="Search" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-5 bg-primary hover:bg-primary/90 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all">
            <span className="truncate">Subscribe</span>
          </button>
        </div>
      </div>
      <button className="md:hidden text-slate-600 dark:text-slate-300">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </header>
  );
}
