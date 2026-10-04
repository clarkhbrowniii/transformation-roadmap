# Transformation Roadmap

A self-contained HTML file for an interactive transformation dashboard.

## Team website architecture

The project now has five conventional static HTML pages with Bootstrap 5.3.8
pinned to jsDelivr (CSS and bundle with integrity checks). No build step or npm
installation is required. Open `index.html` directly or serve this directory with
`python -m http.server 8000` and visit http://localhost:8000.

| File | Purpose / owner |
| --- | --- |
| `index.html` | Home / About Us ? Site Editor |
| `roadmap.html` | Transformation Roadmap ? Member A |
| `raci.html` | Governance RACI ? Member B |
| `dashboard.html` | Team-site Executive QBR ? Member C |
| `repository.html` | Repository ? Site Editor |
| `_dashboard.html` | Completed standalone Executive QBR deliverable |

The original self-contained dashboard described above is now `_dashboard.html`.
Keep it independent: do not restyle it or attach shared CSS/JavaScript to it.

All team pages share the same semantic header, responsive Bootstrap navbar,
footer, and `assets/css/site.css`. Navigation is in the same tab, ordered Home,
RACI, Roadmap, Dashboard, Repository. Each page statically marks its own link
with `active` and `aria-current="page"`; the underline also identifies it.
Header/footer markup is repeated deliberately so pages work directly on GitHub
Pages without runtime includes. Shared changes must be applied to all five pages.

Members A, B, C and the Site Editor should build only within their marked main
content regions. The four regions are intentionally empty. Use Bootstrap grids,
components and utilities plus the shared stylesheet; coordinate design changes
with the Site Editor. Do not add inline style blocks or additional frameworks.
The Site Editor owns shared integration, `assets/css/site.css`, and
`assets/js/site.js`. The latter is an intentionally unloaded extension point;
Bootstrap currently supplies all required behavior.

The approved home copy, including identifiable team-information placeholders,
and existing image/document/design-reference assets are retained. Hero CTA
buttons and the old Home/Repository hash routing, DOM toggling, API runtime and
Repository-only CSS were removed. For later Repository migration, the original
markup and API code remain recoverable from `git show 3032949:index.html`.
Repository functionality is deferred until its owner develops that page.

CDN resources require internet access; the standalone artifact retains its
existing self-contained architecture.
