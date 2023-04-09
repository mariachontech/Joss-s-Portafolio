import type { NextApiRequest, NextApiResponse } from "next"

import { groq } from "next-sanity"
import { client } from "../../../../lib/sanity.client"
import { PageInfo } from "../../../../typings"

const query = groq`
*[_type=='pageInfo'][0]`

type Data = {
	pageInfo: PageInfo
}

export async function GET(req: NextApiRequest, res: NextApiResponse<Data>) {
	const pageInfo: PageInfo = await client.fetch(query)

	return res.status(200).json({ pageInfo })
}
