import type { NextApiRequest, NextApiResponse } from "next"

import { groq } from "next-sanity"
import { client } from "../../../../lib/sanity.client"
import { Experience, Project } from "../../../../typings"

const query = groq`
*[_type=='experience']`

type Data = {
	experiences: Experience[]
}

export async function GET(req: NextApiRequest, res: NextApiResponse<Data>) {
	const experiences: Experience[] = await client.fetch(query)

	return res.status(200).json({ experiences })
}
