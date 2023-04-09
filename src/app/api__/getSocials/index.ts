import type { NextApiRequest, NextApiResponse } from "next"

import { groq} from 'next-sanity' 
import { client } from "../../../../lib/sanity.client"
import { Social } from "../../../../typings"


const query = groq`
*[_type=='social']`


type Data = {
    socials: Social[]
}



export async function GET(req: NextApiRequest, res: NextApiResponse<Data>) {
	const socials: Social[] = await client.fetch(query)

	return res.status(200).json({ socials })
}
