import Link from 'next/link';

export default function Home() {
  return (
    <div className="px-4 md:px-12 lg:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
        {/* Hero Section */}
        <div className="@container mb-12">
          <div className="@[480px]:p-0">
            <div
              className="relative flex min-h-[500px] md:min-h-[600px] flex-col gap-6 rounded-xl overflow-hidden items-center justify-center p-8 group transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
              style={{
                backgroundImage: 'linear-gradient(rgba(16, 25, 34, 0.7) 0%, rgba(16, 25, 34, 0.9) 100%), url("/images/hero_abstract.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="flex flex-col gap-4 text-center max-w-3xl z-10">
                <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Editor's Pick</span>
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl lg:text-7xl">
                  Thoughtful Explorations
                </h1>
                <h2 className="text-slate-200 text-lg font-light leading-relaxed md:text-xl max-w-2xl mx-auto opacity-90">
                  Curated musings on design systems, emerging technology, and the future of digital interaction.
                </h2>
              </div>
              <div className="flex gap-4 mt-4 z-10">
                <Link
                  href="/article"
                  className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-primary/90 text-white text-base font-bold transition-all transform hover:-translate-y-1"
                >
                  Read Latest
                </Link>
                <Link
                  href="/archive"
                  className="flex items-center justify-center rounded-lg h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-base font-bold border border-white/20 transition-all"
                >
                  View Archive
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Section */}
        <div className="flex flex-col gap-8 mb-16">
          <div className="flex justify-between items-end border-b border-slate-200 dark:border-neutral-dark pb-4">
            <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-tight">
              Featured Posts
            </h2>
            <Link
              className="text-primary text-sm font-medium hover:underline flex items-center gap-1"
              href="/archive"
            >
              View all <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <article className="flex flex-col gap-4 group cursor-pointer">
              <Link href="/article" className="contents">
                <div className="w-full aspect-[4/3] bg-neutral-dark rounded-xl overflow-hidden relative">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: 'url("/images/minimalist_architecture.jpg")' }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">Design</span>
                    <span className="text-slate-500 dark:text-slate-400 text-xs font-medium">Oct 12 • 5 min read</span>
                  </div>
                  <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                    The Future of Minimalism in UI
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
                    Exploring how reductive design principles are evolving in an era of complex data visualization and rich media interfaces.
                  </p>
                </div>
              </Link>
            </article>

            {/* Card 2 */}
            <article className="flex flex-col gap-4 group cursor-pointer">
              <div className="w-full aspect-[4/3] bg-neutral-dark rounded-xl overflow-hidden relative">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: 'url("/images/data_viz.jpg")' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">Tech</span>
                  <span className="text-slate-500 dark:text-slate-400 text-xs font-medium">Sep 28 • 8 min read</span>
                </div>
                <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                  Design Systems at Scale
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
                  Strategies for maintaining consistency across large product suites without stifling creativity and innovation.
                </p>
              </div>
            </article>

            {/* Card 3 */}
            <article className="flex flex-col gap-4 group cursor-pointer">
              <div className="w-full aspect-[4/3] bg-neutral-dark rounded-xl overflow-hidden relative">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: 'url("/images/laptop_code.jpg")' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">Development</span>
                  <span className="text-slate-500 dark:text-slate-400 text-xs font-medium">Sep 15 • 4 min read</span>
                </div>
                <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                  Dark Mode Aesthetics
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
                  Why dark interfaces are more than just a trend, and how to design them for accessibility and visual comfort.
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="@container bg-neutral-dark rounded-2xl overflow-hidden relative mb-12">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>
          <div className="flex flex-col items-center justify-center gap-6 px-4 py-16 md:px-10 md:py-20 relative z-10">
            <div className="flex flex-col gap-4 text-center max-w-[600px]">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 text-primary">
                <span className="material-symbols-outlined text-3xl">mail</span>
              </div>
              <h2 className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-tight md:text-4xl">
                Stay in the loop
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-relaxed">
                Join 10,000+ designers and developers. Get weekly insights on design, technology, and creativity delivered straight to your inbox.
              </p>
            </div>
            <div className="w-full max-w-[480px]">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  className="flex-1 bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Enter your email address"
                  required
                  type="email"
                />
                <button
                  className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors whitespace-nowrap shadow-lg shadow-primary/20"
                  type="button"
                >
                  Subscribe Free
                </button>
              </form>
              <p className="text-slate-500 dark:text-slate-500 text-xs text-center mt-4">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
