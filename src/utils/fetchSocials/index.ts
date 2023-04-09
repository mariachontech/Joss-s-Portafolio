import { client } from "../../../lib/sanity.client"
import { Social } from "../../../typings"
import { querySocials } from "../Querys"

export const fetchSocials = async () => {
	// const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

	// const data = await res.json();

	// const socials: Social[] = data.socials;

	const socials: Social[] = await client.fetch(querySocials)

	return socials
}
