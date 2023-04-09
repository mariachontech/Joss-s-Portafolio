import type { NextApiRequest, NextApiResponse } from "next"

import { groq } from "next-sanity"
import { client } from "../../../../lib/sanity.client"
import { Skill } from "../../../../typings"

const query = groq`
*[_type=='skill']`

type Data = {
	skills: Skill[]
}

export async function GET(req: NextApiRequest, res: NextApiResponse<Data>) {
	const skills: Skill[] = await client.fetch(query)

	return res.status(200).json({ skills })
}
