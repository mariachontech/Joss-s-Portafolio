import type { NextApiRequest, NextApiResponse } from "next"

import { groq } from "next-sanity"
import { client } from "../../../../lib/sanity.client"
import { Skill } from "../../../../typings"
import { querySkills } from "@/utils/Querys"



type Data = {
	skills: Skill[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

	console.log("getSkills");
	
	const skills: Skill[] = await client.fetch(querySkills)

	return res.status(200).json({ skills })
}
