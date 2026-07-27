const noteModules = import.meta.glob("./*.mdx", { eager: true });

function pathToSlug(path) {
  return path.replace(/^\.\//, "").replace(/\.mdx$/, "");
}

const notesBySlug = Object.fromEntries(
  Object.entries(noteModules).map(([path, module]) => {
    const slug = module.frontmatter.slug ?? pathToSlug(path);
    return [slug, { ...module.frontmatter, slug, Body: module.default }];
  }),
);

export function getAllNotes() {
  return Object.values(notesBySlug).sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );
}

export function getNoteBySlug(slug) {
  return notesBySlug[slug];
}

export function formatNoteDate(dateString, month = "short") {
  return new Intl.DateTimeFormat("en-US", {
    month,
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateString));
}
