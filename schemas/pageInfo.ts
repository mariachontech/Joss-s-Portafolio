import {defineField, defineType} from 'sanity'

export default defineType({
	name: "pageInfo",
	title: "Información de la Pagina",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
		}),
		defineField({
			name: "role",
			title: "Role",
			type: "string",
		}),
		defineField({
			name: "messageAnimated1",
			title: "Mensaje animado 1",
			type: "string",
		}),
		defineField({
			name: "messageAnimated2",
			title: "Mensaje animado 2",
			type: "string",
		}),
		defineField({
			name: "heroImage",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: "backgroundInformation",
			title: "BackgroundInformation",
			type: "string",
		}),
		defineField({
			name: "profilePic",
			title: "ProfilePic",
			type: "image",
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: "phoneNumber",
			title: "PhoneNumber",
			type: "string",
		}),
		defineField({
			name: "email",
			title: "Emaail",
			type: "string",
		}),
		defineField({
			name: "address",
			title: "Address",
			type: "string",
		}),
		defineField({
			name: "socials",
			title: "Socials",
			type: "array",
			of: [{ type: "reference", to: { type: "social" } }],
		}),
	],
})
