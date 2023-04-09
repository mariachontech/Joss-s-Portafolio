import type { NextApiRequest, NextApiResponse } from "next"

import { groq} from 'next-sanity' 
import { client } from "../../../../lib/sanity.client"
import { Social } from "../../../../typings"
import { querySocials } from "@/utils/Querys"




type Data = {
    socials: Social[]
}



export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const socials: Social[] = await client.fetch(querySocials)

	return res.status(200).json({ socials })
}
