import { client } from "../../../lib/sanity.client"
import { Experience } from "../../../typings"
import { queryExperiences } from "../Querys"

export const fetchExperiences = async () => {
	// const res = await fetch(
	// 	`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
	// )

	// const data = await res.json();

	// const experiences: Experience[] = data.experiences;

	const experiences: Experience[] = await client.fetch(queryExperiences)

	return experiences
}
