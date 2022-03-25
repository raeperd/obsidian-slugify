export default function slugify(source: string): string {
	return source.toLowerCase()
		.replace(/\s+/g, "-")
		.replace(/-$/, "")
}
