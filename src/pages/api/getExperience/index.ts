import type { NextApiRequest, NextApiResponse } from "next"

import { client } from "../../../../lib/sanity.client"
import { Experience } from "../../../../typings"
import { queryExperiences } from "@/utils/Querys"


type Data = {
	experiences: Experience[]
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const experiences: Experience[] = await client.fetch(queryExperiences)

	return res.status(200).json({ experiences })
}
