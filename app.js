import { ComponentRegistry, DOMRenderer, AioApp } from "@aio-ui/core";
import { HashRouter } from "@aio-ui/router";
import { AnimationsService } from "@aio-ui/animations";

/** Generated from preset.json — edit the preset, not this file. */
const PRESET = {
  "id": "kriya-nusantara",
  "presetSchema": 1,
  "engine": {
    "range": "^0.1.0",
    "resolved": "0.1.3"
  },
  "model": "gallery",
  "theme": "default",
  "site": {
    "name": "Kriya Nusantara",
    "locale": "id"
  },
  "pages": [
    {
      "id": "home",
      "route": "/",
      "content": {
        "section#hero": {
          "content": {
            "h1.title": {
              "attrs": {
                "animation": "typewriter",
                "animation-chain": "true"
              },
              "content": "Kriya Nusantara"
            },
            "div#masonry": {
              "builder": "masonry",
              "content": []
            },
            "div#carousel": {
              "builder": "carousel",
              "content": []
            }
          }
        },
        "section#about": {
          "content": "<p animation=\"fade-in\">Dibuat oleh pengrajin lokal.</p>"
        }
      }
    }
  ],
  "wizard": {
    "answers": {
      "webType": "gallery"
    },
    "generatedAt": "2026-11-10T00:00:00.000Z"
  }
};

const assets = {
  modules: {
  "@aio-ui/animations": () => import("https://cdn.jsdelivr.net/gh/sieteminerva/AIO-UI@v0.2.4/packages/modules/animations/dist/index.js"),
  "@aio-ui/base": () => import("https://cdn.jsdelivr.net/gh/sieteminerva/AIO-UI@v0.2.4/packages/base/dist/index.js"),
  "@aio-ui/carousel": () => import("https://cdn.jsdelivr.net/gh/sieteminerva/AIO-UI@v0.2.4/packages/components/carousel/dist/index.js"),
  "@aio-ui/core": () => import("https://cdn.jsdelivr.net/gh/sieteminerva/AIO-UI@v0.2.4/packages/core/dist/index.js"),
  "@aio-ui/masonry": () => import("https://cdn.jsdelivr.net/gh/sieteminerva/AIO-UI@v0.2.4/packages/components/masonry/dist/index.js"),
  "@aio-ui/router": () => import("https://cdn.jsdelivr.net/gh/sieteminerva/AIO-UI@v0.2.4/packages/modules/router/dist/index.js"),
  "@aio-ui/theme": () => import("https://cdn.jsdelivr.net/gh/sieteminerva/AIO-UI@v0.2.4/packages/modules/theme/dist/index.js"),
  "@aio-ui/theme-default": () => import("https://cdn.jsdelivr.net/gh/sieteminerva/AIO-UI@v0.2.4/packages/themes/default/dist/index.js")
  },
  // Stylesheets are linked in index.html; the registry reads the same specifiers
  // from the injected links, so this map stays empty on purpose.
  styles: {},
};

const registry = new ComponentRegistry(assets);
registry.register("carousel", () => ({ path: "@aio-ui/carousel" }));
registry.register("masonry", () => ({ path: "@aio-ui/masonry" }));

const pages = Object.fromEntries(PRESET.pages.map((page) => [page.id, page.content]));

/**
 * One page definition per route. A node's "builder" names the component the node IS —
 * it is not a dependency list, and a component mounted from an onCreated hook is
 * invisible to a content walk, so each page declares what it needs in "requires".
 * The page tree itself stays in source.pages; the definition owns the route contract.
 *
 * Plain JavaScript on purpose: this file is served to a browser as-is, so no "import type"
 * and no type annotation may appear here — both are syntax errors at runtime.
 */
const pageDefinitions = [
  {
    "route": "home",
    "requires": [
      "carousel",
      "masonry"
    ]
  }
];

/**
 * A node carrying a builder name is either the component itself or a host box.
 *
 * Default: the component OWNS the element. The renderer builds the root for
 * isRoot: true and moves the key's id/classes/attrs onto it, so a generated page
 * carries no empty wrapper div per block. This is the same shape AioApp emits for
 * a page block.
 *
 * isRoot: false asks for a host: the renderer creates the key's element and the
 * bridge below mounts the component inside it. An onCreated hook also keeps the
 * host, because the hook was handed that element and owns its mount.
 */
function mount(owner) {
  if (Array.isArray(owner)) { owner.forEach(mount); return; }
  if (!owner || typeof owner !== "object") return;
  if (typeof owner.builder === "string") {
    if (owner.isRoot !== false && typeof owner.onCreated !== "function") {
      owner.isRoot = true;
      mount(owner.content);
      return;
    }
    const name = owner.builder;
    const host = owner.onCreated;
    owner.onCreated = (el, render, build) => {
      if (typeof host === "function") host(el, render, build);
      const child = build(name, owner);
      if (child && child !== el && !el.contains(child)) el.appendChild(child);
    };
    return;
  }
  for (const value of Object.values(owner)) mount(value);
}
PRESET.pages.forEach((page) => mount(page.content));

const app = new AioApp({
  container: document.querySelector("#app"),
  defaultRoute: PRESET.pages[0]?.id,
  theme: PRESET.theme,
  source: { pages },
});

pageDefinitions.forEach((definition) => app.registerPage(definition));

app
  .registerModule(registry)
  .registerModule(HashRouter)
  .registerModule(DOMRenderer)
  .registerModule(AnimationsService);

/**
 * One preload pass before the first paint.
 *
 * The registry skips a component that is already loading, so two routes rendering
 * close together can build the second route before the first preload resolves — a
 * form then arrives with no modules. The preset already names every word a page
 * needs, so load that closed set once, in one call, before any route renders.
 */
const requiredComponents = [...new Set(pageDefinitions.flatMap((definition) => definition.requires))];
await registry.load(requiredComponents);

/**
 * Generated content links by path (/kontak) — that is how a page is named. The app
 * routes on the hash, so a path link would leave the document for a URL a static host
 * does not serve (measured: the router answered #blocked on a generated site). One
 * delegated listener keeps content authored the natural way and still lands on a route.
 */
document.addEventListener("click", (event) => {
  const target = event.target;
  const anchor = target instanceof Element ? target.closest("a[href]") : null;
  if (!anchor) return;
  const href = anchor.getAttribute("href");
  if (!href || !href.startsWith("/") || href.startsWith("//")) return;
  event.preventDefault();
  location.hash = href;
});

await app.render();
