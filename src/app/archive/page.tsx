import Link from 'next/link';
import Image from 'next/image';

export default function ArchivePage() {
    return (
        <div className="flex-grow flex justify-center py-10 px-4 md:px-10">
            <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-12">
                {/* Left Column: Articles */}
                <div className="flex-1 flex flex-col gap-8">
                    {/* Header Section */}
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">Writing</h1>
                            <p className="text-slate-600 dark:text-slate-400 text-lg">Thoughts on design, technology, and building better products.</p>
                        </div>
                        {/* Filter Pills */}
                        <div className="flex flex-wrap gap-2 py-2">
                            <button className="group flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-medium transition-all hover:bg-primary/90">
                                <span className="material-symbols-outlined text-[18px]">check</span>
                                All
                            </button>
                            <button className="group flex items-center gap-2 px-4 py-2 rounded-full glass-panel hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium transition-all">
                                <span className="material-symbols-outlined text-[18px] text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors">brush</span>
                                Design
                            </button>
                            <button className="group flex items-center gap-2 px-4 py-2 rounded-full glass-panel hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium transition-all">
                                <span className="material-symbols-outlined text-[18px] text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors">terminal</span>
                                Tech
                            </button>
                            <button className="group flex items-center gap-2 px-4 py-2 rounded-full glass-panel hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium transition-all">
                                <span className="material-symbols-outlined text-[18px] text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors">eco</span>
                                Life
                            </button>
                            <button className="group flex items-center gap-2 px-4 py-2 rounded-full glass-panel hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium transition-all">
                                <span className="material-symbols-outlined text-[18px] text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors">psychology</span>
                                Philosophy
                            </button>
                        </div>
                    </div>

                    {/* Article List */}
                    <div className="flex flex-col gap-4">
                        {/* Featured Article */}
                        <article className="group relative glass-panel rounded-2xl p-6 hover:bg-slate-800/40 transition-all border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 cursor-pointer mb-4 overflow-hidden">
                            <Link href="/article" className="contents">
                                <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="w-full md:w-1/3 aspect-video md:aspect-[4/3] rounded-xl bg-slate-800 overflow-hidden relative">
                                        <img
                                            alt="The Future of UI Engineering"
                                            src="/images/future_ui.jpg"
                                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-semibold text-white uppercase tracking-wider">
                                            Featured
                                        </div>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center">
                                        <div className="flex items-center gap-3 text-xs font-medium text-primary mb-2">
                                            <span className="bg-primary/10 px-2 py-0.5 rounded text-primary">Tech</span>
                                            <span className="text-slate-500">•</span>
                                            <span className="text-slate-500 dark:text-slate-400">Oct 24, 2023</span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-primary transition-colors">
                                            The Future of UI Engineering
                                        </h2>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
                                            Exploring the next decade of interface design, where component-driven development meets AI-generated layouts. How we build for the web is changing fundamentally.
                                        </p>
                                        <div className="flex items-center gap-2 text-sm text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors mt-auto">
                                            <span className="material-symbols-outlined text-[16px]">schedule</span>
                                            <span>8 min read</span>
                                            <span className="ml-auto flex items-center gap-1 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                                                Read Article <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </article>

                        {/* article list logic... (can be replaced with common ArticleCard later) */}
                        <article className="group flex flex-col sm:flex-row gap-5 p-5 glass-panel rounded-xl hover:bg-slate-800/40 transition-all border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 cursor-pointer">
                            <div className="w-full sm:w-32 h-32 sm:h-24 shrink-0 rounded-lg bg-slate-800 overflow-hidden">
                                <img alt="Abstract shapes" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" src="/images/abstract_shapes.jpg" />
                            </div>
                            <div className="flex flex-col flex-1 min-w-0 justify-center">
                                <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                                    <span className="text-primary font-medium">Design</span>
                                    <span>•</span>
                                    <span>Sep 15, 2023</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-primary transition-colors truncate">
                                    Designing for Accessibility First
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">
                                    Why accessibility shouldn't be an afterthought in your design process, and how to implement it effectively from day one.
                                </p>
                                <div className="mt-2 flex items-center gap-1 text-xs text-slate-500">
                                    <span className="material-symbols-outlined text-[14px]">schedule</span>
                                    <span>5 min read</span>
                                </div>
                            </div>
                        </article>

                        {/* Repeat for other articles... */}
                        <button className="mt-4 self-center text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1">
                            Load more articles
                            <span className="material-symbols-outlined text-[16px]">expand_more</span>
                        </button>
                    </div>
                </div>

                {/* Right Column: Sidebar */}
                <aside className="w-full lg:w-80 flex flex-col gap-8 shrink-0">
                    <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800 relative overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                        <div className="relative z-10">
                            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                <span className="material-symbols-outlined">mail</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Join the Newsletter</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Get the latest posts on design and code delivered straight to your inbox.</p>
                            <form className="flex flex-col gap-3">
                                <input className="w-full bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 focus:ring-1 focus:ring-primary focus:border-primary transition-all" placeholder="your@email.com" type="email" />
                                <button className="w-full bg-primary hover:bg-primary/90 text-white font-medium text-sm py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2" type="button">
                                    Subscribe
                                    <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-bold text-slate-500 dark:text-slate-300 uppercase tracking-wider px-1">Popular Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {['#React', '#TailwindCSS', '#UXResearch', '#Career', '#Productivity', '#MentalModels', '#Frontend'].map(tag => (
                                <Link key={tag} href="#" className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-xs text-slate-600 dark:text-slate-300 transition-colors">
                                    {tag}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 mt-4">
                        <div className="flex items-center gap-3">
                            <div className="size-12 rounded-full overflow-hidden bg-slate-700">
                                <img alt="Portrait of John Doe" className="w-full h-full object-cover" src="/images/john_doe_avatar.jpg" />
                            </div>
                            <div>
                                <h4 className="text-slate-900 dark:text-white font-bold text-sm">John Doe</h4>
                                <p className="text-slate-500 text-xs">Product Designer @Acme</p>
                            </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            I write about the intersection of design, code, and human psychology. Building things for the web since 2010.
                        </p>
                    </div>
                </aside>
            </div>
        </div>
    );
}
