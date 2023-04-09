import { client } from "../../../lib/sanity.client"
import { Project } from "../../../typings"
import { queryProjects } from "../Querys"

export const fetchProjects = async () => {
	// const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`)

	// const data = await res.json();

	// const projects: Project[] = data.projects;

	const projects: Project[] = await client.fetch(queryProjects)

	return projects
}
