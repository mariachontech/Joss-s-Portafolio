import type { NextApiRequest, NextApiResponse } from "next"

import { groq } from "next-sanity"
import { client } from "../../../../lib/sanity.client"
import { Project } from "../../../../typings"
import { queryProjects } from "@/utils/Querys"

const query = groq`
*[_type=='project']{
    ...,
    technologies[]->
}`

type Data = {
	projects: Project[]
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const projects: Project[] = await client.fetch(queryProjects)

	return res.status(200).json({ projects })
}
