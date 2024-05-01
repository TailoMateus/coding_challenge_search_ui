export const normalizeString = (text: string) => {
  return text
    .trim()
    .toLowerCase()
    .normalize('NFD')
}