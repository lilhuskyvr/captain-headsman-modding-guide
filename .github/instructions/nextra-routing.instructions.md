---
applyTo: '**'
---

# IMPORTANT — Follow user instructions exactly

**Do not make independent technology choices.** Follow what the user explicitly says:

- If the user says use **`.tsx`**, use `.tsx` — do not switch to `.mdx` or any other format.
- If the user says use **`.mdx`**, use `.mdx` — do not switch to `.tsx`.
- Do not "be smart" and substitute a different file type, framework feature, or approach unless the user asks you to.
- When in doubt, ask. Do not assume.

---

# Nextra v4 — Routing & File Structure

This project uses **Nextra v4** with **Next.js App Router**. Nextra v4 supports two approaches for content pages. This project uses the **`app` directory with `page.mdx` files**.

---

## How URLs map to files

Every URL segment becomes a folder inside `app/`. The page content lives in a `page.mdx` file inside that folder.

| URL | File |
|---|---|
| `/` | `app/page.mdx` |
| `/guides/mod-characters/` | `app/guides/mod-characters/page.mdx` |
| `/reference/nodes/` | `app/reference/nodes/page.mdx` |

This is identical to how `.tsx` pages work in Next.js App Router — just with `.mdx` instead of `.tsx`.

---

## File structure

```
app/
  layout.tsx                        ← root layout (already exists)
  page.mdx                          ← renders at /
  _meta.js                          ← sidebar order/titles for top-level pages
  guides/
    _meta.js                        ← sidebar order/titles for /guides/* pages
    mod-characters/
      page.mdx                      ← renders at /guides/mod-characters/
    writing-exchanges/
      page.mdx                      ← renders at /guides/writing-exchanges/
  reference/
    _meta.js
    nodes/
      page.mdx                      ← renders at /reference/nodes/
```

---

## `_meta.js` — sidebar control

Every folder that contains pages should have a `_meta.js` file. It controls the **order and display titles** of pages in the sidebar.

```js
// app/guides/_meta.js
export default {
  'mod-characters': 'Modding Characters',
  'writing-exchanges': 'Writing Exchanges',
}
```

Without a `_meta.js`, pages still appear in the sidebar but are sorted alphabetically and titled by their filename.

### Separators

```js
export default {
  '---': {
    type: 'separator',
    title: 'Advanced',
  },
  'custom-nodes': 'Custom Nodes',
}
```

### Hiding a page from the sidebar

```js
export default {
  'internal-page': {
    display: 'hidden',
  },
}
```

---

## `page.mdx` — page content

Each `page.mdx` is a standard MDX file. Optionally add frontmatter for the title:

```mdx
---
title: Modding Characters
description: How to create and patch character definitions.
---

# Modding Characters

Content goes here.
```

If no frontmatter `title` is set, Nextra derives the sidebar title from the `_meta.js` entry or the folder name.

---

## Adding a new page — checklist

To add a page at `/guides/mod-characters/`:

1. Create `app/guides/mod-characters/page.mdx` with your content.
2. Add or update `app/guides/_meta.js` to include `'mod-characters': 'Modding Characters'` at the correct position.
3. If `app/guides/` is new, also add it to the top-level `app/_meta.js`.

---

## Alternative: `content` directory (not used in this project)

Nextra v4 also supports a flat `content/` directory alongside a single `app/[[...mdxPath]]/page.jsx` catch-all. In that approach `content/guides/mod-characters.mdx` renders at `/guides/mod-characters/`. **This project does not use this approach.** Stick to `page.mdx` files inside `app/`.
