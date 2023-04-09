import { previewData } from "next/headers"

import PreviewSuspense from "../../components/PreviewSuspense"
import PreviewPortafolio from "@/components/PreviewPortafolio"
import PortafolioPage from "@/components/PortafolioPage"
import { fetchExperiences } from "@/utils/fetchExperiences"
import { fetchPageInfo } from "@/utils/fetchPageInfo"
import { fetchSocials } from "@/utils/fetchSocials"
import { fetchProjects } from "@/utils/fetchProjects"
import { fetchSkills } from "@/utils/fetchSkills"
import { queryExperiences, queryPageInfo, queryProjects, querySkills, querySocials } from "@/utils/Querys"

export default async function Home() {
	const pageInfo = await fetchPageInfo()
	const experiences = await fetchExperiences()
	//const socials = await fetchSocials()
	const projects = await fetchProjects()
	const skills = await fetchSkills()


	if (previewData()) {
		return (
			<PreviewSuspense
				fallback={
					<div role="status">
						<p className="text-center text-lg animate-pulse text-[#f7AB0A]">
							Loading Preview Dat...
						</p>
					</div>
				}
			>
				<PreviewPortafolio
					queryPageInfo={queryPageInfo}
					queryProject={queryProjects}
					queryExperiences={queryExperiences}
					querySkills={querySkills}
					querySocial={querySocials}
				/>
			</PreviewSuspense>
		)
	}

	return <PortafolioPage  pageInfo={pageInfo} experiences={experiences} skills={skills} projects={projects}/>
}
