import {defineField, defineType} from 'sanity'

export default defineType({
	name: "skill",
	title: "Habilidades",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Titulo",
			description: "Nombre de la habilidad",
			type: "string",
		}),
		defineField({
			name: "progress",
			title: "Progress",
			description: "Progress of skill from 0 to 100",
			type: "number",
			validation: (Rule) => Rule.min(0).max(100),
		}),
		defineField({
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
		}),
	],
})
