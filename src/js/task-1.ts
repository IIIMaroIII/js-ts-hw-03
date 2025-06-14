export default function slugify(title: string): string {
  return title.toLowerCase().split(' ').join('-')
}
