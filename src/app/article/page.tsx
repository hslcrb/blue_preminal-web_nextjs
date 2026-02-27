import Link from 'next/link';

export default function ArticlePage() {
    return (
        <div className="flex-grow">
            {/* Scroll Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 z-50 bg-slate-200 dark:bg-slate-800">
                <div className="h-full bg-primary w-[35%] rounded-r-full"></div>
            </div>

            <main>
                {/* Hero Section */}
                <section className="relative w-full h-[60vh] md:h-[75vh] flex items-end justify-center overflow-hidden">
                    <div
                        className="absolute inset-0 z-0 bg-cover bg-center"
                        style={{ backgroundImage: 'url("/images/minimalist_concrete.jpg")' }}
                    ></div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark via-background-dark/50 to-transparent z-10"></div>
                    <div className="relative z-20 w-full max-w-4xl px-6 pb-12 md:pb-20 text-center">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 border border-primary/20 rounded-full">
                                Design Philosophy
                            </span>
                            <span className="text-slate-300 text-sm flex items-center gap-1">
                                <span className="material-symbols-outlined text-[16px]">schedule</span> 5 min read
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-slate-900 dark:text-white leading-[1.1] mb-6 drop-shadow-sm">
                            The Future of Minimalist Design
                        </h1>
                        <div className="flex items-center justify-center gap-4">
                            <div className="flex items-center gap-3">
                                <img
                                    alt="Author"
                                    className="size-10 rounded-full object-cover border-2 border-white dark:border-slate-700"
                                    src="/images/alex_morgan_avatar.jpg"
                                />
                                <div className="text-left">
                                    <p className="text-sm font-medium text-slate-900 dark:text-white">Alex Morgan</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Oct 24, 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Container */}
                <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Floating Interaction Bar (Desktop) */}
                    <aside className="hidden lg:block lg:col-span-1 relative">
                        <div className="sticky top-32 flex flex-col gap-6 items-center">
                            <div className="group flex flex-col items-center gap-1 cursor-pointer">
                                <button className="size-10 flex items-center justify-center rounded-full bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-slate-400 group-hover:text-primary group-hover:border-primary transition-all shadow-sm">
                                    <span className="material-symbols-outlined">thumb_up</span>
                                </button>
                                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 group-hover:text-primary">2.4k</span>
                            </div>
                            <div className="group flex flex-col items-center gap-1 cursor-pointer">
                                <button className="size-10 flex items-center justify-center rounded-full bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-slate-400 group-hover:text-blue-400 group-hover:border-blue-400 transition-all shadow-sm">
                                    <span className="material-symbols-outlined">chat_bubble</span>
                                </button>
                                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 group-hover:text-blue-400">86</span>
                            </div>
                            <div className="w-8 h-[1px] bg-slate-200 dark:bg-slate-700 my-2"></div>
                            <button className="size-10 flex items-center justify-center rounded-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-white hover:bg-primary hover:border-primary transition-all shadow-sm">
                                <svg aria-hidden="true" className="size-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                </svg>
                            </button>
                            <button className="size-10 flex items-center justify-center rounded-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-500 transition-all shadow-sm">
                                <span className="material-symbols-outlined text-[20px]">bookmark</span>
                            </button>
                        </div>
                    </aside>

                    {/* Main Article Body */}
                    <article className="col-span-1 lg:col-span-8 prose prose-lg dark:prose-invert max-w-none">
                        <p className="lead text-xl md:text-2xl font-light text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                            Minimalism isn&apos;t just about white walls and empty spaces. It&apos;s a philosophy that asks us to reconsider our relationship with objects and the space we inhabit.
                        </p>
                        <p className="text-slate-800 dark:text-slate-200 leading-8 mb-6">
                            In the cacophony of the digital age, silence has become a luxury commodity. Our screens are cluttered with notifications, our homes filled with impulse purchases, and our minds crowded with anxiety. The resurgence of minimalist design is not merely an aesthetic trend; it is a desperate societal gasp for air. It represents a fundamental shift from <em>accumulation</em> to <em>curation</em>.
                        </p>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-4 scroll-mt-24" id="essence">
                            The Essence of Reduction
                        </h2>
                        <p className="text-slate-800 dark:text-slate-200 leading-8 mb-6">
                            True minimalism is often misunderstood as sterility. Critics point to cold, hospital-like interiors devoid of personality. However, the future of minimalism—often termed &quot;Warm Minimalism&quot;—combines the clean lines of modernism with organic textures and human warmth. It&apos;s about removing the distractions to let what truly matters shine through.
                        </p>
                        <blockquote className="border-l-4 border-primary pl-6 my-10 italic text-xl text-slate-700 dark:text-slate-300 font-serif">
                            &quot;Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.&quot; <br />
                            <span className="text-sm font-sans not-italic text-slate-500 mt-2 block">— Antoine de Saint-Exupéry</span>
                        </blockquote>
                        <p className="text-slate-800 dark:text-slate-200 leading-8 mb-6">
                            We are seeing a move away from the stark blacks and whites of the early 2010s. Instead, palettes are softening into creams, taupes, and muted earth tones. The materials are changing too. Polished chrome is being replaced by brushed brass; glossy acrylics by raw timber and stone.
                        </p>
                        <figure className="my-12 rounded-xl overflow-hidden shadow-2xl">
                            <img
                                alt="Minimalist living room interior"
                                className="w-full object-cover"
                                src="/images/minimalist_living_room.jpg"
                            />
                            <figcaption className="text-center text-sm text-slate-500 mt-3 italic">Warm minimalism integrates natural light and soft textures.</figcaption>
                        </figure>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-4 scroll-mt-24" id="digital-space">
                            Digital Decluttering
                        </h2>
                        <p className="text-slate-800 dark:text-slate-200 leading-8 mb-6">
                            The principles of physical minimalism are increasingly being applied to our digital environments. UX/UI designers are championing &quot;calm technology&quot;—interfaces that respect the user&apos;s attention rather than demanding it. This means fewer pop-ups, muted notification badges, and content-first layouts that allow for deep focus.
                        </p>
                        <ul className="list-disc list-inside space-y-2 mb-8 text-slate-800 dark:text-slate-200 marker:text-primary">
                            <li><strong>Negative Space:</strong> Utilizing whitespace to reduce cognitive load.</li>
                            <li><strong>Typography:</strong> Using legible, scalable fonts to create hierarchy without clutter.</li>
                            <li><strong>Intentionality:</strong> Every element on the screen must serve a distinct purpose.</li>
                        </ul>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-4 scroll-mt-24" id="conclusion">
                            The Path Forward
                        </h2>
                        <p className="text-slate-800 dark:text-slate-200 leading-8 mb-6">
                            As we move forward, the definition of luxury will continue to evolve. It will no longer be defined by excess, but by the quality of space, time, and attention we can afford ourselves. Minimalism provides the framework for this new luxury, offering a sanctuary of simplicity in a complex world.
                        </p>
                        <div className="mt-12 p-6 bg-slate-100 dark:bg-surface-dark/50 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center gap-6">
                            <img alt="Alex Morgan" className="size-20 rounded-full object-cover" src="/images/alex_morgan_avatar.jpg" />
                            <div className="flex-1 text-center sm:text-left">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Written by Alex Morgan</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Senior Design Strategist & Minimalist Enthusiast. Exploring the intersection of design, technology, and human psychology.</p>
                                <button className="mt-3 text-primary text-sm font-medium hover:underline">View Profile</button>
                            </div>
                            <button className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all font-medium text-sm">Follow</button>
                        </div>
                    </article>

                    {/* Sidebar (Right) */}
                    <aside className="col-span-1 lg:col-span-3 space-y-12">
                        <div className="sticky top-32">
                            <div className="p-6 rounded-xl bg-slate-50 dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">On this page</h3>
                                <nav className="flex flex-col gap-3">
                                    <a className="text-sm text-primary font-medium pl-2 border-l-2 border-primary transition-colors" href="#essence">The Essence of Reduction</a>
                                    <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 pl-2 border-l-2 border-transparent transition-colors" href="#digital-space">Digital Decluttering</a>
                                    <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 pl-2 border-l-2 border-transparent transition-colors" href="#conclusion">The Path Forward</a>
                                </nav>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Related Reads</h3>
                                <div className="flex flex-col gap-6">
                                    <Link href="#" className="group block">
                                        <div className="relative h-32 rounded-lg overflow-hidden mb-3">
                                            <img alt="Interior Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/minimalist_architecture.jpg" />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                                        </div>
                                        <h4 className="font-bold text-slate-900 dark:text-white leading-tight group-hover:text-primary transition-colors">Understanding Color Theory in Modern UI</h4>
                                        <p className="text-xs text-slate-500 mt-2">Sep 12 • 4 min read</p>
                                    </Link>
                                    <Link href="#" className="group block">
                                        <div className="relative h-32 rounded-lg overflow-hidden mb-3">
                                            <img alt="Tech Setup" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/data_viz.jpg" />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                                        </div>
                                        <h4 className="font-bold text-slate-900 dark:text-white leading-tight group-hover:text-primary transition-colors">10 Tools for the Digital Nomad</h4>
                                        <p className="text-xs text-slate-500 mt-2">Aug 08 • 6 min read</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}
