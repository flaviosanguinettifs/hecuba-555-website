import { SectionNav } from '@/components/SectionNav';
import { siteContent } from '@/data/siteContent';

export default function Home() {
  return (
    <>
      <SectionNav />
      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.12),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(217,119,6,0.16),transparent_38%)]" />
          <div className="section-shell relative flex min-h-[80vh] flex-col justify-center">
            <p className="mb-5 uppercase tracking-[0.35em] text-amber-200/80">{siteContent.hero.tagline}</p>
            <h1 className="font-display text-5xl uppercase leading-tight text-white drop-shadow-2xl md:text-8xl">
              {siteContent.hero.title}
            </h1>
            <p className="mt-4 text-xl tracking-[0.18em] text-amber-100 md:text-2xl">{siteContent.hero.subtitle}</p>
            <p className="mt-6 text-lg text-zinc-300">{siteContent.hero.originLine}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#videos"
                className="rounded-lg border border-amber-200/50 bg-amber-300/10 px-6 py-3 text-xs uppercase tracking-[0.2em] text-amber-100 transition hover:bg-amber-200/20"
              >
                Watch Live Videos
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-zinc-300/30 px-6 py-3 text-xs uppercase tracking-[0.2em] text-zinc-100 transition hover:border-amber-200/70 hover:text-amber-100"
              >
                Booking Contact
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section-shell">
          <h2 className="section-title">About</h2>
          <div className="glass-panel mt-10 space-y-6 text-lg leading-relaxed text-zinc-200">
            {siteContent.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section id="videos" className="section-shell">
          <h2 className="section-title">Videos</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {siteContent.videos.map((video) => (
              <article key={video.url} className="glass-panel p-5">
                <h3 className="mb-4 font-display text-xl text-amber-100">{video.title}</h3>
                <div className="aspect-video overflow-hidden rounded-xl border border-amber-100/20">
                  <iframe
                    src={video.url}
                    title={video.title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell">
          <h2 className="section-title">Contact / Booking</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="glass-panel space-y-3 text-zinc-200">
              <p className="text-xl font-semibold text-amber-100">{siteContent.contact.name}</p>
              <p>{siteContent.contact.title}</p>
              <p>{siteContent.contact.membership}</p>
              <p>{siteContent.contact.city1}</p>
              <p>{siteContent.contact.city2}</p>
              <p className="pt-4">Phone: {siteContent.contact.phone}</p>
              <p>
                Email:{' '}
                <a className="text-amber-200 hover:text-amber-100" href={`mailto:${siteContent.contact.email}`}>
                  {siteContent.contact.email}
                </a>
              </p>
              <p>
                YouTube:{' '}
                <a
                  className="text-amber-200 hover:text-amber-100"
                  href={siteContent.contact.youtube}
                  target="_blank"
                  rel="noreferrer"
                >
                  {siteContent.contact.youtube.replace('https://', '')}
                </a>
              </p>
              <p>
                Linktree:{' '}
                <a
                  className="text-amber-200 hover:text-amber-100"
                  href={siteContent.contact.linktree}
                  target="_blank"
                  rel="noreferrer"
                >
                  {siteContent.contact.linktree.replace('https://', '')}
                </a>
              </p>
            </div>

            <form className="glass-panel space-y-4" action="#" method="post">
              <label className="block">
                <span className="mb-2 block text-sm uppercase tracking-widest text-zinc-300">Name</span>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-amber-200/20 bg-zinc-950/70 px-4 py-3 text-zinc-100 outline-none transition focus:border-amber-200"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm uppercase tracking-widest text-zinc-300">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-amber-200/20 bg-zinc-950/70 px-4 py-3 text-zinc-100 outline-none transition focus:border-amber-200"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm uppercase tracking-widest text-zinc-300">Message</span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-lg border border-amber-200/20 bg-zinc-950/70 px-4 py-3 text-zinc-100 outline-none transition focus:border-amber-200"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-lg border border-amber-200/50 bg-amber-300/10 px-4 py-3 text-sm uppercase tracking-[0.2em] text-amber-100 transition hover:bg-amber-200/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className="border-t border-amber-100/10">
        <div className="section-shell flex flex-col items-center justify-between gap-4 py-8 text-sm text-zinc-400 md:flex-row">
          <p>© {new Date().getFullYear()} Hecuba 555. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 uppercase tracking-widest text-zinc-300">
            {siteContent.socialPlaceholders.map((social) => (
              <a key={social.label} href={social.href} className="transition hover:text-amber-200">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
