import type { NextApiRequest, NextApiResponse } from "next"

import { groq } from "next-sanity"
import { client } from "../../../../lib/sanity.client"
import { PageInfo } from "../../../../typings"
import { queryPageInfo } from "@/utils/Querys"



type Data = {
	pageInfo: PageInfo
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const pageInfo: PageInfo = await client.fetch(queryPageInfo)

	return res.status(200).json({ pageInfo })
}
