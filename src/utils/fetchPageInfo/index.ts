import { client } from "../../../lib/sanity.client"
import { PageInfo } from "../../../typings"
import { queryPageInfo } from "../Querys"



export const fetchPageInfo = async () => {
	// const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getInfo`, {
	// 	cache: "force-cache",
	// })

		const pageInfo: PageInfo = await client.fetch(queryPageInfo)


	// const data = await res.json()

	// const pageInfo: PageInfo = data.pageInfo

	return pageInfo
}
