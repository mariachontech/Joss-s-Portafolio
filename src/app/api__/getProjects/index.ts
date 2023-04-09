import type { NextApiRequest, NextApiResponse } from "next"

import { groq } from "next-sanity"
import { client } from "../../../../lib/sanity.client"
import { Project } from "../../../../typings"

const query = groq`
*[_type=='projects']{
    ...,
    technologies[]->
}`

type Data = {
	projects: Project[]
}

export async function GET(req: NextApiRequest, res: NextApiResponse<Data>) {
	const projects: Project[] = await client.fetch(query)

	return res.status(200).json({ projects })
}
