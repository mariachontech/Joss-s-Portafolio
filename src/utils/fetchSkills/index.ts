import { client } from "../../../lib/sanity.client"
import { Skill } from "../../../typings"
import { querySkills } from "../Querys"

export const fetchSkills = async () => {
	// const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)

	// const data = await res.json();

	// const skills: Skill[] = data.skills;

	const skills: Skill[] = await client.fetch(querySkills)

	return skills
}
