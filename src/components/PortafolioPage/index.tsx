import React from "react"

import Header from "../Header"
import Hero from "../Hero"
import About from "../About"
import WorkExperience from "../WorkExperience"
import Skills from "../Skills"
import Projects from "../Projects"
import ContactMe from "../ContactMe"
import { Experience, PageInfo, Project, Skill } from "../../../typings"
import Image from "next/image"
import urlFor from "../../../lib/urlFor"

type Props = {
	pageInfo?: PageInfo
	experiences?: Experience[]
	skills?: Skill[]
	projects?: Project[]
}

function PortafolioPage({ pageInfo, experiences, skills, projects }: Props) {
	console.log(pageInfo)

	return (
		<div className="bg-mariachon-blueDark text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-mariachon-orange/80 z-0">
			<Header pageInfo={pageInfo} />

			<section id="hero" className="snap-start">
				<Hero pageInfo={pageInfo} />
			</section>
			<section id="about" className="snap-center">
				<About pageInfo={pageInfo} />
			</section>
			<section id="experience" className="snap-center">
				<WorkExperience experiences={experiences} />
			</section>
			<section id="skills" className="snap-center">
				<Skills skills={skills} />
			</section>
			<section id="projects" className="snap-start">
				<Projects projectsData={projects} />
			</section>
			<section id="contact" className="snap-start">
				<ContactMe pageInfo={pageInfo} />
			</section>
			<footer className="sticky bottom-5 w-full cursor-pointer">
				<div className="flex items-center justify-center">
					<a href="/#hero" >
						<div className="relative w-20 h-20  rounded-full">
							<Image
								className="object-cover rounded-full  filter grayscale hover:grayscale-0 cursor-pointer"
								src={urlFor(pageInfo?.profilePic).url()}
								alt={pageInfo?.name || " "}
								fill
							/>
						</div>
					</a>
				</div>
			</footer>
		</div>
	)
}

export default PortafolioPage
