export function formatArticleDate(date: string) {
  return new Intl.DateTimeFormat("de-AT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}
