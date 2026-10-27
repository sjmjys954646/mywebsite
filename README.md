# Academic Website

A personal academic website built with **React 18** and **Vite 5**, using hash-based routing and GitHub Pages.

## Project Structure

```text
.
├── public/
│   ├── YunSuLee_CV.pdf              # Downloadable CV
│   └── assets/
│       ├── profile.png              # About profile photo
│       └── projects/
│           └── <slug>/              # Images for each work item
├── src/
│   ├── main.jsx                     # React entry point
│   ├── App.jsx                      # Hash routing and page selection
│   ├── pages/
│   │   ├── Home.jsx                 # About, Work, Background
│   │   └── WorkDetail.jsx           # Research and team project details
│   ├── components/
│   │   ├── Header.jsx               # Site navigation
│   │   ├── WorkCard.jsx             # Item in the Work list
│   │   ├── WorkVisual.jsx           # Thumbnail / fallback visual
│   │   └── ImageCarousel.jsx        # Detail-page image gallery
│   ├── data/
│   │   └── work.js                  # Project metadata and content
│   └── styles.css                   # Site styling
├── vite.config.js                   # Vite configuration
└── .github/workflows/deploy.yml     # GitHub Pages workflow
```

## How It Works

The website has a single home page with **About**, **Work**, and **Background**, plus individual Work detail pages.

- `src/data/work.js` exports the `works` array and `getWork(slug)`.
- `Home.jsx` displays the Work list using `WorkCard.jsx`.
- `App.jsx` handles `#/work/<slug>` routes without React Router.
- `WorkDetail.jsx` selects the detail layout using `kind`:
  - `research` — title, metadata, image gallery, links, and abstract.
  - `team` — title, metadata, image gallery, links, About, My Contribution, and Built With.
  - `current` — limited information for work under anonymous review.

## Content and Images

Edit **`src/data/work.js`** to update titles, authors, venues, project descriptions, galleries, and links.

| Field | Purpose |
| --- | --- |
| `slug`, `kind`, `type` | Route and project type |
| `title`, `authors`, `venue` | Work metadata |
| `detailMeta` | Detail-page metadata |
| `images` | Thumbnail and gallery images |
| `links` | Optional Paper, Video, Play, and other links |
| `abstract` | Research project description |
| `about`, `roleDescription`, `contributions`, `tech` | Team project content |
| `projectSections` | Optional additional team-project sections |

Images are stored at `public/assets/projects/<slug>/` and referenced in `work.js`:

```js
images: [
  { src: './assets/projects/circle-game/0.png', alt: 'Circle Game teaser' },
  { src: './assets/projects/circle-game/1.png', alt: 'Circle Game screenshot' },
],
```

The **first image** is used as the Work thumbnail. All images appear in the detail-page gallery. If there is only one image, gallery navigation is hidden. Optional links appear only when they have an `href`.

The profile photo is stored at `public/assets/profile.png`.
