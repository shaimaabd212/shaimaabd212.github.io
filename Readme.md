# Shaima Abdulsalam — Portfolio

My personal portfolio website, built by hand with HTML, CSS, and a little JavaScript while taking Introduction to Web Development (63180) at Libyan International University.

**Live site:** https://shaimaabd212.github.io/

## Pages

| Page | What's on it |
|---|---|
| `index.html` | Introduction, my skills bookshelf, highlights, and featured projects |
| `about.html` | Education, experience, certificates, and interests |
| `posts.html` | All my projects, with filters by type |
| `journey.html` | Timeline of milestones and photos from Jordan and robotics competitions |
| `contact.html` | How to reach me |

Arabic versions of the pages end in `-ar.html`.

## Design

The color palette comes from a photo of me in a library: the pale blue of my shirt, the brown of my coat, and the wood of the bookshelves, together with my original navy and orange. Skills are shown as book spines on a shelf, and every color from my palette appears on it.

Features:

- Light and dark mode, with the choice remembered between visits
- Project filters (computer vision, data science, apps and web)
- Click any project image, certificate, or photo to see it full size
- Responsive layout with a folding menu on phones
- Semantic HTML5 (`header`, `nav`, `main`, `section`, `article`, `figure`, `footer`)
- Respects visitors who turn off animations

## Folder structure

```
├── index.html, about.html, posts.html, journey.html, contact.html
├── *-ar.html          Arabic pages
├── css/style.css      All styles
├── js/main.js         Dark mode, menu, filters, image viewer
├── Images/            Photos, project images, and certificates
└── docs/concepts.txt  Course notes
```

## How to run it

No installation is needed. Download or clone the repository and open `index.html` in any browser:

```bash
git clone https://github.com/shaimaabd212/shaimaabd212.github.io.git
```

## Credits

Fonts: [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque), [Open Sans](https://fonts.google.com/specimen/Open+Sans), and [Noto Kufi Arabic](https://fonts.google.com/noto/specimen/Noto+Kufi+Arabic) from Google Fonts.