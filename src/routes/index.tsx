import { createFileRoute } from "@tanstack/react-router";

import heroImage from "../assets/coffee-hero.jpg.asset.json";
import blend1Image from "../assets/coffee-blend-1.jpg.asset.json";
import blend2Image from "../assets/coffee-blend-2.jpg.asset.json";
import blend3Image from "../assets/coffee-blend-3.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Obsidian Bean — Artisan Coffee Roasters" },
      {
        name: "description",
        content:
          "Small-batch coffee beans sourced directly from independent farmers in Ethiopia and Colombia. Roasted daily in our glass-walled studio.",
      },
      { property: "og:title", content: "Obsidian Bean — Artisan Coffee Roasters" },
      {
        property: "og:description",
        content:
          "Small-batch coffee beans sourced directly from independent farmers in Ethiopia and Colombia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-cream font-sans text-forest">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <span className="font-serif text-2xl italic font-semibold tracking-tight">
          Obsidian Bean
        </span>
        <div className="hidden md:flex gap-12 text-sm uppercase tracking-widest font-medium">
          <a href="#menu" className="hover:text-clay transition-colors">
            Menu
          </a>
          <a href="#origins" className="hover:text-clay transition-colors">
            Origins
          </a>
          <a href="#visit" className="hover:text-clay transition-colors">
            Visit
          </a>
        </div>
        <button className="border border-forest/20 px-6 py-2 text-sm uppercase tracking-widest hover:bg-forest hover:text-cream transition-all duration-300">
          Order Online
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative px-8 pt-12 pb-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 z-10">
          <h1 className="font-serif text-7xl md:text-8xl leading-[0.9] mb-8">
            The art of <span className="italic">slow</span> roasting.
          </h1>
          <p className="text-lg text-forest/80 max-w-sm mb-10 leading-relaxed">
            Small-batch beans sourced directly from independent farmers in Ethiopia and
            Colombia. Roasted daily in our glass-walled studio.
          </p>
          <div className="flex gap-6">
            <div className="h-px w-12 bg-clay self-center"></div>
            <span className="uppercase tracking-[0.2em] text-xs font-semibold">
              Discover our craft
            </span>
          </div>
        </div>

        <div className="md:col-span-7 relative">
          <img
            src={heroImage.url}
            alt="A warm overhead shot of a ceramic cup of coffee on a textured stone table"
            width={1200}
            height={1600}
            className="w-full aspect-[4/5] object-cover rounded-sm"
            loading="eager"
          />
          <div className="absolute -bottom-8 -left-8 bg-clay p-8 hidden md:block">
            <p className="text-cream text-sm leading-relaxed max-w-[200px]">
              "The best light-roast espresso in the city, served with quiet intention."
            </p>
            <span className="text-cream/60 text-[10px] uppercase tracking-tighter mt-4 block font-medium">
              — The Daily Brew
            </span>
          </div>
        </div>
      </header>

      {/* Featured Blends */}
      <section id="menu" className="bg-sand py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-20">
            <h2 className="font-serif text-5xl">Current Selection</h2>
            <a
              href="#"
              className="border-b border-forest text-sm pb-1 mb-2 hover:text-clay hover:border-clay transition-colors uppercase tracking-widest"
            >
              View All
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="group cursor-pointer">
              <img
                src={blend1Image.url}
                alt="Solaris Single Origin specialty coffee beans packaging"
                width={600}
                height={800}
                loading="lazy"
                className="w-full aspect-[3/4] object-cover mb-6 transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <h3 className="font-serif text-2xl mb-2 italic">Solaris Single Origin</h3>
              <p className="text-xs uppercase tracking-widest text-forest/50 mb-4">
                Notes of jasmine & lemon curd
              </p>
              <span className="text-sm font-medium">$24.00</span>
            </div>

            <div className="group cursor-pointer">
              <img
                src={blend2Image.url}
                alt="Midnight Moss heirloom coffee packaging with deep green label"
                width={600}
                height={800}
                loading="lazy"
                className="w-full aspect-[3/4] object-cover mb-6 transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <h3 className="font-serif text-2xl mb-2 italic">Midnight Moss</h3>
              <p className="text-xs uppercase tracking-widest text-forest/50 mb-4">
                Notes of dark chocolate & tobacco
              </p>
              <span className="text-sm font-medium">$26.00</span>
            </div>

            <div className="group cursor-pointer">
              <img
                src={blend3Image.url}
                alt="Amber Harvest seasonal roast coffee bag in white and clay colors"
                width={600}
                height={800}
                loading="lazy"
                className="w-full aspect-[3/4] object-cover mb-6 transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <h3 className="font-serif text-2xl mb-2 italic">Amber Harvest</h3>
              <p className="text-xs uppercase tracking-widest text-forest/50 mb-4">
                Notes of honey & toasted pecan
              </p>
              <span className="text-sm font-medium">$22.00</span>
            </div>
          </div>
        </div>
      </section>

      {/* Origins / Story */}
      <section id="origins" className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-5xl mb-8">From crop to cup.</h2>
            <div className="space-y-6 text-forest/80 leading-relaxed max-w-lg">
              <p>
                We work directly with smallholder farms in Ethiopia&apos;s Yirgacheffe region and
                Colombia&apos;s Huila mountains. Every lot is hand-selected for its clarity,
                sweetness, and sense of place.
              </p>
              <p>
                Our roasting style is intentionally gentle — we want you to taste the farmer&apos;s
                work, the soil, and the season in every cup.
              </p>
            </div>
            <div className="mt-10 flex gap-6">
              <div className="h-px w-12 bg-clay self-center"></div>
              <span className="uppercase tracking-[0.2em] text-xs font-semibold">
                Traceable & fair
              </span>
            </div>
          </div>
          <div className="bg-sand aspect-[4/3] rounded-sm flex items-center justify-center">
            <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-forest/30">
              Roasting Studio
            </span>
          </div>
        </div>
      </section>

      {/* Footer / Visit */}
      <footer id="visit" className="py-20 px-8 border-t border-forest/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
          <div className="col-span-2">
            <h4 className="font-serif text-4xl italic mb-6">Visit the Studio</h4>
            <p className="text-forest/60 max-w-xs leading-relaxed">
              124 Artisan Alley, River North
              <br />
              Portland, Oregon 97209
            </p>
          </div>
          <div>
            <h5 className="uppercase tracking-widest text-[10px] font-bold mb-6">Hours</h5>
            <p className="text-sm text-forest/80 mb-2">Mon — Fri: 7am - 4pm</p>
            <p className="text-sm text-forest/80">Sat — Sun: 8am - 6pm</p>
          </div>
          <div>
            <h5 className="uppercase tracking-widest text-[10px] font-bold mb-6">Contact</h5>
            <p className="text-sm text-forest/80 mb-2">hello@obsidianbean.com</p>
            <p className="text-sm text-forest/80">@obsidianbean</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
