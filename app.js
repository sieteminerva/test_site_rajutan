import { ComponentRegistry, DOMRenderer, AioApp } from "@aio-ui/core";
import { HashRouter } from "@aio-ui/router";
import { AnimationsService } from "@aio-ui/animations";

/** Generated from preset.json — edit the preset, not this file. */
const PRESET = {
  "id": "kriya-b57",
  "presetSchema": 1,
  "engine": {
    "range": "^0.2.4",
    "resolved": "0.2.4"
  },
  "model": "profile",
  "theme": "default",
  "site": {
    "name": "Kriya B57",
    "locale": "id",
    "tagline": "Ruang karya perajin lokal yang menghadirkan kehangatan buatan tangan.",
    "seo": {
      "title": "Kriya B57",
      "description": "Kriya B57 adalah ruang karya perajin lokal yang menampilkan kerajinan buatan tangan, layanan pesanan khusus, dan cerita di balik setiap karya.",
      "keywords": [
        "kriya",
        "perajin lokal",
        "kerajinan tangan",
        "kriya b57",
        "produk handmade"
      ]
    }
  },
  "pages": [
    {
      "id": "home",
      "route": "/",
      "content": {
        "main": {
          "content": [
            {
              "section#hero": {
                "content": [
                  {
                    "div.hero-inner": {
                      "content": [
                        {
                          "h1.title": {
                            "content": "Kriya B57",
                            "attrs": {
                              "animation": "fade-in"
                            }
                          }
                        },
                        {
                          "p.lead": {
                            "content": "Ruang karya perajin lokal. Setiap benda dibuat dengan tangan, dengan waktu, dan dengan cerita yang layak untuk sampai ke rumah Anda."
                          }
                        },
                        {
                          "div.hero-actions": {
                            "content": [
                              {
                                "a.button": {
                                  "content": "Lihat Karya",
                                  "attrs": {
                                    "href": "/portofolio"
                                  }
                                }
                              },
                              {
                                "a.button.secondary": {
                                  "content": "Hubungi Kami",
                                  "attrs": {
                                    "href": "/kontak"
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "section#tentang-singkat": {
                "content": [
                  {
                    "h2": {
                      "content": "Tentang Kami"
                    }
                  },
                  {
                    "p": {
                      "content": "Kriya B57 lahir dari keinginan sederhana: memberi ruang bagi perajin lokal untuk memperlihatkan hasil kerjanya. Kami percaya bahwa benda buatan tangan membawa kehangatan yang tidak bisa ditiru mesin."
                    }
                  },
                  {
                    "p": {
                      "content": "Dari proses memilih bahan hingga sentuhan akhir, semua dikerjakan dengan sabar oleh tangan-tangan yang sudah terbiasa."
                    }
                  }
                ]
              }
            },
            {
              "section#layanan-singkat": {
                "content": [
                  {
                    "h2": {
                      "content": "Yang Kami Kerjakan"
                    }
                  },
                  {
                    "div#layanan-grid": {
                      "content": [
                        {
                          "div.card": {
                            "content": [
                              {
                                "h3": {
                                  "content": "Kerajinan Tangan"
                                }
                              },
                              {
                                "p": {
                                  "content": "Beragam benda fungsional dan dekoratif yang dibuat satu per satu."
                                }
                              }
                            ]
                          }
                        },
                        {
                          "div.card": {
                            "content": [
                              {
                                "h3": {
                                  "content": "Pesanan Khusus"
                                }
                              },
                              {
                                "p": {
                                  "content": "Ingin bentuk atau ukuran tertentu? Kami terbuka untuk diskusi."
                                }
                              }
                            ]
                          }
                        },
                        {
                          "div.card": {
                            "content": [
                              {
                                "h3": {
                                  "content": "Kolaborasi"
                                }
                              },
                              {
                                "p": {
                                  "content": "Bekerja sama dengan komunitas dan usaha lokal untuk tumbuh bersama."
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "section#ajakan": {
                "content": [
                  {
                    "h2": {
                      "content": "Mari Berbincang"
                    }
                  },
                  {
                    "p": {
                      "content": "Punya pertanyaan tentang karya kami atau ingin memesan sesuatu? Kirimkan pesan, kami akan membalas secepatnya."
                    }
                  },
                  {
                    "a.button": {
                      "content": "Kirim Pesan",
                      "attrs": {
                        "href": "/kontak"
                      }
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    },
    {
      "id": "layanan",
      "route": "/layanan",
      "content": {
        "main": {
          "content": [
            {
              "section#layanan": {
                "content": [
                  {
                    "h1": {
                      "content": "Layanan Kami"
                    }
                  },
                  {
                    "p.lead": {
                      "content": "Kami menawarkan beberapa cara untuk bekerja bersama Kriya B57."
                    }
                  },
                  {
                    "div#layanan-list": {
                      "content": [
                        {
                          "article.layanan-item": {
                            "content": [
                              {
                                "h2": {
                                  "content": "Kerajinan Tangan"
                                }
                              },
                              {
                                "p": {
                                  "content": "Kami membuat benda-benda kerajinan dari bahan pilihan. Setiap produk dikerjakan dengan tangan, sehingga tiap unit memiliki karakter tersendiri."
                                }
                              }
                            ]
                          }
                        },
                        {
                          "article.layanan-item": {
                            "content": [
                              {
                                "h2": {
                                  "content": "Pesanan Khusus"
                                }
                              },
                              {
                                "p": {
                                  "content": "Butuh hadiah, suvenir, atau benda dengan ukuran tertentu? Kami menerima pesanan khusus dan akan mendiskusikan bahan, waktu, serta biaya bersama Anda."
                                }
                              }
                            ]
                          }
                        },
                        {
                          "article.layanan-item": {
                            "content": [
                              {
                                "h2": {
                                  "content": "Workshop dan Kolaborasi"
                                }
                              },
                              {
                                "p": {
                                  "content": "Kami membuka ruang untuk berbagi keterampilan melalui workshop sederhana maupun kolaborasi dengan komunitas dan usaha lokal."
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    },
    {
      "id": "portofolio",
      "route": "/portofolio",
      "content": {
        "main": {
          "content": [
            {
              "section#portofolio": {
                "content": [
                  {
                    "h1": {
                      "content": "Portofolio"
                    }
                  },
                  {
                    "p.lead": {
                      "content": "Sebagian karya yang pernah kami kerjakan. Setiap benda punya cerita dan prosesnya sendiri."
                    }
                  },
                  {
                    "div#karya-grid": {
                      "content": [
                        {
                          "article.karya-item": {
                            "content": [
                              {
                                "h2": {
                                  "content": "Anyaman Serat Alami"
                                }
                              },
                              {
                                "p": {
                                  "content": "Wadah serbaguna dari serat alami, dianyam dengan pola sederhana yang kuat dan ringan."
                                }
                              }
                            ]
                          }
                        },
                        {
                          "article.karya-item": {
                            "content": [
                              {
                                "h2": {
                                  "content": "Keramik Tanah Liat"
                                }
                              },
                              {
                                "p": {
                                  "content": "Perangkat makan dari tanah liat lokal, dibentuk dan dibakar dengan teknik tradisional."
                                }
                              }
                            ]
                          }
                        },
                        {
                          "article.karya-item": {
                            "content": [
                              {
                                "h2": {
                                  "content": "Kayu Ukir"
                                }
                              },
                              {
                                "p": {
                                  "content": "Potongan kayu dengan ukiran halus, cocok untuk dekorasi ruang maupun hadiah."
                                }
                              }
                            ]
                          }
                        },
                        {
                          "article.karya-item": {
                            "content": [
                              {
                                "h2": {
                                  "content": "Tekstil Tenun"
                                }
                              },
                              {
                                "p": {
                                  "content": "Kain tenun dengan warna alami, dibuat dengan alat tenun sederhana."
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    },
    {
      "id": "kontak",
      "route": "/kontak",
      "content": {
        "main": {
          "content": [
            {
              "section#kontak": {
                "content": [
                  {
                    "h1": {
                      "content": "Hubungi Kami"
                    }
                  },
                  {
                    "p.lead": {
                      "content": "Isi formulir di bawah ini atau kirim email ke uji@example.com. Kami akan membalas secepatnya."
                    }
                  },
                  {
                    "div#contact-form": {
                      "builder": "form",
                      "content": {
                        "config": {
                          "id": "contact",
                          "multistep": false
                        },
                        "schema": [
                          {
                            "id": "person",
                            "title": "Data Diri",
                            "group": [
                              {
                                "type": "text",
                                "id": "name",
                                "label": "Nama",
                                "placeholder": "Nama lengkap"
                              },
                              {
                                "type": "email",
                                "id": "email",
                                "label": "Email",
                                "placeholder": "alamat@email.com"
                              },
                              {
                                "type": "tel",
                                "id": "phone",
                                "label": "Nomor Telepon",
                                "placeholder": "Opsional"
                              },
                              {
                                "type": "textarea",
                                "id": "message",
                                "label": "Pesan",
                                "placeholder": "Tuliskan pertanyaan atau kebutuhan Anda"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    }
  ],
  "wizard": {
    "answers": {
      "confirmation": true,
      "web-type": "profile",
      "web-name": "Kriya B57",
      "contact-email": "uji@example.com",
      "web-reason": "Ruang karya perajin lokal"
    },
    "generatedAt": "2026-11-22T22:36:11.767Z"
  }
};

const assets = {
  modules: {
  "@aio-ui/animations": () => import("https://cdn.jsdelivr.net/gh/sieteminerva/AIO-UI@v0.2.4/packages/modules/animations/dist/index.js"),
  "@aio-ui/base": () => import("https://cdn.jsdelivr.net/gh/sieteminerva/AIO-UI@v0.2.4/packages/base/dist/index.js"),
  "@aio-ui/core": () => import("https://cdn.jsdelivr.net/gh/sieteminerva/AIO-UI@v0.2.4/packages/core/dist/index.js"),
  "@aio-ui/form": () => import("https://cdn.jsdelivr.net/gh/sieteminerva/AIO-UI@v0.2.4/packages/components/form/dist/index.js"),
  "@aio-ui/form/validation-adapter": () => import("https://cdn.jsdelivr.net/gh/sieteminerva/AIO-UI@v0.2.4/packages/components/form/dist/adapters/Validation.js"),
  "@aio-ui/input": () => import("https://cdn.jsdelivr.net/gh/sieteminerva/AIO-UI@v0.2.4/packages/components/input/dist/index.js"),
  "@aio-ui/message": () => import("https://cdn.jsdelivr.net/gh/sieteminerva/AIO-UI@v0.2.4/packages/components/message/dist/index.js"),
  "@aio-ui/router": () => import("https://cdn.jsdelivr.net/gh/sieteminerva/AIO-UI@v0.2.4/packages/modules/router/dist/index.js"),
  "@aio-ui/theme": () => import("https://cdn.jsdelivr.net/gh/sieteminerva/AIO-UI@v0.2.4/packages/modules/theme/dist/index.js"),
  "@aio-ui/theme-default": () => import("https://cdn.jsdelivr.net/gh/sieteminerva/AIO-UI@v0.2.4/packages/themes/default/dist/index.js")
  },
  // Stylesheets are linked in index.html; the registry reads the same specifiers
  // from the injected links, so this map stays empty on purpose.
  styles: {},
};

const registry = new ComponentRegistry(assets);
registry.register("form", (data) => { const payload = data?.content ?? data; return { path: "@aio-ui/form", export: "FormBuilder", config: payload?.config, schema: payload?.schema ?? payload, modules: [{ id: "input", path: "@aio-ui/form", export: "inputFormAdapter" }, { id: "message", path: "@aio-ui/message", export: "messageFormAdapter" }, { id: "validation", path: "@aio-ui/form/validation-adapter", export: "validationFormAdapter" }] }; });
registry.register("message", () => ({ path: "@aio-ui/message" }));

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
    "requires": []
  },
  {
    "route": "layanan",
    "requires": []
  },
  {
    "route": "portofolio",
    "requires": []
  },
  {
    "route": "kontak",
    "requires": [
      "form"
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
