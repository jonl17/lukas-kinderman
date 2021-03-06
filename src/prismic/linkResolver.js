export const linkResolver = doc => {
  // URL for a work type
  if (doc.type === "Work") {
    return `/work/${doc.uid}`
  }
  // URL for a page type
  if (doc.type === "page") {
    return `/${doc.uid}`
  }
  // Backup for all other types
  return "/"
}
